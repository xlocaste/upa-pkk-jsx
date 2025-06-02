<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mahasiswa extends Model
{
    use HasFactory;

    protected $table = "mahasiswa";

    protected $fillable = [
        'nama',
        'nim',
        'jenis_kelamin',
        'prodi',
        'status',
        'semester',
        'nomor_sk',
        'tanggal_sk',
        'keterangan',
    ];
}
