"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { type SafeUser } from "@/types/user";
import { LoaderIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FaGoogle } from "react-icons/fa";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  user: SafeUser | null;
}

export function OAuthForm({ user }: Props) {
  const [googleLoading, setGoogleLoading] = React.useState(false);

  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/");
      router.refresh();
    }
  }, [router, user]);

  if (user)
    return (
      <div className="min-h-[70vh]">
        <LoaderIcon className="size-4 animate-spin" />
      </div>
    );

  return (
    <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
      <Button
        className="w-full justify-start md:justify-center"
        variant="outline"
        type="button"
        disabled={googleLoading}
        onClick={() => {
          setGoogleLoading(true)
        }}
      >
        {googleLoading ? (
          <LoaderIcon className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <FaGoogle className="mr-2 h-4 w-4" />
        )}{" "}
        Google
      </Button>
    </div>
  );
}
