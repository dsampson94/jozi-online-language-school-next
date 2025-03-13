'use client';

import React from 'react';
import Image from 'next/image';
import { Container } from './Container';
import backgroundImage from '../../public/images/background-faqs.jpg';
import { useRouter } from 'next/navigation';
import { useTranslation } from '../i18n/useTranslation'; // Import the custom translation hook

interface Teacher {
    name: string;
    title: string;
    bio: string;
    image: string;
    video: string;
    appointletLink: string;
}

export function TeachersProfiles() {
    const { t } = useTranslation();
    const router = useRouter();

    const handleBookLesson = (appointletLink: string) => {
        router.push(`${ appointletLink }`);
    };

    const teachers: Teacher[] = [
        {
            name: 'Abel Malaka', // Translated name/title
            title: t('teachers.joelTitle'), // Assuming 'name' is the same as 'title'
            bio: t('teachers.joelBio'),     // Translated bio
            image: '/',
            video: '',
            appointletLink: 'https://app.simplymeet.me/convofreaks',
        },
        // {
        //     name: 'Callin Ontong',
        //     title: t('teachers.callinTitle'),
        //     bio: t('teachers.callinBio'),
        //     image: '/callin.jpg',
        //     video: 'https://www.youtube.com/embed/JdvwOinBjpU',
        //     appointletLink: 'https://app.simplymeet.me/callinontong01',
        // },
        // {
        //     name: 'Awad Mohamed',
        //     title: t('teachers.awadTitle'),
        //     bio: t('teachers.awadBio'),
        //     image: '/awad.jpg',
        //     video: 'https://www.youtube.com/embed/-HVl8hNlnPE',
        //     appointletLink: 'https://app.simplymeet.me/awad19mohamed',
        // },
    ];

    return (
        <section
            id="teachers"
            aria-label={ t('teachers.ariaLabel') }
            className="relative z-1 overflow-hidden bg-slate-50 pt-32"
        >
            <Image
                className="absolute left-1/2 opacity-20 top-0 max-w-none -translate-y-4/4 translate-x-[-90%]"
                src={ backgroundImage }
                alt={ t('teachers.backgroundAlt') }
                width={ 1558 }
                height={ 946 }
                unoptimized
            />
            <Container className="relative">
                <div className="max-w-2xl text-center mx-4 sm:mx-auto">
                    <h2 className="font-display text-3xl tracking-tight text-gray-900 sm:text-4xl">
                        { t('teachers.title') }
                    </h2>
                    <p className="mt-6 text-lg tracking-tight text-gray-700">
                        { t('teachers.description') }
                    </p>
                </div>
                <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-6 pb-2">
                    { teachers.map((teacher, idx) => (
                        <div
                            key={ idx }
                            className="bg-white mx-4 sm:mx-auto max-w-3xl rounded-xl shadow-xl p-6 flex flex-col items-center"
                        >
                            <Image
                                className="w-40 h-54 rounded-lg shadow-lg"
                                src={ teacher.image }
                                alt={ teacher.name }
                                width={ 160 }
                                height={ 160 }
                            />
                            <h3 translate="no" className="mt-4 text-xl font-semibold text-gray-900">
                                { teacher.name }
                            </h3>
                            <p className="mt-1 text-md font-medium text-gray-600">
                                { teacher.title }
                            </p>
                            <p className="mt-2 text-sm text-gray-700 text-center">
                                { teacher.bio }
                            </p>
                            <div className="mt-4">
                                <iframe
                                    width="350"
                                    height="200"
                                    src={ teacher.video }
                                    title={ t('teachers.introductionVideo') }
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="rounded-lg shadow-lg"
                                ></iframe>
                            </div>
                            <div className="mt-4 text-center">
                                <p className="text-lg text-gray-500 line-through">
                                    { t('teachers.originalPricing') }
                                </p>
                                <p className="mt-1 text-4xl font-bold text-blue-700">
                                    { t('teachers.discountedPricing') }
                                </p>
                                <span className="text-sm text-gray-500">
                                    { t('teachers.lessonDuration') }
                                </span>
                            </div>
                            <div
                                className="mt-10 flex justify-center gap-x-2 relative">
                                <div
                                    className="-left-3 top-1/2 transform -translate-y-1/2 rotate-[-45deg] emoji-hand-left">
                                    <img
                                        src="/arrowred.png"
                                        alt="Left red arrow"
                                        className="transform -translate-x-1 translate-y-5 rotate-[180deg] w-8 h-8 float-animation"
                                    />
                                </div>
                                <button
                                    className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                    onClick={ () => handleBookLesson(teacher.appointletLink) }
                                >
                                    { t('buttons.bookLesson') }
                                </button>
                                <div
                                    className="-right-3 top-1/2 transform -translate-y-1/2 rotate-[45deg] emoji-hand-right">
                                    <img
                                        src="/arrowred.png"
                                        alt="Right red arrow"
                                        className="transform translate-x-1 translate-y-5 w-8 h-8 float-animation"
                                    />
                                </div>
                            </div>
                        </div>
                    )) }
                </div>
            </Container>
        </section>
    );
}
