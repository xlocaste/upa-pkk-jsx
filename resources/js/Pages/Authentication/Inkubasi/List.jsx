import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import { FaTrash } from "react-icons/fa6";
import { FaEye, FaRegEdit } from "react-icons/fa";
import ApplicationLogo from '@/Components/ApplicationLogo';
import SecondaryButton from '@/Components/SecondaryButton';

export default function InkubasiList({ Inkubasi, filters }) {
    const [keyword, setKeyword] = useState(filters?.keyword || '');

    const handleSearch = (e) => {
        e.preventDefault();
        router.get(route('authentication.inkubasi.index'), { keyword }, {
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
            <Head title="Inkubasi" />
            <div className="py-8">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-md sm:rounded-lg">
                        <div className="p-6 py-3 text-gray-900">
                            <div className='flex items-center space-x-4 bg-gradient-to-r from-blue-300 via-blue-50 to-white rounded-md p-2'>
                                <ApplicationLogo />
                                <p className='font-bold text-gray-700 text-xl'>UPA-PKK INKUBASI</p>
                            </div>
                            <div className='flex justify-between m-4 ml-0'>
                                <form onSubmit={handleSearch} className="flex gap-2">
                                    <input
                                        type="text"
                                        value={keyword}
                                        onChange={(e) => setKeyword(e.target.value)}
                                        placeholder="Cari Inkubasi..."
                                        className="border pr-24 py-1 rounded"
                                    />
                                    <PrimaryButton type="submit" className="text-sm">Cari</PrimaryButton>
                                </form>
                                <div className='flex items-center'>
                                    <PrimaryButton>
                                        <Link href={route('authentication.inkubasi.create')}>
                                            + TAMBAH INKUBASI
                                        </Link>
                                    </PrimaryButton>
                                </div>
                            </div>
                            <table className="min-w-full bg-white border border-gray-200">
                                <thead>
                                    <tr className="bg-gray-100 text-left">
                                        <th className="py-2 px-4 border-b">No</th>
                                        <th className="py-2 px-4 border-b">Nama Tenant</th>
                                        <th className="py-2 px-4 border-b">Bidang Fokus</th>
                                        <th className="py-2 px-4 border-b">Tahun Inkubasi</th>
                                        <th className="py-2 px-4 border-b">Tahun Exit</th>
                                        <th className="py-2 px-4 border-b">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Inkubasi.data.length > 0 ? (
                                        Inkubasi.data.map((item, index) => (
                                            <tr key={item.id} className="hover:bg-gray-50">
                                                <td className="py-2 px-4 border-b">{index + 1}</td>
                                                <td className="py-2 px-4 border-b">{item.nama_tenant}</td>
                                                <td className="py-2 px-4 border-b">{item.bidang_fokus_tenant}</td>
                                                <td className="py-2 px-4 border-b">{item.tahun_inkubasi_tenant}</td>
                                                <td className="py-2 px-4 border-b">{item.tahun_exit_tenant}</td>
                                                <td className="px-4 py-1 border-b text-center">
                                                    <div className='flex gap-2 justify-center'>
                                                        <Link
                                                            href={route('authentication.inkubasi.show', item.id)}
                                                            className='text-blue-400'
                                                        >
                                                            <FaEye />
                                                        </Link>
                                                        <Link
                                                            href={route('authentication.inkubasi.edit', item.id)}
                                                            className='text-yellow-500'
                                                        >
                                                            <FaRegEdit />
                                                        </Link>
                                                        <Link
                                                            as="button"
                                                            className="text-red-400"
                                                            onClick={() => {
                                                                if (confirm('Yakin ingin menghapus project ini?')) {
                                                                    router.delete(route('authentication.inkubasi.destroy', item.id));
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
                                                Data inkubasi tidak tersedia.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                            <div className="flex justify-end py-2 gap-4">
                                <SecondaryButton
                                    onClick={() => handlePageChange(Inkubasi.prev_page_url)}
                                    disabled={!Inkubasi.prev_page_url}
                                    className='text-xs'
                                >
                                    Previous
                                </SecondaryButton>

                                <span className="text-gray-700 self-center text-xs">
                                    Page {Inkubasi.current_page} of {Inkubasi.last_page}
                                </span>

                                <SecondaryButton
                                    onClick={() => handlePageChange(Inkubasi.next_page_url)}
                                    disabled={!Inkubasi.next_page_url}
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
