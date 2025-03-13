// components/i18n/TranslationProvider.tsx
'use client';

import React, { ReactNode, useState } from 'react';
import TranslationContext, { Translations } from './TranslationContext';

// Import translation JSON files directly
import enCommon from '../../locales/en/common.json';

type Props = { children: ReactNode };

const translationsMap: { [key: string]: Translations } = {
    en: enCommon,
};

export const TranslationProvider: React.FC<Props> = ({ children }) => {
    const [language, setLanguage] = useState<string>('en'); // Default language
    const [translations, setTranslations] = useState<Translations>(translationsMap[language]);

    const handleSetLanguage = (lang: string) => {
        if (translationsMap[lang]) {
            setLanguage(lang);
            setTranslations(translationsMap[lang]);
        } else {
            console.warn(`Translations for language "${ lang }" not found.`);
        }
    };

    const t = (key: string, options?: { [key: string]: any }): string => {
        const keys = key.split('.');
        let value: any = translations;

        for (const k of keys) {
            value = value[k];
            if (value === undefined) {
                console.warn(`Missing translation for key: "${ key }"`);
                return key; // Fallback to the key itself
            }
        }

        // Handle interpolation
        if (options) {
            Object.keys(options).forEach(optionKey => {
                const regex = new RegExp(`{{${optionKey}}}`, 'g');
                value = value.replace(regex, options[optionKey]);
            });
        }

        return value;
    };

    return (
        <TranslationContext.Provider value={ { language, setLanguage: handleSetLanguage, t } }>
            { children }
        </TranslationContext.Provider>
    );
};
