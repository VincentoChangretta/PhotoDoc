import React from 'react';
import { Link } from 'react-router-dom';

export const Logo = () => {
    return (
        <Link className='text-4xl font-black' to="/">
            PhotoDoc
            <span className='text-[15px] block leading-3'>Онлайн фотоцентр</span>
        </Link>
    );
}
