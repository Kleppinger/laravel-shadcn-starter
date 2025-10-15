import { ResetPasswordForm } from "@/components/forms/reset-password-form"
import React from "react";
import AuthLayout from "@/layout/auth";

interface ResetPasswordPageProps {
  token: string
  email?: string
}

const ResetPasswordPage = ({ token, email }: ResetPasswordPageProps) => {
  return <ResetPasswordForm token={token} email={email} />
};

ResetPasswordPage.layout = (page: React.ReactNode) => <AuthLayout>{page}</AuthLayout>

export default ResetPasswordPage
