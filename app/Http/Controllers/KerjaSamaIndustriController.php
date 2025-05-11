<?php

namespace App\Http\Controllers;

use App\Models\KerjaSamaIndustri;
use Illuminate\Http\Request;
use Inertia\Inertia;

class KerjaSamaIndustriController extends Controller
{
    public function index()
    {
        $daftarKSI = KerjaSamaIndustri::all();

        {
            return Inertia::render('Authentication/KerjaSamaIndustri/List', [
                'daftarKSI' => $daftarKSI
            ]);
        }
    }

    public function list()
    {
        $daftarKSI = KerjaSamaIndustri::all();

        {
            return Inertia::render('Form/KerjaSamaIndustri/List', [
                'daftarKSI' => $daftarKSI
            ]);
        }
    }
}
