'use client';

import React from 'react';
import { useTranslation } from '../i18n/useTranslation'; // Import the custom translation hook

export function MapEmbed() {
    const { t } = useTranslation();

    return (
        <section id="testimonials" aria-label={t('mapEmbed.ariaLabel')} className="bg-slate-50 py-20 sm:py-32 p-6">
            <div className="mx-auto max-w-2xl md:text-center">
                <h2 className="font-display text-center text-3xl tracking-tight text-slate-900 sm:text-4xl">
                    {t('mapEmbed.title')}
                </h2>
            </div>
            <div className="mt-16 flex justify-center">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2539.465509653217!2d20.719155000000004!3d50.469677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4717c3167022ba29%3A0xcac7040317af43cb!2sConvo%20Freaks!5e0!3m2!1sen!2sza!4v1725004020581!5m2!1sen!2sza"
                    width="600"
                    height="450"
                    style={{ border: 0, borderRadius: '12px' }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </section>
    );
}
