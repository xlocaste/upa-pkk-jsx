import React, { useState } from 'react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head, router } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import PrimaryButton from '@/Components/PrimaryButton';

export default function PraInkubasiList({ praInkubasi, filters }) {
    console.log(praInkubasi)
    const [keyword, setKeyword] = useState(filters.keyword || '');

    const handleSearch = () => {
        router.get(route('form.pra-inkubasi.list'), { keyword }, { preserveState: true });
    };

    return (
        <DashboardLayout>
            <Head title="Pra-Inkubasi" />
            <div className="py-8">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-md sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className='flex items-center mb-4 justify-between bg-gradient-to-r from-blue-300 via-blue-50 to-white rounded-md p-2'>
                                <div className='flex items-center space-x-4'>
                                    <ApplicationLogo />
                                    <p className='font-bold text-gray-700 text-xl'>UPA-PKK PRA-INKUBASI</p>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <input
                                        type="text"
                                        value={keyword}
                                        onChange={(e) => setKeyword(e.target.value)}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter') handleSearch();
                                        }}
                                        placeholder="Cari nama ketua tim, judul proposal..."
                                        className="border border-gray-300 rounded-md px-3 py-1 w-full md:w-80 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                                    <PrimaryButton onClick={handleSearch}>
                                        Cari
                                    </PrimaryButton>
                                </div>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="min-w-full bg-white border border-gray-200">
                                    <thead>
                                        <tr className="bg-gray-100 text-left text-sm">
                                            <th className="py-2 px-4 border-b">No</th>
                                            <th className="py-2 px-4 border-b">Nama Ketua Tim</th>
                                            <th className="py-2 px-4 border-b">Status Mahasiswa/Alumni</th>
                                            <th className="py-2 px-4 border-b">Judul Proposal</th>
                                            <th className="py-2 px-4 border-b">Dosen Pembimbing</th>
                                            <th className="py-2 px-4 border-b">Usulan Anggaran</th>
                                            <th className="py-2 px-4 border-b">No. WA</th>
                                            <th className="py-2 px-4 border-b">Keterangan</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {praInkubasi?.length > 0 ? (
                                            praInkubasi.map((item) => (
                                                <tr key={item.id} className="hover:bg-gray-50 text-sm">
                                                    <td className="py-2 px-4 border-b">{item.nama_ketua_tim}</td>
                                                    <td className="py-2 px-4 border-b">{item.status_mahasiswa_alumni}</td>
                                                    <td className="py-2 px-4 border-b">{item.judul_proposal}</td>
                                                    <td className="py-2 px-4 border-b">{item.dosen_pembimbing}</td>
                                                    <td className="py-2 px-4 border-b">{item.usulan_anggaran}</td>
                                                    <td className="py-2 px-4 border-b">{item.no_wa}</td>
                                                    <td className="py-2 px-4 border-b">{item.keterangan || '-'}</td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="8" className="text-center py-4 text-gray-500">
                                                    Data pra-inkubasi tidak tersedia.
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
