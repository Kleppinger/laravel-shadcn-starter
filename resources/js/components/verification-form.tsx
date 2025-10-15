import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Link, useForm } from '@inertiajs/react'
import { useRoute } from 'ziggy-js'
import { FormEventHandler } from 'react'
import { Mail } from 'lucide-react'

interface VerificationFormProps extends Omit<React.ComponentProps<"form">, 'onSubmit'> {
  email?: string
}

export function VerificationForm({
  email,
  className,
  ...props
}: VerificationFormProps) {
  const route = useRoute()
  const { post, processing } = useForm()

  const resendVerification: FormEventHandler = (e) => {
    e.preventDefault()
    post(route('verification.resend'))
  }

  return (
    <form className={cn("flex flex-col gap-6", className)} onSubmit={resendVerification} {...props}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="bg-primary/10 text-primary flex size-16 items-center justify-center rounded-full">
            <Mail className="size-8" />
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-bold">Verify your email</h1>
            <p className="text-muted-foreground text-sm text-balance">
              We&apos;ve sent a verification link to your email address
            </p>
          </div>
        </div>

        {email && (
          <Field>
            <FieldLabel htmlFor="email">Email Address</FieldLabel>
            <Input
              id="email"
              type="email"
              value={email}
              disabled
              className="bg-muted"
            />
            <FieldDescription>
              Please check your inbox and click the verification link we sent to this address.
            </FieldDescription>
          </Field>
        )}

        <Field>
          <FieldDescription className="text-center">
            Didn&apos;t receive the email? Check your spam folder or request a new verification link.
          </FieldDescription>
        </Field>

        <Field>
          <Button type="submit" disabled={processing} variant="outline">
            {processing ? 'Sending...' : 'Resend Verification Link'}
          </Button>
        </Field>

        <Field>
          <FieldDescription className="text-center">
            <Link href={route("login")} className="underline underline-offset-4">
              Back to login
            </Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  )
}

