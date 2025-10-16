<?php

use App\Http\Middleware\HandleInertiaRequests;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Http\Request;
use Spatie\MailPreview\Http\Middleware\AddMailPreviewOverlayToResponse;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware): void {
        $middleware->web(append: [
            AddMailPreviewOverlayToResponse::class,
            HandleInertiaRequests::class,
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions): void {
        $exceptions->respond(function (\Illuminate\Http\Response $response, Throwable $exception, Request $request) {
            if ($response->getStatusCode() === 429) {
                return back()->with('error', 'You are being ratelimited. Please try again later.');
            }

            return $response;
        });
    })->create();
