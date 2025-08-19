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
            <div className="p-4 md:py-8 md:px-0">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-md rounded-lg sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            {/* Header + Search */}
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 bg-gradient-to-r from-blue-300 via-blue-50 to-white rounded-md p-4">
                                <div className="flex items-center space-x-3">
                                    <ApplicationLogo />
                                    <p className="font-bold text-gray-700 text-lg sm:text-xl">
                                        UPA-PKK MINI INDUSTRI KAMPUS
                                    </p>
                                </div>
                                <div className="flex w-full sm:w-auto items-center gap-2">
                                    <input
                                        type="text"
                                        value={keyword}
                                        onChange={(e) => setKeyword(e.target.value)}
                                        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                                        placeholder="Cari nama tenant..."
                                        className="border border-gray-300 rounded-md px-3 py-2 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                                    <PrimaryButton onClick={handleSearch}>
                                        Cari
                                    </PrimaryButton>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                                Halaman ini menampilkan data <strong>Mini Industri Kampus (MIK)</strong> yang dikelola oleh UPA-PKK Politeknik Negeri Sambas.
                                MIK merupakan wadah inkubasi bisnis di lingkungan kampus yang bertujuan untuk mendorong pengembangan unit usaha mahasiswa dan alumni.
                            </p>

                            {/* Grid List */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {daftarMIK.length > 0 ? (
                                    daftarMIK.map((item) => (
                                        <div
                                            key={item.id}
                                            className="border border-gray-200 rounded-xl shadow-sm p-5 hover:shadow-lg transition bg-white"
                                        >
                                            <h3 className="text-lg font-bold text-blue-600 mb-3">
                                                {item.nama_mik}
                                            </h3>
                                            <div className="space-y-1 text-sm text-gray-700">
                                                <p><span className="font-semibold">Bidang Fokus:</span> {item.bidang_fokus_mik}</p>
                                                <p><span className="font-semibold">Tahun MIK:</span> {item.tahun_mik}</p>
                                                <p><span className="font-semibold">Tahun Exit:</span> {item.tahun_exit_mik}</p>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="col-span-full text-center text-gray-500 py-10">
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
