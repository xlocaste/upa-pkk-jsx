import ApplicationLogo from '@/Components/ApplicationLogo';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import React from 'react';

export default function Update({ MiniIndustriKampus }) {
    const { data, setData, post, processing, errors } = useForm({
        _method: 'put',
        nama_mik: MiniIndustriKampus.nama_mik || '',
        bidang_fokus_mik: MiniIndustriKampus.bidang_fokus_mik || '',
        tahun_mik: MiniIndustriKampus.tahun_mik || '',
        tahun_exit_mik: MiniIndustriKampus.tahun_exit_mik || '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('authentication.mini-industri-kampus.update', MiniIndustriKampus.id));
    };

    return (
        <AuthenticatedLayout>
            <Head title="Update Mini Industri Kampus" />
            <div className="py-8">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-md sm:rounded-lg">
                        <div className="flex items-center space-x-4 bg-gradient-to-r from-blue-300 via-blue-50 to-white rounded-t-md p-2 pl-6 mb-4">
                            <ApplicationLogo />
                            <p className="font-bold text-gray-700 text-xl">UPA-PKK MINI INDUSTRI KAMPUS</p>
                        </div>
                        <div className="p-6 text-gray-900">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="flex space-x-8">
                                    <div className="w-1/2">
                                        <label className="block text-sm font-medium">Nama Mini Industri Kampus</label>
                                        <input
                                            type="text"
                                            value={data.nama_mik}
                                            onChange={(e) => setData('nama_mik', e.target.value)}
                                            className="w-full border border-gray-300 rounded px-3 py-2"
                                        />
                                        {errors.nama_mik && <div className="text-red-500 text-sm">{errors.nama_mik}</div>}
                                    </div>

                                    <div className="w-1/2">
                                        <label className="block text-sm font-medium">Bidang Fokus Mini Industri Kampus</label>
                                        <input
                                            type="text"
                                            value={data.bidang_fokus_mik}
                                            onChange={(e) => setData('bidang_fokus_mik', e.target.value)}
                                            className="w-full border border-gray-300 rounded px-3 py-2"
                                        />
                                        {errors.bidang_fokus_mik && <div className="text-red-500 text-sm">{errors.bidang_fokus_mik}</div>}
                                    </div>
                                </div>

                                <div className="flex space-x-8">
                                    <div className="w-1/2">
                                        <label className="block text-sm font-medium">Tahun Mini Industri Kampus</label>
                                        <input
                                            type="date"
                                            value={data.tahun_mik}
                                            onChange={(e) => setData('tahun_mik', e.target.value)}
                                            className="w-full border border-gray-300 rounded px-3 py-2"
                                        />
                                        {errors.tahun_mik && <div className="text-red-500 text-sm">{errors.tahun_mik}</div>}
                                    </div>

                                    <div className="w-1/2">
                                        <label className="block text-sm font-medium">Tahun Exit</label>
                                        <input
                                            type="date"
                                            value={data.tahun_exit_mik}
                                            onChange={(e) => setData('tahun_exit_mik', e.target.value)}
                                            className="w-full border border-gray-300 rounded px-3 py-2"
                                        />
                                        {errors.tahun_exit_mik && <div className="text-red-500 text-sm">{errors.tahun_exit_mik}</div>}
                                    </div>
                                </div>

                                <div className="flex justify-end space-x-4 pt-4">
                                    <SecondaryButton>
                                        <Link href={route('authentication.mini-industri-kampus.index')}>Kembali</Link>
                                    </SecondaryButton>
                                    <PrimaryButton type="submit" disabled={processing}>
                                        Update
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
