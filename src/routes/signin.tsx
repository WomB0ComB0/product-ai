"use client"

import type React from "react"

import { createFileRoute, redirect } from "@tanstack/react-router"
import type { ComponentProps } from "react"
import { Github, DiscIcon as Discord, Mail } from "lucide-react"
import authClient from "~/lib/auth-client"
import { cn } from "~/lib/utils"
import { Logo } from "~/components/logo"
import { Card, CardContent, CardFooter, CardHeader } from "~/lib/components/ui/card"
import { Button } from "~/lib/components/ui/button"

const REDIRECT_URL = "/dashboard"

export const Route = createFileRoute("/signin")({
  component: AuthPage,
  beforeLoad: async ({ context }) => {
    if (context.user) {
      throw redirect({
        to: REDIRECT_URL,
      })
    }
  },
})

function AuthPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100 dark:from-gray-900 dark:to-gray-800">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <Logo />
          <h1 className="mt-6 text-2xl font-semibold">Welcome back</h1>
          <p className="text-sm text-muted-foreground">Sign in to your account</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <SignInButton
            provider="discord"
            label="Discord"
            icon={Discord}
            className="w-full bg-[#5865F2] text-white hover:bg-[#5865F2]/90"
          />
          <SignInButton
            provider="github"
            label="GitHub"
            icon={Github}
            className="w-full bg-[#24292e] text-white hover:bg-[#24292e]/90"
          />
          <SignInButton
            provider="google"
            label="Google"
            icon={Mail}
            className="w-full bg-white text-black hover:bg-gray-100"
          />
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-muted-foreground">
            Don't have an account?{" "}
            <a href="#" className="font-medium text-primary hover:underline">
              Sign up
            </a>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}

interface SignInButtonProps extends ComponentProps<typeof Button> {
  provider: "discord" | "google" | "github"
  label: string
  icon: React.ElementType
}

function SignInButton({ provider, label, icon: Icon, className, ...props }: SignInButtonProps) {
  return (
    <Button
      onClick={() =>
        authClient.signIn.social({
          provider,
          callbackURL: REDIRECT_URL,
        })
      }
      type="button"
      size="lg"
      className={cn("flex items-center justify-center space-x-2", className)}
      {...props}
    >
      <Icon className="h-5 w-5" />
      <span>Sign in with {label}</span>
    </Button>
  )
}

