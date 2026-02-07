import Link from 'next/link';
import { Button } from './Button';
import { Layers } from 'lucide-react';

export function Navbar() {
    return (
        <nav className="fixed top-0 z-50 w-full">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 relative">
                <div className="flex items-center gap-2">
                    <Layers className="h-8 w-8 text-primary" />
                    <span className="text-xl font-bold tracking-tight text-gray-900">RecruiterAI</span>
                </div>

                {/* Floating Navbar (Make transparent as requested) */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="flex items-center gap-8 bg-white/40 backdrop-blur-md px-8 py-2.5 rounded-full shadow-sm border border-black/5 hover:bg-white/60 transition-all duration-300">
                        <Link href="#" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
                            Product
                        </Link>
                        <Link href="#" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
                            Solutions
                        </Link>
                        <Link href="#" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
                            Integrations
                        </Link>
                        <Link href="#" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
                            Pricing
                        </Link>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <Link href="#" className="px-5 py-2.5 text-sm font-medium text-gray-700 bg-white/40 backdrop-blur-md border border-black/5 rounded-full hover:bg-white/60 transition-all duration-300 hidden sm:block shadow-sm">
                        Log In
                    </Link>
                    <Link href="#" className="px-5 py-2.5 text-sm font-medium text-white bg-primary rounded-full hover:bg-primary/90 transition-colors shadow-sm">
                        Start Hiring Smarter
                    </Link>
                </div>
            </div>
        </nav>
    );
}
