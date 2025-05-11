<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MiniIndustriKampus extends Model
{
    use HasFactory;

    protected $table = 'mini_industri_kampus';

    protected $fillable = [
        'nama_mik',
        'bidang_fokus_mik',
        'tahun_mik',
        'tahun_exit_mik',
    ];
}
