import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import SecondaryButton from '@/Components/SecondaryButton';
import { PiStudent } from 'react-icons/pi';

export default function MahasiswaList({ Mahasiswa, auth }) {
    console.log(Mahasiswa)
    return (
        <AuthenticatedLayout>
            <Head title="Mahasiswa" />
            <div className="py-8">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="relative overflow-hidden bg-gradient-to-tl from-blue-300 via-blue-50 to-white shadow-md sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className='flex justify-between m-4 ml-0'>
                                <div className='flex items-center space-x-4 bg-gradient-to-r from-blue-300 via-blue-50 to-white rounded-md p-2'>
                                    <ApplicationLogo />
                                    <p className='font-bold text-gray-700 text-xl'>UPA-PKK MAHASISWA</p>
                                </div>
                            </div>
                            <div className='grid grid-cols-2 items-center gap-6'>
                                <div>
                                    <p className='font-bold text-xl z-10'>NIM</p>
                                    <p className="font-bold text-3xl z-10">{Mahasiswa.nim}</p>
                                </div>
                                <div>
                                    <p className='font-bold text-xl z-10'>Nama Mahasiswa</p>
                                    <p className="font-bold text-3xl z-10">{Mahasiswa.nama}</p>
                                </div>
                                <div>
                                    <p className='font-bold text-xl z-10'>Jenis Kelamin</p>
                                    <p className="font-bold text-3xl z-10">{Mahasiswa.jenis_kelamin}</p>
                                </div>
                                <div>
                                    <p className='font-bold text-xl z-10'>Program Studi</p>
                                    <p className="font-bold text-3xl z-10">{Mahasiswa.prodi}</p>
                                </div>
                                <div>
                                    <p className='font-bold text-xl z-10'>Status</p>
                                    <p className="font-bold text-3xl z-10">{Mahasiswa.status}</p>
                                </div>
                                <div>
                                    <p className='font-bold text-xl z-10'>Semester</p>
                                    <p className="font-bold text-3xl z-10">{Mahasiswa.semester || '-'}</p>
                                </div>
                                <div>
                                    <p className='font-bold text-xl z-10'>Nomor SK</p>
                                    <p className="font-bold text-3xl z-10">{Mahasiswa.nomor_sk || '-'}</p>
                                </div>
                                <div>
                                    <p className='font-bold text-xl z-10'>Tanggal SK</p>
                                    <p className="font-bold text-3xl z-10">{Mahasiswa.tanggal_sk || '-'}</p>
                                </div>
                                <div>
                                    <p className='font-bold text-xl z-10'>Keterangan</p>
                                    <p className="font-bold text-3xl z-10">{Mahasiswa.keterangan || '-'}</p>
                                </div>
                                <div className="col-span-2 flex justify-end z-10">
                                    <Link href={route('authentication.mahasiswa.index')}>
                                        <SecondaryButton>
                                            KEMBALI
                                        </SecondaryButton>
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
