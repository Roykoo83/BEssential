'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

export default function Services() {
    const { t } = useLanguage();

    const services = [
        {
            id: 'sustainability',
            number: '01',
            title: t.services.sustainability.title,
            description: t.services.sustainability.desc,
            color: 'text-orange-500',
            border: 'hover:border-orange-500/50',
            bg: 'hover:bg-orange-500/5',
        },
        {
            id: 'growth',
            number: '02',
            title: t.services.growth.title,
            description: t.services.growth.desc,
            color: 'text-blue-500',
            border: 'hover:border-blue-500/50',
            bg: 'hover:bg-blue-500/5',
        },
        {
            id: 'connection',
            number: '03',
            title: t.services.connection.title,
            description: t.services.connection.desc,
            color: 'text-purple-500',
            border: 'hover:border-purple-500/50',
            bg: 'hover:bg-purple-500/5',
        },
    ];

    return (
        <section id="services" className="py-24 bg-black relative">
            <div className="container mx-auto px-6">
                <div className="mb-16 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-8 text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl"
                    >
                        {t.services.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mx-auto max-w-2xl text-xl text-gray-400"
                    >
                        {t.services.subtitle}
                    </motion.p>
                </div>

                <div className="grid gap-8 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className={`group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-300 ${service.border} ${service.bg}`}
                        >
                            <div>
                                <span className={`mb-6 block text-6xl font-bold ${service.color} opacity-20 transition-opacity group-hover:opacity-40`}>
                                    {service.number}
                                </span>
                                <h3 className="mb-4 text-2xl font-bold text-white sm:text-3xl">
                                    {service.title}
                                </h3>
                                <p className="text-lg text-gray-400 group-hover:text-gray-300 transition-colors">
                                    {service.description}
                                </p>
                            </div>

                            {/* Hover Indicator */}
                            <div className={`mt-8 h-1 w-12 rounded-full ${service.color.replace('text-', 'bg-')} opacity-20 transition-all duration-300 group-hover:w-full group-hover:opacity-100`} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
