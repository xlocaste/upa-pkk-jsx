import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import SecondaryButton from '@/Components/SecondaryButton';
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';

export default function MahasiswaList({ MiniIndustriKampus, auth }) {
    return (
        <AuthenticatedLayout>
            <Head title="Mini Industri Kampus" />
            <div className="py-8">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="relative overflow-hidden bg-gradient-to-tl from-blue-300 via-blue-50 to-white shadow-md sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className='flex justify-between m-4 ml-0'>
                                <div className='flex items-center space-x-4 bg-gradient-to-r from-blue-300 via-blue-50 to-white rounded-md p-2'>
                                    <ApplicationLogo />
                                    <p className='font-bold text-gray-700 text-xl'>UPA-PKK MINI INDUSTRI KAMPUS</p>
                                </div>
                            </div>
                            <div className='grid grid-cols-2 items-center gap-6'>
                                <div>
                                    <p className='font-bold text-xl z-10'>Nama Mini Industri Kampus</p>
                                    <p className="font-bold text-3xl z-10">{MiniIndustriKampus.nama_mik}</p>
                                </div>
                                <div>
                                    <p className='font-bold text-xl z-10'>Bidang Fokus Mini Industri Kampus</p>
                                    <p className="font-bold text-3xl z-10">{MiniIndustriKampus.bidang_fokus_mik}</p>
                                </div>
                                <div>
                                    <p className='font-bold text-xl z-10'>Tahun Mini Industri Kampus</p>
                                    <p className="font-bold text-3xl z-10">{MiniIndustriKampus.tahun_mik}</p>
                                </div>
                                <div>
                                    <p className='font-bold text-xl z-10'>Tahun Exit</p>
                                    <p className="font-bold text-3xl z-10">{MiniIndustriKampus.tahun_exit_mik}</p>
                                </div>
                                <div className="col-span-2 flex justify-end z-10">
                                    <Link href={route('authentication.mini-industri-kampus.index')}>
                                        <SecondaryButton>
                                            KEMBALI
                                        </SecondaryButton>
                                    </Link>
                                </div>
                                <div className="absolute -bottom-20 -right-20 opacity-30 text-[24rem] pointer-events-none">
                                    <HiOutlineBuildingOffice2 />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
