<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LowonganPekerjaan extends Model
{
    use HasFactory;

    protected $table = 'lowongan_pekerjaan';

    protected $fillable = [
        'judul_lowongan_kerja',
        'deskripsi',
        'kontak',
        'image',
    ];
}
