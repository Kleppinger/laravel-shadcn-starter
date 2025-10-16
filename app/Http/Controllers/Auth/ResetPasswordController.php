<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\ResetsPasswords;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ResetPasswordController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Password Reset Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling password reset requests
    | and uses a simple trait to include this behavior. You're free to
    | explore this trait and override any methods you wish to tweak.
    |
    */

    use ResetsPasswords;

    /**
     * Where to redirect users after resetting their password.
     */
    public string $redirectTo;

    public function __construct()
    {
        $this->redirectTo = route('password.reset.success');
    }

    /**
     * Display the password reset view for the given token.
     */
    public function showResetForm(Request $request): Response
    {
        $token = $request->route()->parameter('token');

        return Inertia::render('auth/reset-password', [
            'token' => $token,
            'email' => $request->input('email'),
        ]);
    }

    public function showResetSuccessPage(): Response
    {
        return Inertia::render('auth/password-success');
    }
}
