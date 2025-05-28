<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KerjaSamaIndustri extends Model
{
    use HasFactory;

    protected $table = 'kerja_sama_industri';

    protected $fillable = [
        'nama_ksi',
        'bentuk_lembaga',
        'jenis_kegiatan',
        'tahun_ksi',
        'tahun_exit_ksi',
        'no_mou_poltesa',
        'no_mou_mitra',
        'prodi',
        'aktivitas',
        'waktu',
        'keterangan',
    ];
}
