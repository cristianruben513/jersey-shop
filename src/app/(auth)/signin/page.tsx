import { type Metadata } from "next"
import Link from "next/link"
import { env } from "@/env.js"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Shell } from "@/components/shell"
import { OAuthForm } from "../_components/oauth-form"
import { getCurrentUser } from "@/actions/getCurrentUser"

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: "Sign In",
  description: "Sign in to your account",
}

export default async function SignInPage() {
  const user = await getCurrentUser()

  return (
    <Shell className="max-w-lg">
      <Card className="z-10 dark:border-white/20 border-black/10">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">
            Iniciar Sesion
          </CardTitle>
          <CardDescription>
            Elige tu metodo de inicio de sesion preferido
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <OAuthForm user={user} />
        </CardContent>
        <CardFooter className="flex flex-wrap items-center justify-between gap-2">
          <div className="text-sm text-muted-foreground">
            <span className="mr-1 inline-block">
              No tienes una cuenta?
            </span>
            <Link
              aria-label="Sign up"
              href="/signup"
              className="text-primary underline-offset-4 transition-colors hover:underline"
            >
              Registrate
            </Link>
          </div>
        </CardFooter>
      </Card>
    </Shell>
  )
}