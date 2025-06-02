<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PraInkubasi extends Model
{
    use HasFactory;

    protected $table = 'pra_inkubasi';

    protected $fillable = [
        'nama_ketua_tim',
        'status_mahasiswa_alumni',
        'judul_proposal',
        'dosen_pembimbing',
        'usulan_anggaran',
        'no_wa',
        'keterangan',
    ];
}
