import ApplicationLogo from '@/Components/ApplicationLogo';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import React from 'react';

export default function Add() {
    const { data, setData, post, processing, errors, reset } = useForm({
        nama_ksi: '',
        bentuk_lembaga: '',
        jenis_kegiatan: '',
        tahun_ksi: '',
        tahun_exit_ksi: '',
        no_mou_poltesa: '',
        no_mou_mitra: '',
        prodi: '',
        aktivitas: '',
        waktu: '',
        keterangan: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const confirmed = window.confirm("Apakah Anda yakin ingin menyimpan data ini?");
        if (!confirmed) return;
        post(route('authentication.kerja-sama-industri.store'), {
            onSuccess: () => reset(),
        });
    };

    return (
        <AuthenticatedLayout>
            <Head title="Kerja Sama Industri" />
            <div className="py-8">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-md sm:rounded-lg">
                        <div className='flex items-center space-x-4 bg-gradient-to-r from-blue-300 via-blue-50 to-white rounded-t-md p-2 pl-6 mb-4'>
                            <ApplicationLogo />
                            <p className='font-bold text-gray-700 text-xl'>UPA-PKK KERJA SAMA INDUSTRI</p>
                        </div>
                        <div className="p-6 text-gray-900">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className='grid grid-cols-2 gap-6'>
                                    <div>
                                        <label className="block text-sm font-medium">Nama Kerja Sama Industri</label>
                                        <input
                                            type="text"
                                            value={data.nama_ksi}
                                            onChange={(e) => setData('nama_ksi', e.target.value)}
                                            className="w-full border border-gray-300 rounded px-3 py-2"
                                        />
                                        {errors.nama_ksi && <div className="text-red-500 text-sm">{errors.nama_ksi}</div>}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium">Bentuk Lembaga</label>
                                        <input
                                            type="text"
                                            value={data.bentuk_lembaga}
                                            onChange={(e) => setData('bentuk_lembaga', e.target.value)}
                                            className="w-full border border-gray-300 rounded px-3 py-2"
                                        />
                                        {errors.bentuk_lembaga && <div className="text-red-500 text-sm">{errors.bentuk_lembaga}</div>}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium">Jenis Kegiatan</label>
                                        <input
                                            type="text"
                                            value={data.jenis_kegiatan}
                                            onChange={(e) => setData('jenis_kegiatan', e.target.value)}
                                            className="w-full border border-gray-300 rounded px-3 py-2"
                                        />
                                        {errors.jenis_kegiatan && <div className="text-red-500 text-sm">{errors.jenis_kegiatan}</div>}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium">Tahun Kerja Sama Industri</label>
                                        <input
                                            type="date"
                                            value={data.tahun_ksi}
                                            onChange={(e) => setData('tahun_ksi', e.target.value)}
                                            className="w-full border border-gray-300 rounded px-3 py-2"
                                        />
                                        {errors.tahun_ksi && <div className="text-red-500 text-sm">{errors.tahun_ksi}</div>}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium">Tahun Exit</label>
                                        <input
                                            type="date"
                                            value={data.tahun_exit_ksi}
                                            onChange={(e) => setData('tahun_exit_ksi', e.target.value)}
                                            className="w-full border border-gray-300 rounded px-3 py-2"
                                        />
                                        {errors.tahun_exit_ksi && <div className="text-red-500 text-sm">{errors.tahun_exit_ksi}</div>}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium">No MOU Poltesa</label>
                                        <input
                                            type="text"
                                            value={data.no_mou_poltesa}
                                            onChange={(e) => setData('no_mou_poltesa', e.target.value)}
                                            className="w-full border border-gray-300 rounded px-3 py-2"
                                        />
                                        {errors.no_mou_poltesa && <div className="text-red-500 text-sm">{errors.no_mou_poltesa}</div>}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium">No MOU Mitra</label>
                                        <input
                                            type="text"
                                            value={data.no_mou_mitra}
                                            onChange={(e) => setData('no_mou_mitra', e.target.value)}
                                            className="w-full border border-gray-300 rounded px-3 py-2"
                                        />
                                        {errors.no_mou_mitra && <div className="text-red-500 text-sm">{errors.no_mou_mitra}</div>}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium">Program Studi</label>
                                        <input
                                            type="text"
                                            value={data.prodi}
                                            onChange={(e) => setData('prodi', e.target.value)}
                                            className="w-full border border-gray-300 rounded px-3 py-2"
                                        />
                                        {errors.prodi && <div className="text-red-500 text-sm">{errors.prodi}</div>}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium">Aktivitas</label>
                                        <input
                                            type="text"
                                            value={data.aktivitas}
                                            onChange={(e) => setData('aktivitas', e.target.value)}
                                            className="w-full border border-gray-300 rounded px-3 py-2"
                                        />
                                        {errors.aktivitas && <div className="text-red-500 text-sm">{errors.aktivitas}</div>}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium">Waktu</label>
                                        <input
                                            type="text"
                                            value={data.waktu}
                                            onChange={(e) => setData('waktu', e.target.value)}
                                            className="w-full border border-gray-300 rounded px-3 py-2"
                                        />
                                        {errors.waktu && <div className="text-red-500 text-sm">{errors.waktu}</div>}
                                    </div>

                                    <div className="col-span-2">
                                        <label className="block text-sm font-medium">Keterangan</label>
                                        <textarea
                                            value={data.keterangan}
                                            onChange={(e) => setData('keterangan', e.target.value)}
                                            className="w-full border border-gray-300 rounded px-3 py-2"
                                            rows={3}
                                        />
                                        {errors.keterangan && <div className="text-red-500 text-sm">{errors.keterangan}</div>}
                                    </div>
                                </div>

                                <div className="flex justify-end space-x-4 pt-4">
                                    <SecondaryButton>
                                        <Link href={route('authentication.kerja-sama-industri.index')}>
                                            KEMBALI
                                        </Link>
                                    </SecondaryButton>
                                    <PrimaryButton type="submit" disabled={processing}>
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
