<?php

namespace App\Http\Controllers;

use App\Http\Requests\KerjaSamaIndustri\StoreRequest;
use App\Http\Requests\KerjaSamaIndustri\UpdateRequest;
use Carbon\Carbon;
use Illuminate\Http\Request;
use PhpOffice\PhpSpreadsheet\IOFactory;
use App\Models\KerjaSamaIndustri;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Log;
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

    public function list(Request $request)
    {
        $query = KerjaSamaIndustri::query();

        if ($request->has('keyword') && $request->keyword != '') {
            $keyword = $request->keyword;
            $query->where('nama_ksi', 'like', "%{$keyword}%")
                ->orWhere('jenis_kegiatan', 'like', "%{$keyword}%");
        }

        $daftarKSI = $query->get();

        return Inertia::render('Form/KerjaSamaIndustri/List', [
            'daftarKSI' => $daftarKSI,
            'filters' => [
                'keyword' => $request->keyword ?? '',
            ],
        ]);
    }

    public function store(StoreRequest $request)
    {
        KerjaSamaIndustri::create([
            'nama_ksi' => $request->nama_ksi,
            'bentuk_lembaga' => $request->bentuk_lembaga,
            'jenis_kegiatan' => $request->jenis_kegiatan,
            'tahun_ksi' => $request->tahun_ksi,
            'tahun_exit_ksi' => $request->tahun_exit_ksi,
            'no_mou_poltesa' => $request->no_mou_poltesa,
            'no_mou_mitra' => $request->no_mou_mitra,
            'prodi' => $request->prodi,
            'aktivitas' => $request->aktivitas,
            'waktu' => $request->waktu,
            'keterangan' => $request->keterangan,
        ]);

        return redirect()->route('authentication.kerja-sama-industri.index');
    }

    public function update(UpdateRequest $request, KerjaSamaIndustri $kerjaSamaIndustri)
    {
        $kerjaSamaIndustri->update([
            'nama_ksi' => $request->nama_ksi,
            'bentuk_lembaga' => $request->bentuk_lembaga,
            'jenis_kegiatan' => $request->jenis_kegiatan,
            'tahun_ksi' => $request->tahun_ksi,
            'tahun_exit_ksi' => $request->tahun_exit_ksi,
            'no_mou_poltesa' => $request->no_mou_poltesa,
            'no_mou_mitra' => $request->no_mou_mitra,
            'prodi' => $request->prodi,
            'aktivitas' => $request->aktivitas,
            'waktu' => $request->waktu,
            'keterangan' => $request->keterangan,
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

    public function excel(Request $request)
    {
        $request->validate([
            'file' => 'required|file|mimes:xlsx,xls,csv',
        ], [
            'file.required' => 'Silahkan pilih file .xlsx, .xls, atau .csv terlebih dahulu',
        ]);

        $spreadsheet = IOFactory::load($request->file('file')->getRealPath());
        $sheet = $spreadsheet->getActiveSheet();
        $rows = $sheet->toArray(null, true, true, true);

        $errors = [];

        $rowHeader1 = $rows[4];
        $rowHeader2 = $rows[5];

        $finalHeaders = [];

        foreach ($rowHeader2 as $key => $val) {
            $mergedHeader = trim(($rowHeader1[$key] ?? '') . ' ' . ($rowHeader2[$key] ?? ''));
            $finalHeaders[$key] = Str::slug($mergedHeader, '_');
        }

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

        $mitraKolom = array_search('mitra_kerjasama', $finalHeaders);

        for ($i = 6; $i <= count($rows); $i++) {
            $row = $rows[$i] ?? null;
            if (!$row) continue;

            $mitraKerjasama = $row[$mitraKolom] ?? null;

            if (empty($mitraKerjasama)) {
                break;
            }

            $data = [];
            foreach ($finalHeaders as $col => $field) {
                $data[$field] = $row[$col] ?? null;
            }

            try {
                KerjaSamaIndustri::create([
                    'nama_ksi'       => $data['mitra_kerjasama'],
                    'bentuk_lembaga' => $data['bentuk_lembaga'],
                    'jenis_kegiatan' => $data['jenis_kegiatan'],
                    'tahun_ksi'      => $formatTanggal($data['kurun_waktu_mulai']),
                    'tahun_exit_ksi' => $formatTanggal($data['berakhir']),
                    'no_mou_poltesa' => $data['nomor_mou_poltesa'],
                    'no_mou_mitra'   => $data['mitra'] ?? null,
                    'prodi'          => $data['prodi'],
                    'aktivitas'      => $data['aktivitas'] ?? null,
                    'waktu'          => $data['waktu'],
                    'keterangan'     => $data['keterangan'],
                ]);
            } catch (\Exception $e) {
                $errors[] = "Baris $i: Gagal menyimpan - " . $e->getMessage();
                Log::error($e);
            }
        }

        if (!empty($errors)) {
            return back()->withErrors([
                'import' => implode("\n", $errors),
            ]);
        }

        return redirect()->route('authentication.kerja-sama-industri.index')
            ->with('success', 'Import berhasil!');
    }

    public function search(Request $request)
    {
        $query = KerjaSamaIndustri::query();

        if ($request->has('keyword') && $request->keyword != '') {
            $keyword = $request->keyword;
            $query->where('nama_ksi', 'like', '%' . $keyword . '%');
        }

        $filteredKsi = $query->paginate(5)->appends(['keyword' => $request->keyword]);

        return Inertia::render('Authentication/KerjaSamaIndustri/List', [
            'daftarKSI' => $filteredKsi,
            'filters' => [
                'keyword' => $request->keyword,
            ],
        ]);
    }

    public function import()
    {
        return Inertia::render('Authentication/KerjaSamaIndustri/Import');
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
