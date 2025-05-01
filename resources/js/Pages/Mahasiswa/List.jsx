import React from 'react';
import DashboardLayout from '@/Layouts/DashboardLayout';

export default function MahasiswaList({ Mahasiswa, auth }) {
    return (
        <DashboardLayout>
            <h1 className="text-2xl font-bold mb-6">Daftar Mahasiswa</h1>

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr className="bg-gray-100 text-left">
                            <th className="py-2 px-4 border-b">No</th>
                            <th className="py-2 px-4 border-b">Nama</th>
                            <th className="py-2 px-4 border-b">NIM</th>
                            <th className="py-2 px-4 border-b">Semester</th>
                            <th className="py-2 px-4 border-b">IPK</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Mahasiswa.length > 0 ? (
                            Mahasiswa.map((mhs, index) => (
                                <tr key={mhs.id} className="hover:bg-gray-50">
                                    <td className="py-2 px-4 border-b">{index + 1}</td>
                                    <td className="py-2 px-4 border-b">{mhs.nama}</td>
                                    <td className="py-2 px-4 border-b">{mhs.nim}</td>
                                    <td className="py-2 px-4 border-b">{mhs.semester}</td>
                                    <td className="py-2 px-4 border-b">{mhs.ipk}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="text-center py-4 text-gray-500">
                                    Data mahasiswa tidak tersedia.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </DashboardLayout>
    );
}
