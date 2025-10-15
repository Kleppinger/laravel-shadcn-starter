import {GalleryVerticalEnd, Mail} from "lucide-react"
import { router } from '@inertiajs/react';
import { useRoute} from "ziggy-js";
import {Button} from "@/components/ui/button";
import React from "react";
import AuthLayout from "@/layout/auth";

const VerifiedPage = () => {
    const route = useRoute();
    return (
        <div className="w-full max-w-xs">
            <div className="flex flex-col gap-6">
                <div className="flex flex-col items-center gap-4 text-center">
                    <div className="bg-primary/10 text-primary flex size-16 items-center justify-center rounded-full">
                        <Mail className="size-8" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-2xl font-bold">Verification complete!</h1>
                        <p className="text-muted-foreground text-sm text-balance">
                            You can now close this window and return to the application.
                        </p>
                        <Button type="submit" onClick={() => router.get(route("home"))}>
                            Back to the application
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

VerifiedPage.layout = (page: React.ReactNode) => <AuthLayout>{page}</AuthLayout>

export default VerifiedPage
