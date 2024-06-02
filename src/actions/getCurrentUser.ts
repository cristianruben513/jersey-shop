import { getServerSession } from "next-auth";
import { authOptions } from "@/server/auth";
import { db } from "@/server/db";

export async function getSession(){
  return await getServerSession(authOptions)
}

export async function getCurrentUser(){
  try {
    const session = await getSession()

    if (!session?.user?.email) return null

    const currentUser = await db.user.findUnique({
      where: {
        email: session?.user?.email
      },
    })

    if (!currentUser) return null

    return {
      ...currentUser,
      createdAt: currentUser.createdAt.toISOString(),
      updatedAt: currentUser.updatedAt.toISOString(),
      emailVerified: currentUser.emailVerified?.toString() || null,
    }
  } catch (error: any){
    return null
  }
}
