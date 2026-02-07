import { Layers } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
    return (
        <footer className="bg-white py-12 border-t border-gray-100">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex items-center gap-2">
                    <Layers className="h-6 w-6 text-primary" />
                    <span className="text-lg font-bold tracking-tight text-gray-900">RecruiterAI</span>
                    <span className="text-xs text-gray-400 ml-4">© 2026 RecruiterAI. All rights reserved.</span>
                </div>

                <div className="flex items-center gap-8">
                    <FooterLink href="#">Privacy Policy</FooterLink>
                    <FooterLink href="#">Terms of Service</FooterLink>
                    <FooterLink href="#">Trust Center</FooterLink>
                    <FooterLink href="#">Contact Support</FooterLink>
                </div>
            </div>
        </footer>
    );
}

function FooterLink({ href, children }: { href: string, children: React.ReactNode }) {
    return (
        <Link href={href} className="text-xs font-bold text-gray-500 hover:text-primary transition-colors">
            {children}
        </Link>
    )
}
