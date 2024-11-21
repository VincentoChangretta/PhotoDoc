import React from 'react';
import { Logo } from './Logo'
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="inner py-[35px]">
                    <Logo />
                    <Link to="/privacypolicy">Политика конфиденциальности</Link>
                </div>
            </div>
        </footer>
    );
}
