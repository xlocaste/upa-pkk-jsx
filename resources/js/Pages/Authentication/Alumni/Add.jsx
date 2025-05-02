import ApplicationLogo from '@/Components/ApplicationLogo';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import React from 'react';

export default function AddAlumni({ mahasiswa }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        mahasiswa_id: '',
        tempat_magang: '',
        judul_magang: '',
        judul_tugas_akhir: '',
        tahun_lulus: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('authentication.alumni.store'), {
            onSuccess: () => reset(),
        });
    };

    return (
        <AuthenticatedLayout>
            <Head title="Tambah Alumni" />
            <div className="py-8">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-md sm:rounded-lg">
                        <div className='flex items-center space-x-4 bg-gradient-to-r from-blue-300 via-blue-50 to-white rounded-t-md p-2 pl-6 mb-4'>
                            <ApplicationLogo />
                            <p className='font-bold text-gray-700 text-xl'>UPA-PKK ALUMNI</p>
                        </div>
                        <div className="p-6 text-gray-900">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className='flex w h-full space-x-8'>
                                    <div className='w-1/2'>
                                        <label className="block text-sm font-medium">Nama Mahasiswa</label>
                                        <select
                                            value={data.mahasiswa_id}
                                            onChange={(e) => setData('mahasiswa_id', e.target.value)}
                                            className="w-full border border-gray-300 rounded px-3 py-2"
                                        >
                                            <option value="">Pilih Mahasiswa</option>
                                            {mahasiswa.map((mhs) => (
                                                <option key={mhs.id} value={mhs.id}>{mhs.nama}</option>
                                            ))}
                                        </select>
                                        {errors.mahasiswa_id && <div className="text-red-500 text-sm">{errors.mahasiswa_id}</div>}
                                    </div>

                                    <div className='w-1/2'>
                                        <label className="block text-sm font-medium">Tempat Magang</label>
                                        <input
                                            type="text"
                                            value={data.tempat_magang}
                                            onChange={(e) => setData('tempat_magang', e.target.value)}
                                            className="w-full border border-gray-300 rounded px-3 py-2"
                                        />
                                        {errors.tempat_magang && <div className="text-red-500 text-sm">{errors.tempat_magang}</div>}
                                    </div>
                                </div>

                                <div className='flex w h-full space-x-8'>
                                    <div className='w-1/2'>
                                        <label className="block text-sm font-medium">Judul Magang</label>
                                        <input
                                            type="text"
                                            value={data.judul_magang}
                                            onChange={(e) => setData('judul_magang', e.target.value)}
                                            className="w-full border border-gray-300 rounded px-3 py-2"
                                        />
                                        {errors.judul_magang && <div className="text-red-500 text-sm">{errors.judul_magang}</div>}
                                    </div>

                                    <div className='w-1/2'>
                                        <label className="block text-sm font-medium">Judul Tugas Akhir</label>
                                        <input
                                            type="text"
                                            value={data.judul_tugas_akhir}
                                            onChange={(e) => setData('judul_tugas_akhir', e.target.value)}
                                            className="w-full border border-gray-300 rounded px-3 py-2"
                                        />
                                        {errors.judul_tugas_akhir && <div className="text-red-500 text-sm">{errors.judul_tugas_akhir}</div>}
                                    </div>
                                </div>

                                <div className='w-1/2'>
                                    <label className="block text-sm font-medium">Tahun Lulus</label>
                                    <input
                                        type="number"
                                        value={data.tahun_lulus}
                                        onChange={(e) => setData('tahun_lulus', e.target.value)}
                                        className="w-full border border-gray-300 rounded px-3 py-2"
                                    />
                                    {errors.tahun_lulus && <div className="text-red-500 text-sm">{errors.tahun_lulus}</div>}
                                </div>

                                <div className="flex justify-end space-x-4">
                                    <SecondaryButton>
                                        <Link href={route('authentication.alumni.index')}>
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
