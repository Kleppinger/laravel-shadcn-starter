<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Authentication Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines are used during authentication for various
    | messages that we need to display to the user. You are free to modify
    | these language lines according to your application's requirements.
    |
    */

    'failed' => 'These credentials do not match our records.',
    'password' => 'The provided password is incorrect.',
    'throttle' => 'Too many login attempts. Please try again in :seconds seconds.',

    'login' => [
        'title' => 'Login to your account',
        'subtitle' => 'Enter your email below to login to your account',
        'email_label' => 'Email',
        'email_placeholder' => 'm@example.com',
        'password_label' => 'Password',
        'forgot_password_link' => 'Forgot your password?',
        'submit_button' => 'Login',
        'submit_button_processing' => 'Logging in...',
        'no_account' => "Don't have an account?",
        'sign_up_link' => 'Sign up',
    ],

    'signup' => [
        'title' => 'Create your account',
        'subtitle' => 'Fill in the form below to create your account',
        'name_label' => 'Full Name',
        'name_placeholder' => 'John Doe',
        'email_label' => 'Email',
        'email_placeholder' => 'm@example.com',
        'email_description' => "We'll use this to contact you. We will not share your email with anyone else.",
        'password_label' => 'Password',
        'password_description' => 'Must be at least 8 characters long.',
        'password_confirmation_label' => 'Confirm Password',
        'password_confirmation_description' => 'Please confirm your password.',
        'submit_button' => 'Create Account',
        'submit_button_processing' => 'Creating Account...',
        'have_account' => 'Already have an account?',
        'sign_in_link' => 'Sign in',
    ],

    'forgot_password' => [
        'title' => 'Forgot your password?',
        'subtitle' => "Enter your email address and we'll send you a link to reset your password",
        'email_label' => 'Email',
        'email_placeholder' => 'm@example.com',
        'email_description' => "We'll send a password reset link to this email address.",
        'submit_button' => 'Send Reset Link',
        'submit_button_processing' => 'Sending...',
        'remember_password' => 'Remember your password?',
        'back_to_login' => 'Back to login',
    ],

    'reset_password' => [
        'title' => 'Reset your password',
        'subtitle' => 'Enter your new password below',
        'email_label' => 'Email',
        'email_placeholder' => 'm@example.com',
        'password_label' => 'New Password',
        'password_description' => 'Must be at least 8 characters long.',
        'password_confirmation_label' => 'Confirm Password',
        'password_confirmation_description' => 'Please confirm your new password.',
        'submit_button' => 'Reset Password',
        'submit_button_processing' => 'Resetting...',
    ],

    'verification' => [
        'title' => 'Verify your email',
        'subtitle' => "We've sent a verification link to your email address",
        'email_label' => 'Email Address',
        'email_description' => 'Please check your inbox and click the verification link we sent to this address.',
        'no_email' => "Didn't receive the email? Check your spam folder or request a new verification link.",
        'resend_button' => 'Resend Verification Link',
        'resend_button_processing' => 'Sending...',
        'resend_success' => 'The verification mail was sent again.',
        'resend_error' => 'You are doing this too fast! Please try again later.',
    ],

    'verified' => [
        'title' => 'Verification complete!',
        'subtitle' => 'You can now close this window and return to the application.',
        'back_button' => 'Back to the application',
    ],

    'password_mail_sent' => [
        'title' => 'Reset mail sent',
        'subtitle' => 'If you have an account with the email you just provided, you will receive an email with instructions to reset your password.',
    ],

    'password_success' => [
        'title' => 'Password reset complete!',
        'subtitle' => "You're password was reset. Next time you login, you can use your new credentials.",
        'back_button' => 'Back to the application',
    ],
];
