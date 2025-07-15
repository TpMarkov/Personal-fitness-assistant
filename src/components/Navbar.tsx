"use client";
import React from "react";
import { SignInButton, SignUpButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { DumbbellIcon, HomeIcon, UserIcon, ZapIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const { isSignedIn } = useUser();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-md border-b border-border py-3">
      <div className="container mx-auto flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <div className="p-1 bg-primary/10 rounded">
            <ZapIcon className="w-4 h-4 text-primary"></ZapIcon>
          </div>
          <span className="text-xl font-bold font-mono">
            Fitness <span className="text-primary">Assistat</span>
          </span>
        </Link>

        {/* NAVIGATION */}

        <nav className="flex items-center gap-5">
          {isSignedIn ? (
            <>
              {/* HOME PAGE NAV */}
              <Link
                href="/"
                className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
              >
                <HomeIcon size={16}></HomeIcon>
                <span>Home</span>
              </Link>
              {/* GENERATE PROGRAM NAV */}
              <Link
                href="/generate-program"
                className="flex gap-1.5 items-center text-sm hover:text-primary transition-colors"
              >
                <DumbbellIcon size={16} />
                <span>Generate</span>
              </Link>

              {/* PROFILE NAV */}
              <Link
                href="/profile"
                className="flex gap-1.5 items-center text-sm hover:text-primary transition-colors"
              >
                <UserIcon size={16} />
                <span>Profile</span>
              </Link>
              <Button
                asChild
                variant="outline"
                className="ml-2 border-primary/50 text-primary hover:text-white hover:bg-primary/10"
              >
                <Link href="/generate-program">Get Started</Link>
              </Button>
              <UserButton></UserButton>
            </>
          ) : (
            <>
              <SignInButton>
                <Button
                  variant="outline"
                  className="border-primary/50 text-primary hover:text-white hover:bg-primary/10"
                >
                  Sign In
                </Button>
              </SignInButton>
              <SignUpButton>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Sign Up
                </Button>
              </SignUpButton>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
