'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import Logo from '@/components/ui/Logo';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const { language, setLanguage, t } = useLanguage();

    const toggleLanguage = () => {
        setLanguage(language === 'ko' ? 'en' : 'ko');
    };

    const navItems = [
        { name: t.header.services, href: '#services' },
        { name: t.header.workflow, href: '#workflow' },
        { name: t.header.team, href: '#team' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
            <div className="container mx-auto flex h-20 items-center justify-between px-6">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <Logo />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-gray-300 transition-colors hover:text-primary"
                        >
                            {item.name}
                        </Link>
                    ))}

                    {/* Language Toggle */}
                    <button
                        onClick={toggleLanguage}
                        className="flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-white"
                    >
                        <Globe className="h-4 w-4" />
                        <span>{language.toUpperCase()}</span>
                    </button>

                    <Link
                        href="https://m.site.naver.com/1TXfD"
                        target="_blank"
                        className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105 hover:bg-orange-600"
                    >
                        {t.header.cta}
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-20 left-0 right-0 border-b border-white/10 bg-black/95 px-6 py-8 md:hidden"
                >
                    <nav className="flex flex-col gap-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-lg font-medium text-gray-300 hover:text-primary"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}

                        <button
                            onClick={() => {
                                toggleLanguage();
                                setIsOpen(false);
                            }}
                            className="flex items-center gap-2 text-lg font-medium text-gray-300 hover:text-white"
                        >
                            <Globe className="h-5 w-5" />
                            <span>{language === 'ko' ? 'English' : '한국어'}</span>
                        </button>

                        <Link
                            href="https://m.site.naver.com/1TXfD"
                            target="_blank"
                            className="w-full rounded-lg bg-primary py-3 text-center font-semibold text-white"
                            onClick={() => setIsOpen(false)}
                        >
                            {t.header.cta}
                        </Link>
                    </nav>
                </motion.div>
            )}
        </header>
    );
}
