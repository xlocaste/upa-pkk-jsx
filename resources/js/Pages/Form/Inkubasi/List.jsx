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

                            <p className="text-sm text-gray-600 mb-4">
                                Halaman ini menampilkan data kegiatan *Inkubasi Bisnis* yang difasilitasi oleh Unit Pengembangan Karir dan Kewirausahaan (UPA-PKK) Politeknik Negeri Sambas.
                                Inkubasi merupakan proses lanjutan dari pra-inkubasi, di mana tenant (tim atau individu) yang memiliki ide usaha potensial diberikan bimbingan, akses jaringan, serta fasilitas pengembangan bisnis.
                                Informasi dalam tabel ini mencakup nama tenant, fokus bidang usaha, serta tahun dimulainya dan berakhirnya program inkubasi.
                                Tujuan dari program ini adalah mencetak wirausahawan muda mandiri yang siap bersaing di pasar.
                            </p>

                            <table className="min-w-full bg-white border border-gray-200">
                                <thead>
                                    <tr className="bg-gray-100 text-left">
                                        <th className="py-2 px-4 border-b">No</th>
                                        <th className="py-2 px-4 border-b">Nama Tenant</th>
                                        <th className="py-2 px-4 border-b">Bidang Fokus</th>
                                        <th className="py-2 px-4 border-b">Tahun Inkubasi</th>
                                        <th className="py-2 px-4 border-b">Tahun Exit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Inkubasi.length > 0 ? (
                                        Inkubasi.map((item, index) => (
                                            <tr key={item.id} className="hover:bg-gray-50">
                                                <td className="py-2 px-4 border-b">{index + 1}</td>
                                                <td className="py-2 px-4 border-b">{item.nama_tenant}</td>
                                                <td className="py-2 px-4 border-b">{item.bidang_fokus_tenant}</td>
                                                <td className="py-2 px-4 border-b">{item.tahun_inkubasi_tenant}</td>
                                                <td className="py-2 px-4 border-b">{item.tahun_exit_tenant}</td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="5" className="text-center py-4 text-gray-500">
                                                Data inkubasi tidak tersedia.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
