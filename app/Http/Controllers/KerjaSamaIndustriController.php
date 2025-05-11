<?php

namespace App\Http\Controllers;

use App\Http\Requests\KerjaSamaIndustri\StoreRequest;
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

    public function store(StoreRequest $request)
    {
        KerjaSamaIndustri::create([
            'nama_ksi'=>$request->nama_ksi,
            'bidang_fokus_ksi'=>$request->bidang_fokus_ksi,
            'tahun_ksi'=>$request->tahun_ksi,
            'tahun_exit_ksi'=>$request->tahun_exit_ksi,
        ]);

        return redirect()->route('authentication.kerja-sama-industri.index');
    }

    public function create()
    {
        return Inertia::render('Authentication/KerjaSamaIndustri/Add');
    }
}
