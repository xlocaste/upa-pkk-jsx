import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import { FaTrash } from "react-icons/fa6";
import { FaEye, FaRegEdit } from "react-icons/fa";

export default function AlumniList({ daftarAlumni }) {
    return (
        <AuthenticatedLayout>
            <Head title="Alumni" />
            <div className="py-8">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-md sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className='flex justify-end m-4'>
                                <PrimaryButton>
                                    <Link href={route('authentication.alumni.create')}>
                                        + TAMBAH ALUMNI
                                    </Link>
                                </PrimaryButton>
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
                                        <th className="py-2 px-4 border-b">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {daftarAlumni.length > 0 ? (
                                        daftarAlumni.map((alumni, index) => (
                                            <tr key={alumni.id} className="hover:bg-gray-50">
                                                <td className="py-2 px-4 border-b">{index + 1}</td>
                                                <td className="py-2 px-4 border-b">{alumni.mahasiswa?.nama || '-'}</td>
                                                <td className="py-2 px-4 border-b">{alumni.mahasiswa?.nim || '-'}</td>
                                                <td className="py-2 px-4 border-b">{alumni.tempat_magang}</td>
                                                <td className="py-2 px-4 border-b">{alumni.judul_magang}</td>
                                                <td className="py-2 px-4 border-b">{alumni.judul_tugas_akhir}</td>
                                                <td className="py-2 px-4 border-b">{alumni.tahun_lulus}</td>
                                                <td className="px-4 py-1 border-b text-center">
                                                    <div className='flex gap-2 justify-center'>
                                                        <Link
                                                            href={route('authentication.alumni.show', alumni.id)}
                                                            className='text-blue-400'
                                                        >
                                                            <FaEye />
                                                        </Link>
                                                        <Link
                                                            href={route('authentication.alumni.edit', alumni.id)}
                                                            className='text-yellow-500'
                                                        >
                                                            <FaRegEdit />
                                                        </Link>
                                                        <Link
                                                            as="button"
                                                            className="text-red-400"
                                                            onClick={() => {
                                                                if (confirm('Yakin ingin menghapus project ini?')) {
                                                                    router.delete(route('authentication.alumni.destroy', alumni.id));
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
        </AuthenticatedLayout>
    );
}
