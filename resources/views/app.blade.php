<!doctype html>
<html lang="<?= config("app.locale") ?? "en" ?>">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    @routes
    @if(config("app.env") === "local")
        @viteReactRefresh
    @endif
    @vite('resources/js/app.tsx')
    @inertiaHead
</head>
<body>
@inertia
</body>
</html>
