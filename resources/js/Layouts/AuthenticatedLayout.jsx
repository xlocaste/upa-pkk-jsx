import ApplicationLogo from '@/Components/ApplicationLogo';
import { HiOutlineLogout } from "react-icons/hi";
import { MdOutlineManageAccounts } from "react-icons/md";
import { Link, usePage } from '@inertiajs/react';
import { CgProfile } from "react-icons/cg";
import { useState } from 'react';

export default function AuthenticatedLayout({ children }) {
    const [showData, setShowData] = useState(false);
    const { auth } = usePage().props;
    const user = auth.user;

    return (
        <div className="flex min-h-screen bg-gray-100">
            <aside className="w-64 bg-white shadow-lg flex flex-col">
                <div className="flex h-16 items-center justify-center border-b">
                    <Link href="/">
                        <ApplicationLogo className="h-10 w-auto fill-current text-gray-800" />
                    </Link>
                </div>

                <nav className="p-4 space-y-2">
                    <Link className='text-xl' href={route('dashboard')} active={route().current('dashboard')}>
                        Dashboard
                    </Link>
                </nav>

                <div className="border-t p-4">
                    <button onClick={() => setShowData((prev) => !prev)} className="mb-4 w-full flex items-center space-x-2">
                        <span className="flex w-full items-center cursor-pointer space-x-2 text-sm font-medium text-gray-700 hover:text-gray-900">
                            <MdOutlineManageAccounts className='text-xl'/>
                            <div className='flex items-center justify-between w-full'>
                                <p className='text-xl'>Account</p>
                                <svg
                                    className="w-4 h-4"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        className='flex items-end'
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                        </span>
                    </button>

                    {showData && (
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
                    )}
                    <div className="text-xs text-gray-500 mt-1">
                        {user.email}
                    </div>
                </div>
            </aside>

            <div className="flex-1 flex flex-col">
                <div className='bg-white py-5 text-center'>
                    <p className='font-bold'>Unit Pelaksana Aksi Pemberdayaan dan Kesejahteraan Keluarga.</p>
                </div>
                <main className="p-6">{children}</main>
            </div>
        </div>
    );
}
