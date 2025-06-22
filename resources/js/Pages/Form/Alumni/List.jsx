import React, { useState } from 'react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head, router } from '@inertiajs/react'; // ← pastikan `router` diimpor
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
            <div className="py-8">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-md sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className='flex items-center mb-4 justify-between bg-gradient-to-r from-blue-300 via-blue-50 to-white rounded-md p-2'>
                                <div className='flex items-center space-x-4'>
                                    <ApplicationLogo />
                                    <p className='font-bold text-gray-700 text-xl'>UPA-PKK ALUMNI</p>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <input
                                        type="text"
                                        value={keyword}
                                        onChange={(e) => setKeyword(e.target.value)}
                                        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                                        placeholder="Cari nama, NIM, tempat magang..."
                                        className="border border-gray-300 rounded-md px-3 py-1 w-full md:w-80 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        />
                                    <PrimaryButton onClick={handleSearch}>
                                        Cari
                                    </PrimaryButton>
                                </div>
                            </div>
                            <p className="text-sm text-gray-600 mb-4">
                                Halaman ini menampilkan daftar data alumni Politeknik Negeri Sambas (Poltesa) yang telah mengikuti program magang dan menyelesaikan tugas akhir.
                                Pengguna dapat melakukan pencarian berdasarkan nama, NIM, atau tempat magang untuk menemukan data alumni tertentu.
                                Fitur ini bertujuan untuk mendukung pelacakan jejak karier alumni serta menjadi basis data yang berguna dalam evaluasi dan pengembangan kurikulum kampus berbasis kebutuhan dunia kerja.
                            </p>

                            <table className="min-w-full bg-white border border-gray-200">
                                <thead>
                                    <tr className="bg-gray-100 text-left">
                                        <th className="py-2 px-4 border-b">No</th>
                                        <th className="py-2 px-4 border-b">Nama</th>
                                        <th className="py-2 px-4 border-b">NIM</th>
                                        <th className="py-2 px-4 border-b">Tempat Magang</th>
                                        <th className="py-2 px-4 border-b">Judul Magang</th>
                                        <th className="py-2 px-4 border-b">Judul Tugas Akhir</th>
                                        <th className="py-2 px-4 border-b">Tahun Lulus</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {daftarAlumni.data.length > 0 ? (
                                        daftarAlumni.data.map((alumni, index) => (
                                            <tr key={alumni.id} className="hover:bg-gray-50">
                                                <td className="py-2 px-4 border-b">{alumni.id}</td>
                                                <td className="py-2 px-4 border-b">{alumni.nama || '-'}</td>
                                                <td className="py-2 px-4 border-b">{alumni.nim || '-'}</td>
                                                <td className="py-2 px-4 border-b">{alumni.tempat_magang || '-'}</td>
                                                <td className="py-2 px-4 border-b">{alumni.judul_magang || '-'}</td>
                                                <td className="py-2 px-4 border-b">{alumni.judul_tugas_akhir || '-'}</td>
                                                <td className="py-2 px-4 border-b">{alumni.tahun_lulus || '-'}</td>
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
                            <div className="flex justify-end py-2 gap-4">
                                <SecondaryButton
                                    onClick={() => handlePageChange(daftarAlumni.prev_page_url)}
                                    disabled={!daftarAlumni.prev_page_url}
                                    className="text-xs"
                                >
                                    Previous
                                </SecondaryButton>

                                <span className="text-gray-700 self-center text-xs">
                                    Page {daftarAlumni.current_page} of {daftarAlumni.last_page}
                                </span>

                                <SecondaryButton
                                    onClick={() => handlePageChange(daftarAlumni.next_page_url)}
                                    disabled={!daftarAlumni.next_page_url}
                                    className="text-xs"
                                >
                                    Next
                                </SecondaryButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
