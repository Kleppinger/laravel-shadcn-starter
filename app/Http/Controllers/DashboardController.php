<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class DashboardController extends Controller
{
    /**
     * Show the application dashboard.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        return Inertia::render('dashboard/index');
    }
}
