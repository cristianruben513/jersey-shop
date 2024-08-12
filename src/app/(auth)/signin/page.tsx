import { env } from "@/env.js";
import { type Metadata } from "next";

import { getCurrentUser } from "@/actions/getCurrentUser";
import { Shell } from "@/components/shell";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { OAuthForm } from "../_components/oauth-form";

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: "Sign In",
  description: "Sign in to your account",
};

export default async function SignInPage() {
  const user = await getCurrentUser();

  return (
    <Shell className="max-w-lg">
      <Card className="z-10 border-black/10 dark:border-white/20">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Iniciar Sesion</CardTitle>
          <CardDescription>
            Elige tu metodo de inicio de sesion preferido
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <OAuthForm user={user} />
        </CardContent>
      </Card>
    </Shell>
  );
}
