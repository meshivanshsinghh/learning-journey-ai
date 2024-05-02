"use client";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

type Props = {};

const SignInButton = (props: Props) => {
  return (
    <Link href="/api/auth/signin">
      <Button variant="ghost">Sign In</Button>
    </Link>
  );
};

export default SignInButton;
