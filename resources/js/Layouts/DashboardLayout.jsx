import ApplicationLogo from '@/Components/ApplicationLogo';
import PrimaryButton from '@/Components/PrimaryButton';
import { Link, usePage } from '@inertiajs/react';

export default function DashboardLayout({ header, children }) {
    const { auth } = usePage().props;

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <header className="bg-white shadow px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link href="/">
                        <ApplicationLogo className="h-8 w-auto text-gray-800" />
                    </Link>
                </div>

                <nav className="space-x-4 flex items-center">
                    <Link href="/" className="text-gray-700 hover:text-blue-600 transition">
                        Home
                    </Link>
                    <Link href="/about" className="text-gray-700 hover:text-blue-600 transition">
                        About
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
        </div>
    );
}
