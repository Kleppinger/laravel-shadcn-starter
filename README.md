<p align="center">
  <a href="https://laravel.com" target="_blank">
    <img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="200" alt="Laravel Logo">
  </a>
  <a href="https://ui.shadcn.com" target="_blank">
    <img src="https://ui.shadcn.com/apple-touch-icon.png" width="100" alt="shadcn/ui Logo" style="margin: 0 20px;">
  </a>
  <a href="https://inertiajs.com" target="_blank">
    <img src="https://avatars.githubusercontent.com/u/47703742?s=200&v=4" width="100" alt="Inertia.js Logo">
  </a>
</p>

# Laravel + shadcn/ui Starter

A modern full-stack starter template combining the power of Laravel with the beautiful UI components of shadcn/ui and the seamless page transitions of Inertia.js.

## About This Project

This starter template provides a solid foundation for building modern web applications with:

- **[Laravel 12](https://laravel.com)** - The PHP framework for web artisans
- **[Inertia.js v2](https://inertiajs.com)** - Build single-page apps without building an API
- **[React 19](https://react.dev)** - A JavaScript library for building user interfaces
- **[shadcn/ui](https://ui.shadcn.com)** - Beautifully designed components built with Radix UI and Tailwind CSS
- **[Tailwind CSS v4](https://tailwindcss.com)** - A utility-first CSS framework
- **[TypeScript](https://www.typescriptlang.org)** - JavaScript with syntax for types

## Features

- 🎨 Pre-configured shadcn/ui components
- 🔄 Inertia.js for seamless SPA experience
- 🎯 TypeScript support out of the box
- 🌙 Dark mode ready
- 📱 Responsive design
- 🎭 Laravel Pint for code formatting
- 🚀 Vite for fast builds and HMR


## Getting Started

### Prerequisites

- PHP 8.3 or higher
- Composer
- Node.js 18+ and npm/bun
- SQLite (or your preferred database)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Kleppinger/laravel-shadcn-starter.git
cd laravel-shadcn-starter
```

2. Install PHP dependencies:
```bash
composer install
```

3. Install JavaScript dependencies:
```bash
npm install
# or using bun (recommended)
bun install 
```

4. Copy the environment file and generate application key:
```bash
copy .env.example .env
php artisan key:generate
```

> **Notice:** In the example, `MAIL_MAILER` is set to *preview*. If you dont want this, please configure a different viewer.

5. Run database migrations:
```bash
php artisan migrate
```

6. Start the Vite and Laravel development server:
```bash
composer run dev
```

Visit `http://localhost:8000` in your browser.

## Configuration
To easily disable/enable mail verification, just change the setting in `config/template.php`:

```php
<?php

return [
    'enable_verification' => true,
];
```

## Development

### Adding shadcn/ui Components

Add new shadcn/ui components using the CLI:

```bash
npx shadcn@latest add button
npx shadcn@latest add card
# etc.
```

### Code Formatting

Format your PHP code with Laravel Pint:

```bash
vendor/bin/pint
```

```bash
php artisan test
```


## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

## Acknowledgments

- [Laravel](https://laravel.com) - The PHP Framework
- [Inertia.js](https://inertiajs.com) - The Modern Monolith
- [shadcn/ui](https://ui.shadcn.com) - Beautiful UI Components
- [Tailwind CSS](https://tailwindcss.com) - Utility-First CSS Framework
