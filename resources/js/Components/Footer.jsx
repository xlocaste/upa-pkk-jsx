import React from 'react'
import ApplicationLogo from './ApplicationLogo'
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoEarthOutline } from "react-icons/io5";

const Footer = () => {
    const lat = 1.3824724514101916;
    const lng = 109.31750568465527;
    const mapSrc = `https://www.google.com/maps?q=${lat},${lng}&hl=es;z=14&output=embed`;
    return (
        <footer className='flex w-full p-10 px-16 space-x-20 text-gray-800 bg-gradient-to-r from-blue-300 via-blue-100 to-white'>
            <div className='w-1/2'>
                <div className='flex items-center space-x-4 mb-4'>
                    <ApplicationLogo />
                    <p className='font-bold text-lg'>Unit Penunjang Akademik Pengembangan Karir dan Kewirausahaan</p>
                </div>
                <p class="text-sm text-justify text-gray-500">
                    Unit ini berperan sebagai fasilitator dalam membekali mahasiswa dengan keterampilan dunia kerja dan jiwa kewirausahaan.
                    Kami menyediakan berbagai program seperti pelatihan karir, seminar kewirausahaan, magang, dan pendampingan startup untuk mendukung kesiapan lulusan menghadapi tantangan global.
                    Melalui kolaborasi dengan dunia industri dan institusi terkait, kami mendorong terciptanya lulusan yang mandiri, inovatif, dan kompetitif.
                </p>
            </div>
            <div className=''>
                <p className='font-bold text-lg mb-4'>Sosial Media</p>
                <div className='space-y-2'>
                    <a href="https://www.instagram.com/politekniknegerisambas_/" className='flex items-center text-lg space-x-2 hover:text-blue-500'><FaInstagram /><p>politekniknegerisambas_</p></a>
                    <a href="https://poltesa.ac.id/" className='flex items-center text-lg space-x-2 hover:text-blue-500'><IoEarthOutline /><p>www.poltesa.ac.id</p></a>
                    <a href="https://www.facebook.com/politekniknegerisambas" className='flex items-center text-lg space-x-2 hover:text-blue-500'><FaFacebook /><p>politekniknegerisambas</p></a>
                </div>
            </div>
            <div className='w-1/3'>
                <p className='font-bold text-lg mb-4'>Lokasi Kami</p>
                <div className="w-full">
                    <iframe
                    title="Lokasi Kami"
                    src={mapSrc}
                    width="100%"
                    height="50%"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg border-0"
                    ></iframe>
                </div>
                <p className="text-justify mt-4 text-sm">&copy; 2025 Politeknik Negeri Sambas. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
