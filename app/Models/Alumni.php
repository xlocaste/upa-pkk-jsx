<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Alumni extends Model
{
    use HasFactory;

    protected $table = 'alumni';

    protected $fillable = [
        'tempat_magang',
        'judul_magang',
        'judul_tugas_akhir',
        'nim',
        'nama',
        'hp',
        'email',
        'tahun_lulus',
        'nik',
        'npwp',
    ];
}
