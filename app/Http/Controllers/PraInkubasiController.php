<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PraInkubasi;
use App\Http\Requests\PraInkubasi\StoreRequest;
use App\Http\Requests\PraInkubasi\UpdateRequest;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use PhpOffice\PhpSpreadsheet\IOFactory;

class PraInkubasiController extends Controller
{
    public function index()
    {
        $daftarPraInkubasi = PraInkubasi::paginate(20);

        return Inertia::render('Authentication/PraInkubasi/List', [
            'praInkubasi' => $daftarPraInkubasi,
            'auth' => [
                'user' => Auth::user(),
            ],
        ]);
    }

    public function list()
    {
        $daftarPraInkubasi = PraInkubasi::all();

        return Inertia::render('Form/PraInkubasi/List', [
            'praInkubasi' => $daftarPraInkubasi,
            'auth' => [
                'user' => Auth::user(),
            ],
        ]);
    }

    public function store(StoreRequest $request)
    {
        PraInkubasi::create([
            'nama_ketua_tim'=> $request->nama_ketua_tim,
            'status_mahasiswa_alumni'=> $request->status_mahasiswa_alumni,
            'judul_proposal'=> $request->judul_proposal,
            'dosen_pembimbing'=> $request->dosen_pembimbing,
            'usulan_anggaran'=> $request->usulan_anggaran,
            'no_wa'=> $request->no_wa,
            'keterangan'=> $request->keterangan,
        ]);

        return redirect()->route('authentication.pra-inkubasi.index');
    }

    public function update(UpdateRequest $request, PraInkubasi $praInkubasi)
    {
        $praInkubasi->update([
            'nama_ketua_tim'=> $request->nama_ketua_tim,
            'status_mahasiswa_alumni'=> $request->status_mahasiswa_alumni,
            'judul_proposal'=> $request->judul_proposal,
            'dosen_pembimbing'=> $request->dosen_pembimbing,
            'usulan_anggaran'=> $request->usulan_anggaran,
            'no_wa'=> $request->no_wa,
            'keterangan'=> $request->keterangan,
        ]);

        return redirect()->route('authentication.pra-inkubasi.index');
    }

    public function excel(Request $request)
    {
        $request->validate([
            'file' => 'required|file|mimes:xlsx,xls',
        ]);

        $spreadsheet = IOFactory::load($request->file('file')->getRealPath());
        $sheet = $spreadsheet->getSheet(0); // hanya sheet pertama
        $rows = $sheet->toArray(null, true, true, true);

        $errors = [];

        for ($i = 5; $i <= count($rows); $i++) {
            $row = $rows[$i] ?? null;
            if (!$row) continue;

            $nama_ketua_tim = $row['B'] ?? null;
            $status = $row['C'] ?? null;
            $judul = $row['D'] ?? null;
            $pembimbing = $row['E'] ?? null;
            $anggaran = $row['F'] ?? null;
            $no_wa = $row['G'] ?? null;
            $keterangan = $row['H'] ?? null;

            if (empty($nama_ketua_tim) || empty($judul)) {
                continue;
            }

            try {
                PraInkubasi::create([
                    'nama_ketua_tim'         => $nama_ketua_tim,
                    'status_mahasiswa_alumni' => $status,
                    'judul_proposal'         => $judul,
                    'dosen_pembimbing'       => $pembimbing,
                    'usulan_anggaran'        => $anggaran,
                    'no_wa'                  => $no_wa,
                    'keterangan'             => $keterangan,
                ]);
            } catch (\Exception $e) {
                $errors[] = "Baris $i: Gagal menyimpan - " . $e->getMessage();
                Log::error("Import error baris $i: " . $e->getMessage());
            }
        }

        if (!empty($errors)) {
            return back()->withErrors(['import' => implode("\n", $errors)]);
        }

        return redirect()->route('authentication.pra-inkubasi.index')->with('success', 'Import berhasil!');
    }

    public function search(Request $request)
    {
        $query = PraInkubasi::query();

        if ($request->has('keyword') && $request->keyword != '') {
            $keyword = $request->keyword;
            $query->where('nama_ketua_tim', 'like', '%' . $keyword . '%')
                ->orWhere('status_mahasiswa_alumni', 'like', '%' . $keyword . '%')
                ->orWhere('judul_proposal', 'like', '%' . $keyword . '%');
        }

        $filteredPraInkubasi = $query->paginate(10)->appends(['keyword' => $request->keyword]);

        return Inertia::render('Authentication/PraInkubasi/List', [
            'praInkubasi' => $filteredPraInkubasi,
            'filters' => [
                'keyword' => $request->keyword,
            ],
        ]);
    }

    public function import()
    {
        return Inertia::render('Authentication/PraInkubasi/Import');
    }

    public function destroy(PraInkubasi $praInkubasi)
    {
        $praInkubasi->delete();

        return Redirect::route('authentication.pra-inkubasi.index')->with('message', 'Data berhasil dihapus');
    }

    public function show($praInkubasi)
    {
        $praInkubasi = PraInkubasi::findOrFail($praInkubasi);

        return Inertia::render('Authentication/PraInkubasi/Detail', [
            'PraInkubasi' => $praInkubasi
        ]);
    }

    public function edit(PraInkubasi $praInkubasi)
    {
        return Inertia::render('Authentication/PraInkubasi/Update', [
            'praInkubasi' => $praInkubasi
        ]);
    }

    public function create()
    {
        return Inertia::render('Authentication/PraInkubasi/Add');
    }
}
