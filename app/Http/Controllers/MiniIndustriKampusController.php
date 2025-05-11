<?php

namespace App\Http\Controllers;

use App\Models\MiniIndustriKampus;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MiniIndustriKampusController extends Controller
{
    public function index()
    {
        $daftarMIK = MiniIndustriKampus::all();

        {
            return Inertia::render('Authentication/MiniIndustriKampus/List', [
                'daftarMIK' => $daftarMIK
            ]);
        }
    }
}
