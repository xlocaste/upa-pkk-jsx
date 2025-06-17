<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\MiniIndustriKampus;

class MiniIndustriKampusSeeder extends Seeder
{
    public function run(): void
    {
        $data = [
            [
                'nama_mik' => 'Kopi Kampus Nusantara',
                'bidang_fokus_mik' => 'Industri Kuliner',
                'tahun_mik' => 2019,
                'tahun_exit_mik' => 2021,
            ],
            [
                'nama_mik' => 'Smart Printing Lab',
                'bidang_fokus_mik' => 'Percetakan Digital',
                'tahun_mik' => 2020,
                'tahun_exit_mik' => 2022,
            ],
            [
                'nama_mik' => 'AgroIndo Tech',
                'bidang_fokus_mik' => 'Teknologi Pertanian',
                'tahun_mik' => 2021,
                'tahun_exit_mik' => 2023,
            ],
            [
                'nama_mik' => 'Eco Fashion Studio',
                'bidang_fokus_mik' => 'Industri Kreatif',
                'tahun_mik' => 2022,
                'tahun_exit_mik' => 2024,
            ],
            [
                'nama_mik' => 'BioCare Production',
                'bidang_fokus_mik' => 'Produk Kesehatan',
                'tahun_mik' => 2020,
                'tahun_exit_mik' => 2022,
            ],
            [
                'nama_mik' => 'Digital Media Kampus',
                'bidang_fokus_mik' => 'Media dan Konten Digital',
                'tahun_mik' => 2018,
                'tahun_exit_mik' => 2020,
            ],
            [
                'nama_mik' => 'Kriya Nusantara',
                'bidang_fokus_mik' => 'Kerajinan Tangan',
                'tahun_mik' => 2021,
                'tahun_exit_mik' => 2023,
            ],
            [
                'nama_mik' => 'Food Lab Mandiri',
                'bidang_fokus_mik' => 'Teknologi Pangan',
                'tahun_mik' => 2019,
                'tahun_exit_mik' => 2021,
            ],
            [
                'nama_mik' => 'Inovasi Energi Mahasiswa',
                'bidang_fokus_mik' => 'Energi Terbarukan',
                'tahun_mik' => 2022,
                'tahun_exit_mik' => 2024,
            ],
            [
                'nama_mik' => 'Studio Animasi Kampus',
                'bidang_fokus_mik' => 'Animasi dan Desain',
                'tahun_mik' => 2020,
                'tahun_exit_mik' => 2022,
            ],
        ];

        foreach ($data as $item) {
            MiniIndustriKampus::create($item);
        }
    }
}
