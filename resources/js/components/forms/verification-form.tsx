import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { useForm } from '@inertiajs/react';
import { useRoute } from 'ziggy-js';
import { FormEventHandler } from 'react';
import { Mail } from 'lucide-react';
import React from 'react';
import { toast } from 'sonner';
import { useLang } from '@/hooks/useLang';

interface VerificationFormProps
    extends Omit<React.ComponentProps<'form'>, 'onSubmit'> {
    email?: string;
}

export function VerificationForm({
    email,
    className,
    ...props
}: VerificationFormProps) {
    const { __ } = useLang();
    const route = useRoute();
    const { post, processing } = useForm();

    const resendVerification: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('verification.resend'), {
            onSuccess: (data) => {
                // @ts-expect-error data.props.toast.error is dynamically returned by the server.
                const error = data.props.toast.error ?? null;
                if (error == null) {
                    toast.success(__('auth.verification.resend_success'), {
                        position: 'top-right',
                    });
                } else {
                    toast.error(__('auth.verification.resend_error'), {
                        position: 'top-right',
                    });
                }
            },
        });
    };

    return (
        <form
            className={cn('flex flex-col gap-6', className)}
            onSubmit={resendVerification}
            {...props}
        >
            <FieldGroup>
                <div className="flex flex-col items-center gap-4 text-center">
                    <div className="bg-primary/10 text-primary flex size-16 items-center justify-center rounded-full">
                        <Mail className="size-8" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <h1 className="text-2xl font-bold">
                            {__('auth.verification.title')}
                        </h1>
                        <p className="text-muted-foreground text-sm text-balance">
                            {__('auth.verification.subtitle')}
                        </p>
                    </div>
                </div>

                {email && (
                    <Field>
                        <FieldLabel htmlFor="email">
                            {__('auth.verification.email_label')}
                        </FieldLabel>
                        <Input
                            id="email"
                            type="email"
                            value={email}
                            disabled
                            className="bg-muted"
                        />
                        <FieldDescription>
                            {__('auth.verification.email_description')}
                        </FieldDescription>
                    </Field>
                )}

                <Field>
                    <FieldDescription className="text-center">
                        {__('auth.verification.no_email')}
                    </FieldDescription>
                </Field>

                <Field>
                    <Button
                        type="submit"
                        disabled={processing}
                        variant="outline"
                    >
                        {processing
                            ? __('auth.verification.resend_button_processing')
                            : __('auth.verification.resend_button')}
                    </Button>
                </Field>
            </FieldGroup>
        </form>
    );
}
