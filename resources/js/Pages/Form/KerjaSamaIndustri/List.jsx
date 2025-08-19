import React, { useState } from 'react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head, router } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import PrimaryButton from '@/Components/PrimaryButton';

export default function KerjaSamaIndustriList({ daftarKSI, filters }) {
    const [keyword, setKeyword] = useState(filters.keyword || '');

    const handleSearch = () => {
        router.get(route('form.kerja-sama-industri.list'), { keyword });
    };

    return (
        <DashboardLayout>
            <Head title="Kerja Sama Industri" />
            <div className="p-4 md:py-8 md:px-0">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-md rounded-lg sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            {/* Header */}
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4 bg-gradient-to-r from-blue-300 via-blue-50 to-white rounded-md p-3">
                                <div className="flex items-center space-x-4">
                                    <ApplicationLogo />
                                    <p className="font-bold text-gray-700 text-lg sm:text-xl">
                                        UPA-PKK KERJA SAMA INDUSTRI
                                    </p>
                                </div>
                                <div className="flex w-full sm:w-auto items-center gap-2">
                                    <input
                                        type="text"
                                        value={keyword}
                                        onChange={(e) => setKeyword(e.target.value)}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter') handleSearch();
                                        }}
                                        placeholder="Cari nama mitra atau jenis kegiatan..."
                                        className="border border-gray-300 rounded-md px-3 py-1 w-full sm:w-64 md:w-80 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
                                    />
                                    <PrimaryButton onClick={handleSearch}>
                                        Cari
                                    </PrimaryButton>
                                </div>
                            </div>

                            {/* Deskripsi */}
                            <p className="text-xs sm:text-sm text-gray-600 mb-4 leading-relaxed">
                                Halaman ini menyajikan data Kerja Sama Industri (KSI) yang dilakukan oleh UPA-PKK Politeknik Negeri Sambas.
                                Kerja sama ini meliputi berbagai bentuk kolaborasi antara institusi dengan mitra industri, baik dalam bentuk pelatihan, magang, pendampingan usaha, maupun program lainnya yang mendukung pengembangan kompetensi mahasiswa dan alumni.
                                Informasi meliputi nama mitra, jenis kegiatan, serta periode kerja sama yang berlangsung.
                                Data ini penting sebagai indikator keterlibatan institusi dalam membangun jejaring dengan dunia usaha dan dunia industri (DUDI).
                            </p>

                            {/* Tabel */}
                            <div className="overflow-x-auto">
                                <table className="min-w-full border border-gray-200 text-xs sm:text-sm">
                                    <thead>
                                        <tr className="bg-gray-100 text-left">
                                            <th className="py-2 px-4 border-b">No</th>
                                            <th className="py-2 px-4 border-b">Nama Mitra</th>
                                            <th className="py-2 px-4 border-b">Jenis Kegiatan</th>
                                            <th className="py-2 px-4 border-b">Tahun Kerja Sama</th>
                                            <th className="py-2 px-4 border-b">Tahun Exit</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {daftarKSI.length > 0 ? (
                                            daftarKSI.map((item, index) => (
                                                <tr key={item.id} className="hover:bg-gray-50">
                                                    <td className="py-2 px-4 border-b">{index + 1}</td>
                                                    <td className="py-2 px-4 border-b">{item.nama_ksi}</td>
                                                    <td className="py-2 px-4 border-b">{item.jenis_kegiatan}</td>
                                                    <td className="py-2 px-4 border-b">{item.tahun_ksi}</td>
                                                    <td className="py-2 px-4 border-b">{item.tahun_exit_ksi}</td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="5" className="text-center py-4 text-gray-500">
                                                    Data Kerja Sama Industri tidak tersedia.
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
