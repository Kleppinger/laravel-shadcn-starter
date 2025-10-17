import { Mail } from 'lucide-react';
import React from 'react';
import AuthLayout from '@/layout/auth';

const PasswordMailSentPage = () => {
    return (
        <div className="w-full max-w-xs">
            <div className="flex flex-col gap-6">
                <div className="flex flex-col items-center gap-4 text-center">
                    <div className="bg-primary/10 text-primary flex size-16 items-center justify-center rounded-full">
                        <Mail className="size-8" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-2xl font-bold">Reset mail sent</h1>
                        <p className="text-muted-foreground text-sm text-balance">
                            If you have an account with the email you just
                            provided, you will receive an email with
                            instructions to reset your password.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

PasswordMailSentPage.layout = (page: React.ReactNode) => (
    <AuthLayout>{page}</AuthLayout>
);

export default PasswordMailSentPage;
