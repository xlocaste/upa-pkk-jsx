import ApplicationLogo from "@/Components/ApplicationLogo";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

export default function Update({ lowonganKerja }) {
    const [preview, setPreview] = useState(null);
    const { data, setData, post, processing, errors, progress } = useForm({
        _method: "put",
        image: null,
        judul_lowongan_kerja: lowonganKerja.judul_lowongan_kerja || "",
        deskripsi: lowonganKerja.deskripsi || "",
        kontak: lowonganKerja.kontak || "",
    });

    useEffect(() => {
        if (lowonganKerja.image) {
            setPreview(`/storage/${lowonganKerja.image}`);
        }
    }, [lowonganKerja.image]);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "image") {
            const file = files[0];
            if (file) {
                setPreview(URL.createObjectURL(file));
                setData("image", file);
            } else {
                setData("image", null);
            }
        } else {
            setData(name, value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(
            route("authentication.lowongan-pekerjaan.update", lowonganKerja.id)
        );
    };

    return (
        <AuthenticatedLayout>
            <Head title="Update Job Hunter" />
            <div className="py-8">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-md sm:rounded-lg">
                        <div className="flex items-center space-x-4 bg-gradient-to-r from-blue-300 via-blue-50 to-white rounded-t-md p-2 pl-6 mb-4">
                            <ApplicationLogo />
                            <p className="font-bold text-gray-700 text-xl uppercase">
                                UPA-PKK Job Hunter
                            </p>
                        </div>
                        <div className="p-6 text-gray-900">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="flex w h-full space-x-8">
                                    <div className="w-1/2">
                                        <label className="block text-sm font-medium">
                                            Judul Lowongan
                                        </label>
                                        <input
                                            type="text"
                                            name="judul_lowongan_kerja"
                                            value={data.judul_lowongan_kerja}
                                            onChange={handleChange}
                                            className="w-full border border-gray-300 rounded px-3 py-2"
                                        />
                                        {errors.judul_lowongan_kerja && (
                                            <div className="text-red-500 text-sm">
                                                {errors.judul_lowongan_kerja}
                                            </div>
                                        )}
                                    </div>

                                    <div className="w-1/2">
                                        <label className="block text-sm font-medium">
                                            Kontak
                                        </label>
                                        <input
                                            type="text"
                                            name="kontak"
                                            value={data.kontak}
                                            onChange={handleChange}
                                            className="w-full border border-gray-300 rounded px-3 py-2"
                                        />
                                        {errors.kontak && (
                                            <div className="text-red-500 text-sm">
                                                {errors.kontak}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="flex w h-full space-x-8">
                                    <div className="w-1/2">
                                        <label className="block text-sm font-medium">
                                            Deskripsi
                                        </label>
                                        <textarea
                                            name="deskripsi"
                                            value={data.deskripsi}
                                            onChange={handleChange}
                                            className="w-full border border-gray-300 rounded px-3 py-2 h-32 resize-none"
                                        />
                                        {errors.deskripsi && (
                                            <div className="text-red-500 text-sm">
                                                {errors.deskripsi}
                                            </div>
                                        )}
                                    </div>

                                    <div className="w-1/2">
                                        <label className="block text-sm font-medium">
                                            Gambar
                                        </label>
                                        <input
                                            name="image"
                                            type="file"
                                            onChange={handleChange}
                                            className="w-full border border-gray-300 rounded px-3 py-2"
                                        />
                                        {preview && (
                                            <div className="flex justify-center py-2">
                                                <img
                                                    src={preview}
                                                    alt="Preview"
                                                    width={200}
                                                    height={200}
                                                    className="object-cover rounded-md"
                                                />
                                            </div>
                                        )}
                                        {progress && (
                                            <div className="text-sm text-blue-600 mt-1">
                                                Uploading...{" "}
                                                {progress.percentage}%
                                            </div>
                                        )}
                                        {errors.image && (
                                            <div className="text-red-500 text-sm">
                                                {errors.image}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="flex justify-end space-x-4 pt-4">
                                    <SecondaryButton>
                                        <Link
                                            href={route(
                                                "authentication.lowongan-pekerjaan.index"
                                            )}
                                        >
                                            KEMBALI
                                        </Link>
                                    </SecondaryButton>
                                    <PrimaryButton
                                        type="submit"
                                        disabled={processing}
                                    >
                                        Update
                                    </PrimaryButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
