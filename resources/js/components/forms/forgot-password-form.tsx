import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Link, useForm } from '@inertiajs/react';
import { useRoute } from 'ziggy-js';
import { FormEventHandler } from 'react';
import React from 'react';
import { useLang } from '@/hooks/useLang';

export function ForgotPasswordForm({
    className,
    ...props
}: Omit<React.ComponentProps<'form'>, 'onSubmit'>) {
    const { __ } = useLang();
    const route = useRoute();
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('password.email'));
    };

    return (
        <form
            className={cn('flex flex-col gap-6', className)}
            onSubmit={submit}
            {...props}
        >
            <FieldGroup>
                <div className="flex flex-col items-center gap-1 text-center">
                    <h1 className="text-2xl font-bold">
                        {__('auth.forgot_password.title')}
                    </h1>
                    <p className="text-muted-foreground text-sm text-balance">
                        {__('auth.forgot_password.subtitle')}
                    </p>
                </div>
                <Field>
                    <FieldLabel htmlFor="email">
                        {__('auth.forgot_password.email_label')}
                    </FieldLabel>
                    <Input
                        id="email"
                        type="email"
                        placeholder={__('auth.forgot_password.email_placeholder')}
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />
                    {errors.email && (
                        <FieldDescription className="text-destructive">
                            {errors.email}
                        </FieldDescription>
                    )}
                    <FieldDescription>
                        {__('auth.forgot_password.email_description')}
                    </FieldDescription>
                </Field>
                <Field>
                    <Button type="submit" disabled={processing}>
                        {processing
                            ? __('auth.forgot_password.submit_button_processing')
                            : __('auth.forgot_password.submit_button')}
                    </Button>
                </Field>
                <Field>
                    <FieldDescription className="text-center">
                        {__('auth.forgot_password.remember_password')}{' '}
                        <Link
                            href={route('login')}
                            className="underline underline-offset-4"
                        >
                            {__('auth.forgot_password.back_to_login')}
                        </Link>
                    </FieldDescription>
                </Field>
            </FieldGroup>
        </form>
    );
}
