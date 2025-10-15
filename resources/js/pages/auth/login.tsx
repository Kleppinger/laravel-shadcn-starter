import { LoginForm } from "@/components/login-form"
import React from "react";
import AuthLayout from "@/layout/auth";

const LoginPage = () => {
  return <LoginForm />
};

LoginPage.layout = (page: React.ReactNode) => <AuthLayout>{page}</AuthLayout>

export default LoginPage;
