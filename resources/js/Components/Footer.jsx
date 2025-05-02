import React from 'react'
import ApplicationLogo from './ApplicationLogo'
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoEarthOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className='flex w-full p-10 px-16 space-x-20 text-gray-800 bg-gradient-to-r from-blue-300 via-blue-100 to-white'>
        <div className='w-1/2'>
            <div className='flex items-center space-x-4 mb-4'>
                <ApplicationLogo />
                <p className='font-bold text-lg'>Unit Pelaksana Aksi Pemberdayaan dan Kesejahteraan Keluarga.</p>
            </div>
            <p class="text-sm text-justify text-gray-500">
                Unit Pelaksana Aksi Pemberdayaan dan Kesejahteraan Keluarga (UPA-PKK) berkomitmen untuk memberdayakan dan meningkatkan kesejahteraan keluarga melalui berbagai inisiatif berbasis komunitas.
                Misi kami adalah untuk menciptakan pendekatan yang berkelanjutan dan inklusif terhadap kesejahteraan keluarga, serta memberikan dampak positif melalui program-program kolaboratif dan jaringan dukungan.
            </p>
        </div>
        <div className=''>
            <p className='font-bold text-lg mb-4'>Sosial Media</p>
            <div className='space-y-2'>
                <a href="https://www.instagram.com/politekniknegerisambas_/" className='flex items-center text-lg space-x-2 hover:text-blue-500'><FaInstagram /><p>Instasgram</p></a>
                <a href="https://poltesa.ac.id/" className='flex items-center text-lg space-x-2 hover:text-blue-500'><IoEarthOutline /><p>Website</p></a>
                <a href="https://www.facebook.com/politekniknegerisambas" className='flex items-center text-lg space-x-2 hover:text-blue-500'><FaFacebook /><p>Facebook</p></a>
            </div>
        </div>
        <div className=''>
            <p className='font-bold text-lg mb-4'>Lokasi</p>
            <div className='space-y-2'>
                <a href="https://www.instagram.com/politekniknegerisambas_/" className='flex items-center text-lg space-x-2'><FaInstagram /><p>Instasgram</p></a>
                <a href="https://poltesa.ac.id/" className='flex items-center text-lg space-x-2'><IoEarthOutline /><p>Website</p></a>
                <a href="https://www.facebook.com/politekniknegerisambas" className='flex items-center text-lg space-x-2'><FaFacebook /><p>Facebook</p></a>
            </div>
        </div>
    </footer>
  )
}

export default Footer
