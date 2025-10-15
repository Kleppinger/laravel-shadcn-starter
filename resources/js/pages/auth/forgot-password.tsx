import { ForgotPasswordForm } from "@/components/forgot-password-form"
import React from "react";
import AuthLayout from "@/layout/auth";

const ForgotPasswordPage = () => {
  return <ForgotPasswordForm />
};

ForgotPasswordPage.layout = (page: React.ReactNode) => <AuthLayout>{page}</AuthLayout>

export default ForgotPasswordPage;
