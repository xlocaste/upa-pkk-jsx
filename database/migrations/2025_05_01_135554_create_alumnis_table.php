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
        Schema::create('alumni', function (Blueprint $table) {
            $table->id();
            $table->string('tempat_magang')->nullable();
            $table->string('judul_magang')->nullable();
            $table->string('judul_tugas_akhir')->nullable();
            $table->string('nim');
            $table->string('nama');
            $table->string('hp');
            $table->string('email')->nullable();
            $table->year('tahun_lulus');
            $table->string('nik')->nullable();
            $table->string('npwp')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('alumni');
    }
};
