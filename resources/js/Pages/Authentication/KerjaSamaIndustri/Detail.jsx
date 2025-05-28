import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import SecondaryButton from '@/Components/SecondaryButton';
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';

export default function MahasiswaList({ KerjaSamaIndustri, auth }) {
    return (
        <AuthenticatedLayout>
            <Head title="Kerja Sama Industri" />
            <div className="py-8">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="relative overflow-hidden bg-gradient-to-tl from-blue-300 via-blue-50 to-white shadow-md sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className='flex justify-between m-4 ml-0'>
                                <div className='flex items-center space-x-4 bg-gradient-to-r from-blue-300 via-blue-50 to-white rounded-md p-2'>
                                    <ApplicationLogo />
                                    <p className='font-bold text-gray-700 text-xl'>UPA-PKK KERJA SAMA INDUSTRI</p>
                                </div>
                            </div>
                            <div className='grid grid-cols-2 items-center gap-6'>
                                <div>
                                    <p className='font-bold text-xl text-gray-600 z-10'>Nama</p>
                                    <p className="font-bold text-xl z-10">{KerjaSamaIndustri.nama_ksi}</p>
                                </div>
                                <div>
                                    <p className='font-bold text-xl text-gray-600 z-10'>Bentuk Lembaga</p>
                                    <p className="font-bold text-xl z-10">{KerjaSamaIndustri.bentuk_lembaga}</p>
                                </div>
                                <div>
                                    <p className='font-bold text-xl text-gray-600 z-10'>Jenis Kegiatan</p>
                                    <p className="font-bold text-xl z-10">{KerjaSamaIndustri.jenis_kegiatan}</p>
                                </div>
                                <div>
                                    <p className='font-bold text-xl text-gray-600 z-10'>Tahun Kerja Sama Industri</p>
                                    <p className="font-bold text-xl z-10">{KerjaSamaIndustri.tahun_ksi}</p>
                                </div>
                                <div>
                                    <p className='font-bold text-xl text-gray-600 z-10'>Tahun Exit</p>
                                    <p className="font-bold text-xl z-10">{KerjaSamaIndustri.tahun_exit_ksi}</p>
                                </div>
                                <div>
                                    <p className='font-bold text-xl text-gray-600 z-10'>No MoU Poltesa</p>
                                    <p className="font-bold text-xl z-10">{KerjaSamaIndustri.no_mou_poltesa}</p>
                                </div>
                                <div>
                                    <p className='font-bold text-xl text-gray-600 z-10'>No MoU Mitra</p>
                                    <p className="font-bold text-xl z-10">{KerjaSamaIndustri.no_mou_mitra}</p>
                                </div>
                                <div>
                                    <p className='font-bold text-xl text-gray-600 z-10'>Prodi</p>
                                    <p className="font-bold text-xl z-10">{KerjaSamaIndustri.prodi}</p>
                                </div>
                                <div>
                                    <p className='font-bold text-xl text-gray-600 z-10'>Aktivitas</p>
                                    <p className="font-bold text-xl z-10">{KerjaSamaIndustri.aktivitas}</p>
                                </div>
                                <div>
                                    <p className='font-bold text-xl text-gray-600 z-10'>Waktu</p>
                                    <p className="font-bold text-xl z-10">{KerjaSamaIndustri.waktu}</p>
                                </div>
                                <div>
                                    <p className='font-bold text-xl text-gray-600 z-10'>Keterangan</p>
                                    <p className="font-bold text-xl z-10">{KerjaSamaIndustri.keterangan}</p>
                                </div>
                                <div className="col-span-2 flex justify-end z-10">
                                    <Link href={route('authentication.kerja-sama-industri.index')}>
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
