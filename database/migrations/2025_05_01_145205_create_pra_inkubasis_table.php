<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('pra_inkubasi', function (Blueprint $table) {
            $table->id();
            $table->string('nama_ketua_tim');
            $table->string('status_mahasiswa_alumni')->nullable();
            $table->string('judul_proposal');
            $table->string('dosen_pembimbing')->nullable();
            $table->string('usulan_anggaran')->nullable();
            $table->string('no_wa');
            $table->text('keterangan');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pra_inkubasi');
    }
};
