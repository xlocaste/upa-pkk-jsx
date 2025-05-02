import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useForm } from '@inertiajs/react';
import React from 'react';

export default function Add() {
    const { data, setData, post, processing, errors } = useForm({
        nama_tenant: '',
        bidang_fokus_tenant: '',
        tahun_inkubasi_tenant: '',
        tahun_exit_tenant: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('authentication.inkubasi.store'), {
            onSuccess: () => reset(),
        });
    };

    return (
        <AuthenticatedLayout>
            <div className="py-8">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-md sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className='flex w h-full space-x-8'>
                                    <div className='w-1/2'>
                                        <label className="block text-sm font-medium">Nama Tenant</label>
                                        <input
                                            type="text"
                                            value={data.nama_tenant}
                                            onChange={(e) => setData('nama_tenant', e.target.value)}
                                            className="w-full border border-gray-300 rounded px-3 py-2"
                                        />
                                        {errors.nama_tenant && <div className="text-red-500 text-sm">{errors.nama_tenant}</div>}
                                    </div>

                                    <div className='w-1/2'>
                                        <label className="block text-sm font-medium">Bidang Fokus</label>
                                        <input
                                            type="text"
                                            value={data.bidang_fokus_tenant}
                                            onChange={(e) => setData('bidang_fokus_tenant', e.target.value)}
                                            className="w-full border border-gray-300 rounded px-3 py-2"
                                        />
                                        {errors.bidang_fokus_tenant && <div className="text-red-500 text-sm">{errors.bidang_fokus_tenant}</div>}
                                    </div>
                                </div>

                                <div className='flex w h-full space-x-8'>
                                    <div className='w-1/2'>
                                        <label className="block text-sm font-medium">Tahun Inkubasi</label>
                                        <input
                                            type="date"
                                            value={data.tahun_inkubasi_tenant}
                                            onChange={(e) => setData('tahun_inkubasi_tenant', e.target.value)}
                                            className="w-full border border-gray-300 rounded px-3 py-2"
                                        />
                                        {errors.tahun_inkubasi_tenant && <div className="text-red-500 text-sm">{errors.tahun_inkubasi_tenant}</div>}
                                    </div>

                                    <div className='w-1/2'>
                                        <label className="block text-sm font-medium">Tahun Exit</label>
                                        <input
                                            type="date"
                                            value={data.tahun_exit_tenant}
                                            onChange={(e) => setData('tahun_exit_tenant', e.target.value)}
                                            className="w-full border border-gray-300 rounded px-3 py-2"
                                        />
                                        {errors.tahun_exit_tenant && <div className="text-red-500 text-sm">{errors.tahun_exit_tenant}</div>}
                                    </div>
                                </div>

                                <div className="flex justify-end">
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
