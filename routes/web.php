<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

if (config('app.env') === 'local') {
    Route::mailPreview();
}

/* Authentication routes */
Auth::routes([
    'verify' => config('template.enable_verification') ?? true,
]);
Route::get('/email/verified', [\App\Http\Controllers\Auth\VerificationController::class, 'verified'])->name('verification.verified');
Route::get('/password/resetSent', [\App\Http\Controllers\Auth\ForgotPasswordController::class, 'showPasswordMailSentPage'])->name('password.request.sent');
Route::get('/password/resetSuccess', [\App\Http\Controllers\Auth\ResetPasswordController::class, 'showResetSuccessPage'])->name('password.reset.success');

Route::middleware(config('template.enable_verification') ? ['auth', 'verified'] : ['auth'])->group(function () {
    Route::get('/', [App\Http\Controllers\DashboardController::class, 'index'])->name('dashboard.index');
});
