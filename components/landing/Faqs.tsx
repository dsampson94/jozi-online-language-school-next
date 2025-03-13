'use client';

import Image from 'next/image';
import { Container } from './Container';
import { useTranslation } from '../i18n/useTranslation'; // Import the translation hook
import backgroundImage from '../../public/images/background-faqs.jpg';

const faqs = [
  [
    {
      question: 'faqs.rescheduleClassQuestion',
      answer: 'faqs.rescheduleClassAnswer',
    },
    {
      question: 'faqs.cancelClassQuestion',
      answer: 'faqs.cancelClassAnswer',
    },
    {
      question: 'faqs.lessonDurationQuestion',
      answer: 'faqs.lessonDurationAnswer',
    },
    {
      question: 'faqs.bookLessonChildQuestion',
      answer: 'faqs.bookLessonChildAnswer',
    },
  ],
];

export function Faqs() {
  const { t } = useTranslation(); // Initialize the translation function

  return (
      <section
          id="faq"
          aria-labelledby="faq-title"
          className="relative z-1 overflow-hidden bg-slate-50 pb-20 sm:py-32"
      >
        <Image
            className="absolute opacity-20 left-1/2 top-0 max-w-none -translate-y-4/4 translate-x-[-10%]"
            src={backgroundImage}
            alt=""
            width={1558}
            height={946}
            unoptimized
        />
        <Container className="relative">
          <div className="max-w-2xl mt-12 md:mt-2 lg:mx-0 mx-4 sm:mx-auto">
            <h2
                id="faq-title"
                className="font-display text-2xl tracking-tight text-slate-900 sm:text-4xl"
            >
              {t('faqs.title')} {/* Translated title */}
            </h2>
            <p className="mt-4 text-lg tracking-tight text-slate-700">
              {t('faqs.contactSupport')} {/* Translated subtitle */}
            </p>
          </div>
          <ul
              role="list"
              className="mx-4 sm:mx-auto mt-6 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-1"
          >
            {faqs.map((column, columnIndex) => (
                <li key={columnIndex}>
                  <ul role="list" className="flex flex-col gap-y-4">
                    {column.map((faq, faqIndex) => (
                        <li key={faqIndex}>
                          <h3 className="font-display text-md leading-7 font-semibold text-slate-900">
                            {t(faq.question)} {/* Translated question */}
                          </h3>
                          <p className="mt-2 text-sm text-slate-700">{t(faq.answer)} {/* Translated answer */}</p>
                        </li>
                    ))}
                  </ul>
                </li>
            ))}
          </ul>
        </Container>
      </section>
  );
}
