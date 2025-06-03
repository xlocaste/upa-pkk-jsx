import ApplicationLogo from "@/Components/ApplicationLogo";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import React from "react";

export default function Update({ mahasiswa }) {
    const { data, setData, put, processing, errors } = useForm({
        nama: mahasiswa.nama || "",
        nim: mahasiswa.nim || "",
        jenis_kelamin: mahasiswa.jenis_kelamin || "",
        prodi: mahasiswa.prodi || "",
        status: mahasiswa.status || "",
        semester: mahasiswa.semester || "",
        nomor_sk: mahasiswa.nomor_sk || "",
        tanggal_sk: mahasiswa.tanggal_sk || "",
        keterangan: mahasiswa.keterangan || "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const confirmed = window.confirm("Apakah Anda yakin ingin menyimpan data ini?");
        if (!confirmed) return;
        put(route("authentication.mahasiswa.update", mahasiswa.id));
    };

    return (
        <AuthenticatedLayout>
            <Head title="Update Mahasiswa" />
            <div className="py-8">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-md sm:rounded-lg">
                        <div className="flex items-center space-x-4 bg-gradient-to-r from-blue-300 via-blue-50 to-white rounded-t-md p-2 pl-6 mb-4">
                            <ApplicationLogo />
                            <p className="font-bold text-gray-700 text-xl">
                                UPDATE MAHASISWA
                            </p>
                        </div>
                        <div className="p-6 text-gray-900">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="flex space-x-8">
                                    <div className="w-1/2">
                                        <label className="block text-sm font-medium">Nama</label>
                                        <input type="text" name="nama" value={data.nama} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2" />
                                        {errors.nama && <div className="text-red-500 text-sm">{errors.nama}</div>}
                                    </div>
                                    <div className="w-1/2">
                                        <label className="block text-sm font-medium">NIM</label>
                                        <input disabled type="text" name="nim" value={data.nim} className="w-full border border-gray-300 rounded px-3 py-2" />
                                        {errors.nim && <div className="text-red-500 text-sm">{errors.nim}</div>}
                                    </div>
                                </div>

                                <div className="flex space-x-8">
                                    <div className="w-1/2">
                                        <label className="block text-sm font-medium">Jenis Kelamin</label>
                                        <select name="jenis_kelamin" value={data.jenis_kelamin} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2">
                                            <option value="">Pilih</option>
                                            <option value="Laki-laki">Laki-laki</option>
                                            <option value="Perempuan">Perempuan</option>
                                        </select>
                                        {errors.jenis_kelamin && <div className="text-red-500 text-sm">{errors.jenis_kelamin}</div>}
                                    </div>
                                    <div className="w-1/2">
                                        <label className="block text-sm font-medium">Program Studi</label>
                                        <input type="text" name="prodi" value={data.prodi} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2" />
                                        {errors.prodi && <div className="text-red-500 text-sm">{errors.prodi}</div>}
                                    </div>
                                </div>

                                <div className="flex space-x-8">
                                    <div className="w-1/2">
                                        <label className="block text-sm font-medium">Status</label>
                                        <select name="status" value={data.status} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2">
                                            <option value="">Pilih</option>
                                            <option value="aktif">Aktif</option>
                                            <option value="cuti">Cuti</option>
                                            <option value="do">DO</option>
                                        </select>
                                        {errors.status && <div className="text-red-500 text-sm">{errors.status}</div>}
                                    </div>
                                    <div className="w-1/2">
                                        <label className="block text-sm font-medium">Semester</label>
                                        <input type="number" name="semester" value={data.semester} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2" />
                                        {errors.semester && <div className="text-red-500 text-sm">{errors.semester}</div>}
                                    </div>
                                </div>

                                <div className="flex space-x-8">
                                    <div className="w-1/2">
                                        <label className="block text-sm font-medium">Nomor SK</label>
                                        <input type="text" name="nomor_sk" value={data.nomor_sk} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2" />
                                        {errors.nomor_sk && <div className="text-red-500 text-sm">{errors.nomor_sk}</div>}
                                    </div>
                                    <div className="w-1/2">
                                        <label className="block text-sm font-medium">Tanggal SK</label>
                                        <input type="date" name="tanggal_sk" value={data.tanggal_sk} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2" />
                                        {errors.tanggal_sk && <div className="text-red-500 text-sm">{errors.tanggal_sk}</div>}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium">Keterangan</label>
                                    <textarea name="keterangan" value={data.keterangan} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2"></textarea>
                                    {errors.keterangan && <div className="text-red-500 text-sm">{errors.keterangan}</div>}
                                </div>

                                <div className="flex justify-end space-x-4 pt-4">
                                    <SecondaryButton>
                                        <Link href={route("authentication.mahasiswa.index")}>KEMBALI</Link>
                                    </SecondaryButton>
                                    <PrimaryButton type="submit" disabled={processing}>Update</PrimaryButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
