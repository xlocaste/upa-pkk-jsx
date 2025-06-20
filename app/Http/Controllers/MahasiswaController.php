<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\Mahasiswa\StoreRequest;
use App\Http\Requests\Mahasiswa\UpdateRequest;
use App\Imports\MahasiswaImport;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Models\Mahasiswa;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Maatwebsite\Excel\Facades\Excel;
use PhpOffice\PhpSpreadsheet\IOFactory;

class MahasiswaController extends Controller
{
    public function index()
    {
        $daftarMahasiswa = Mahasiswa::paginate(20);

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
        Mahasiswa::create([
            'nama'=> $request->nama,
            'nim'=> $request->nim,
            'jenis_kelamin'=> $request->jenis_kelamin,
            'prodi'=> $request->prodi,
            'status'=> $request->status,
            'semester'=> $request->semester,
            'nomor_sk'=> $request->nomor_sk,
            'tanggal_sk'=> $request->tanggal_sk,
            'keterangan'=> $request->keterangan,
        ]);

        return redirect()->route('authentication.mahasiswa.index');
    }

    public function update(UpdateRequest $request, Mahasiswa $mahasiswa)
    {
        $mahasiswa->update([
            'nama'=> $request->nama,
            'nim'=> $request->nim,
            'jenis_kelamin'=> $request->jenis_kelamin,
            'prodi'=> $request->prodi,
            'status'=> $request->status,
            'semester'=> $request->semester,
            'nomor_sk'=> $request->nomor_sk,
            'tanggal_sk'=> $request->tanggal_sk,
            'keterangan'=> $request->keterangan,
        ]);

        return Inertia::location(route('authentication.mahasiswa.index'));
    }

    public function excel(Request $request)
    {
        $request->validate([
            'file' => 'required|file|mimes:xlsx,xls,csv',
        ], [
            'file.required' => 'Silahkan pilih file .xlsx, .xls, atau .csv terlebih dahulu',
        ]);

        $spreadsheet = IOFactory::load($request->file('file')->getRealPath());
        $errors = [];

        $formatTanggal = function ($value) {
            if (!$value) return null;
            try {
                return Carbon::createFromFormat('d/m/Y', $value)->format('Y-m-d');
            } catch (\Exception $e) {
                try {
                    return Carbon::parse($value)->format('Y-m-d');
                } catch (\Exception $e) {
                    return null;
                }
            }
        };

        foreach ($spreadsheet->getAllSheets() as $sheetIndex => $sheet) {
            $rows = $sheet->toArray(null, true, true, true);
            if (count($rows) < 8) continue; // skip sheet kosong atau tidak memenuhi struktur

            $rowHeader1 = $rows[6] ?? [];
            $rowHeader2 = $rows[7] ?? [];

            $finalHeaders = [];
            foreach ($rowHeader2 as $key => $val) {
                $mergedHeader = trim(($rowHeader1[$key] ?? '') . ' ' . ($rowHeader2[$key] ?? ''));
                $finalHeaders[$key] = Str::slug($mergedHeader, '_');
            }

            $nimKolom = array_search('nim', $finalHeaders);
            $jkLKolom = array_search('jenis_kelamin_l', $finalHeaders);
            $jkPKolom = array_search('p', $finalHeaders);

            if ($nimKolom === false) {
                $errors[] = "Sheet ke-" . ($sheetIndex + 1) . ": Kolom NIM tidak ditemukan.";
                continue;
            }

            if ($jkLKolom === false || $jkPKolom === false) {
                $errors[] = "Sheet ke-" . ($sheetIndex + 1) . ": Kolom jenis kelamin L dan P tidak ditemukan.";
                continue;
            }

            for ($i = 8; $i <= count($rows); $i++) {
                $row = $rows[$i] ?? null;
                if (!$row) continue;

                $nim = trim($row[$nimKolom] ?? '');
                if (empty($nim)) break;

                $jkL = trim($row[$jkLKolom] ?? '');
                $jkP = trim($row[$jkPKolom] ?? '');

                if ($jkL == '1' && empty($jkP)) {
                    $jenisKelamin = 'Laki-laki';
                } elseif ($jkP == '1' && empty($jkL)) {
                    $jenisKelamin = 'Perempuan';
                } else {
                    $jenisKelamin = null;
                }

                if ($jenisKelamin === null) {
                    $errors[] = "Sheet ke-" . ($sheetIndex + 1) . " Baris $i: Kolom jenis kelamin tidak valid.";
                    continue;
                }

                $data = [];
                foreach ($finalHeaders as $col => $field) {
                    if (in_array($field, ['jenis_kelamin_l', 'jenis_kelamin_p'])) continue;
                    $data[$field] = $row[$col] ?? null;
                }

                try {
                    Mahasiswa::updateOrCreate(
                        ['nim' => $nim],
                        [
                            'nama' => $data['nama'] ?? null,
                            'jenis_kelamin' => $jenisKelamin,
                            'prodi' => $data['program_studi'] ?? null,
                            'status' => $data['status'] ?? null,
                            'semester' => is_numeric($data['semester'] ?? null) ? (int)$data['semester'] : null,
                            'nomor_sk' => $data['nomor_sk'] ?? null,
                            'tanggal_sk' => $formatTanggal($data['tanggal_sk'] ?? null),
                            'keterangan' => $data['keterangan'] ?? null,
                        ]
                    );
                } catch (\Exception $e) {
                    $errors[] = "Sheet ke-" . ($sheetIndex + 1) . " Baris $i: Gagal menyimpan - " . $e->getMessage();
                    Log::error($e);
                }
            }
        }

        if (!empty($errors)) {
            return back()->withErrors([
                'import' => implode("\n", $errors),
            ]);
        }

        return redirect()->route('authentication.mahasiswa.index')
            ->with('success', 'Import dari semua sheet berhasil!');
    }

    public function search(Request $request)
    {
        $query = Mahasiswa::query();

        if ($request->has('keyword') && $request->keyword != '') {
            $keyword = $request->keyword;
            $query->where('nama', 'like', '%' . $keyword . '%')
                ->orWhere('nim', 'like', '%' . $keyword . '%')
                ->orWhere('prodi', 'like', '%' . $keyword . '%');
        }

        $filteredMahasiswa = $query->paginate(10)->appends(['keyword' => $request->keyword]);

        return Inertia::render('Authentication/Mahasiswa/List', [
            'Mahasiswa' => $filteredMahasiswa,
            'filters' => [
                'keyword' => $request->keyword,
            ],
        ]);
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
