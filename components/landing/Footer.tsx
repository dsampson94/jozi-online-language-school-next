// components/landing/Footer.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { Container } from './Container';
import Image from 'next/image';
import logo from '../../public/jols-logo.png';
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { useTranslation } from '../i18n/useTranslation';

export function Footer() {
    const { t } = useTranslation();

    return (
        <footer id="contact" className="bg-slate-50 relative px-2 z-1 min-w-full sm:mx-auto">
            <Container>
                <div className="pt-8">
                    <div className="flex items-center justify-center">
                        <Image src={logo} alt={t('footer.logoAlt')} width={100} height={100} className="rounded-lg" />
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-4 lg:gap-x-12 py-8">
                    <div className="text-center lg:text-left">
                        <h3 className="font-semibold text-gray-900">{t('footer.aboutUsTitle')}</h3>
                        <p className="mt-2 mx-4 sm:mx-0 text-sm text-gray-700">
                            {t('footer.aboutUsDescription')}
                        </p>
                    </div>
                    <div className="text-center lg:text-left">
                        <h3 className="font-semibold text-gray-900">{t('footer.contactUsTitle')}</h3>
                        <p className="mt-2 text-sm text-gray-700">
                            <a href="tel:+48501345039" className="hover:underline">{t('footer.phone')}</a>
                            <br />
                            <a href="mailto:info@convofreaks.com" className="hover:underline">{t('footer.email')}</a>
                        </p>
                    </div>
                    <div className="text-center lg:text-left">
                        <h3 className="font-semibold text-gray-900">{t('footer.informationTitle')}</h3>
                        <p className="mt-2 text-sm text-gray-700">
                            <Link href="/terms" className="hover:underline text-gray-700 hover:text-gray-900 transition">
                                {t('footer.terms')}
                            </Link>
                            <br />
                            <Link href="/privacy" className="hover:underline text-gray-700 hover:text-gray-900 transition">
                                {t('footer.privacy')}
                            </Link>
                        </p>
                    </div>
                    <div className="text-center lg:text-left">
                        <h3 className="font-semibold text-gray-900">{t('footer.connectWithUsTitle')}</h3>
                        <div className="mt-4 flex justify-center lg:justify-start gap-6">
                            <Link href="https://www.facebook.com/convofreaks.angielski" target="_blank" aria-label="Facebook"
                                  className="text-gray-700 hover:text-gray-900 transition">
                                <FaFacebook size={24}/>
                            </Link>
                            <Link href="https://x.com/convofreaks" target="_blank" aria-label="X"
                                  className="text-gray-700 hover:text-gray-900 transition">
                                <FaXTwitter size={24}/>
                            </Link>
                            <Link href="https://www.instagram.com/convofreaks_angielski" target="_blank" aria-label="Instagram"
                                  className="text-gray-700 hover:text-gray-900 transition">
                                <FaInstagram size={24}/>
                            </Link>
                            <Link href="https://www.tiktok.com/@convofreaks_angielski" target="_blank" aria-label="Tiktok"
                                  className="text-gray-700 hover:text-gray-900 transition">
                                <FaTiktok size={24}/>
                            </Link>
                            <Link href="https://www.linkedin.com/company/convofreaks-angielski" target="_blank" aria-label="LinkedIn"
                                  className="text-gray-700 hover:text-gray-900 transition">
                                <FaLinkedin size={24}/>
                            </Link>
                            <Link href="https://www.youtube.com/@convofreaks_angielski" target="_blank" aria-label="YouTube"
                                  className="text-gray-700 hover:text-gray-900 transition">
                                <FaYoutube size={24}/>
                            </Link>
                        </div>
                    </div>
                </div>
                <div
                    className="border-t border-slate-400/10 py-10 flex flex-col items-center justify-center sm:flex-row sm:justify-center"
                >
                    <p className="text-sm text-slate-500 sm:mt-0 text-center">
                        {t('footer.copyright', { year: new Date().getFullYear() })}
                    </p>
                </div>
            </Container>
        </footer>
    );
}
