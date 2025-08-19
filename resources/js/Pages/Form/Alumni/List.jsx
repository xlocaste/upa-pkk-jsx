import React, { useState } from 'react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head, router } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';

export default function AlumniList({ daftarAlumni, filters }) {
    const [keyword, setKeyword] = useState(filters?.keyword || '');

    const handleSearch = () => {
        router.get(route('form.alumni.list'), { keyword }, { preserveState: true });
    };

    const handlePageChange = (url) => {
        if (url) {
            router.get(url, {}, { preserveState: true });
        }
    };

    return (
        <DashboardLayout>
            <Head title="Alumni" />
            <div className="py-4 px-4 md:p-8">
                <div className="overflow-hidden bg-white shadow-md rounded-lg sm:rounded-lg">
                    <div className="p-6 text-gray-900">
                        {/* Header */}
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4 bg-gradient-to-r from-blue-300 via-blue-50 to-white rounded-md p-3">
                            <div className="flex items-center space-x-3">
                                <ApplicationLogo className="w-10 h-10" />
                                <p className="font-bold text-gray-700 text-lg md:text-xl">
                                    UPA-PKK ALUMNI
                                </p>
                            </div>
                            <div className="flex flex-row sm:items-center gap-2 w-full md:w-auto">
                                <input
                                    type="text"
                                    value={keyword}
                                    onChange={(e) => setKeyword(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                                    placeholder="Cari nama, NIM, tempat magang..."
                                    className="border border-gray-300 rounded-md px-3 py-2 w-full sm:w-64 md:w-80 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
                                />
                                <PrimaryButton onClick={handleSearch} className="w-auto">
                                    Cari
                                </PrimaryButton>
                            </div>
                        </div>

                        {/* Deskripsi */}
                        <p className="text-xs sm:text-sm text-gray-600 mb-4">
                            Halaman ini menampilkan daftar data alumni Politeknik Negeri Sambas (Poltesa) yang telah mengikuti program magang dan menyelesaikan tugas akhir.
                            Pengguna dapat melakukan pencarian berdasarkan nama, NIM, atau tempat magang untuk menemukan data alumni tertentu.
                            Fitur ini bertujuan untuk mendukung pelacakan jejak karier alumni serta menjadi basis data yang berguna dalam evaluasi dan pengembangan kurikulum kampus berbasis kebutuhan dunia kerja.
                        </p>

                        {/* Table Responsive */}
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white border border-gray-200 text-xs sm:text-sm">
                                <thead>
                                    <tr className="bg-gray-100 text-left">
                                        <th className="py-2 px-3 sm:px-4 border-b">No</th>
                                        <th className="py-2 px-3 sm:px-4 border-b">Nama</th>
                                        <th className="py-2 px-3 sm:px-4 border-b">NIM</th>
                                        <th className="py-2 px-3 sm:px-4 border-b">Tempat Magang</th>
                                        <th className="py-2 px-3 sm:px-4 border-b">Judul Magang</th>
                                        <th className="py-2 px-3 sm:px-4 border-b">Judul Tugas Akhir</th>
                                        <th className="py-2 px-3 sm:px-4 border-b">Tahun Lulus</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {daftarAlumni.data.length > 0 ? (
                                        daftarAlumni.data.map((alumni, index) => (
                                            <tr key={alumni.id} className="hover:bg-gray-50">
                                                <td className="py-2 px-3 sm:px-4 border-b">{alumni.id}</td>
                                                <td className="py-2 px-3 sm:px-4 border-b">{alumni.nama || '-'}</td>
                                                <td className="py-2 px-3 sm:px-4 border-b">{alumni.nim || '-'}</td>
                                                <td className="py-2 px-3 sm:px-4 border-b">{alumni.tempat_magang || '-'}</td>
                                                <td className="py-2 px-3 sm:px-4 border-b">{alumni.judul_magang || '-'}</td>
                                                <td className="py-2 px-3 sm:px-4 border-b">{alumni.judul_tugas_akhir || '-'}</td>
                                                <td className="py-2 px-3 sm:px-4 border-b">{alumni.tahun_lulus || '-'}</td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="7" className="text-center py-4 text-gray-500">
                                                Data alumni tidak tersedia.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>

                        {/* Pagination */}
                        <div className="flex flex-col sm:flex-row justify-center sm:justify-end py-3 gap-2 sm:gap-4">
                            <SecondaryButton
                                onClick={() => handlePageChange(daftarAlumni.prev_page_url)}
                                disabled={!daftarAlumni.prev_page_url}
                                className="text-xs sm:text-sm"
                            >
                                Previous
                            </SecondaryButton>

                            <span className="text-gray-700 self-center text-xs sm:text-sm">
                                Page {daftarAlumni.current_page} of {daftarAlumni.last_page}
                            </span>

                            <SecondaryButton
                                onClick={() => handlePageChange(daftarAlumni.next_page_url)}
                                disabled={!daftarAlumni.next_page_url}
                                className="text-xs sm:text-sm"
                            >
                                Next
                            </SecondaryButton>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
