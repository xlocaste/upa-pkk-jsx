import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import SecondaryButton from '@/Components/SecondaryButton';
import { PiStudent } from 'react-icons/pi';

export default function MahasiswaList({ Alumni, auth }) {
    return (
        <AuthenticatedLayout>
            <Head title="Alumni" />
            <div className="py-8">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="relative overflow-hidden bg-gradient-to-tl from-blue-300 via-blue-50 to-white shadow-md sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className='flex justify-between m-4 ml-0'>
                                <div className='flex items-center space-x-4 bg-gradient-to-r from-blue-300 via-blue-50 to-white rounded-md p-2'>
                                    <ApplicationLogo />
                                    <p className='font-bold text-gray-700 text-xl'>UPA-PKK ALUMNI</p>
                                </div>
                            </div>
                            <div className='grid grid-cols-2 items-center gap-6'>
                                <div>
                                    <p className='font-bold text-xl'>Nama Alumni</p>
                                    <p className="text-2xl font-semibold">{Alumni.nama || '-'}</p>
                                </div>

                                <div>
                                    <p className='font-bold text-xl'>NIM</p>
                                    <p className="text-2xl font-semibold">{Alumni.nim || '-'}</p>
                                </div>

                                <div>
                                    <p className='font-bold text-xl'>No HP</p>
                                    <p className="text-2xl font-semibold">{Alumni.hp || '-'}</p>
                                </div>

                                <div>
                                    <p className='font-bold text-xl'>Email</p>
                                    <p className="text-2xl font-semibold">{Alumni.email || '-'}</p>
                                </div>

                                <div>
                                    <p className='font-bold text-xl'>Tempat Magang</p>
                                    <p className="text-2xl font-semibold">{Alumni.tempat_magang || '-'}</p>
                                </div>

                                <div>
                                    <p className='font-bold text-xl'>Judul Magang</p>
                                    <p className="text-2xl font-semibold">{Alumni.judul_magang || '-'}</p>
                                </div>

                                <div>
                                    <p className='font-bold text-xl'>Judul Tugas Akhir</p>
                                    <p className="text-2xl font-semibold">{Alumni.judul_tugas_akhir || '-'}</p>
                                </div>

                                <div>
                                    <p className='font-bold text-xl'>Tahun Lulus</p>
                                    <p className="text-2xl font-semibold">{Alumni.tahun_lulus || '-'}</p>
                                </div>

                                <div>
                                    <p className='font-bold text-xl'>NIK</p>
                                    <p className="text-2xl font-semibold">{Alumni.nik || '-'}</p>
                                </div>

                                <div>
                                    <p className='font-bold text-xl'>NPWP</p>
                                    <p className="text-2xl font-semibold">{Alumni.npwp || '-'}</p>
                                </div>
                                <div className="col-span-2 flex justify-end z-10">
                                    <Link href={route('authentication.alumni.index')}>
                                        <SecondaryButton>KEMBALI</SecondaryButton>
                                    </Link>
                                </div>
                                <div className="absolute -bottom-20 -right-20 opacity-30 text-[24rem] pointer-events-none">
                                    <PiStudent />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
