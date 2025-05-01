import React from 'react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head } from '@inertiajs/react';

export default function PraInkubasiList({ praInkubasi }) {
    return (
        <DashboardLayout>
            <Head title="Pra-Inkubasi" />
            <div className="py-8">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-md sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <table className="min-w-full bg-white border border-gray-200">
                                <thead>
                                    <tr className="bg-gray-100 text-left">
                                        <th className="py-2 px-4 border-b">No</th>
                                        <th className="py-2 px-4 border-b">Nama Usaha</th>
                                        <th className="py-2 px-4 border-b">Program Studi</th>
                                        <th className="py-2 px-4 border-b">Kelas</th>
                                        <th className="py-2 px-4 border-b">Semester</th>
                                        <th className="py-2 px-4 border-b">Brand Produk</th>
                                        <th className="py-2 px-4 border-b">Link</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {praInkubasi.length > 0 ? (
                                        praInkubasi.map((item, index) => (
                                            <tr key={item.id} className="hover:bg-gray-50">
                                                <td className="py-2 px-4 border-b">{index + 1}</td>
                                                <td className="py-2 px-4 border-b">{item.nama_usaha}</td>
                                                <td className="py-2 px-4 border-b">{item.prodi}</td>
                                                <td className="py-2 px-4 border-b">{item.kelas}</td>
                                                <td className="py-2 px-4 border-b">{item.semester}</td>
                                                <td className="py-2 px-4 border-b">{item.brand_produk}</td>
                                                <td className="py-2 px-4 border-b">
                                                    {item.link ? (
                                                        <a
                                                            href={item.link}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-blue-600 underline"
                                                        >
                                                            Lihat
                                                        </a>
                                                    ) : (
                                                        '-'
                                                    )}
                                                </td>
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
        </DashboardLayout>
    );
}
