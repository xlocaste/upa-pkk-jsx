<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\Alumni\StoreRequest;
use App\Http\Requests\Alumni\UpdateRequest;
use Illuminate\Http\Request;
use App\Models\Mahasiswa;
use App\Models\Alumni;
use Inertia\Inertia;

class AlumniController extends Controller
{
    public function index()
    {
        $daftarAlumni = Alumni::with('mahasiswa')->get();

        return Inertia::render('Authentication/Alumni/List', [
            'daftarAlumni' => $daftarAlumni
        ]);
    }

    public function list()
    {
        $daftarAlumni = Alumni::with('mahasiswa')->get();

        return Inertia::render('Form/Alumni/List', [
            'daftarAlumni' => $daftarAlumni
        ]);
    }

    public function store(StoreRequest $request)
    {
        $alumni = Alumni::create([
            'mahasiswa_id'=>$request->mahasiswa_id,
            'tempat_magang'=>$request->tempat_magang,
            'judul_magang'=>$request->judul_magang,
            'judul_tugas_akhir'=>$request->judul_tugas_akhir,
            'tahun_lulus'=>$request->tahun_lulus,
        ]);

        return redirect()->route('authentication.alumni.index');
    }

    public function update(UpdateRequest $request, Alumni $alumni)
    {
        $alumni->update([
            'tempat_magang'=>$request->tempat_magang,
            'judul_magang'=>$request->judul_magang,
            'judul_tugas_akhir'=>$request->judul_tugas_akhir,
            'tahun_lulus'=>$request->tahun_lulus,
        ]);

        return redirect()->route('authentication.alumni.index');
    }

    public function destroy(Alumni $alumni)
    {
        $alumni->delete();

        return redirect()->route('authentication.alumni.index');
    }

    public function show($alumni)
    {
        $alumni = Alumni::with('mahasiswa')->findOrFail($alumni);

        return Inertia::render('Authentication/Alumni/Detail', [
            'Alumni' => $alumni
        ]);
    }

    public function edit(Alumni $alumni)
    {
        $mahasiswaList = Mahasiswa::all(['id', 'nama', 'nim']);

        return Inertia::render('Authentication/Alumni/Update', [
            'alumni' => $alumni,
            'mahasiswaList' => $mahasiswaList,
        ]);
    }

    public function create()
    {
        $mahasiswa = Mahasiswa::all(['id', 'nim', 'nama']);

        return Inertia::render('Authentication/Alumni/Add', [
            'mahasiswa' => $mahasiswa,
        ]);
    }
}
