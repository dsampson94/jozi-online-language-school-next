'use client';

import Image from 'next/image';
import { Tab } from '@headlessui/react';
import backgroundImage from '../../public/images/background-features.jpg';
import { Container } from './Container';
import { useTranslation } from '../i18n/useTranslation';

export function PrimaryFeatures() {
    const { t } = useTranslation();

    return (
        <section
            id="features"
            aria-label={t('features.ariaLabel')}
            className="relative overflow-hidden pb-28 shadow-2xl sm:py-24"
        >
            {/* Background Image */}
            <Image
                className="absolute inset-0 w-full h-full object-cover opacity-80"
                src={backgroundImage}
                alt=""
                layout="fill"
                unoptimized
            />

            {/* Gradient Fade Effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none"></div>

            <Container className="relative mx-4 sm:mx-auto">
                <div className="max-w-2xl mx-auto text-center xl:max-w-none">
                    <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
                        {t('features.benefitsTitle')}
                    </h2>
                </div>
                <Tab.Group as="div" className="grid grid-cols-1 items-center gap-y-2 sm:gap-y-6 mx-4">
                    <Tab.Panels>
                        <Tab.Panel unmount={false}>
                            <div className="mt-10 w-full overflow-hidden rounded-xl bg-slate-50 shadow-2xl shadow-blue-900/20">
                                <iframe
                                    className="w-full h-[60vh]"
                                    src="https://www.youtube.com/embed/Isoo2_84AnE?start=1757"
                                    title={t('features.overviewVideo')}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </Container>
        </section>
    );
}
