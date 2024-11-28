import React from 'react';
import { Logo } from './Logo';
import { navArr } from '../../../public/AppData';
import { Link } from 'react-router-dom';
import { Search } from "./Search.jsx"
export const Header = () => {
    return (
        <header>
            <div className='container'>
                <div className="inner py-[35px]">
                    <Logo />
                    <div className='w-full flex justify-end items-center gap-[75px]'>
                        <ul className='flex gap-[30px] select-none'>
                            {navArr.map(navItem => (
                                <li key={navItem.id}>
                                    <Link to={navItem.pathname}>{navItem.item}</Link>
                                </li>
                            ))}
                        </ul>
                        <Search />
                    </div>
                </div>
            </div>
        </header>
    );
}
