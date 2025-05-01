import React from 'react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head } from '@inertiajs/react';

export default function LowonganList({ lowonganKerja }) {
    return (
        <DashboardLayout>
            <Head title="Lowongan Pekerjaan" />
            <div className="py-8">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-md sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <table className="min-w-full bg-white border border-gray-200">
                                <thead>
                                    <tr className="bg-gray-100 text-left">
                                        <th className="py-2 px-4 border-b">No</th>
                                        <th className="py-2 px-4 border-b">Judul Lowongan</th>
                                        <th className="py-2 px-4 border-b">Deskripsi</th>
                                        <th className="py-2 px-4 border-b">Kontak</th>
                                        <th className="py-2 px-4 border-b">Gambar</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {lowonganKerja.length > 0 ? (
                                        lowonganKerja.map((lowongan, index) => (
                                            <tr key={lowongan.id} className="hover:bg-gray-50">
                                                <td className="py-2 px-4 border-b">{index + 1}</td>
                                                <td className="py-2 px-4 border-b">{lowongan.judul_lowongan_kerja}</td>
                                                <td className="py-2 px-4 border-b">{lowongan.deskripsi}</td>
                                                <td className="py-2 px-4 border-b">{lowongan.kontak}</td>
                                                <td className="py-2 px-4 border-b">
                                                    {lowongan.image ? (
                                                        <img
                                                            src={`/storage/${lowongan.image}`}
                                                            alt="Gambar Lowongan"
                                                            className="h-16 w-16 object-cover rounded"
                                                        />
                                                    ) : (
                                                        '-'
                                                    )}
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="5" className="text-center py-4 text-gray-500">
                                                Data lowongan tidak tersedia.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
