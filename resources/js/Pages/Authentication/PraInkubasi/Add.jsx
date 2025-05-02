import ApplicationLogo from '@/Components/ApplicationLogo';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import React from 'react';

export default function Add() {
    const { data, setData, post, processing, errors } = useForm({
        nama_usaha: '',
        prodi: '',
        kelas: '',
        semester: '',
        brand_produk: '',
        link: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('authentication.pra-inkubasi.store'), {
            onSuccess: () => reset(),
        });
    };

    return (
        <AuthenticatedLayout>
            <Head title="Pra-Inkubasi" />
            <div className="py-8">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-md sm:rounded-lg">
                        <div className='flex items-center space-x-4 bg-gradient-to-r from-blue-300 via-blue-50 to-white rounded-t-md p-2 pl-6 mb-4'>
                            <ApplicationLogo />
                            <p className='font-bold text-gray-700 text-xl'>UPA-PKK PRA INKUBASI</p>
                        </div>
                        <div className="p-6 text-gray-900">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className='flex w h-full space-x-8'>
                                    <div className='w-1/2'>
                                        <label className="block text-sm font-medium">Nama Usaha</label>
                                        <input
                                            type="text"
                                            value={data.nama_usaha}
                                            onChange={(e) => setData('nama_usaha', e.target.value)}
                                            className="w-full border border-gray-300 rounded px-3 py-2"
                                        />
                                        {errors.nama_usaha && <div className="text-red-500 text-sm">{errors.nama_usaha}</div>}
                                    </div>

                                    <div className='w-1/2'>
                                        <label className="block text-sm font-medium">Program Studi</label>
                                        <input
                                            type="text"
                                            value={data.prodi}
                                            onChange={(e) => setData('prodi', e.target.value)}
                                            className="w-full border border-gray-300 rounded px-3 py-2"
                                        />
                                        {errors.prodi && <div className="text-red-500 text-sm">{errors.prodi}</div>}
                                    </div>
                                </div>

                                <div className='flex w h-full space-x-8'>
                                    <div className='w-1/2'>
                                        <label className="block text-sm font-medium">Kelas</label>
                                        <input
                                            type="text"
                                            value={data.kelas}
                                            onChange={(e) => setData('kelas', e.target.value)}
                                            className="w-full border border-gray-300 rounded px-3 py-2"
                                        />
                                        {errors.kelas && <div className="text-red-500 text-sm">{errors.kelas}</div>}
                                    </div>

                                    <div className='w-1/2'>
                                        <label className="block text-sm font-medium">Semester</label>
                                        <input
                                            type="number"
                                            min="1"
                                            value={data.semester}
                                            onChange={(e) => setData('semester', e.target.value)}
                                            className="w-full border border-gray-300 rounded px-3 py-2"
                                        />
                                        {errors.semester && <div className="text-red-500 text-sm">{errors.semester}</div>}
                                    </div>
                                </div>

                                <div className='flex w h-full space-x-8'>
                                    <div className='w-1/2'>
                                        <label className="block text-sm font-medium">Brand Produk</label>
                                        <input
                                            type="text"
                                            value={data.brand_produk}
                                            onChange={(e) => setData('brand_produk', e.target.value)}
                                            className="w-full border border-gray-300 rounded px-3 py-2"
                                        />
                                        {errors.brand_produk && <div className="text-red-500 text-sm">{errors.brand_produk}</div>}
                                    </div>

                                    <div className='w-1/2'>
                                        <label className="block text-sm font-medium">Link Usaha</label>
                                        <input
                                            type="url"
                                            value={data.link}
                                            onChange={(e) => setData('link', e.target.value)}
                                            className="w-full border border-gray-300 rounded px-3 py-2"
                                        />
                                        {errors.link && <div className="text-red-500 text-sm">{errors.link}</div>}
                                    </div>
                                </div>

                                <div className="flex justify-end space-x-4">
                                    <SecondaryButton>
                                        <Link href={route('authentication.pra-inkubasi.index')}>
                                            KEMBALI
                                        </Link>
                                    </SecondaryButton>
                                    <PrimaryButton
                                        type="submit"
                                        disabled={processing}
                                    >
                                        Simpan
                                    </PrimaryButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
