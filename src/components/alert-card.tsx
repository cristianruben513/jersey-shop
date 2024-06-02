import { RocketIcon } from "@radix-ui/react-icons"
import Link from "next/link"
import React from "react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

interface AlertCardProps extends React.ComponentPropsWithoutRef<typeof Alert> {
  title: string
  description: string
}

export function AlertCard({
  title,
  description,
  children,
  className,
  ...props
}: AlertCardProps) {
  const Icon = RocketIcon

  return (
    <Alert
      className={cn(
        "flex flex-col items-center justify-center space-y-8 p-16 bg-muted",
        className
      )}
      {...props}
    >
      <div className="flex aspect-square size-fit items-center justify-center rounded-full border border-dashed p-4">
        <Icon className="size-5" />
      </div>
      {children ?? (
        <div className="flex flex-col items-center space-y-2 text-center">
          <AlertTitle className="text-lg">
            {title}
          </AlertTitle>
          {description ? (
            <AlertDescription className="text-muted-foreground">
              {description}
            </AlertDescription>
          ) : (
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <AlertDescription>Follow along on</AlertDescription>
              <Link
                href={siteConfig.links.x}
                className="transition-colors hover:text-foreground"
              >
                X
              </Link>
            </div>
          )}
        </div>
      )}
    </Alert>
  )
}