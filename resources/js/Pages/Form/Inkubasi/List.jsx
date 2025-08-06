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
            <div className="py-8">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-md sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className='flex items-center mb-4 justify-between bg-gradient-to-r from-blue-300 via-blue-50 to-white rounded-md p-2'>
                                <div className='flex items-center space-x-4'>
                                    <ApplicationLogo />
                                    <p className='font-bold text-gray-700 text-xl'>UPA-PKK INKUBASI</p>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <input
                                        type="text"
                                        value={keyword}
                                        onChange={(e) => setKeyword(e.target.value)}
                                        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                                        placeholder="Cari nama tenant, bidang fokus, tahun..."
                                        className="border border-gray-300 rounded-md px-3 py-1 w-full md:w-80 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                                    <PrimaryButton onClick={handleSearch}>
                                        Cari
                                    </PrimaryButton>
                                </div>
                            </div>

                            <p className="text-sm text-gray-600 mb-6">
                                Halaman ini menampilkan data kegiatan <strong>Inkubasi Bisnis</strong> yang difasilitasi oleh Unit Pengembangan Karir dan Kewirausahaan (UPA-PKK) Politeknik Negeri Sambas. Inkubasi merupakan proses lanjutan dari pra-inkubasi, di mana tenant (tim atau individu) yang memiliki ide usaha potensial diberikan bimbingan, akses jaringan, serta fasilitas pengembangan bisnis.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {Inkubasi.length > 0 ? (
                                    Inkubasi.map((item, index) => (
                                        <div key={item.id} className="border border-gray-200 rounded-lg shadow-sm p-4 hover:shadow-md transition">
                                            <h3 className="text-lg font-semibold text-blue-600 mb-1">{item.nama_tenant}</h3>
                                            <p className="text-sm text-gray-700 mb-1"><strong>Bidang Fokus:</strong> {item.bidang_fokus_tenant}</p>
                                            <p className="text-sm text-gray-700 mb-1"><strong>Tahun Inkubasi:</strong> {item.tahun_inkubasi_tenant}</p>
                                            <p className="text-sm text-gray-700"><strong>Tahun Exit:</strong> {item.tahun_exit_tenant}</p>
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
