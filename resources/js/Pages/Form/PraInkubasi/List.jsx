import React, { useState } from 'react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head, router } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import PrimaryButton from '@/Components/PrimaryButton';

export default function PraInkubasiList({ praInkubasi, filters }) {
    const [keyword, setKeyword] = useState(filters.keyword || '');

    const handleSearch = () => {
        router.get(route('form.pra-inkubasi.list'), { keyword }, { preserveState: true });
    };

    return (
        <DashboardLayout>
            <Head title="Pra-Inkubasi" />
            <div className="p-4 md:py-8 md:px-0">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-md rounded-lg sm:rounded-lg">
                        <div className="p-6 text-gray-900">

                            {/* HEADER */}
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4 bg-gradient-to-r from-blue-300 via-blue-50 to-white rounded-md p-3">
                                <div className="flex items-center space-x-3">
                                    <ApplicationLogo />
                                    <p className="font-bold text-gray-700 text-lg sm:text-xl">
                                        UPA-PKK PRA-INKUBASI
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
                                        placeholder="Cari nama ketua tim, judul proposal..."
                                        className="border border-gray-300 rounded-md px-3 py-1 w-full sm:w-64 md:w-80 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                                    <PrimaryButton onClick={handleSearch}>
                                        Cari
                                    </PrimaryButton>
                                </div>
                            </div>

                            {/* DESKRIPSI */}
                            <p className="text-xs sm:text-sm text-gray-600 mb-4">
                                Halaman ini memuat data peserta program <span className="italic">Pra-Inkubasi</span>
                                yang diselenggarakan oleh Unit Pengembangan Karir dan Kewirausahaan (UPA-PKK) Politeknik Negeri Sambas.
                                Program ini bertujuan membina dan memfasilitasi mahasiswa atau alumni dalam tahap awal pengembangan ide bisnis.
                            </p>

                            {/* TABEL */}
                            <div className="overflow-x-auto">
                                <table className="min-w-full border border-gray-200 text-xs sm:text-sm">
                                    <thead>
                                        <tr className="bg-gray-100 text-left">
                                            <th className="py-2 px-3 sm:px-4 border-b">Nama Ketua Tim</th>
                                            <th className="py-2 px-3 sm:px-4 border-b">Status</th>
                                            <th className="py-2 px-3 sm:px-4 border-b">Judul Proposal</th>
                                            <th className="py-2 px-3 sm:px-4 border-b">Dosen Pembimbing</th>
                                            <th className="py-2 px-3 sm:px-4 border-b">Usulan Anggaran</th>
                                            <th className="py-2 px-3 sm:px-4 border-b">No. WA</th>
                                            <th className="py-2 px-3 sm:px-4 border-b">Keterangan</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {praInkubasi?.length > 0 ? (
                                            praInkubasi.map((item) => (
                                                <tr key={item.id} className="hover:bg-gray-50">
                                                    <td className="py-2 px-3 sm:px-4 border-b">{item.nama_ketua_tim}</td>
                                                    <td className="py-2 px-3 sm:px-4 border-b">{item.status_mahasiswa_alumni}</td>
                                                    <td className="py-2 px-3 sm:px-4 border-b">{item.judul_proposal}</td>
                                                    <td className="py-2 px-3 sm:px-4 border-b">{item.dosen_pembimbing}</td>
                                                    <td className="py-2 px-3 sm:px-4 border-b">{item.usulan_anggaran}</td>
                                                    <td className="py-2 px-3 sm:px-4 border-b">{item.no_wa}</td>
                                                    <td className="py-2 px-3 sm:px-4 border-b">{item.keterangan || '-'}</td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="7" className="text-center py-4 text-gray-500">
                                                    Data pra-inkubasi tidak tersedia.
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
