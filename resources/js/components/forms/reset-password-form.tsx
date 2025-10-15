import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useForm } from '@inertiajs/react'
import { useRoute } from 'ziggy-js'
import { FormEventHandler } from 'react'
import React from "react";
export function ResetPasswordForm({
  className,
  token,
  email,
  ...props
}: Omit<React.ComponentProps<"form">, 'onSubmit'> & {
  token: string
  email?: string
}) {
  const route = useRoute()
  const { data, setData, post, processing, errors } = useForm({
    token: token,
    email: email || '',
    password: '',
    password_confirmation: '',
  })

  const submit: FormEventHandler = (e) => {
    e.preventDefault()
    post(route('password.update'));

  }

  return (
    <form className={cn("flex flex-col gap-6", className)} onSubmit={submit} {...props}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Reset your password</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Enter your new password below
          </p>
        </div>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            value={data.email}
            onChange={(e) => setData('email', e.target.value)}
            required
          />
          {errors.email && (
            <FieldDescription className="text-destructive">
              {errors.email}
            </FieldDescription>
          )}
        </Field>
        <Field>
          <FieldLabel htmlFor="password">New Password</FieldLabel>
          <Input
            id="password"
            type="password"
            value={data.password}
            onChange={(e) => setData('password', e.target.value)}
            required
          />
          {errors.password && (
            <FieldDescription className="text-destructive">
              {errors.password}
            </FieldDescription>
          )}
          <FieldDescription>
            Must be at least 8 characters long.
          </FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="password_confirmation">Confirm Password</FieldLabel>
          <Input
            id="password_confirmation"
            type="password"
            value={data.password_confirmation}
            onChange={(e) => setData('password_confirmation', e.target.value)}
            required
          />
          <FieldDescription>Please confirm your new password.</FieldDescription>
        </Field>
        <Field>
          <Button type="submit" disabled={processing}>
            {processing ? 'Resetting...' : 'Reset Password'}
          </Button>
        </Field>
      </FieldGroup>
    </form>
  )
}
