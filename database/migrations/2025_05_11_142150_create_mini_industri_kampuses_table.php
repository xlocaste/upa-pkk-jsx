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
        Schema::create('mini_industri_kampus', function (Blueprint $table) {
            $table->id();
            $table->string('nama_mik');
            $table->string('bidang_fokus_mik');
            $table->string('tahun_mik');
            $table->string('tahun_exit_mik');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('mini_industri_kampus');
    }
};
