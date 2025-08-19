import React, { useState } from 'react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head, router } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import PrimaryButton from '@/Components/PrimaryButton';

export default function MiniIndustriKampusList({ daftarMIK, filters }) {
    const [keyword, setKeyword] = useState(filters?.keyword || '');

    const handleSearch = () => {
        router.get(route('form.mini-industri-kampus.list'), { keyword });
    };

    return (
        <DashboardLayout>
            <Head title="Mini Industri Kampus" />
            <div className="py-8">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-md sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className='flex items-center mb-4 justify-between bg-gradient-to-r from-blue-300 via-blue-50 to-white rounded-md p-2'>
                                <div className='flex items-center space-x-4'>
                                    <ApplicationLogo />
                                    <p className='font-bold text-gray-700 text-xl'>UPA-PKK MINI INDUSTRI KAMPUS</p>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <input
                                        type="text"
                                        value={keyword}
                                        onChange={(e) => setKeyword(e.target.value)}
                                        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                                        placeholder="Cari nama tenant..."
                                        className="border border-gray-300 rounded-md px-3 py-1 w-full md:w-80 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                                    <PrimaryButton onClick={handleSearch}>
                                        Cari
                                    </PrimaryButton>
                                </div>
                            </div>

                            <p className="text-sm text-gray-600 mb-6">
                                Halaman ini menampilkan data <strong>Mini Industri Kampus (MIK)</strong> yang dikelola oleh UPA-PKK Politeknik Negeri Sambas. MIK merupakan wadah inkubasi bisnis di lingkungan kampus yang bertujuan untuk mendorong pengembangan unit usaha mahasiswa dan alumni.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {daftarMIK.length > 0 ? (
                                    daftarMIK.map((item) => (
                                        <div key={item.id} className="border border-gray-200 rounded-lg shadow-sm p-4 hover:shadow-md transition">
                                            <h3 className="text-lg font-semibold text-blue-600 mb-2">{item.nama_mik}</h3>
                                            <p className="text-sm text-gray-700 mb-1"><strong>Bidang Fokus:</strong> {item.bidang_fokus_mik}</p>
                                            <p className="text-sm text-gray-700 mb-1"><strong>Tahun MIK:</strong> {item.tahun_mik}</p>
                                            <p className="text-sm text-gray-700"><strong>Tahun Exit:</strong> {item.tahun_exit_mik}</p>
                                        </div>
                                    ))
                                ) : (
                                    <div className="col-span-full text-center text-gray-500 py-8">
                                        Data Mini Industri Kampus tidak tersedia.
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
