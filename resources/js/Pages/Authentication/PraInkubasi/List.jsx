import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import { FaTrash } from "react-icons/fa6";
import { FaEye, FaRegEdit } from "react-icons/fa";
import ApplicationLogo from '@/Components/ApplicationLogo';
import SecondaryButton from '@/Components/SecondaryButton';
import Import from './Import';

export default function PraInkubasiList({ praInkubasi,filters }) {
    const [showImport, setShowImport] = useState(false);
    const [keyword, setKeyword] = useState(filters?.keyword || '');

    const handleSearch = (e) => {
        e.preventDefault();
        router.get(route('authentication.pra-inkubasi.search'), { keyword }, {
            preserveState: true,
            replace: true,
        });
    };

    const handlePageChange = (url) => {
        if (url) {
            router.visit(url);
        }
    };

    return (
        <AuthenticatedLayout>
            <Head title="Pra-Inkubasi" />
            <div className="py-8 overflow-hidden">
                <div className="mx-auto overflow-hidden max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-md sm:rounded-lg">
                        <div className="p-6 py-3 text-gray-900">
                            <div className='flex items-center space-x-4 bg-gradient-to-r from-blue-300 via-blue-50 to-white rounded-md p-2'>
                                <ApplicationLogo />
                                <p className='font-bold text-gray-700 text-xl'>UPA-PKK PRA INKUBASI</p>
                            </div>
                            <div className='flex justify-between m-4 mx-0'>
                                <form onSubmit={handleSearch} className="flex gap-2">
                                    <input
                                        type="text"
                                        value={keyword}
                                        onChange={(e) => setKeyword(e.target.value)}
                                        placeholder="Cari Pra Inkubasi..."
                                        className="border pr-24 py-1 rounded"
                                    />
                                    <PrimaryButton type="submit" className="text-sm">Cari</PrimaryButton>
                                </form>
                                <div className='flex items-center gap-4'>
                                    <PrimaryButton
                                        className="bg-green-600 hover:bg-green-800"
                                        onClick={() => setShowImport(true)}
                                        >
                                        + IMPORT EXCEL
                                    </PrimaryButton>
                                    <PrimaryButton>
                                        <Link href={route('authentication.pra-inkubasi.create')}>
                                            + TAMBAH PRA INKUBASI
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
                                        <th className="py-2 px-4 border-b">Nama Ketua Tim</th>
                                        <th className="py-2 px-4 border-b">Judul Proposal</th>
                                        <th className="py-2 px-4 border-b">Dosen Pembimbing</th>
                                        <th className="py-2 px-4 border-b">Usulan Anggaran</th>
                                        <th className="py-2 px-4 border-b">No WA</th>
                                        <th className="py-2 px-4 border-b">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {praInkubasi.data.length > 0 ? (
                                        praInkubasi.data.map((item) => (
                                            <tr key={item.id} className="hover:bg-gray-50">
                                                <td className="py-2 px-4 border-b">{item.nama_ketua_tim}</td>
                                                <td className="py-2 px-4 border-b">{item.judul_proposal}</td>
                                                <td className="py-2 px-4 border-b">{item.dosen_pembimbing}</td>
                                                <td className="py-2 px-4 border-b">{item.usulan_anggaran}</td>
                                                <td className="py-2 px-4 border-b">{item.no_wa}</td>
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
                                                                if (confirm('Yakin ingin menghapus data ini?')) {
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
                                            <td colSpan="9" className="text-center py-4 text-gray-500">
                                                Data pra-inkubasi tidak tersedia.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                            <div className="flex justify-end py-2 gap-4">
                                <SecondaryButton
                                    onClick={() => handlePageChange(praInkubasi.prev_page_url)}
                                    disabled={!praInkubasi.prev_page_url}
                                    className='text-xs'
                                >
                                    Previous
                                </SecondaryButton>

                                <span className="text-gray-700 self-center text-xs">
                                    Page {praInkubasi.current_page} of {praInkubasi.last_page}
                                </span>

                                <SecondaryButton
                                    onClick={() => handlePageChange(praInkubasi.next_page_url)}
                                    disabled={!praInkubasi.next_page_url}
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
