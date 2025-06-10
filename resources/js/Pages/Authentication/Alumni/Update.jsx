import ApplicationLogo from '@/Components/ApplicationLogo';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import React from 'react';

export default function Update({ alumni }) {
    const { data, setData, put, processing, errors } = useForm({
        nim: alumni.nim || '',
        nama: alumni.nama || '',
        hp: alumni.hp || '',
        email: alumni.email || '',
        tempat_magang: alumni.tempat_magang || '',
        judul_magang: alumni.judul_magang || '',
        judul_tugas_akhir: alumni.judul_tugas_akhir || '',
        tahun_lulus: alumni.tahun_lulus || '',
        nik: alumni.nik || '',
        npwp: alumni.npwp || '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (window.confirm('Apakah Anda yakin ingin memperbarui data alumni ini?')) {
            put(route('authentication.alumni.update', alumni.id));
        }
    };

    return (
        <AuthenticatedLayout>
            <Head title="Update Alumni" />

            <div className="py-8">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-md sm:rounded-lg">
                        <div className="flex items-center space-x-4 bg-gradient-to-r from-blue-300 via-blue-50 to-white rounded-t-md p-2 pl-6 mb-4">
                            <ApplicationLogo />
                            <p className="font-bold text-gray-700 text-xl">Form Update Alumni</p>
                        </div>

                        <div className="p-6 text-gray-900">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* NIM (disable) */}
                                    <div>
                                        <label className="block text-sm font-medium">NIM</label>
                                        <input
                                            type="text"
                                            value={data.nim}
                                            disabled
                                            className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-100 cursor-not-allowed"
                                        />
                                        {errors.nim && <p className="text-red-500 text-sm mt-1">{errors.nim}</p>}
                                    </div>

                                    {/* Nama */}
                                    <div>
                                        <label className="block text-sm font-medium">Nama</label>
                                        <input
                                            type="text"
                                            value={data.nama}
                                            onChange={(e) => setData('nama', e.target.value)}
                                            className="w-full border border-gray-300 rounded px-3 py-2"
                                        />
                                        {errors.nama && <p className="text-red-500 text-sm mt-1">{errors.nama}</p>}
                                    </div>

                                    {/* No HP */}
                                    <div>
                                        <label className="block text-sm font-medium">No HP</label>
                                        <input
                                            type="text"
                                            value={data.hp}
                                            onChange={(e) => setData('hp', e.target.value)}
                                            className="w-full border border-gray-300 rounded px-3 py-2"
                                        />
                                        {errors.hp && <p className="text-red-500 text-sm mt-1">{errors.hp}</p>}
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="block text-sm font-medium">Email</label>
                                        <input
                                            type="email"
                                            value={data.email}
                                            onChange={(e) => setData('email', e.target.value)}
                                            className="w-full border border-gray-300 rounded px-3 py-2"
                                        />
                                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                    </div>

                                    {/* Tempat Magang */}
                                    <div>
                                        <label className="block text-sm font-medium">Tempat Magang</label>
                                        <input
                                            type="text"
                                            value={data.tempat_magang}
                                            onChange={(e) => setData('tempat_magang', e.target.value)}
                                            className="w-full border border-gray-300 rounded px-3 py-2"
                                        />
                                        {errors.tempat_magang && <p className="text-red-500 text-sm mt-1">{errors.tempat_magang}</p>}
                                    </div>

                                    {/* Judul Magang */}
                                    <div>
                                        <label className="block text-sm font-medium">Judul Magang</label>
                                        <input
                                            type="text"
                                            value={data.judul_magang}
                                            onChange={(e) => setData('judul_magang', e.target.value)}
                                            className="w-full border border-gray-300 rounded px-3 py-2"
                                        />
                                        {errors.judul_magang && <p className="text-red-500 text-sm mt-1">{errors.judul_magang}</p>}
                                    </div>

                                    {/* Judul TA */}
                                    <div>
                                        <label className="block text-sm font-medium">Judul Tugas Akhir</label>
                                        <input
                                            type="text"
                                            value={data.judul_tugas_akhir}
                                            onChange={(e) => setData('judul_tugas_akhir', e.target.value)}
                                            className="w-full border border-gray-300 rounded px-3 py-2"
                                        />
                                        {errors.judul_tugas_akhir && <p className="text-red-500 text-sm mt-1">{errors.judul_tugas_akhir}</p>}
                                    </div>

                                    {/* Tahun Lulus */}
                                    <div>
                                        <label className="block text-sm font-medium">Tahun Lulus</label>
                                        <input
                                            type="number"
                                            min="2000"
                                            max={new Date().getFullYear()}
                                            value={data.tahun_lulus}
                                            onChange={(e) => setData('tahun_lulus', e.target.value)}
                                            className="w-full border border-gray-300 rounded px-3 py-2"
                                        />
                                        {errors.tahun_lulus && <p className="text-red-500 text-sm mt-1">{errors.tahun_lulus}</p>}
                                    </div>

                                    {/* NIK */}
                                    <div>
                                        <label className="block text-sm font-medium">NIK</label>
                                        <input
                                            type="text"
                                            value={data.nik}
                                            onChange={(e) => setData('nik', e.target.value)}
                                            className="w-full border border-gray-300 rounded px-3 py-2"
                                        />
                                        {errors.nik && <p className="text-red-500 text-sm mt-1">{errors.nik}</p>}
                                    </div>

                                    {/* NPWP */}
                                    <div>
                                        <label className="block text-sm font-medium">NPWP</label>
                                        <input
                                            type="text"
                                            value={data.npwp}
                                            onChange={(e) => setData('npwp', e.target.value)}
                                            className="w-full border border-gray-300 rounded px-3 py-2"
                                        />
                                        {errors.npwp && <p className="text-red-500 text-sm mt-1">{errors.npwp}</p>}
                                    </div>
                                </div>

                                <div className="flex justify-end space-x-4 pt-6">
                                    <SecondaryButton>
                                        <Link href={route('authentication.alumni.index')}>KEMBALI</Link>
                                    </SecondaryButton>
                                    <PrimaryButton type="submit" disabled={processing}>
                                        SIMPAN PERUBAHAN
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
