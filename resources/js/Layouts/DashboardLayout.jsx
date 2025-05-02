import ApplicationLogo from '@/Components/ApplicationLogo';
import Footer from '@/Components/Footer';
import Helmet from '@/Components/Helmet';
import PrimaryButton from '@/Components/PrimaryButton';
import { Link, usePage } from '@inertiajs/react';

export default function DashboardLayout({ header, children }) {
    const { auth } = usePage().props;

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <Helmet />
            <header className="bg-gradient-to-r from-blue-300 via-blue-50 to-white shadow px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    {auth?.user ? (
                        <Link href={route('dashboard')} className='flex items-center space-x-2'>
                            <ApplicationLogo className="h-8 w-auto text-gray-800" />
                            <p className='font-bold text-2xl text-gray-800'>POLITEKNIK NEGERI SAMBAS</p>
                        </Link>
                    ) : (
                        <Link href="/" className='flex items-center space-x-2'>
                            <ApplicationLogo className="h-8 w-auto text-gray-800" />
                            <p className='font-bold text-2xl text-gray-800'>POLITEKNIK NEGERI SAMBAS</p>
                        </Link>
                    )}
                </div>

                <nav className="space-x-8 flex items-center">
                    <Link
                        className="whitespace-nowrap w-full transition-all duration-200 ease-in-out hover:text-blue-400"
                        href={route('form.alumni.list')}
                        active={route().current('form.alumni.list')}
                    >
                        Alumni
                    </Link>
                    <Link
                        className="whitespace-nowrap w-full transition-all duration-200 ease-in-out hover:text-blue-400"
                        href={route('form.lowongan-pekerjaan.list')}
                        active={route().current('form.lowongan-pekerjaan.list')}
                    >
                        Lowongan Pekerjaan
                    </Link>
                    <Link
                        className="whitespace-nowrap w-full transition-all duration-200 ease-in-out hover:text-blue-400"
                        href={route('form.pra-inkubasi.list')}
                        active={route().current('form.pra-inkubasi.list')}
                    >
                        Pra Inkubasi
                    </Link>
                    <Link
                        className="whitespace-nowrap w-full transition-all duration-200 ease-in-out hover:text-blue-400"
                        href={route('form.inkubasi.list')}
                        active={route().current('form.inkubasi.list')}
                    >
                        Inkubasi
                    </Link>

                    {auth?.user ? (
                        <Link href={route('logout')} method='POST'>
                            <PrimaryButton type="submit">Logout</PrimaryButton>
                        </Link>
                    ) : (
                        <Link href={route('login')}>
                            <PrimaryButton>Login</PrimaryButton>
                        </Link>
                    )}
                </nav>
            </header>

            <main className="flex-1 p-6">
                {children}
            </main>
            <Footer />
        </div>
    );
}
