import React from 'react';
import { Head, Link } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import ApplicationLogo from '@/Components/ApplicationLogo';
import SecondaryButton from '@/Components/SecondaryButton';

const Detail = ({ lowongan }) => {
    return (
        <DashboardLayout>
            <Head title={`Detail Lowongan - ${lowongan.judul_lowongan_kerja}`} />
            <div className="py-8">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-md sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className='flex flex-row w-full'>
                                {lowongan.image ? (
                                    <img
                                        src={`/storage/${lowongan.image}`}
                                        alt="Gambar Lowongan"
                                        className="h-[500px] object-cover rounded-lg"
                                    />
                                ) : (
                                    <div className="text-gray-400 italic mb-6">Tidak ada gambar</div>
                                )}
                                <div className='ml-10 w-full'>
                                    <div className='flex items-center space-x-4 mb-4 p-2 rounded-md bg-gradient-to-r from-blue-300 via-blue-50'>
                                        <ApplicationLogo />
                                        <p className='font-bold text-xl'>UPA-PKK DETAIL LOWONGAN PEKERJAAN</p>
                                    </div>
                                    <h1 className="text-3xl w-full font-bold text-gray-800">
                                        {lowongan.judul_lowongan_kerja}
                                    </h1>
                                    <div className='py-1 bg-gradient-to-r from-blue-300 via-blue-50 rounded-md w-full my-2'></div>


                                    <div className="mb-4">
                                        <h2 className="text-xl font-semibold text-gray-700 mb-2">Deskripsi</h2>
                                        <p className="text-gray-700 leading-relaxed">
                                            {lowongan.deskripsi}
                                        </p>
                                    </div>

                                    <div>
                                        <h2 className="text-xl font-semibold text-gray-700 mb-2">Kontak</h2>
                                        <p className="text-gray-600">{lowongan.kontak}</p>
                                    </div>
                                    <div className='h-full mt-4'>
                                        <SecondaryButton>
                                            <Link href={route('form.lowongan-pekerjaan.list')}>
                                                KEMBALI
                                            </Link>
                                        </SecondaryButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Detail;
