<?php

use App\Http\Controllers\AlumniController;
use App\Http\Controllers\InkubasiController;
use App\Http\Controllers\KerjaSamaIndustriController;
use App\Http\Controllers\LowonganPekerjaanController;
use App\Http\Controllers\MahasiswaController;
use App\Http\Controllers\MiniIndustriKampusController;
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
            Route::get('/import', [MahasiswaController::class, 'import'])->name('import');
            Route::get('/search', [MahasiswaController::class, 'search'])->name('search');
            Route::post('/', [MahasiswaController::class, 'store'])->name('store');
            Route::post('/excel', [MahasiswaController::class, 'excel'])->name('excel');
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
            Route::get('/import', [PraInkubasiController::class, 'import'])->name('import');
             Route::get('/search', [PraInkubasiController::class, 'search'])->name('search');
            Route::post('/', [PraInkubasiController::class, 'store'])->name('store');
            Route::post('/excel', [PraInkubasiController::class, 'excel'])->name('excel');
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

    Route::prefix('/kerja-sama-industri')->name('kerja-sama-industri.')->group(function() {
        Route::group(['middleware' => ['auth']], function() {
            Route::get('/create', [KerjaSamaIndustriController::class, 'create'])->name('create');
            Route::get('/import', [KerjaSamaIndustriController::class, 'import'])->name('import');
            Route::get('/search', [KerjaSamaIndustriController::class, 'search'])->name('search');
            Route::post('/', [KerjaSamaIndustriController::class, 'store'])->name('store');
            Route::post('/excel', [KerjaSamaIndustriController::class, 'excel'])->name('excel');
            Route::put('/{kerjaSamaIndustri}', [KerjaSamaIndustriController::class, 'update'])->name('update');
            Route::delete('/{kerjaSamaIndustri}', [KerjaSamaIndustriController::class, 'destroy'])->name('destroy');
            Route::get('/{kerjaSamaIndustri}/edit', [KerjaSamaIndustriController::class, 'edit'])->name('edit');
            Route::get('/{kerjaSamaIndustri}', [KerjaSamaIndustriController::class, 'show'])->name('show');
            Route::get('/', [KerjaSamaIndustriController::class, 'index'])->name('index');
        });
    });

    Route::prefix('/mini-industri-kampus')->name('mini-industri-kampus.')->group(function() {
        Route::group(['middleware' => ['auth']], function() {
            Route::get('/create', [MiniIndustriKampusController::class, 'create'])->name('create');
            Route::post('/', [MiniIndustriKampusController::class, 'store'])->name('store');
            Route::put('/{miniIndustriKampus}', [MiniIndustriKampusController::class, 'update'])->name('update');
            Route::delete('/{miniIndustriKampus}', [MiniIndustriKampusController::class, 'destroy'])->name('destroy');
            Route::get('/{miniIndustriKampus}/edit', [MiniIndustriKampusController::class, 'edit'])->name('edit');
            Route::get('/{miniIndustriKampus}', [MiniIndustriKampusController::class, 'show'])->name('show');
            Route::get('/', [MiniIndustriKampusController::class, 'index'])->name('index');
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

    Route::prefix('/kerja-sama-industri')->name('kerja-sama-industri.')->group(function() {
        Route::get('/', [KerjaSamaIndustriController::class, 'list'])->name('list');
    });

    Route::prefix('/mini-industri-kampus')->name('mini-industri-kampus.')->group(function() {
        Route::get('/', [MiniIndustriKampusController::class, 'list'])->name('list');
    });
});

require __DIR__.'/auth.php';
