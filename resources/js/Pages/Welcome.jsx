import ImageSlider from '@/Components/ImageSlider'
import DashboardLayout from '@/Layouts/DashboardLayout'
import { Head } from '@inertiajs/react'
import React from 'react'

const Welcome = () => {
  return (
    <DashboardLayout>
      <Head title="Dashboard" />

      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center min-h-screen"
        style={{
          backgroundImage: "url('/images/background.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-blue-300 via-transparent to-transparent z-10"></div>
        <div className="relative z-20 bg-gradient-to-r from-blue-300 to-transparent min-h-screen flex items-center">
          <div className="overflow-hidden h-full flex flex-col md:flex-row items-center w-full px-6 sm:px-10 md:mx-14">
            <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
              <p className="text-white font-bold text-2xl sm:text-3xl md:text-4xl leading-snug">
                Unit Penunjang Akademik Pengembangan Karir dan Kewirausahaan
              </p>
              <p className="text-white font-extralight text-sm sm:text-base md:text-lg leading-relaxed text-center md:text-left">
                Unit ini berperan sebagai fasilitator dalam membekali mahasiswa dengan keterampilan dunia kerja dan jiwa kewirausahaan.
                Kami menyediakan berbagai program seperti pelatihan karir, seminar kewirausahaan, magang, dan pendampingan startup untuk mendukung kesiapan lulusan menghadapi tantangan global.
                Melalui kolaborasi dengan dunia industri dan institusi terkait, kami mendorong terciptanya lulusan yang mandiri, inovatif, dan kompetitif.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 sm:p-10 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-0">
          <p className="text-black text-justify sm:text-center leading-relaxed text-sm sm:text-base md:text-lg">
            Unit Pengembangan Karir dan Kewirausahaan (PKK) adalah salah satu Unit Penunjang Akademik (UPA) di lingkungan Politeknik Negeri Sambas (Poltesa) yang berperan dalam memfasilitasi pengembangan kompetensi mahasiswa, khususnya dalam menghadapi dunia kerja dan membangun semangat kewirausahaan.
            Unit ini dibentuk sebagai langkah strategis untuk meningkatkan daya saing lulusan melalui berbagai program pengembangan karir, pelatihan soft skills, konseling, serta pendampingan wirausaha.
            Selain menjembatani hubungan antara dunia akademik dan dunia industri, PKK juga mendorong terciptanya wirausaha muda berbasis inovasi dan teknologi guna mendukung pembangunan ekonomi daerah dan nasional.
          </p>
        </div>

        <div className="mt-8">
          <ImageSlider />
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Welcome
