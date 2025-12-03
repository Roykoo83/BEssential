'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LogoProps {
    className?: string;
    showText?: boolean;
}

export default function Logo({ className, showText = true }: LogoProps) {
    return (
        <div className={cn("flex items-center gap-2", className)}>
            <div className="relative h-10 w-10 overflow-hidden rounded-full border border-white/10 bg-black shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                <Image
                    src="/images/BEssential_Logo.jpg"
                    alt="B:Essential Logo"
                    fill
                    className="object-cover scale-150 object-center mix-blend-screen opacity-90"
                    priority
                />
            </div>
            {showText && (
                <span className="text-xl font-bold tracking-tighter text-white">
                    B:Essential
                    <span className="text-primary">.</span>
                </span>
            )}
        </div>
    );
}
