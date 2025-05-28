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
        Schema::create('kerja_sama_industri', function (Blueprint $table) {
            $table->id();
            $table->string('nama_ksi');
            $table->string('bentuk_lembaga');
            $table->string('jenis_kegiatan');
            $table->date('tahun_ksi');
            $table->date('tahun_exit_ksi');
            $table->string('no_mou_poltesa');
            $table->string('no_mou_mitra')->nullable();
            $table->string('prodi');
            $table->string('aktivitas')->nullable();
            $table->string('waktu');
            $table->string('keterangan');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('kerja_sama_industri');
    }
};
