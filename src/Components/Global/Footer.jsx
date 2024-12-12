import React from 'react';
import { Logo } from './Logo'
import { Link } from 'react-router-dom';
import { PATHNAMES } from '../../../public/AppData';

export const Footer = () => {
    return (
        <footer className='py-[35px]'>
            <div className="container">
                <div className="inner w-1290:flex-wrap">
                    <Logo className="grow basis-0 w-600:text-center" />
                    <ul className='flex gap-[30px] w-1050:hidden'>
                        <li><Link to={PATHNAMES.recommendations}>Рекомендации</Link></li>
                        <li><Link to={PATHNAMES.delivery}>Доставка</Link></li>
                        <li><Link to={PATHNAMES.oferta}>Оферта</Link></li>  
                        <li><Link to={PATHNAMES.supportProject}>Поддержать проект</Link></li>  
                    </ul>
                    <div className="grow basis-0 text-right w-600:hidden">
                        <Link to={PATHNAMES.privacyPolicy}>Политика конфиденциальности</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
