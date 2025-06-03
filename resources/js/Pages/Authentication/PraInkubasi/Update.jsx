import ApplicationLogo from '@/Components/ApplicationLogo';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import React from 'react';

export default function Update({ praInkubasi }) {
    const { data, setData, post, processing, errors } = useForm({
        _method: 'put',
        nama_ketua_tim: praInkubasi.nama_ketua_tim || '',
        status_mahasiswa_alumni: praInkubasi.status_mahasiswa_alumni || '',
        judul_proposal: praInkubasi.judul_proposal || '',
        dosen_pembimbing: praInkubasi.dosen_pembimbing || '',
        usulan_anggaran: praInkubasi.usulan_anggaran || '',
        no_wa: praInkubasi.no_wa || '',
        keterangan: praInkubasi.keterangan || '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const confirmed = window.confirm("Apakah Anda yakin ingin menyimpan data ini?");
        if (!confirmed) return;
        post(route('authentication.pra-inkubasi.update', praInkubasi.id));
    };

    return (
        <AuthenticatedLayout>
            <Head title="Update Pra-Inkubasi" />
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
                                        <label className="block text-sm font-medium">Nama Ketua Tim</label>
                                        <input
                                            type="text"
                                            value={data.nama_ketua_tim}
                                            onChange={(e) => setData('nama_ketua_tim', e.target.value)}
                                            className="w-full border border-gray-300 rounded px-3 py-2"
                                        />
                                        {errors.nama_ketua_tim && <div className="text-red-500 text-sm">{errors.nama_ketua_tim}</div>}
                                    </div>

                                    <div className='w-1/2'>
                                        <label className="block text-sm font-medium">Status Mahasiswa / Alumni</label>
                                        <input
                                            type="text"
                                            value={data.status_mahasiswa_alumni}
                                            onChange={(e) => setData('status_mahasiswa_alumni', e.target.value)}
                                            className="w-full border border-gray-300 rounded px-3 py-2"
                                        />
                                        {errors.status_mahasiswa_alumni && <div className="text-red-500 text-sm">{errors.status_mahasiswa_alumni}</div>}
                                    </div>
                                </div>

                                <div className='flex w h-full space-x-8'>
                                    <div className='w-1/2'>
                                        <label className="block text-sm font-medium">Judul Proposal</label>
                                        <input
                                            type="text"
                                            value={data.judul_proposal}
                                            onChange={(e) => setData('judul_proposal', e.target.value)}
                                            className="w-full border border-gray-300 rounded px-3 py-2"
                                        />
                                        {errors.judul_proposal && <div className="text-red-500 text-sm">{errors.judul_proposal}</div>}
                                    </div>

                                    <div className='w-1/2'>
                                        <label className="block text-sm font-medium">Dosen Pembimbing</label>
                                        <input
                                            type="text"
                                            value={data.dosen_pembimbing}
                                            onChange={(e) => setData('dosen_pembimbing', e.target.value)}
                                            className="w-full border border-gray-300 rounded px-3 py-2"
                                        />
                                        {errors.dosen_pembimbing && <div className="text-red-500 text-sm">{errors.dosen_pembimbing}</div>}
                                    </div>
                                </div>

                                <div className='flex w h-full space-x-8'>
                                    <div className='w-1/2'>
                                        <label className="block text-sm font-medium">Usulan Anggaran</label>
                                        <input
                                            type="text"
                                            value={data.usulan_anggaran}
                                            onChange={(e) => setData('usulan_anggaran', e.target.value)}
                                            className="w-full border border-gray-300 rounded px-3 py-2"
                                        />
                                        {errors.usulan_anggaran && <div className="text-red-500 text-sm">{errors.usulan_anggaran}</div>}
                                    </div>

                                    <div className='w-1/2'>
                                        <label className="block text-sm font-medium">No. WA</label>
                                        <input
                                            type="text"
                                            value={data.no_wa}
                                            onChange={(e) => setData('no_wa', e.target.value)}
                                            className="w-full border border-gray-300 rounded px-3 py-2"
                                        />
                                        {errors.no_wa && <div className="text-red-500 text-sm">{errors.no_wa}</div>}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium">Keterangan</label>
                                    <textarea
                                        value={data.keterangan}
                                        onChange={(e) => setData('keterangan', e.target.value)}
                                        className="w-full border border-gray-300 rounded px-3 py-2"
                                        rows={4}
                                    ></textarea>
                                    {errors.keterangan && <div className="text-red-500 text-sm">{errors.keterangan}</div>}
                                </div>

                                <div className="flex justify-end space-x-4 pt-4">
                                    <SecondaryButton>
                                        <Link href={route('authentication.pra-inkubasi.index')}>
                                            KEMBALI
                                        </Link>
                                    </SecondaryButton>
                                    <PrimaryButton
                                        type="submit"
                                        disabled={processing}
                                    >
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
