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
            $table->string('bidang_fokus_ksi');
            $table->string('tahun_ksi');
            $table->string('tahun_exit_ksi');
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
