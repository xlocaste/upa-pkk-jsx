<?php

namespace App\Imports;

use App\Models\Mahasiswa;
use Maatwebsite\Excel\Row;
use Maatwebsite\Excel\Concerns\OnEachRow;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class MahasiswaImport implements OnEachRow, WithHeadingRow
{
    public $errors = [];

    public function onRow(Row $row)
    {
        $data = $row->toArray();

        try {
            Mahasiswa::create([
                'nama'     => $data['nama'],
                'nim'      => $data['nim'],
                'semester' => $data['semester'],
                'ipk'      => $data['ipk'],
            ]);
        } catch (\Illuminate\Database\QueryException $e) {
            if ($e->errorInfo[1] == 1062) {
                $this->errors[] = "Duplikat NIM '{$data['nim']}' pada baris {$row->getIndex()}";
            } else {
                $this->errors[] = "Gagal menyimpan data pada baris {$row->getIndex()}: " . $e->getMessage();
            }
        }
    }
}
