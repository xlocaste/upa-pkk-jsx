<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Inkubasi;

class InkubasiSeeder extends Seeder
{
    public function run(): void
    {
        $data = [
            [
                'nama_tenant' => 'TechnoFarm ID',
                'bidang_fokus_tenant' => 'Agroteknologi',
                'tahun_inkubasi_tenant' => 2020,
                'tahun_exit_tenant' => 2022,
            ],
            [
                'nama_tenant' => 'EduSmart',
                'bidang_fokus_tenant' => 'Teknologi Pendidikan',
                'tahun_inkubasi_tenant' => 2019,
                'tahun_exit_tenant' => 2021,
            ],
            [
                'nama_tenant' => 'HealthGo',
                'bidang_fokus_tenant' => 'Kesehatan Digital',
                'tahun_inkubasi_tenant' => 2021,
                'tahun_exit_tenant' => 2023,
            ],
            [
                'nama_tenant' => 'Inovasi Hijau',
                'bidang_fokus_tenant' => 'Energi Terbarukan',
                'tahun_inkubasi_tenant' => 2020,
                'tahun_exit_tenant' => 2022,
            ],
            [
                'nama_tenant' => 'SmartRetail',
                'bidang_fokus_tenant' => 'Retail Cerdas',
                'tahun_inkubasi_tenant' => 2022,
                'tahun_exit_tenant' => 2024,
            ],
            [
                'nama_tenant' => 'BioCraft',
                'bidang_fokus_tenant' => 'Bioteknologi',
                'tahun_inkubasi_tenant' => 2018,
                'tahun_exit_tenant' => 2020,
            ],
            [
                'nama_tenant' => 'KaryaDrone',
                'bidang_fokus_tenant' => 'Teknologi Drone',
                'tahun_inkubasi_tenant' => 2021,
                'tahun_exit_tenant' => 2023,
            ],
            [
                'nama_tenant' => 'MediTrack',
                'bidang_fokus_tenant' => 'IoT Medis',
                'tahun_inkubasi_tenant' => 2019,
                'tahun_exit_tenant' => 2021,
            ],
            [
                'nama_tenant' => 'EcoBuild',
                'bidang_fokus_tenant' => 'Konstruksi Ramah Lingkungan',
                'tahun_inkubasi_tenant' => 2022,
                'tahun_exit_tenant' => 2024,
            ],
            [
                'nama_tenant' => 'AquaSense',
                'bidang_fokus_tenant' => 'Pemantauan Kualitas Air',
                'tahun_inkubasi_tenant' => 2020,
                'tahun_exit_tenant' => 2022,
            ],
        ];

        foreach ($data as $item) {
            Inkubasi::create($item);
        }
    }
}
