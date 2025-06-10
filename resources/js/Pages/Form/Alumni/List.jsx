import React from 'react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';

export default function AlumniList({ daftarAlumni }) {
    return (
        <DashboardLayout>
            <Head title="Alumni" />
            <div className="py-8">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-md sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className='flex items-center mb-4 space-x-4 bg-gradient-to-r from-blue-300 via-blue-50 to-white rounded-md p-2'>
                                <ApplicationLogo />
                                <p className='font-bold text-gray-700 text-xl'>UPA-PKK ALUMNI</p>
                            </div>
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
                                    {daftarAlumni.length > 0 ? (
                                        daftarAlumni.map((alumni, index) => (
                                            <tr key={alumni.id} className="hover:bg-gray-50">
                                                <td className="py-2 px-4 border-b">{index + 1}</td>
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
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
