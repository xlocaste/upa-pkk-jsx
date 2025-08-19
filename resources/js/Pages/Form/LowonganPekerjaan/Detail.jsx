import React from 'react';
import { Head, Link } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import ApplicationLogo from '@/Components/ApplicationLogo';
import SecondaryButton from '@/Components/SecondaryButton';

const Detail = ({ lowongan }) => {
    return (
        <DashboardLayout>
            <Head title={`Detail Job - ${lowongan.judul_lowongan_kerja}`} />
            <div className="md:py-8">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden m-4 md:m-0 bg-white shadow-md rounded-lg sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            {/* Flex jadi responsif */}
                            <div className="flex flex-col lg:flex-row w-full">
                                {lowongan.image ? (
                                    <img
                                        src={`/storage/${lowongan.image}`}
                                        alt="Gambar Lowongan"
                                        className="w-full lg:w-1/2 h-64 lg:h-[500px] object-cover rounded-lg"
                                    />
                                ) : (
                                    <div className="text-gray-400 italic mb-6">Tidak ada gambar</div>
                                )}

                                {/* Konten detail */}
                                <div className="mt-6 lg:mt-0 lg:ml-10 w-full">
                                    <div className="hidden md:flex items-center space-x-4 mb-4 p-2 rounded-md bg-gradient-to-r from-blue-300 via-blue-50">
                                        <ApplicationLogo />
                                        <p className="font-bold text-xl uppercase text-center lg:text-left">
                                            UPA-PKK DETAIL Job hunter zone
                                        </p>
                                    </div>

                                    <h1 className="text-2xl lg:text-3xl w-full font-bold text-gray-800">
                                        {lowongan.judul_lowongan_kerja}
                                    </h1>

                                    <div className="py-1 bg-gradient-to-r from-blue-300 via-blue-50 rounded-md w-full my-2"></div>

                                    <div className="mb-4">
                                        <h2 className="text-lg lg:text-xl font-semibold text-gray-700 mb-2">Deskripsi</h2>
                                        <p className="text-gray-700 leading-relaxed text-justify">
                                            {lowongan.deskripsi}
                                        </p>
                                    </div>

                                    <div>
                                        <h2 className="text-lg lg:text-xl font-semibold text-gray-700 mb-2">Kontak</h2>
                                        <p className="text-gray-600">{lowongan.kontak}</p>
                                    </div>

                                    <div className="h-full mt-6">
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
