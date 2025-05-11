import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import SecondaryButton from '@/Components/SecondaryButton';
import { PiStudent } from 'react-icons/pi';

export default function MahasiswaList({ LowonganPekerjaan, auth }) {
    return (
        <AuthenticatedLayout>
            <Head title="Job Hunter" />
            <div className="py-8">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-md sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className='flex flex-row w-full'>
                            {LowonganPekerjaan.image ? (
                                <img
                                    src={`/storage/${LowonganPekerjaan.image}`}
                                    alt="Gambar Lowongan"
                                    className="h-[500px] object-cover rounded-lg"
                                />
                            ) : (
                                <div className="text-gray-400 italic mb-6">Tidak ada gambar</div>
                            )}
                            <div className='ml-10 w-full'>
                                <div className='flex items-center space-x-4 mb-4 p-2 rounded-md bg-gradient-to-r from-blue-300 via-blue-50'>
                                    <ApplicationLogo />
                                    <p className='font-bold text-xl uppercase'>UPA-PKK DETAIL Job hunter zone</p>
                                </div>
                                <h1 className="text-3xl w-full font-bold text-gray-800">
                                    {LowonganPekerjaan.judul_lowongan_kerja}
                                </h1>
                                <div className='py-1 bg-gradient-to-r from-blue-300 via-blue-50 rounded-md w-full my-2'></div>


                                <div className="mb-4">
                                    <h2 className="text-xl font-semibold text-gray-700 mb-2">Deskripsi</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        {LowonganPekerjaan.deskripsi}
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-xl font-semibold text-gray-700 mb-2">Kontak</h2>
                                    <p className="text-gray-600">{LowonganPekerjaan.kontak}</p>
                                </div>
                                <div className='h-full mt-4'>
                                    <Link href={route('authentication.lowongan-pekerjaan.index')}>
                                        <SecondaryButton>
                                            KEMBALI
                                        </SecondaryButton>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
