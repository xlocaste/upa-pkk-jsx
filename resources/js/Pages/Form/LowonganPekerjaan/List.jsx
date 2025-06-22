import React, { useState } from 'react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head, Link, router } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import PrimaryButton from '@/Components/PrimaryButton';

export default function LowonganList({ lowonganKerja, filters }) {
    const [keyword, setKeyword] = useState(filters?.keyword || '');

    const handleSearch = () => {
        router.get(route('form.lowongan-pekerjaan.list'), { keyword }, { preserveState: true });
    };

    return (
        <DashboardLayout>
            <Head title="Lowongan Pekerjaan" />
            <div className="py-8">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-md sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className='flex items-center mb-4 justify-between bg-gradient-to-r from-blue-300 via-blue-50 to-white rounded-md p-2'>
                                <div className='flex items-center space-x-4'>
                                    <ApplicationLogo />
                                    <p className='font-bold text-gray-700 text-xl'>UPA-PKK JOB HUNTER</p>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <input
                                        type="text"
                                        value={keyword}
                                        onChange={(e) => setKeyword(e.target.value)}
                                        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                                        placeholder="Cari judul, deskripsi, kontak..."
                                        className="border border-gray-300 rounded-md px-3 py-1 w-full md:w-80 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                                    <PrimaryButton onClick={handleSearch}>
                                        Cari
                                    </PrimaryButton>
                                </div>
                            </div>

                            <p className="text-sm text-gray-600 mb-4">
                                Halaman ini menyajikan berbagai informasi lowongan pekerjaan yang dapat diakses oleh mahasiswa dan alumni Politeknik Negeri Sambas (Poltesa).
                                Melalui sistem ini, UPA-PKK berperan aktif dalam menghubungkan lulusan dengan dunia industri dan dunia usaha.
                                Pengguna dapat mencari dan melihat detail lowongan kerja, termasuk informasi deskripsi pekerjaan dan kontak yang dapat dihubungi.
                                Fitur pencarian memudahkan pencocokan peluang kerja dengan minat dan keahlian pengguna.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {lowonganKerja.length > 0 ? (
                                    lowonganKerja.map((lowongan) => (
                                        <Link
                                            key={lowongan.id}
                                            href={route('form.lowongan-pekerjaan.detail', lowongan.id)}
                                            className="block"
                                        >
                                            <div className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-md transition p-4 flex flex-col justify-between hover:bg-gray-50">
                                                <div>
                                                    {lowongan.image ? (
                                                        <img
                                                            src={`/storage/${lowongan.image}`}
                                                            alt="Gambar Lowongan"
                                                            className="w-full h-64 object-cover rounded"
                                                        />
                                                    ) : (
                                                        <div className="text-center text-gray-400 italic h-64 flex items-center justify-center border rounded">
                                                            Tidak ada gambar
                                                        </div>
                                                    )}
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-semibold text-gray-800 my-2">
                                                        {lowongan.judul_lowongan_kerja}
                                                    </h3>
                                                    <p className="text-gray-700 text-sm mb-2 truncate">
                                                        {lowongan.deskripsi}
                                                    </p>
                                                    <p className="text-gray-600 text-sm mb-4">
                                                        Kontak: {lowongan.kontak}
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    ))
                                ) : (
                                    <div className="col-span-full text-center text-gray-500 py-8">
                                        Data lowongan tidak tersedia.
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
