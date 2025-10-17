import { CheckCircle } from 'lucide-react';
import { router } from '@inertiajs/react';
import { useRoute } from 'ziggy-js';
import { Button } from '@/components/ui/button';
import React from 'react';
import AuthLayout from '@/layout/auth';
import { useLang } from '@/hooks/useLang';

const PasswordSuccessPage = () => {
    const { __ } = useLang();
    const route = useRoute();
    return (
        <div className="w-full max-w-xs">
            <div className="flex flex-col gap-6">
                <div className="flex flex-col items-center gap-4 text-center">
                    <div className="bg-primary/10 text-primary flex size-16 items-center justify-center rounded-full">
                        <CheckCircle className="size-8" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-2xl font-bold">
                            {__('auth.password_success.title')}
                        </h1>
                        <p className="text-muted-foreground text-sm text-balance">
                            {__('auth.password_success.subtitle')}
                        </p>
                        <Button
                            type="submit"
                            onClick={() => router.get(route('home'))}
                        >
                            {__('auth.password_success.back_button')}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

PasswordSuccessPage.layout = (page: React.ReactNode) => (
    <AuthLayout>{page}</AuthLayout>
);

export default PasswordSuccessPage;
