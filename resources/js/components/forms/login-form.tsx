import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
    Field,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Link, useForm } from '@inertiajs/react';
import { useRoute } from 'ziggy-js';
import React from 'react';
import { useLang } from '@/hooks/useLang';

interface LoginFormData {
    email: string;
    password: string;
    remember?: boolean;
}

export function LoginForm({
    className,
    ...props
}: React.ComponentProps<'form'>) {
    const { __ } = useLang();
    const route = useRoute();
    const { data, setData, post, processing, errors } = useForm<LoginFormData>({
        email: '',
        password: '',
        remember: false,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('login'));
    };

    const handleChange =
        (field: keyof LoginFormData) =>
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setData(field, e.target.value);
        };

    return (
        <form
            onSubmit={handleSubmit}
            className={cn('flex flex-col gap-6', className)}
            {...props}
        >
            <FieldGroup>
                <div className="flex flex-col items-center gap-1 text-center">
                    <h1 className="text-2xl font-bold">
                        {__('auth.login.title')}
                    </h1>
                    <p className="text-muted-foreground text-sm text-balance">
                        {__('auth.login.subtitle')}
                    </p>
                </div>
                <Field>
                    <FieldLabel htmlFor="email">
                        {__('auth.login.email_label')}
                    </FieldLabel>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        value={data.email}
                        onChange={handleChange('email')}
                        placeholder={__('auth.login.email_placeholder')}
                        required
                        disabled={processing}
                    />
                    {errors.email && <FieldError>{errors.email}</FieldError>}
                </Field>
                <Field>
                    <div className="flex items-center">
                        <FieldLabel htmlFor="password">
                            {__('auth.login.password_label')}
                        </FieldLabel>
                        <Link
                            href={route('password.request')}
                            className="ml-auto text-sm underline-offset-4 hover:underline"
                        >
                            {__('auth.login.forgot_password_link')}
                        </Link>
                    </div>
                    <Input
                        id="password"
                        name="password"
                        type="password"
                        value={data.password}
                        onChange={handleChange('password')}
                        required
                        disabled={processing}
                    />
                    {errors.password && (
                        <FieldError>{errors.password}</FieldError>
                    )}
                </Field>
                <Field>
                    <Button type="submit" disabled={processing}>
                        {processing
                            ? __('auth.login.submit_button_processing')
                            : __('auth.login.submit_button')}
                    </Button>
                </Field>
                <Field>
                    <FieldDescription className="text-center">
                        {__('auth.login.no_account')}{' '}
                        <Link
                            href={route('register')}
                            className="underline underline-offset-4"
                        >
                            {__('auth.login.sign_up_link')}
                        </Link>
                    </FieldDescription>
                </Field>
            </FieldGroup>
        </form>
    );
}
