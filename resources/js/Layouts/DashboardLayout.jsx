import ApplicationLogo from '@/Components/ApplicationLogo';
import Footer from '@/Components/Footer';
import Helmet from '@/Components/Helmet';
import PrimaryButton from '@/Components/PrimaryButton';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function DashboardLayout({ header, children }) {
    const { auth } = usePage().props;
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <Helmet />

            {/* Header */}
            <header className="bg-gradient-to-r from-blue-300 via-blue-50 to-white shadow px-4 sm:px-6 py-6 flex items-center justify-between relative z-50">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    {auth?.user ? (
                        <Link href={route('dashboard')} className="flex items-center space-x-2">
                            <ApplicationLogo className="h-8 w-auto text-gray-800" />
                            <p className="font-bold text-lg sm:text-xl md:text-2xl text-gray-800">
                                POLITEKNIK NEGERI SAMBAS
                            </p>
                        </Link>
                    ) : (
                        <Link href="/" className="flex items-center space-x-2">
                            <ApplicationLogo className="h-8 w-auto text-gray-800" />
                            <p className="font-bold text-lg sm:text-xl md:text-2xl text-gray-800">
                                POLITEKNIK NEGERI SAMBAS
                            </p>
                        </Link>
                    )}
                </div>

                {/* Tombol hamburger untuk mobile */}
                <button
                    className="md:hidden text-gray-800"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Menu navigasi desktop */}
                <nav className="hidden md:flex space-x-6 items-center">
                    <NavLinks auth={auth} />
                </nav>

                {/* Menu navigasi mobile absolute */}
                {menuOpen && (
                    <nav className="absolute top-full right-0 h-screen w-56 bg-white shadow-lg p-4 space-y-4 md:hidden z-50">
                        <NavLinks auth={auth} isMobile />
                    </nav>
                )}
            </header>

            {/* Content */}
            <main className="flex-1">{children}</main>
            <Footer />
        </div>
    );
}

function NavLinks({ auth, isMobile }) {
    const linkClass = `block transition-all duration-200 ease-in-out hover:text-blue-400 ${
        isMobile ? 'py-2 border-b border-gray-200 last:border-b-0' : ''
    }`;

    return (
        <>
            <Link className={linkClass} href={route('form.alumni.list')}>
                Alumni
            </Link>
            <Link className={linkClass} href={route('form.lowongan-pekerjaan.list')}>
                Job Hunter Zone
            </Link>
            <Link className={linkClass} href={route('form.pra-inkubasi.list')}>
                Pra Inkubasi
            </Link>
            <Link className={linkClass} href={route('form.inkubasi.list')}>
                Inkubasi
            </Link>
            <Link className={linkClass} href={route('form.kerja-sama-industri.list')}>
                Kerja Sama Industri
            </Link>
            <Link className={linkClass} href={route('form.mini-industri-kampus.list')}>
                Mini Industri Kampus
            </Link>

            {auth?.user ? (
                <Link href={route('logout')} method="POST">
                    <PrimaryButton type="submit" className="w-full md:w-auto">
                        Logout
                    </PrimaryButton>
                </Link>
            ) : (
                <Link href={route('login')}>
                    <PrimaryButton className="w-full md:w-auto">Login</PrimaryButton>
                </Link>
            )}
        </>
    );
}
