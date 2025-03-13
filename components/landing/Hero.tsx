'use client';

import React from 'react';
import { Container } from './Container';
import { FaBook, FaRegComments, FaRegFileAlt, FaRegLightbulb, FaRegSmileBeam, FaUserGraduate } from 'react-icons/fa';
import { useTranslation } from '../i18n/useTranslation';
import { Button } from './Button';

declare global {
    interface Window {
        Calendly: any;
    }
}

const HeroTitle: React.FC = () => {
    const { t } = useTranslation();

    return (
        <>
            <h1
                className="mx-2 mt-24 sm:mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl"
                translate="no"
            >
                {t('hero.titleStart')}{" "}
                <span className="relative whitespace-nowrap text-[#0098cd]" translate="no">
                    <span className="relative" translate="no">{t('hero.titleHighlight')}</span>
                </span>{" "}
                {t('hero.titleEnd')}
            </h1>
            <p className="mx-4 sm:mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
                {t('hero.description')}
            </p>
        </>
    );
};

const benefits = [
    {
        title: 'features.tailorMadeTopics',
        description: 'features.tailorMadeDescription',
        icon: <FaRegFileAlt size={40} className="text-blue-500" />,
    },
    {
        title: 'features.grammaticalCorrections',
        description: 'features.grammaticalDescription',
        icon: <FaBook size={40} className="text-blue-500" />,
    },
    {
        title: 'features.pronunciationCorrections',
        description: 'features.pronunciationDescription',
        icon: <FaRegComments size={40} className="text-blue-500" />,
    },
    {
        title: 'features.learnNewWords',
        description: 'features.learnNewWordsDescription',
        icon: <FaRegLightbulb size={40} className="text-blue-500" />,
    },
    {
        title: 'features.newExpressions',
        description: 'features.newExpressionsDescription',
        icon: <FaRegSmileBeam size={40} className="text-blue-500" />,
    },
    {
        title: 'features.personalizedAttention',
        description: 'features.personalizedAttentionDescription',
        icon: <FaUserGraduate size={40} className="text-blue-500" />,
    },
];

export function Hero() {
    const { t } = useTranslation();

    return (
        <div className="relative mt-[72px] md:mt-[98px] ">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-15 mb-[400px]"
                style={{ backgroundImage: 'url(/hero-background.png)' }}
            ></div>

            {/* Content */}
            <Container className="relative pt-20 text-center lg:pt-32">
                <HeroTitle />
                <div className="mt-10 flex justify-center gap-x-2 relative">
                    <div className="-left-3 top-1/2 transform -translate-y-1/2 rotate-[-45deg] emoji-hand-left">
                        <img
                            src="/arrowred.png"
                            alt="Left red arrow"
                            className="transform w-12 h-12 -translate-x-2 rotate-[180deg] float-animation"
                        />
                    </div>
                    <Button color="blue" href="#teachers" variant="solid">
                        <div className="text-xl whitespace-nowrap">
                            { t('buttons.getStarted') }
                        </div>
                    </Button>
                    <div className="-right-3 top-1/2 transform -translate-y-1/2 rotate-[45deg] emoji-hand-right">
                        <img
                            src="/arrowred.png"
                            alt="Right red arrow"
                            className="transform w-12 h-12 translate-x-2 float-animation"
                        />
                    </div>
                </div>
            </Container>

            <Container className="relative pb-16 pt-64">
                <h2 className="font-display text-3xl tracking-tight text-center text-slate-900 sm:text-4xl">
                    {/*{ t('hero.benefitsTitle')}*/}
                </h2>
                <ul className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-y-8 gap-x-6 mx-2">
                    {benefits.map((benefit) => (
                        <li key={benefit.title}
                            className="flex flex-col items-center text-center bg-white p-4 rounded-lg shadow-md">
                            {benefit.icon}
                            <h3 className="mt-4 text-md font-bold text-gray-900">{t(benefit.title)}</h3>
                            <p className="mt-2 text-sm text-gray-700">{t(benefit.description)}</p>
                        </li>
                    ))}
                </ul>
            </Container>
        </div>
    );
}
