"use client";

import {
  SignInButton,
  SignedOut,
  SignOutButton,
  SignedIn,
} from "@clerk/nextjs";
import React from "react";

const HomePage = () => {
  return (
    <div>
      Homepage
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <SignOutButton />
      </SignedIn>
    </div>
  );
};

export default HomePage;
