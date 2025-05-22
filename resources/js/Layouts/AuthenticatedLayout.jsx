import ApplicationLogo from '@/Components/ApplicationLogo';
import { HiOutlineLogout, HiOutlineOfficeBuilding } from "react-icons/hi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { MdOutlineManageAccounts, MdOutlineSpaceDashboard } from "react-icons/md";
import { MdWorkOutline } from "react-icons/md";
import { PiStudent } from "react-icons/pi";
import { Link, usePage } from '@inertiajs/react';
import { CgProfile } from "react-icons/cg";
import { useState } from 'react';
import Helmet from '@/Components/Helmet';

export default function AuthenticatedLayout({ children }) {
    const [showData, setShowData] = useState(true);
    const { auth } = usePage().props;
    const user = auth.user;

    return (
        <div className="flex min-h-screen bg-gray-100">
            <Helmet />
            <aside className="w-64 h-screen fixed bg-gradient-to-t from-blue-300 via-blue-200 to-white shadow-lg flex flex-col">
                <img
                    src="/images/siluet.png"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover z-0 opacity-20"
                />
                <div className="relative flex py-3 items-center justify-center">
                    <Link href="/">
                        <ApplicationLogo className="h-10 w-auto fill-current text-gray-800" />
                    </Link>
                </div>

                <nav className="relative p-4 space-y-3 flex flex-col mb-4">
                    <Link
                        className="flex items-center space-x-2 text-xl w-full transition-all duration-200 ease-in-out hover:font-bold"
                        href="/"
                    >
                        <MdOutlineSpaceDashboard /><p>Dashboard</p>
                    </Link>
                    <Link
                        className="flex items-center space-x-2 text-xl w-full transition-all duration-200 ease-in-out hover:font-bold"
                        href={route('authentication.mahasiswa.index')}
                        active={route().current('authentication.mahasiswa.index')}
                    >
                        <PiStudent /><p>Mahasiswa</p>
                    </Link>
                    <Link
                        className="flex items-center space-x-2 text-xl w-full transition-all duration-200 ease-in-out hover:font-bold"
                        href={route('authentication.alumni.index')}
                        active={route().current('authentication.alumni.index')}
                    >
                        <PiStudent /><p>Alumni</p>
                    </Link>
                    <Link
                        className="flex items-center space-x-2 text-xl w-full transition-all duration-200 ease-in-out hover:font-bold"
                        href={route('authentication.lowongan-pekerjaan.index')}
                        active={route().current('authentication.lowongan-pekerjaan.index')}
                    >
                        <MdWorkOutline /><p>Job Hunter</p>
                    </Link>
                    <Link
                        className="flex items-center space-x-2 text-xl w-full transition-all duration-200 ease-in-out hover:font-bold"
                        href={route('authentication.pra-inkubasi.index')}
                        active={route().current('authentication.pra-inkubasi.index')}
                    >
                        <HiOutlineOfficeBuilding /><p>Pra Inkubasi</p>
                    </Link>
                    <Link
                        className="flex items-center space-x-2 text-xl w-full transition-all duration-200 ease-in-out hover:font-bold"
                        href={route('authentication.inkubasi.index')}
                        active={route().current('authentication.inkubasi.index')}
                    >
                        <HiOutlineBuildingOffice2 /><p>Inkubasi</p>
                    </Link>
                    <Link
                        className="flex items-center space-x-2 text-xl w-full transition-all duration-200 ease-in-out hover:font-bold"
                        href={route('authentication.kerja-sama-industri.index')}
                        active={route().current('authentication.kerja-sama-industri.index')}
                    >
                        <HiOutlineBuildingOffice2 /><p>Kerja Sama Industri</p>
                    </Link>
                    <Link
                        className="flex items-center space-x-2 text-xl w-full transition-all duration-200 ease-in-out hover:font-bold"
                        href={route('authentication.mini-industri-kampus.index')}
                        active={route().current('authentication.mini-industri-kampus.index')}
                    >
                        <HiOutlineBuildingOffice2 /><p>Mini Industri Kampus</p>
                    </Link>
                </nav>

                <div className="relative px-4 pb-0">
                    <button onClick={() => setShowData((prev) => !prev)} className="mb-4 w-full flex items-center space-x-2">
                        <span className="flex w-full items-center cursor-pointer space-x-2 text-sm font-medium text-gray-700 hover:text-gray-900">
                            <MdOutlineManageAccounts className='text-xl'/>
                            <div className='flex items-center justify-between w-full'>
                                <p className='text-xl'>Account</p>
                                <svg
                                    className={`w-4 h-4 transition-transform duration-200 ${showData ? 'rotate-180' : ''}`}
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                        </span>
                    </button>

                    <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out transform origin-top
                            ${showData ? 'opacity-100 translate-y-0 max-h-40' : 'opacity-0 -translate-y-2 max-h-0 pointer-events-none'}
                        `}
                    >
                        <div className="flex flex-col items-start space-y-2 pl-2">
                            <Link className='w-full flex items-center space-x-2' href={route('profile.edit')}>
                                <CgProfile />
                                <p>Profile</p>
                            </Link>
                            <Link className='flex items-center space-x-2' href={route('logout')} method="post" as="button">
                                <HiOutlineLogout />
                                <p>Log Out</p>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="absolute w-full bottom-2 text-xs text-gray-500 mt-6 text-center">
                    {user.email}
                </div>
            </aside>

            <div className="flex-1 flex flex-col">
                <div className='bg-gradient-to-l from-blue-300 via-blue-200 to-white ml-64 py-5 text-center'>
                    <p className='font-bold'>Unit Pelaksana Aksi Pemberdayaan dan Kesejahteraan Keluarga.</p>
                </div>
                <main className="p-6 ml-64">{children}</main>
            </div>
        </div>
    );
}
