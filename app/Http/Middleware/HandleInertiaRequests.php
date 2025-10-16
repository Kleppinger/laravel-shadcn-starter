<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'toast' => function () use ($request) {
                return [
                    'error' => $request->session()->get('error'),
                ];
            },
            'appName' => config('app.name'),
            'user' => function () use ($request) {
                $user = $request->user();
                if (! \Auth::check()) {
                    return null;
                }
                $data = $user->only(['id', 'name', 'email']);

                return [
                    ...$data,
                    'initials' => Str::of($user->name)
                        ->explode(' ') // Split the name into parts
                        ->map(fn ($part) => Str::of($part)->substr(0, 1)->upper()) // Take the first letter and uppercase it
                        ->join(''),
                ];
            },
        ];
    }
}
