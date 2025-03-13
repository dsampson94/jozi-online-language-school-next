// components/landing/Header.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/jols-logo.png';
import { Button } from './Button';
import { NavLink } from './NavLink';
import { usePathname } from 'next/navigation';
import { useTranslation } from '../i18n/useTranslation';
import { LanguageSwitcher } from '../i18n/LanguageSwitcher';

const Header = () => {
    const { t } = useTranslation();
    const pathname = usePathname();
    const isNotRootPage = pathname !== '/';

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
            <nav className="relative z-50 flex justify-between shadow-lg px-6 py-2">
                <div className="flex items-center -ml-8 sm:ml-0 md:gap-x-12">
                    <Link href="/" aria-label={ t('header.home') }>
                        <Image src={ logo } alt={ t('header.logoAlt') } width={ 120 } height={ 80 }/>
                    </Link>
                </div>
                <div className="flex items-center gap-x-5 md:gap-x-8">
                    <div className="hidden md:flex md:gap-x-6">
                        <NavLink href={ isNotRootPage ? "/#features" : "#features" }>{ t('header.aboutUs') }</NavLink>
                        <NavLink href={ isNotRootPage ? "/#teachers" : "#teachers" }>{ t('header.teachers') }</NavLink>
                        <NavLink href={ isNotRootPage ? "/#contact" : "#contact" }>{ t('header.contact') }</NavLink>
                    </div>
                    {/* Language Switcher */ }
                    <LanguageSwitcher/>
                    {/* Conditionally render the button */ }
                    { !isNotRootPage && (
                        <Button isHeader color="blue" href="#teachers" variant="solid">
                            <div className="text-lg whitespace-nowrap">
                                { t('buttons.getStarted') }
                            </div>
                        </Button>
                    ) }
                </div>
            </nav>
        </header>
    );
};

export default Header;
