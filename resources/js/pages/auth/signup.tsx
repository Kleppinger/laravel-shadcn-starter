import { SignupForm } from "@/components/signup-form"
import React from "react";
import AuthLayout from "@/layout/auth";

const SignupPage = () => {
  return (
      <SignupForm />
  )
};

SignupPage.layout = (page: React.ReactNode) => <AuthLayout>{page}</AuthLayout>

export default SignupPage;
