import React from 'react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head } from '@inertiajs/react';

export default function InkubasiList({ Inkubasi }) {
    return (
        <DashboardLayout>
            <Head title="Inkubasi" />
            <div className="py-8">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-md sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <table className="min-w-full bg-white border border-gray-200">
                                <thead>
                                    <tr className="bg-gray-100 text-left">
                                        <th className="py-2 px-4 border-b">No</th>
                                        <th className="py-2 px-4 border-b">Nama Tenant</th>
                                        <th className="py-2 px-4 border-b">Bidang Fokus</th>
                                        <th className="py-2 px-4 border-b">Tahun Inkubasi</th>
                                        <th className="py-2 px-4 border-b">Tahun Exit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Inkubasi.length > 0 ? (
                                        Inkubasi.map((item, index) => (
                                            <tr key={item.id} className="hover:bg-gray-50">
                                                <td className="py-2 px-4 border-b">{index + 1}</td>
                                                <td className="py-2 px-4 border-b">{item.nama_tenant}</td>
                                                <td className="py-2 px-4 border-b">{item.bidang_fokus_tenant}</td>
                                                <td className="py-2 px-4 border-b">{item.tahun_inkubasi_tenant}</td>
                                                <td className="py-2 px-4 border-b">{item.tahun_exit_tenant}</td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="5" className="text-center py-4 text-gray-500">
                                                Data inkubasi tidak tersedia.
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
