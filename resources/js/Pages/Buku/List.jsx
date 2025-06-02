import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Index({ buku, auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Daftar Buku" />

            <div className="py-8">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white shadow-sm sm:rounded-lg p-6">
                        <div className="flex justify-between mb-4">
                            <h2 className="text-2xl font-bold">Daftar Buku</h2>
                            <Link href="#" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded">
                                Tambah Buku
                            </Link>
                        </div>

                        <table className="min-w-full border border-gray-300">
                            <thead>
                                <tr className="bg-gray-100 text-left">
                                    <th className="border px-4 py-2">#</th>
                                    <th className="border px-4 py-2">Judul</th>
                                    <th className="border px-4 py-2">Deskripsi</th>
                                    <th className="border px-4 py-2">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {buku.length === 0 ? (
                                    <tr>
                                        <td colSpan="4" className="text-center py-4">Tidak ada data buku.</td>
                                    </tr>
                                ) : (
                                    buku.map((item, index) => (
                                        <tr key={item.id} className="hover:bg-gray-50">
                                            <td className="border px-4 py-2">{index + 1}</td>
                                            <td className="border px-4 py-2">{item.judul || '-'}</td>
                                            <td className="border px-4 py-2">{item.deskripsi || '-'}</td>
                                            <td className="border px-4 py-2">
                                                <div className="flex gap-2">
                                                    <Link href="#" className="text-blue-600 hover:underline">Edit</Link>
                                                    <Link href="#" className="text-red-600 hover:underline">Hapus</Link>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
