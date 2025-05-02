import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import { FaTrash } from "react-icons/fa6";
import { FaEye, FaRegEdit } from "react-icons/fa";

export default function PraInkubasiList({ praInkubasi }) {
    return (
        <AuthenticatedLayout>
            <Head title="Pra-Inkubasi" />
            <div className="py-8">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-md sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className='flex justify-end m-4'>
                                <PrimaryButton>
                                    <Link href={route('authentication.pra-inkubasi.create')}>
                                        + TAMBAH INKUBASI
                                    </Link>
                                </PrimaryButton>
                            </div>
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
                                        <th className="py-2 px-4 border-b">Action</th>
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
                                                <td className="px-4 py-1 border-b text-center">
                                                    <div className='flex gap-2 justify-center'>
                                                        <Link
                                                            href={route('authentication.pra-inkubasi.show', item.id)}
                                                            className='text-blue-400'
                                                        >
                                                            <FaEye />
                                                        </Link>
                                                        <Link
                                                            href={route('authentication.pra-inkubasi.edit', item.id)}
                                                            className='text-yellow-500'
                                                        >
                                                            <FaRegEdit />
                                                        </Link>
                                                        <Link
                                                            as="button"
                                                            className="text-red-400"
                                                            onClick={() => {
                                                                if (confirm('Yakin ingin menghapus project ini?')) {
                                                                    router.delete(route('authentication.pra-inkubasi.destroy', item.id));
                                                                }
                                                            }}
                                                        >
                                                            <FaTrash />
                                                        </Link>
                                                    </div>
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
        </AuthenticatedLayout>
    );
}
