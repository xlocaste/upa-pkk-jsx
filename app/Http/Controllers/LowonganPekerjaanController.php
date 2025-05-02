<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\LowonganPekerjaan;
use App\Http\Requests\LowonganPekerjaan\StoreRequest;
use App\Http\Requests\LowonganPekerjaan\UpdateRequest;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class LowonganPekerjaanController extends Controller
{
    public function index()
    {
        $daftarLowonganKerja = LowonganPekerjaan::all();

        return Inertia::render('Authentication/LowonganPekerjaan/List', [
            'lowonganKerja' => $daftarLowonganKerja,
            'auth' => [
                'user' => Auth::user(),
            ],
        ]);
    }

    public function list()
    {
        $daftarLowonganKerja = LowonganPekerjaan::all();

        return Inertia::render('Form/LowonganPekerjaan/List', [
            'lowonganKerja' => $daftarLowonganKerja,
            'auth' => [
                'user' => Auth::user(),
            ],
        ]);
    }

    public function detail($lowonganPekerjaan)
    {
        $lowongan = LowonganPekerjaan::findOrFail($lowonganPekerjaan);

        return inertia('Form/LowonganPekerjaan/Detail', [
            'lowongan' => $lowongan
        ]);
    }

    public function store(StoreRequest $request)
    {
        if ($request->hasFile('image')) {
            $image = $request->file('image')->store('LowongaKerja', 'public');
        }

        $lowonganKerja = LowonganPekerjaan::Create([
            'image'=>$image,
            'judul_lowongan_kerja'=>$request->judul_lowongan_kerja,
            'deskripsi'=>$request->deskripsi,
            'kontak'=>$request->kontak,
        ]);

        return redirect()->route('authentication.lowongan-pekerjaan.index');
    }

    public function update(UpdateRequest $request, LowonganPekerjaan $lowonganKerja)
    {
        if ($request->hasFile('image')) {
            $image = $request->file('image')->store('LowongaKerja', 'public');
        }

        $lowonganKerja->Update([
            'image'=>$image,
            'judul_lowongan_kerja'=>$request->judul_lowongan_kerja,
            'deskripsi'=>$request->deskripsi,
            'kontak'=>$request->kontak,
        ]);

        return redirect()->route('authentication.lowongan-kerja.index');
    }

    public function destroy(LowonganPekerjaan $lowonganKerja)
    {
        $lowonganKerja->delete();

        return Redirect::route('authentication.lowongan-kerja.index')->with('message', 'Data berhasil dihapus');
    }

    public function edit(LowonganPekerjaan $lowonganKerja)
    {
        return Inertia::render('Authentication/LowonganPekerjaan/Update', [
            'lowonganKerja' => $lowonganKerja
        ]);
    }

    public function create()
    {
        return Inertia::render('Authentication/LowonganPekerjaan/Add');
    }
}
