<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

Auth::routes([
    "verify" => true
]);
Route::mailPreview();
Route::get('/', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get("/logout", [\App\Http\Controllers\Auth\LoginController::class, "logout"]);
Route::get("/email/verified", [\App\Http\Controllers\Auth\VerificationController::class, "verified"])->name("verification.verified");
