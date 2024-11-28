import React from 'react';
import { Logo } from './Logo'
import { Link } from 'react-router-dom';
import { PATHNAMES } from '../../../public/AppData';

export const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="inner py-[35px]">
                    <Logo />
                    <div className='flex gap-[30px]'>
                        <Link to={PATHNAMES.recommendations}>Рекомендации</Link>
                        <Link to={PATHNAMES.delivery}>Доставка</Link>
                        <Link to={PATHNAMES.privacyPolicy}>Политика конфиденциальности</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
