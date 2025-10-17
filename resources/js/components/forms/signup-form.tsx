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

interface SignupFormData {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

export function SignupForm({
    className,
    ...props
}: React.ComponentProps<'form'>) {
    const { __ } = useLang();
    const route = useRoute();
    const { data, setData, post, processing, errors } = useForm<SignupFormData>(
        {
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
        },
    );

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('register'));
    };

    const handleChange =
        (field: keyof SignupFormData) =>
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
                        {__('auth.signup.title')}
                    </h1>
                    <p className="text-muted-foreground text-sm text-balance">
                        {__('auth.signup.subtitle')}
                    </p>
                </div>

                <Field>
                    <FieldLabel htmlFor="name">
                        {__('auth.signup.name_label')}
                    </FieldLabel>
                    <Input
                        id="name"
                        name="name"
                        type="text"
                        value={data.name}
                        onChange={handleChange('name')}
                        placeholder={__('auth.signup.name_placeholder')}
                        required
                        disabled={processing}
                    />
                    {errors.name && <FieldError>{errors.name}</FieldError>}
                </Field>

                <Field>
                    <FieldLabel htmlFor="email">
                        {__('auth.signup.email_label')}
                    </FieldLabel>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        value={data.email}
                        onChange={handleChange('email')}
                        placeholder={__('auth.signup.email_placeholder')}
                        required
                        disabled={processing}
                    />
                    <FieldDescription>
                        {__('auth.signup.email_description')}
                    </FieldDescription>
                    {errors.email && <FieldError>{errors.email}</FieldError>}
                </Field>

                <Field>
                    <FieldLabel htmlFor="password">
                        {__('auth.signup.password_label')}
                    </FieldLabel>
                    <Input
                        id="password"
                        name="password"
                        type="password"
                        value={data.password}
                        onChange={handleChange('password')}
                        required
                        disabled={processing}
                    />
                    <FieldDescription>
                        {__('auth.signup.password_description')}
                    </FieldDescription>
                    {errors.password && (
                        <FieldError>{errors.password}</FieldError>
                    )}
                </Field>

                <Field>
                    <FieldLabel htmlFor="password_confirmation">
                        {__('auth.signup.password_confirmation_label')}
                    </FieldLabel>
                    <Input
                        id="password_confirmation"
                        name="password_confirmation"
                        type="password"
                        value={data.password_confirmation}
                        onChange={handleChange('password_confirmation')}
                        required
                        disabled={processing}
                    />
                    <FieldDescription>
                        {__('auth.signup.password_confirmation_description')}
                    </FieldDescription>
                </Field>

                <Field>
                    <Button type="submit" disabled={processing}>
                        {processing
                            ? __('auth.signup.submit_button_processing')
                            : __('auth.signup.submit_button')}
                    </Button>
                </Field>

                <Field>
                    <FieldDescription className="px-6 text-center">
                        {__('auth.signup.have_account')}{' '}
                        <Link href={route('login')}>
                            {__('auth.signup.sign_in_link')}
                        </Link>
                    </FieldDescription>
                </Field>
            </FieldGroup>
        </form>
    );
}
