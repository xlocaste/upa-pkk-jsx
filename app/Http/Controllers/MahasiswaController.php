<?php

namespace App\Http\Controllers\Alumni;

use App\Http\Controllers\Controller;
use App\Http\Requests\Mahasiswa\StoreRequest;
use App\Http\Requests\Mahasiswa\UpdateRequest;
use Illuminate\Http\Request;
use App\Models\Mahasiswa;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class MahasiswaController extends Controller
{
    public function index()
    {
        $daftarMahasiswa = Mahasiswa::all();

        return inertia::render('Mahasiswa/List', [
            'Mahasiswa' => $daftarMahasiswa,
            'auth' => [
                'user' => Auth::user(),
            ],
        ]);
    }

    public function show($mahasiswa)
    {
        $mahasiswa = Mahasiswa::findOrFail($mahasiswa);

        return response()->json($mahasiswa);
    }

    public function store(StoreRequest $request)
    {
        $mahasiswa = Mahasiswa::create([
            'nama'=>$request->nama,
            'nim'=>$request->nim,
            'semester'=>$request->semester,
            'ipk'=>$request->ipk,
        ]);

        return redirect()->route('mahasiswa.index');
    }

    public function update(UpdateRequest $request, Mahasiswa $mahasiswa)
    {
        $mahasiswa->update([
            'nama'=>$request->nama,
            'nim'=>$request->nim,
            'semester'=>$request->semester,
            'ipk'=>$request->ipk,
        ]);

        return Inertia::location(route('mahasiswa.index'));
    }

    public function create()
    {
        return Inertia::render('Mahasiswa/Add');
    }

    public function edit(Mahasiswa $mahasiswa)
    {
        return Inertia::render('Mahasiswa/Update', [
            'mahasiswa' => $mahasiswa
        ]);
    }

    public function destroy(Mahasiswa $mahasiswa)
    {
        $mahasiswa->delete();

        return Redirect::route('mahasiswa.index')->with('message', 'Data berhasil dihapus');
    }
}
