<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\Alumni\StoreRequest;
use App\Http\Requests\Alumni\UpdateRequest;
use Illuminate\Http\Request;
use App\Models\Mahasiswa;
use App\Models\Alumni;
use Inertia\Inertia;
use PhpOffice\PhpSpreadsheet\IOFactory;

class AlumniController extends Controller
{
    public function index()
    {
        $daftarAlumni = Alumni::paginate(20);

        return Inertia::render('Authentication/Alumni/List', [
            'daftarAlumni' => $daftarAlumni
        ]);
    }

    public function list()
    {
        $daftarAlumni = Alumni::get();

        return Inertia::render('Form/Alumni/List', [
            'daftarAlumni' => $daftarAlumni
        ]);
    }

    public function store(StoreRequest $request)
    {
        Alumni::create([
            'nim' => $request->nim,
            'nama' => $request->nama,
            'hp' => $request->hp,
            'email' => $request->email,
            'tempat_magang' => $request->tempat_magang,
            'judul_magang' => $request->judul_magang,
            'judul_tugas_akhir' => $request->judul_tugas_akhir,
            'tahun_lulus' => $request->tahun_lulus,
            'nik' => $request->nik,
            'npwp' => $request->npwp,
        ]);

        return redirect()->route('authentication.alumni.index');
    }

    public function update(UpdateRequest $request, Alumni $alumni)
    {
        $alumni->update([
            'nim' => $request->nim,
            'nama' => $request->nama,
            'hp' => $request->hp,
            'email' => $request->email,
            'tempat_magang' => $request->tempat_magang,
            'judul_magang' => $request->judul_magang,
            'judul_tugas_akhir' => $request->judul_tugas_akhir,
            'tahun_lulus' => $request->tahun_lulus,
            'nik' => $request->nik,
            'npwp' => $request->npwp,
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
        $alumni = Alumni::findOrFail($alumni);

        return Inertia::render('Authentication/Alumni/Detail', [
            'Alumni' => $alumni
        ]);
    }

    public function excel(Request $request)
    {
        $request->validate([
            'file' => ['required', 'file', 'mimes:xlsx,xls'],
        ]);

        $spreadsheet = IOFactory::load($request->file('file'));
        $sheet = $spreadsheet->getActiveSheet();
        $rows = $sheet->toArray();

        $headerRowIndex = null;
        foreach ($rows as $i => $row) {
            if (in_array('NIM', $row) && in_array('Nama', $row)) {
                $headerRowIndex = $i;
                break;
            }
        }

        if (is_null($headerRowIndex)) {
            return back()->withErrors(['file' => 'Kolom NIM atau Nama tidak ditemukan dalam file Excel.']);
        }

        $header = array_map('trim', $rows[$headerRowIndex]);

        foreach (array_slice($rows, $headerRowIndex + 1) as $row) {
            $data = array_combine($header, $row);

            if (empty($data['NIM']) || empty($data['Nama'])) {
                continue;
            }

            Alumni::updateOrCreate(
                ['nim' => $data['NIM']],
                [
                    'nama' => $data['Nama'],
                    'hp' => $data['HP'] ?? null,
                    'email' => $data['Email'] ?? null,
                    'tahun_lulus' => $data['Tahun Lulus'] ?? null,
                    'nik' => $data['NIK'] ?? null,
                    'npwp' => $data['NPWP'] ?? null,
                    'tempat_magang' => null,
                    'judul_magang' => null,
                    'judul_tugas_akhir' => null,
                ]
            );
        }

        return back()->with('success', 'Data alumni berhasil diimport.');
    }

    public function search(Request $request)
    {
        $query = Alumni::query();

        if ($request->has('keyword') && $request->keyword != '') {
            $keyword = $request->keyword;
            $query->where('nama', 'like', '%' . $keyword . '%')
                ->orWhere('nim', 'like', '%' . $keyword . '%')
                ->orWhere('tempat_magang', 'like', '%' . $keyword . '%')
                ->orWhere('judul_magang', 'like', '%' . $keyword . '%')
                ->orWhere('judul_tugas_akhir', 'like', '%' . $keyword . '%')
                ->orWhere('email', 'like', '%' . $keyword . '%')
                ->orWhere('hp', 'like', '%' . $keyword . '%')
                ->orWhere('tahun_lulus', 'like', '%' . $keyword . '%')
                ->orWhere('nik', 'like', '%' . $keyword . '%')
                ->orWhere('npwp', 'like', '%' . $keyword . '%');
        }

        $filteredAlumni = $query->paginate(20)->appends(['keyword' => $request->keyword]);

        return Inertia::render('Authentication/Alumni/List', [
            'daftarAlumni' => $filteredAlumni,
            'filters' => [
                'keyword' => $request->keyword,
            ],
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
