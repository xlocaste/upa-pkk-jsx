import DashboardLayout from '@/Layouts/DashboardLayout'
import { Head } from '@inertiajs/react'
import React from 'react'

const Welcome = () => {
  return (
    <DashboardLayout>
        <Head title="Dashboard" />
        <div className="py-8">
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                    <div className="p-6 text-gray-900">
                        Unit Pelaksana Aksi Pemberdayaan dan Kesejahteraan Keluarga.
                    </div>
                </div>
            </div>
        </div>
    </DashboardLayout>
  )
}

export default Welcome
