import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import { FaTrash } from "react-icons/fa6";
import { FaEye, FaRegEdit } from "react-icons/fa";
import ApplicationLogo from '@/Components/ApplicationLogo';
import Import from './Import';
import SecondaryButton from '@/Components/SecondaryButton';

export default function MahasiswaList({ Mahasiswa, auth }) {
    const [showImport, setShowImport] = useState(false);

    const handlePageChange = (url) => {
        if (url) {
            router.visit(url);
        }
    };

    return (
        <AuthenticatedLayout>
            <Head title="Mahasiswa" />
            <div className="py-8">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-md sm:rounded-lg">
                        <div className="p-6 py-3 text-gray-900">
                            <div className='flex justify-between m-4 ml-0'>
                                <div className='flex items-center space-x-4 bg-gradient-to-r from-blue-300 via-blue-50 to-white rounded-md p-2'>
                                    <ApplicationLogo />
                                    <p className='font-bold text-gray-700 text-xl'>UPA-PKK MAHASISWA</p>
                                </div>
                                <div className='flex items-center gap-4'>
                                    <PrimaryButton
                                        className="bg-green-600 hover:bg-green-800"
                                        onClick={() => setShowImport(true)}
                                        >
                                        + IMPORT EXCEL
                                    </PrimaryButton>
                                    <PrimaryButton>
                                        <Link href={route('authentication.mahasiswa.create')}>
                                            + TAMBAH MAHASISWA
                                        </Link>
                                    </PrimaryButton>
                                </div>
                            </div>

                            {showImport && (
                                <div className="fixed inset-0 bg-black/50 backdrop-blur-md z-50 flex items-center justify-center">
                                <div className="bg-white/50 backdrop-blur-md p-6 rounded-lg shadow-lg w-full max-w-md relative">
                                    <button
                                    className="absolute top-2 right-4 font-bold text-gray-500 hover:text-red-600"
                                    onClick={() => setShowImport(false)}
                                    >
                                    ✕
                                    </button>
                                    <Import onClose={() => setShowImport(false)} />
                                </div>
                                </div>
                            )}

                            <table className="min-w-full bg-white border border-gray-200">
                                <thead>
                                    <tr className="bg-gray-100 text-left">
                                        <th className="py-2 px-4 border-b">No</th>
                                        <th className="py-2 px-4 border-b">Nama</th>
                                        <th className="py-2 px-4 border-b">NIM</th>
                                        <th className="py-2 px-4 border-b">Semester</th>
                                        <th className="py-2 px-4 border-b">IPK</th>
                                        <th className="py-2 px-4 border-b">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Mahasiswa.data.length > 0 ? (
                                        Mahasiswa.data.map((mhs, index) => (
                                            <tr key={mhs.id} className="hover:bg-gray-50">
                                                <td className="py-2 px-4 border-b">
                                                    {(Mahasiswa.current_page - 1) * Mahasiswa.per_page + index + 1}
                                                </td>
                                                <td className="py-2 px-4 border-b">{mhs.nama}</td>
                                                <td className="py-2 px-4 border-b">{mhs.nim}</td>
                                                <td className="py-2 px-4 border-b">{mhs.semester}</td>
                                                <td className="py-2 px-4 border-b">{mhs.ipk}</td>
                                                <td className="px-4 py-1 border-b text-center">
                                                    <div className='flex gap-2 justify-center'>
                                                        <Link
                                                            href={route('authentication.mahasiswa.show', mhs.id)}
                                                            className='text-blue-400'
                                                        >
                                                            <FaEye />
                                                        </Link>
                                                        <Link
                                                            href={route('authentication.mahasiswa.edit', mhs.id)}
                                                            className='text-yellow-500'
                                                        >
                                                            <FaRegEdit />
                                                        </Link>
                                                        <Link
                                                            as="button"
                                                            className="text-red-400"
                                                            onClick={() => {
                                                                if (confirm('Yakin ingin menghapus mahasiswa ini?')) {
                                                                    router.delete(route('authentication.mahasiswa.destroy', mhs.id));
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
                                            <td colSpan="6" className="text-center py-4 text-gray-500">
                                                Data mahasiswa tidak tersedia.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                            <div className="flex justify-end py-2 gap-4">
                                <SecondaryButton
                                    onClick={() => handlePageChange(Mahasiswa.prev_page_url)}
                                    disabled={!Mahasiswa.prev_page_url}
                                    className='text-xs'
                                >
                                    Previous
                                </SecondaryButton>

                                <span className="text-gray-700 self-center text-xs">
                                    Page {Mahasiswa.current_page} of {Mahasiswa.last_page}
                                </span>

                                <SecondaryButton
                                    onClick={() => handlePageChange(Mahasiswa.next_page_url)}
                                    disabled={!Mahasiswa.next_page_url}
                                    className='text-xs'
                                >
                                    Next
                                </SecondaryButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
