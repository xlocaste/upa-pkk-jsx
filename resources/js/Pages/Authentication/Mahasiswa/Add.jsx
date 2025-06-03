import ApplicationLogo from '@/Components/ApplicationLogo';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import React from 'react';

export default function AddMahasiswa() {
    const { data, setData, post, processing, errors, reset } = useForm({
        nama: '',
        nim: '',
        jenis_kelamin: '',
        prodi: '',
        status: '',
        semester: '',
        nomor_sk: '',
        tanggal_sk: '',
        keterangan: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const confirmed = window.confirm("Apakah Anda yakin ingin menyimpan data ini?");
        if (!confirmed) return;
        post(route('authentication.mahasiswa.store'), {
            onSuccess: () => reset(),
        });
    };

    return (
        <AuthenticatedLayout>
            <Head title="Tambah Mahasiswa" />
            <div className="py-8">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-md sm:rounded-lg">
                        <div className='flex items-center space-x-4 bg-gradient-to-r from-blue-300 via-blue-50 to-white rounded-t-md p-2 pl-6 mb-4'>
                            <ApplicationLogo />
                            <p className='font-bold text-gray-700 text-xl'>UPA-PKK MAHASISWA</p>
                        </div>
                        <div className="p-6 text-gray-900">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className='flex space-x-8'>
                                    <div className='w-1/2'>
                                        <label className="block text-sm font-medium">Nama</label>
                                        <input
                                            type="text"
                                            value={data.nama}
                                            onChange={(e) => setData('nama', e.target.value)}
                                            className="w-full border border-gray-300 rounded px-3 py-2"
                                        />
                                        {errors.nama && <div className="text-red-500 text-sm">{errors.nama}</div>}
                                    </div>

                                    <div className='w-1/2'>
                                        <label className="block text-sm font-medium">NIM</label>
                                        <input
                                            type="text"
                                            value={data.nim}
                                            onChange={(e) => setData('nim', e.target.value)}
                                            className="w-full border border-gray-300 rounded px-3 py-2"
                                        />
                                        {errors.nim && <div className="text-red-500 text-sm">{errors.nim}</div>}
                                    </div>
                                </div>

                                <div className='flex space-x-8'>
                                    <div className='w-1/2'>
                                        <label className="block text-sm font-medium">Jenis Kelamin</label>
                                        <select
                                            value={data.jenis_kelamin}
                                            onChange={(e) => setData('jenis_kelamin', e.target.value)}
                                            className="w-full border border-gray-300 rounded px-3 py-2"
                                        >
                                            <option value="">-- Pilih Jenis Kelamin --</option>
                                            <option value="Laki-laki">Laki-laki</option>
                                            <option value="Perempuan">Perempuan</option>
                                        </select>
                                        {errors.jenis_kelamin && <div className="text-red-500 text-sm">{errors.jenis_kelamin}</div>}
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

                                <div className='flex space-x-8'>
                                    <div className='w-1/2'>
                                        <label className="block text-sm font-medium">Status</label>
                                        <select
                                            value={data.status}
                                            onChange={(e) => setData('status', e.target.value)}
                                            className="w-full border border-gray-300 rounded px-3 py-2"
                                        >
                                            <option value="">-- Pilih Status --</option>
                                            <option value="Aktif">Aktif</option>
                                            <option value="Cuti">Cuti</option>
                                            <option value="Lulus">Lulus</option>
                                        </select>
                                        {errors.status && <div className="text-red-500 text-sm">{errors.status}</div>}
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

                                <div className='flex space-x-8'>
                                    <div className='w-1/2'>
                                        <label className="block text-sm font-medium">Nomor SK</label>
                                        <input
                                            type="text"
                                            value={data.nomor_sk}
                                            onChange={(e) => setData('nomor_sk', e.target.value)}
                                            className="w-full border border-gray-300 rounded px-3 py-2"
                                        />
                                        {errors.nomor_sk && <div className="text-red-500 text-sm">{errors.nomor_sk}</div>}
                                    </div>

                                    <div className='w-1/2'>
                                        <label className="block text-sm font-medium">Tanggal SK</label>
                                        <input
                                            type="date"
                                            value={data.tanggal_sk}
                                            onChange={(e) => setData('tanggal_sk', e.target.value)}
                                            className="w-full border border-gray-300 rounded px-3 py-2"
                                        />
                                        {errors.tanggal_sk && <div className="text-red-500 text-sm">{errors.tanggal_sk}</div>}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium">Keterangan</label>
                                    <textarea
                                        value={data.keterangan}
                                        onChange={(e) => setData('keterangan', e.target.value)}
                                        className="w-full border border-gray-300 rounded px-3 py-2"
                                        rows={3}
                                    />
                                    {errors.keterangan && <div className="text-red-500 text-sm">{errors.keterangan}</div>}
                                </div>

                                <div className="flex justify-end space-x-4">
                                    <SecondaryButton>
                                        <Link href={route('authentication.mahasiswa.index')}>
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
