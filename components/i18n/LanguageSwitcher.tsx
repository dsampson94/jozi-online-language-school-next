// components/i18n/LanguageSwitcher.tsx
'use client';

import React from 'react';
import { useTranslation } from './useTranslation';

export const LanguageSwitcher: React.FC = () => {
    const { language, setLanguage } = useTranslation();

    const handleLanguageChange = (lang: string) => {
        setLanguage(lang);
    };

    return (
        <div className="flex items-center gap-2">
            <button
                onClick={() => handleLanguageChange('en')}
                className={`px-2 py-1 rounded ${
                    language === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-200'
                }`}
            >
                EN
            </button>
            {/*<button*/}
            {/*    onClick={() => handleLanguageChange('pl')}*/}
            {/*    className={`px-2 py-1 rounded ${*/}
            {/*        language === 'pl' ? 'bg-blue-500 text-white' : 'bg-gray-200'*/}
            {/*    }`}*/}
            {/*>*/}
            {/*    PL*/}
            {/*</button>*/}
        </div>
    );
};
