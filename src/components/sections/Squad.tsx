'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function Squad() {
    const { t } = useLanguage();

    const personas = [
        {
            id: 'origin',
            title: t.squad.origin.role,
            desc: t.squad.origin.desc,
            color: 'text-red-500',
            position: 'left-[10%]',
        },
        {
            id: 'matrix',
            title: t.squad.matrix.role,
            desc: t.squad.matrix.desc,
            color: 'text-blue-500',
            position: 'left-[35%]',
        },
        {
            id: 'pixel',
            title: t.squad.pixel.role,
            desc: t.squad.pixel.desc,
            color: 'text-purple-500',
            position: 'right-[35%]',
        },
        {
            id: 'archive',
            title: t.squad.archive.role,
            desc: t.squad.archive.desc,
            color: 'text-green-500',
            position: 'right-[10%]',
        },
    ];

    return (
        <section id="team" className="py-24 bg-black relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4 text-white">
                        NADAUM AI Squad:
                        <br />
                        <span className="text-gray-400 text-2xl sm:text-3xl font-normal">
                            완벽한 협업을 위한 4가지 페르소나
                        </span>
                    </h2>
                </motion.div>

                {/* Members Image & Overlays */}
                <div className="relative mx-auto max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5"
                    >
                        <Image
                            src="/images/BE_Orchestra_Members.png"
                            alt="B:Essential Orchestra Members"
                            fill
                            className="object-contain"
                        />

                        {/* Animated Glow Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </motion.div>

                    {/* Persona Cards (Desktop: Overlay, Mobile: Stacked below) */}
                    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {personas.map((persona, index) => (
                            <motion.div
                                key={persona.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md transition-all hover:bg-white/10"
                            >
                                <h3 className={`text-lg font-bold ${persona.color} mb-1`}>{persona.title}</h3>
                                <p className="text-sm text-gray-300">{persona.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
