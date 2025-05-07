import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import { FaTrash } from "react-icons/fa6";
import { FaEye, FaRegEdit } from "react-icons/fa";
import ApplicationLogo from '@/Components/ApplicationLogo';

export default function LowonganList({ lowonganKerja }) {
    return (
        <AuthenticatedLayout>
            <Head title="Job Hunter" />
            <div className="py-8">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-md sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className='flex justify-between m-4 ml-0'>
                                <div className='flex items-center space-x-4 bg-gradient-to-r from-blue-300 via-blue-50 to-white rounded-md p-2'>
                                    <ApplicationLogo />
                                    <p className='font-bold uppercase text-gray-700 text-xl'>UPA-PKK Job Hunter</p>
                                </div>
                                <div className='flex items-center'>
                                    <PrimaryButton>
                                        <Link href={route('authentication.lowongan-pekerjaan.create')}>
                                            + TAMBAH Job Hunter
                                        </Link>
                                    </PrimaryButton>
                                </div>
                            </div>
                            <table className="min-w-full bg-white border border-gray-200">
                                <thead>
                                    <tr className="bg-gray-100 text-left">
                                        <th className="py-2 px-4 border-b">No</th>
                                        <th className="py-2 px-4 border-b">Judul Lowongan Pekerjaan</th>
                                        <th className="py-2 px-4 border-b">Deskripsi</th>
                                        <th className="py-2 px-4 border-b">Kontak</th>
                                        <th className="py-2 px-4 border-b">Gambar</th>
                                        <th className="py-2 px-4 border-b">Action</th>
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
                                                <td className="px-4 py-1 border-b text-center">
                                                    <div className='flex gap-2 justify-center'>
                                                        <Link
                                                            href={route('authentication.lowongan-pekerjaan.show', lowongan.id)}
                                                            className='text-blue-400'
                                                        >
                                                            <FaEye />
                                                        </Link>
                                                        <Link
                                                            href={route('authentication.lowongan-pekerjaan.edit', lowongan.id)}
                                                            className='text-yellow-500'
                                                        >
                                                            <FaRegEdit />
                                                        </Link>
                                                        <Link
                                                            as="button"
                                                            className="text-red-400"
                                                            onClick={() => {
                                                                if (confirm('Yakin ingin menghapus project ini?')) {
                                                                    router.delete(route('authentication.lowongan-pekerjaan.destroy', lowongan.id));
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
        </AuthenticatedLayout>
    );
}
