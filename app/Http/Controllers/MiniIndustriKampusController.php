<?php

namespace App\Http\Controllers;

use App\Http\Requests\MiniIndustriKampus\StoreRequest;
use App\Http\Requests\MiniIndustriKampus\UpdateRequest;
use App\Models\MiniIndustriKampus;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class MiniIndustriKampusController extends Controller
{
    public function index(Request $request)
    {
        $query = MiniIndustriKampus::query();

        if ($request->has('keyword') && $request->keyword != '') {
            $query->where(function ($q) use ($request) {
                $q->where('nama_mik', 'like', '%' . $request->keyword . '%')
                ->orWhere('bidang_fokus_mik', 'like', '%' . $request->keyword . '%');
            });
        }

        $daftarMIK = $query->paginate(5)->withQueryString();

        return Inertia::render('Authentication/MiniIndustriKampus/List', [
            'daftarMIK' => $daftarMIK,
            'filters' => [
                'keyword' => $request->keyword,
            ],
        ]);
    }

    public function list(Request $request)
    {
        $query = MiniIndustriKampus::query();

        if ($request->filled('keyword')) {
            $keyword = $request->keyword;

            $query->where(function ($q) use ($keyword) {
                $q->where('nama_mik', 'like', "%$keyword%")
                ->orWhere('bidang_fokus_mik', 'like', "%$keyword%")
                ->orWhere('tahun_exit_mik', 'like', "%$keyword%");
            });
        }

        $daftarMIK = $query->get();

        return Inertia::render('Form/MiniIndustriKampus/List', [
            'daftarMIK' => $daftarMIK,
            'filters' => [
                'keyword' => $request->keyword,
            ],
        ]);
    }

    public function store(StoreRequest $request)
    {
        MiniIndustriKampus::create([
            'nama_mik'=>$request->nama_mik,
            'bidang_fokus_mik'=>$request->bidang_fokus_mik,
            'tahun_mik'=>$request->tahun_mik,
            'tahun_exit_mik'=>$request->tahun_exit_mik,
        ]);

        return redirect()->route('authentication.mini-industri-kampus.index');
    }

    public function update(UpdateRequest $request, MiniIndustriKampus $miniIndustriKampus)
    {
        $miniIndustriKampus->update([
            'nama_mik'=>$request->nama_mik,
            'bidang_fokus_mik'=>$request->bidang_fokus_mik,
            'tahun_mik'=>$request->tahun_mik,
            'tahun_exit_mik'=>$request->tahun_exit_mik,
        ]);

        return redirect()->route('authentication.mini-industri-kampus.index');
    }

    public function destroy(MiniIndustriKampus $miniIndustriKampus)
    {
        $miniIndustriKampus->delete();

        return Redirect::route('authentication.mini-industri-kampus.index')->with('message', 'Data berhasil dihapus');
    }

    public function show($miniIndustriKampus)
    {
        $miniIndustriKampus = MiniIndustriKampus::findOrFail($miniIndustriKampus);

        return Inertia::render('Authentication/MiniIndustriKampus/Detail', [
            'MiniIndustriKampus' => $miniIndustriKampus
        ]);
    }

    public function edit(MiniIndustriKampus $miniIndustriKampus)
    {
        return Inertia::render('Authentication/MiniIndustriKampus/Update', [
            'MiniIndustriKampus' => $miniIndustriKampus
        ]);
    }

    public function create()
    {
        return Inertia::render('Authentication/MiniIndustriKampus/Add');
    }
}
