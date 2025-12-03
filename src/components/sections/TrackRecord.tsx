'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Trophy, Timer, TrendingUp, Target } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function TrackRecord() {
    const { t } = useLanguage();
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

    const stats = [
        {
            id: 'challenges',
            icon: Target,
            value: t.trackRecord.stats.challenges,
            color: 'text-blue-500',
            bg: 'bg-blue-500/10',
        },
        {
            id: 'success',
            icon: Trophy,
            value: t.trackRecord.stats.success,
            color: 'text-orange-500',
            bg: 'bg-orange-500/10',
        },
        {
            id: 'amount',
            icon: TrendingUp,
            value: t.trackRecord.stats.amount,
            color: 'text-green-500',
            bg: 'bg-green-500/10',
        },
        {
            id: 'speed',
            icon: Timer,
            value: t.trackRecord.stats.speed,
            color: 'text-purple-500',
            bg: 'bg-purple-500/10',
        },
    ];

    return (
        <section ref={containerRef} className="py-24 bg-black relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    style={{ scale, opacity }}
                    className="relative z-10 rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-black p-8 md:p-16 backdrop-blur-md"
                >
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4">
                            {t.trackRecord.title}
                        </h2>
                        <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/20 transition-colors"
                            >
                                <div className={`mb-4 p-4 rounded-full ${stat.bg}`}>
                                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
                                </div>
                                <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
                            </motion.div>
                        ))}
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-0 left-0 -z-10 h-64 w-64 rounded-full bg-primary/20 blur-3xl opacity-20" />
                    <div className="absolute bottom-0 right-0 -z-10 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl opacity-20" />
                </motion.div>
            </div>
        </section>
    );
}
