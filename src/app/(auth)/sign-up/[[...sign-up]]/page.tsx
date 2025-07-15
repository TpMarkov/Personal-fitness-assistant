import { SignUp } from "@clerk/nextjs";
import React from "react";

const SignUpPage = () => {
  return (
    <main className="flex h-screen w-full image-center justify-center items-center">
      <SignUp />
    </main>
  );
};

export default SignUpPage;
