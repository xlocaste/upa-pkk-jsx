<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Inkubasi;
use App\Http\Requests\Inkubasi\StoreRequest;
use App\Http\Requests\Inkubasi\UpdateRequest;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class InkubasiController extends Controller
{
    public function index(Request $request)
    {
        $query = Inkubasi::query();

        if ($request->has('keyword') && $request->keyword != '') {
            $keyword = $request->keyword;
            $query->where('nama_tenant', 'like', '%' . $keyword . '%');
        }

        $daftarInkubasi = $query->paginate(5)->withQueryString();

        return inertia::render('Authentication/Inkubasi/List', [
            'Inkubasi' => $daftarInkubasi,
            'filters' => [
                'keyword' => $request->keyword,
            ],
            'auth' => [
                'user' => Auth::user(),
            ],
        ]);
    }

    public function list(Request $request)
    {
        $keyword = $request->input('keyword');

        $query = Inkubasi::query();

        if ($keyword) {
            $query->where('nama_tenant', 'like', "%{$keyword}%")
                ->orWhere('bidang_fokus_tenant', 'like', "%{$keyword}%")
                ->orWhere('tahun_inkubasi_tenant', 'like', "%{$keyword}%");
        }

        $daftarInkubasi = $query->get();

        return Inertia::render('Form/Inkubasi/List', [
            'Inkubasi' => $daftarInkubasi,
            'filters' => $request->only('keyword'),
            'auth' => [
                'user' => Auth::user(),
            ],
        ]);
    }
    public function store(StoreRequest $request)
    {
        $inkubasi = Inkubasi::create([
            'nama_tenant'=>$request->nama_tenant,
            'bidang_fokus_tenant'=>$request->bidang_fokus_tenant,
            'tahun_inkubasi_tenant'=>$request->tahun_inkubasi_tenant,
            'tahun_exit_tenant'=>$request->tahun_exit_tenant,
        ]);

        return redirect()->route('authentication.inkubasi.index');
    }

    public function update(UpdateRequest $request, Inkubasi $inkubasi)
    {
        $inkubasi->update([
            'nama_tenant'=>$request->nama_tenant,
            'bidang_fokus_tenant'=>$request->bidang_fokus_tenant,
            'tahun_inkubasi_tenant'=>$request->tahun_inkubasi_tenant,
            'tahun_exit_tenant'=>$request->tahun_exit_tenant,
        ]);

        return redirect()->route('authentication.inkubasi.index');
    }

    public function show($inkubasi)
    {
        $inkubasi = Inkubasi::findOrFail($inkubasi);

        return Inertia::render('Authentication/Inkubasi/Detail', [
            'Inkubasi' => $inkubasi
        ]);
    }

    public function destroy(Inkubasi $inkubasi)
    {
        $inkubasi->delete();

        return Redirect::route('authentication.inkubasi.index')->with('message', 'Data berhasil dihapus');
    }

    public function edit(Inkubasi $inkubasi)
    {
        return Inertia::render('Authentication/Inkubasi/Update', [
            'inkubasi' => $inkubasi
        ]);
    }

    public function create()
    {
        return Inertia::render('Authentication/Inkubasi/Add');
    }
}
