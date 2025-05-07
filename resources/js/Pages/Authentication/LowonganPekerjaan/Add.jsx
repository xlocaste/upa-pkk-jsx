import ApplicationLogo from '@/Components/ApplicationLogo';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import React from 'react';

export default function AddLowonganKerja() {
    const { data, setData, post, processing, errors } = useForm({
        judul_lowongan_kerja: '',
        deskripsi: '',
        kontak: '',
        image: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('authentication.lowongan-pekerjaan.store'), {
            onSuccess: () => reset(),
        });
    };

    return (
        <AuthenticatedLayout>
            <Head title="Job Hunter" />
            <div className="py-8">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-md sm:rounded-lg">
                        <div className='flex items-center space-x-4 bg-gradient-to-r from-blue-300 via-blue-50 to-white rounded-t-md p-2 pl-6 mb-4'>
                            <ApplicationLogo />
                            <p className='font-bold text-gray-700 text-xl uppercase'>UPA-PKK job hunter</p>
                        </div>
                        <div className="p-6 text-gray-900">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className='flex w h-full space-x-8'>
                                    <div className='w-1/2'>
                                        <label className="block text-sm font-medium">Judul Lowongan Pekerjaan</label>
                                        <input
                                            type="text"
                                            value={data.judul_lowongan_kerja}
                                            onChange={(e) => setData('judul_lowongan_kerja', e.target.value)}
                                            className="w-full border border-gray-300 rounded px-3 py-2"
                                        />
                                        {errors.judul_lowongan_kerja && <div className="text-red-500 text-sm">{errors.judul_lowongan_kerja}</div>}
                                    </div>

                                    <div className='w-1/2'>
                                        <label className="block text-sm font-medium">Kontak</label>
                                        <input
                                            type="text"
                                            value={data.kontak}
                                            onChange={(e) => setData('kontak', e.target.value)}
                                            className="w-full border border-gray-300 rounded px-3 py-2"
                                        />
                                        {errors.kontak && <div className="text-red-500 text-sm">{errors.kontak}</div>}
                                    </div>
                                </div>

                                <div className='flex w h-full space-x-8'>
                                    <div className='w-1/2'>
                                        <label className="block text-sm font-medium">Deskripsi</label>
                                        <textarea
                                            value={data.deskripsi}
                                            onChange={(e) => setData('deskripsi', e.target.value)}
                                            className="w-full border border-gray-300 rounded px-3 py-2"
                                            rows={4}
                                        />
                                        {errors.deskripsi && <div className="text-red-500 text-sm">{errors.deskripsi}</div>}
                                    </div>

                                    <div className='w-1/2'>
                                        <label className="block text-sm font-medium">Upload Gambar</label>
                                        <input
                                            type="file"
                                            onChange={(e) => setData('image', e.target.files[0])}
                                            className="w-full border border-gray-300 rounded px-3 py-2"
                                        />
                                        {errors.image && <div className="text-red-500 text-sm">{errors.image}</div>}
                                    </div>
                                </div>

                                <div className="flex justify-end space-x-4">
                                    <SecondaryButton>
                                        <Link href={route('authentication.lowongan-pekerjaan.index')}>
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
