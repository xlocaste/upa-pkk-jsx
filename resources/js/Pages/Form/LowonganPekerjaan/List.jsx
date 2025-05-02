import React from 'react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head, Link } from '@inertiajs/react';

export default function LowonganList({ lowonganKerja }) {
    return (
        <DashboardLayout>
            <Head title="Lowongan Pekerjaan" />
            <div className="py-8">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-md sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {lowonganKerja.length > 0 ? (
                                    lowonganKerja.map((lowongan, index) => (
                                        <Link
                                            href={route('form.lowongan-pekerjaan.detail', lowongan.id)}
                                            className="block"
                                        >
                                            <div
                                                key={lowongan.id}
                                                className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-md transition p-4 flex flex-col justify-between hover:bg-gray-50"
                                            >
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
                                                    <p className="text-gray-700 text-sm mb-2">
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
