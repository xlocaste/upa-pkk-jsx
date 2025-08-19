import React, { useState } from 'react';
import { router, Head } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import ApplicationLogo from '@/Components/ApplicationLogo';
import PrimaryButton from '@/Components/PrimaryButton';

export default function InkubasiList({ Inkubasi, filters }) {
    const [keyword, setKeyword] = useState(filters.keyword || '');

    const handleSearch = () => {
        router.get(route('form.inkubasi.list'), { keyword }, { preserveState: true });
    };

    return (
        <DashboardLayout>
            <Head title="Inkubasi" />
            <div className="p-4 md:py-8">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-md rounded-lg sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            {/* Header + Search */}
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 bg-gradient-to-r from-blue-300 via-blue-50 to-white rounded-md p-3 gap-3">
                                <div className="flex items-center space-x-3">
                                    <ApplicationLogo />
                                    <p className="font-bold text-gray-700 text-xl">UPA-PKK INKUBASI</p>
                                </div>
                                <div className="flex flex-row items-stretch sm:items-center gap-2 w-full md:w-auto">
                                    <input
                                        type="text"
                                        value={keyword}
                                        onChange={(e) => setKeyword(e.target.value)}
                                        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                                        placeholder="Cari nama tenant, bidang fokus, tahun..."
                                        className="border border-gray-300 rounded-md px-3 py-2 w-full sm:w-72 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                                    <PrimaryButton onClick={handleSearch} className="w-auto">
                                        Cari
                                    </PrimaryButton>
                                </div>
                            </div>

                            {/* Deskripsi */}
                            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                                Halaman ini menampilkan data kegiatan <strong>Inkubasi Bisnis</strong> yang difasilitasi oleh Unit Pengembangan Karir dan Kewirausahaan (UPA-PKK) Politeknik Negeri Sambas. Inkubasi merupakan proses lanjutan dari pra-inkubasi, di mana tenant (tim atau individu) yang memiliki ide usaha potensial diberikan bimbingan, akses jaringan, serta fasilitas pengembangan bisnis.
                            </p>

                            {/* Cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {Inkubasi.length > 0 ? (
                                    Inkubasi.map((item) => (
                                        <div
                                            key={item.id}
                                            className="border border-gray-200 rounded-lg shadow-sm p-4 hover:shadow-md transition bg-white"
                                        >
                                            <h3 className="text-lg font-bold text-blue-600 mb-2">{item.nama_tenant}</h3>
                                            <p className="text-sm text-gray-700 mb-1">
                                                <strong>Bidang Fokus:</strong> {item.bidang_fokus_tenant}
                                            </p>
                                            <p className="text-sm text-gray-700 mb-1">
                                                <strong>Tahun Inkubasi:</strong> {item.tahun_inkubasi_tenant}
                                            </p>
                                            <p className="text-sm text-gray-700">
                                                <strong>Tahun Exit:</strong> {item.tahun_exit_tenant}
                                            </p>
                                        </div>
                                    ))
                                ) : (
                                    <div className="col-span-full text-center text-gray-500 py-8">
                                        Data inkubasi tidak tersedia.
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
