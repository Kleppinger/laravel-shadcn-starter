import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
    Field,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
    FieldSeparator,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Link, useForm } from '@inertiajs/react';
import { useRoute } from 'ziggy-js';
import React from 'react';

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
                    <h1 className="text-2xl font-bold">Create your account</h1>
                    <p className="text-muted-foreground text-sm text-balance">
                        Fill in the form below to create your account
                    </p>
                </div>

                <Field>
                    <FieldLabel htmlFor="name">Full Name</FieldLabel>
                    <Input
                        id="name"
                        name="name"
                        type="text"
                        value={data.name}
                        onChange={handleChange('name')}
                        placeholder="John Doe"
                        required
                        disabled={processing}
                    />
                    {errors.name && <FieldError>{errors.name}</FieldError>}
                </Field>

                <Field>
                    <FieldLabel htmlFor="email">Email</FieldLabel>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        value={data.email}
                        onChange={handleChange('email')}
                        placeholder="m@example.com"
                        required
                        disabled={processing}
                    />
                    <FieldDescription>
                        We&apos;ll use this to contact you. We will not share
                        your email with anyone else.
                    </FieldDescription>
                    {errors.email && <FieldError>{errors.email}</FieldError>}
                </Field>

                <Field>
                    <FieldLabel htmlFor="password">Password</FieldLabel>
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
                        Must be at least 8 characters long.
                    </FieldDescription>
                    {errors.password && (
                        <FieldError>{errors.password}</FieldError>
                    )}
                </Field>

                <Field>
                    <FieldLabel htmlFor="password_confirmation">
                        Confirm Password
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
                        Please confirm your password.
                    </FieldDescription>
                </Field>

                <Field>
                    <Button type="submit" disabled={processing}>
                        {processing ? 'Creating Account...' : 'Create Account'}
                    </Button>
                </Field>

                <Field>
                    <FieldDescription className="px-6 text-center">
                        Already have an account?{' '}
                        <Link href={route('login')}>Sign in</Link>
                    </FieldDescription>
                </Field>
            </FieldGroup>
        </form>
    );
}
