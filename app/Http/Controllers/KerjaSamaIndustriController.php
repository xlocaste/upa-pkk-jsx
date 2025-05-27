<?php

namespace App\Http\Controllers;

use App\Http\Requests\KerjaSamaIndustri\StoreRequest;
use App\Http\Requests\KerjaSamaIndustri\UpdateRequest;
use App\Models\KerjaSamaIndustri;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Redirect;

class KerjaSamaIndustriController extends Controller
{
    public function index()
    {
        $daftarKSI = KerjaSamaIndustri::paginate(5);

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

    public function update(UpdateRequest $request, KerjaSamaIndustri $kerjaSamaIndustri)
    {
        $kerjaSamaIndustri->update([
            'nama_ksi'=>$request->nama_ksi,
            'bidang_fokus_ksi'=>$request->bidang_fokus_ksi,
            'tahun_ksi'=>$request->tahun_ksi,
            'tahun_exit_ksi'=>$request->tahun_exit_ksi,
        ]);

        return redirect()->route('authentication.kerja-sama-industri.index');
    }

    public function destroy(KerjaSamaIndustri $kerjaSamaIndustri)
    {
        $kerjaSamaIndustri->delete();

        return Redirect::route('authentication.kerja-sama-industri.index')->with('message', 'Data berhasil dihapus');
    }

    public function show($kerjaSamaIndustri)
    {
        $kerjaSamaIndustri = KerjaSamaIndustri::findOrFail($kerjaSamaIndustri);

        return Inertia::render('Authentication/KerjaSamaIndustri/Detail', [
            'KerjaSamaIndustri' => $kerjaSamaIndustri
        ]);
    }

    public function edit(KerjaSamaIndustri $kerjaSamaIndustri)
    {
        return Inertia::render('Authentication/KerjaSamaIndustri/Update', [
            'kerjaSamaIndustri' => $kerjaSamaIndustri
        ]);
    }

    public function create()
    {
        return Inertia::render('Authentication/KerjaSamaIndustri/Add');
    }
}
