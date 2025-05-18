<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\Mahasiswa\StoreRequest;
use App\Http\Requests\Mahasiswa\UpdateRequest;
use App\Imports\MahasiswaImport;
use Illuminate\Http\Request;
use App\Models\Mahasiswa;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Maatwebsite\Excel\Facades\Excel;

class MahasiswaController extends Controller
{
    public function index()
    {
        $daftarMahasiswa = Mahasiswa::all();

        return inertia::render('Authentication/Mahasiswa/List', [
            'Mahasiswa' => $daftarMahasiswa,
            'auth' => [
                'user' => Auth::user(),
            ],
        ]);
    }

    public function list()
    {
        $daftarMahasiswa = Mahasiswa::all();

        return inertia::render('Form/Mahasiswa/List', [
            'Mahasiswa' => $daftarMahasiswa,
            'auth' => [
                'user' => Auth::user(),
            ],
        ]);
    }

    public function show($mahasiswa)
    {
        $mahasiswa = Mahasiswa::findOrFail($mahasiswa);

        return Inertia::render('Authentication/Mahasiswa/Detail', [
            'Mahasiswa' => $mahasiswa
        ]);
    }

    public function store(StoreRequest $request)
    {
        $mahasiswa = Mahasiswa::create([
            'nama'=>$request->nama,
            'nim'=>$request->nim,
            'semester'=>$request->semester,
            'ipk'=>$request->ipk,
        ]);

        return redirect()->route('authentication.mahasiswa.index');
    }

    public function update(UpdateRequest $request, Mahasiswa $mahasiswa)
    {
        $mahasiswa->update([
            'nama'=>$request->nama,
            'nim'=>$request->nim,
            'semester'=>$request->semester,
            'ipk'=>$request->ipk,
        ]);

        return Inertia::location(route('authentication.mahasiswa.index'));
    }

    public function excel(Request $request)
    {
        $request->validate([
            'file' => 'required|file|mimes:xlsx,xls,csv',
        ]);

        Excel::import(new MahasiswaImport, $request->file('file'));

        return redirect()->route('authentication.mahasiswa.index')->with('success', 'Import berhasil!');
    }

    public function import()
    {
        return Inertia::render('Authentication/Mahasiswa/Import');
    }

    public function create()
    {
        return Inertia::render('Authentication/Mahasiswa/Add');
    }

    public function edit(Mahasiswa $mahasiswa)
    {
        return Inertia::render('Authentication/Mahasiswa/Update', [
            'mahasiswa' => $mahasiswa
        ]);
    }

    public function destroy(Mahasiswa $mahasiswa)
    {
        $mahasiswa->delete();

        return Redirect::route('authentication.mahasiswa.index')->with('message', 'Data berhasil dihapus');
    }
}
