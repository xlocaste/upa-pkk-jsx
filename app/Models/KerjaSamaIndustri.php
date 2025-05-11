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
        'bidang_fokus_ksi',
        'tahun_ksi',
        'tahun_exit_ksi',
    ];
}
