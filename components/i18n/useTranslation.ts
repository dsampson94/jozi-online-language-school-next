// components/i18n/useTranslation.tsx
'use client';

import { useContext } from 'react';
import TranslationContext, { TranslationContextType } from './TranslationContext';

export const useTranslation = (): TranslationContextType => {
    const context = useContext(TranslationContext);
    if (!context) {
        throw new Error('useTranslation must be used within a TranslationProvider');
    }
    return context;
};
