import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import SecondaryButton from '@/Components/SecondaryButton';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';

export default function MahasiswaList({ PraInkubasi, auth }) {
    return (
        <AuthenticatedLayout>
            <Head title="Pra Inkubasi" />
            <div className="py-8">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="relative overflow-hidden bg-gradient-to-tl from-blue-300 via-blue-50 to-white shadow-md sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className='flex justify-between m-4 ml-0'>
                                <div className='flex items-center space-x-4 bg-gradient-to-r from-blue-300 via-blue-50 to-white rounded-md p-2'>
                                    <ApplicationLogo />
                                    <p className='font-bold text-gray-700 text-xl'>UPA-PKK PRA INKUBASI</p>
                                </div>
                            </div>
                            <div className='grid grid-cols-2 items-center gap-6'>
                                <div>
                                    <p className='font-bold text-xl z-10'>Nama Ketua Tim</p>
                                    <p className="font-bold text-3xl z-10">{PraInkubasi.nama_ketua_tim}</p>
                                </div>
                                <div>
                                    <p className='font-bold text-xl z-10'>Status Mahasiswa/Alumni</p>
                                    <p className="font-bold text-3xl z-10">{PraInkubasi.status_mahasiswa_alumni}</p>
                                </div>
                                <div>
                                    <p className='font-bold text-xl z-10'>Judul Proposal</p>
                                    <p className="font-bold text-3xl z-10">{PraInkubasi.judul_proposal}</p>
                                </div>
                                <div>
                                    <p className='font-bold text-xl z-10'>Dosen Pembimbing</p>
                                    <p className="font-bold text-3xl z-10">{PraInkubasi.dosen_pembimbing}</p>
                                </div>
                                <div>
                                    <p className='font-bold text-xl z-10'>Usulan Anggaran</p>
                                    <p className="font-bold text-3xl z-10">{PraInkubasi.usulan_anggaran}</p>
                                </div>
                                <div>
                                    <p className='font-bold text-xl z-10'>No. WA</p>
                                    <p className="font-bold text-3xl z-10">{PraInkubasi.no_wa}</p>
                                </div>
                                <div className='col-span-2'>
                                    <p className='font-bold text-xl z-10'>Keterangan</p>
                                    <p className="font-bold text-3xl z-10">{PraInkubasi.keterangan}</p>
                                </div>
                                <div className="col-span-2 flex justify-end z-10">
                                    <Link href={route('authentication.pra-inkubasi.index')}>
                                        <SecondaryButton>
                                            KEMBALI
                                        </SecondaryButton>
                                    </Link>
                                </div>
                                <div className="absolute -bottom-20 -right-10 opacity-30 text-[24rem] pointer-events-none">
                                    <HiOutlineOfficeBuilding />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
