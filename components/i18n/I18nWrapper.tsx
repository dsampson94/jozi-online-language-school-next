// components/i18n/I18nWrapper.tsx
'use client';

import React, { ReactNode } from 'react';
import { TranslationProvider } from './TranslationProvider';

type Props = { children: ReactNode };

const I18nWrapper: React.FC<Props> = ({ children }) => {
    return (
        <TranslationProvider>
            {children}
        </TranslationProvider>
    );
};

export default I18nWrapper;
