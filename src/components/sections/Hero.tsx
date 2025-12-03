'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import ParticleAnimation from '../ui/ParticleAnimation';
import { useLanguage } from '@/context/LanguageContext';
import { useEffect, useState } from 'react';

export default function Hero() {
    const { t } = useLanguage();
    const [displayText, setDisplayText] = useState('');
    const headline = t.hero.headline;

    useEffect(() => {
        let i = 0;
        setDisplayText('');
        const timer = setInterval(() => {
            if (i < headline.length) {
                setDisplayText((prev) => prev + headline.charAt(i));
                i++;
            } else {
                clearInterval(timer);
            }
        }, 50);

        return () => clearInterval(timer);
    }, [headline]);

    return (
        <section className="relative flex min-h-[100vh] flex-col items-center justify-center overflow-hidden px-6 pt-20">
            {/* Background Animation */}
            <div className="absolute inset-0 opacity-50">
                <ParticleAnimation />
            </div>

            <div className="container relative z-10 mx-auto grid gap-12 lg:grid-cols-2 lg:items-center">
                {/* Left: Text Content */}
                <div className="text-center lg:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="min-h-[160px] sm:min-h-[200px]"
                    >
                        <h1 className="mb-6 text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl whitespace-pre-line">
                            {displayText}
                            <span className="animate-pulse text-primary">|</span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mx-auto mb-10 max-w-2xl text-lg text-gray-400 sm:text-xl lg:mx-0 whitespace-pre-line"
                    >
                        {t.hero.subHeadline}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <Link
                            href="https://m.site.naver.com/1TXfD"
                            target="_blank"
                            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-orange-600 hover:scale-105"
                        >
                            <span className="relative z-10">{t.hero.cta}</span>
                            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 transition-opacity group-hover:opacity-100" />
                        </Link>
                    </motion.div>
                </div>

                {/* Right: Overview Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative mx-auto w-full max-w-lg lg:max-w-none"
                >
                    <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                        <Image
                            src="/images/BE_Orchestra_Overview.png"
                            alt="B:Essential Orchestra Overview"
                            fill
                            className="object-contain p-4"
                            priority
                        />
                        {/* Glow Effect */}
                        <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-primary/20 to-blue-500/20 blur-3xl" />
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="h-10 w-6 rounded-full border-2 border-white/20 p-1">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="h-2 w-full rounded-full bg-primary"
                    />
                </div>
            </motion.div>
        </section>
    );
}
