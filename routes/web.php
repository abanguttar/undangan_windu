<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UndanganController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return redirect('/rianrevaweddinginvitation');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::controller(UndanganController::class)->group(function () {
    Route::get('/rianrevaweddinginvitation', 'index');
    Route::get('/comments', 'fetchComment');
    Route::post('/rianrevaweddinginvitation', 'store');
});

require __DIR__ . '/auth.php';
