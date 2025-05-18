import DashboardLayout from '@/Layouts/DashboardLayout'
import { Head } from '@inertiajs/react'
import React from 'react'

const Welcome = () => {
  return (
    <DashboardLayout>
        <Head title="Dashboard" />
        <div
            className="bg-cover bg-center min-h-screen"
            style={{
            backgroundImage: "url('/images/background.jpeg')",
            }}
        >
            <div className="bg-gradient-to-r from-blue-300 to-transparent h-screen">
                <div className="overflow-hidden sm:rounded-lg h-full flex items-center mx-14">
                    <div className="w-1/2">
                    <p className='text-white font-bold text-4xl'>
                        Unit Pelaksana Aksi Pemberdayaan dan Kesejahteraan Keluarga.
                    </p>
                    <p className='text-white font-extralight'>
                        Unit Pelaksana Aksi Pemberdayaan dan Kesejahteraan Keluarga (UPA-PKK) berkomitmen untuk memberdayakan dan meningkatkan kesejahteraan keluarga melalui berbagai inisiatif berbasis komunitas.
                    Misi kami adalah untuk menciptakan pendekatan yang berkelanjutan dan inklusif terhadap kesejahteraan keluarga, serta memberikan dampak positif melalui program-program kolaboratif dan jaringan dukungan.
                    </p>
                    </div>
                </div>
            </div>
        </div>
    </DashboardLayout>
  )
}

export default Welcome
