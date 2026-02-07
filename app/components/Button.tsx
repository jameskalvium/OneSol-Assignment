import Link from 'next/link';

import { ButtonHTMLAttributes, forwardRef } from 'react';

// Inline utils for now since I haven't created lib/utils.ts yet
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    href?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', href, children, ...props }, ref) => {
        const variants = {
            primary: 'bg-primary text-white hover:bg-blue-600 shadow-sm',
            secondary: 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 shadow-sm',
            outline: 'bg-transparent border border-white/20 text-white hover:bg-white/10',
            ghost: 'bg-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-100',
        };

        const sizes = {
            sm: 'px-4 py-2 text-sm',
            md: 'px-6 py-3 text-base',
            lg: 'px-8 py-4 text-lg font-semibold',
        };

        const classes = cn(
            'inline-flex items-center justify-center rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:pointer-events-none',
            variants[variant],
            sizes[size],
            className
        );

        if (href) {
            return (
                <Link href={href} className={classes}>
                    {children}
                </Link>
            );
        }

        return (
            <button ref={ref} className={classes} {...props}>
                {children}
            </button>
        );
    }
);

Button.displayName = 'Button';

export { Button };
export { cn }; // Exporting cn here for convenience, normally in lib
