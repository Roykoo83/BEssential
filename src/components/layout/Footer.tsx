'use client';

import Link from 'next/link';
import Logo from '@/components/ui/Logo';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="border-t border-white/10 bg-black py-12 md:py-16">
            <div className="container mx-auto px-6">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Logo />
                        <p className="text-sm text-gray-400 whitespace-pre-line">
                            {t.hero.subHeadline}
                        </p>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-white">{t.footer.contact}</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>
                                <span className="block text-xs text-gray-500">Email</span>
                                <a href="mailto:koo.mir@gmail.com" className="hover:text-primary">
                                    koo.mir@gmail.com
                                </a>
                            </li>
                            <li>
                                <span className="block text-xs text-gray-500">Phone</span>
                                010-7301-5855
                            </li>
                        </ul>
                    </div>

                    {/* Address */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-white">Address</h4>
                        <p className="text-sm text-gray-400">
                            {t.footer.address}
                        </p>
                    </div>

                    {/* Business Info */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-white">Business Info</h4>
                        <p className="text-xs text-gray-500">
                            {t.footer.bizInfo}
                        </p>
                        <Link
                            href="https://m.site.naver.com/1TXfD"
                            target="_blank"
                            className="inline-block mt-4 text-xs text-primary hover:underline"
                        >
                            Coffee Chat &rarr;
                        </Link>
                    </div>
                </div>

                <div className="mt-12 border-t border-white/5 pt-8 text-center text-xs text-gray-600">
                    © {new Date().getFullYear()} B:Essential. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
