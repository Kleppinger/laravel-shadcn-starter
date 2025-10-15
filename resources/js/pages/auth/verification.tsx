import { VerificationForm } from "@/components/forms/verification-form"
import React from "react";
import AuthLayout from "@/layout/auth";

interface VerificationPageProps {
  email?: string
}

const VerificationPage = ({ email }: VerificationPageProps) => {
  return <VerificationForm email={email} />
};

VerificationPage.layout = (page: React.ReactNode) => <AuthLayout>{page}</AuthLayout>

export default VerificationPage;
