import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import SecondaryButton from '@/Components/SecondaryButton';
import { PiStudent } from 'react-icons/pi';

export default function MahasiswaList({ Mahasiswa, auth }) {
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
                                    <label htmlFor="" className='font-bold text-xl z-10'>Nama Mahasiswa</label>
                                    <p className="font-bold text-3xl z-10">{Mahasiswa.nama}</p>
                                </div>
                                <div>
                                    <label htmlFor="" className='font-bold text-xl z-10'>Nama NIM</label>
                                    <p className="font-bold text-3xl z-10">{Mahasiswa.nim}</p>
                                </div>
                                <div>
                                    <label htmlFor="" className='font-bold text-xl z-10'>Nama Semester</label>
                                    <p className="font-bold text-3xl z-10">{Mahasiswa.semester}</p>
                                </div>
                                <div>
                                    <label htmlFor="" className='font-bold text-xl z-10'>Nama IPK</label>
                                    <p className="font-bold text-3xl z-10">{Mahasiswa.ipk}</p>
                                </div>
                                <div className="col-span-2 flex justify-end z-10">
                                    <SecondaryButton>
                                        <Link href={route('authentication.mahasiswa.index')}>
                                            KEMBALI
                                        </Link>
                                    </SecondaryButton>
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
