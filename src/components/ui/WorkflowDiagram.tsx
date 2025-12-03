'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function WorkflowDiagram() {
    const { t } = useLanguage();

    return (
        <section id="workflow" className="py-24 bg-black relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4 text-white">
                        {t.workflow.title}
                    </h2>
                    <p className="text-xl text-gray-400">
                        {t.workflow.subtitle}
                    </p>
                </motion.div>

                {/* Workflow Image Container */}
                <div className="relative mx-auto max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5"
                    >
                        <Image
                            src="/images/BE_Orchestra_workflow.png"
                            alt="B:Essential Workflow"
                            fill
                            className="object-contain p-4"
                        />

                        {/* Beam Animation Overlay */}
                        <div className="absolute inset-0 pointer-events-none">
                            {/* Horizontal Beam */}
                            <motion.div
                                animate={{
                                    left: ['-10%', '110%'],
                                    opacity: [0, 1, 0],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                className="absolute top-1/2 h-1 w-20 -translate-y-1/2 bg-gradient-to-r from-transparent via-primary to-transparent blur-sm"
                            />
                        </div>
                    </motion.div>

                    {/* Steps Description (Optional: Can be kept for accessibility/SEO) */}
                    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5 text-center">
                        {[
                            t.workflow.steps.input,
                            t.workflow.steps.origin,
                            t.workflow.steps.matrixPixel,
                            t.workflow.steps.archive,
                            t.workflow.steps.output
                        ].map((stepTitle, index) => (
                            <div key={index} className="hidden lg:block">
                                <p className="text-sm font-semibold text-gray-500">{stepTitle}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
