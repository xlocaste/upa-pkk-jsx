<?php

use App\Http\Controllers\AlumniController;
use App\Http\Controllers\InkubasiController;
use App\Http\Controllers\LowonganPekerjaanController;
use App\Http\Controllers\MahasiswaController;
use App\Http\Controllers\PraInkubasiController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::prefix('/authentication')->name('authentication.')->group(function() {
    Route::prefix('/mahasiswa')->name('mahasiswa.')->group(function() {
        Route::group(['middleware' => ['auth']], function() {
            Route::get('/create', [MahasiswaController::class, 'create'])->name('create');
            Route::post('/', [MahasiswaController::class, 'store'])->name('store');
            Route::put('/{mahasiswa}', [MahasiswaController::class, 'update'])->name('update');
            Route::delete('/{mahasiswa}', [MahasiswaController::class, 'destroy'])->name('destroy');
            Route::get('/{mahasiswa}/edit', [MahasiswaController::class, 'edit'])->name('edit');
            Route::get('/{mahasiswa}', [MahasiswaController::class, 'show'])->name('show');
            Route::get('/', [MahasiswaController::class, 'index'])->name('index');
        });
    });

    Route::prefix('/alumni')->name('alumni.')->group(function() {
        Route::group(['middleware' => ['auth']], function() {
            Route::get('/create', [AlumniController::class, 'create'])->name('create');
            Route::post('/', [AlumniController::class, 'store'])->name('store');
            Route::put('/{alumni}', [AlumniController::class, 'update'])->name('update');
            Route::delete('/{alumni}', [AlumniController::class, 'destroy'])->name('destroy');
            Route::get('/{alumni}/edit', [AlumniController::class, 'edit'])->name('edit');
            Route::get('/{alumni}', [AlumniController::class, 'show'])->name('show');
            Route::get('/', [AlumniController::class, 'index'])->name('index');
        });
    });

    Route::prefix('/lowongan-pekerjaan')->name('lowongan-pekerjaan.')->group(function() {
        Route::group(['middleware' => ['auth']], function() {
            Route::get('/create', [LowonganPekerjaanController::class, 'create'])->name('create');
            Route::post('/', [LowonganPekerjaanController::class, 'store'])->name('store');
            Route::put('/{lowonganKerja}', [LowonganPekerjaanController::class, 'update'])->name('update');
            Route::delete('/{lowonganKerja}', [LowonganPekerjaanController::class, 'destroy'])->name('destroy');
            Route::get('/{lowonganKerja}/edit', [LowonganPekerjaanController::class, 'edit'])->name('edit');
            Route::get('/{lowonganKerja}', [LowonganPekerjaanController::class, 'show'])->name('show');
            Route::get('/', [LowonganPekerjaanController::class, 'index'])->name('index');
        });
    });

    Route::prefix('/pra-inkubasi')->name('pra-inkubasi.')->group(function() {
        Route::group(['middleware' => ['auth']], function() {
            Route::get('/create', [PraInkubasiController::class, 'create'])->name('create');
            Route::post('/', [PraInkubasiController::class, 'store'])->name('store');
            Route::put('/{praInkubasi}', [PraInkubasiController::class, 'update'])->name('update');
            Route::delete('/{praInkubasi}', [PraInkubasiController::class, 'destroy'])->name('destroy');
            Route::get('/{praInkubasi}/edit', [PraInkubasiController::class, 'edit'])->name('edit');
            Route::get('/{praInkubasi}', [PraInkubasiController::class, 'show'])->name('show');
            Route::get('/', [PraInkubasiController::class, 'index'])->name('index');
        });
    });

    Route::prefix('/inkubasi')->name('inkubasi.')->group(function() {
        Route::group(['middleware' => ['auth']], function() {
            Route::get('/create', [InkubasiController::class, 'create'])->name('create');
            Route::post('/', [InkubasiController::class, 'store'])->name('store');
            Route::put('/{inkubasi}', [InkubasiController::class, 'update'])->name('update');
            Route::delete('/{inkubasi}', [InkubasiController::class, 'destroy'])->name('destroy');
            Route::get('/{inkubasi}/edit', [InkubasiController::class, 'edit'])->name('edit');
            Route::get('/{inkubasi}', [InkubasiController::class, 'show'])->name('show');
            Route::get('/', [InkubasiController::class, 'index'])->name('index');
        });
    });
});

Route::prefix('/form')->name('form.')->group(function() {
    Route::prefix('/mahasiswa')->name('mahasiswa.')->group(function() {
        Route::get('/', [MahasiswaController::class, 'list'])->name('list');
    });

    Route::prefix('/alumni')->name('alumni.')->group(function() {
        Route::get('/', [AlumniController::class, 'list'])->name('list');
    });

    Route::prefix('/lowongan-pekerjaan')->name('lowongan-pekerjaan.')->group(function() {
        Route::get('/', [LowonganPekerjaanController::class, 'list'])->name('list');
        Route::get('/{lowonganPekerjaan}', [LowonganPekerjaanController::class, 'detail'])->name('detail');
    });

    Route::prefix('/pra-inkubasi')->name('pra-inkubasi.')->group(function() {
        Route::get('/', [PraInkubasiController::class, 'list'])->name('list');
    });

    Route::prefix('/inkubasi')->name('inkubasi.')->group(function() {
        Route::get('/', [InkubasiController::class, 'list'])->name('list');
    });
});

require __DIR__.'/auth.php';
