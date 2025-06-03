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
                        Unit Penunjang Akademik Pengembangan Karir dan Kewirausahaan
                    </p>
                    <p className='text-white font-extralight'>
                        Unit ini berperan sebagai fasilitator dalam membekali mahasiswa dengan keterampilan dunia kerja dan jiwa kewirausahaan.
                        Kami menyediakan berbagai program seperti pelatihan karir, seminar kewirausahaan, magang, dan pendampingan startup untuk mendukung kesiapan lulusan menghadapi tantangan global.
                        Melalui kolaborasi dengan dunia industri dan institusi terkait, kami mendorong terciptanya lulusan yang mandiri, inovatif, dan kompetitif.
                    </p>
                    </div>
                </div>
            </div>
        </div>
    </DashboardLayout>
  )
}

export default Welcome
