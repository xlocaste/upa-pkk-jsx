import React from 'react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';

export default function InkubasiList({ daftarKSI }) {
    return (
        <DashboardLayout>
            <Head title="Kerja Sama Industri" />
            <div className="py-8">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-md sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className='flex items-center mb-4 space-x-4 bg-gradient-to-r from-blue-300 via-blue-50 to-white rounded-md p-2'>
                                <ApplicationLogo />
                                <p className='font-bold text-gray-700 text-xl'>UPA-PKK KERJA SAMA INDUSTRI</p>
                            </div>
                            <table className="min-w-full bg-white border border-gray-200">
                                <thead>
                                    <tr className="bg-gray-100 text-left">
                                        <th className="py-2 px-4 border-b">No</th>
                                        <th className="py-2 px-4 border-b">Nama Tenant</th>
                                        <th className="py-2 px-4 border-b">Bidang Fokus</th>
                                        <th className="py-2 px-4 border-b">Tahun Kerja Sama Industri</th>
                                        <th className="py-2 px-4 border-b">Tahun Exit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {daftarKSI.length > 0 ? (
                                        daftarKSI.map((item, index) => (
                                            <tr key={item.id} className="hover:bg-gray-50">
                                                <td className="py-2 px-4 border-b">{index + 1}</td>
                                                <td className="py-2 px-4 border-b">{item.nama_ksi}</td>
                                                <td className="py-2 px-4 border-b">{item.bidang_fokus_ksi}</td>
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
        </DashboardLayout>
    );
}
