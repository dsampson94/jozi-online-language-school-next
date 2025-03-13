// components/i18n/TranslationContext.tsx
import { createContext } from 'react';

export type Translations = { [key: string]: any };

export type TranslationContextType = {
    language: string;
    setLanguage: (lang: string) => void;
    t: (key: string, options?: { [key: string]: any }) => string;
};

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export default TranslationContext;
