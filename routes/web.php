<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

if (config('app.env') === 'local') {
    Route::mailPreview();
}

Auth::routes([
    'verify' => true,
]);
Route::get('/', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/logout', [\App\Http\Controllers\Auth\LoginController::class, 'logout']);
Route::get('/email/verified', [\App\Http\Controllers\Auth\VerificationController::class, 'verified'])->name('verification.verified');
Route::get('/password/resetSent', [\App\Http\Controllers\Auth\ForgotPasswordController::class, 'showPasswordMailSentPage'])->name('password.request.sent');
Route::get('/password/resetSuccess', [\App\Http\Controllers\Auth\ResetPasswordController::class, 'showResetSuccessPage'])->name('password.reset.success');
