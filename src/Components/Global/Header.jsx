import React, { useState } from 'react';
import { Logo } from './Logo';
import { navArr, PATHNAMES } from '../../../public/AppData';
import { Link } from 'react-router-dom';
import { Search } from "./Search.jsx"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { useWindowSize } from '../../Hooks/useWindowSize.js';
export const Header = () => {
    const screenWidth = useWindowSize()
    const [burgerMenu, setBurgerMenu] = useState(null)
    const isBurger = screenWidth < 1050;

    return (
        <header>
            <div className='container'>
                <div className="inner py-[35px] w-1400:flex-wrap w-1400:gap-x-[50px] w-1050:justify-between w-1050:gap-[20px]">
                    {!isBurger ?
                        <>
                            <Logo />
                            <div className='w-full flex justify-end items-center gap-[75px] w-1400:justify-between'>
                                <ul className='flex gap-[30px] select-none'>
                                    {navArr.map(navItem => (
                                        <li key={navItem.id}>
                                            <Link to={navItem.pathname}>{navItem.item}</Link>
                                        </li>
                                    ))}
                                </ul>
                                <Search />
                            </div>
                        </>
                        :
                        <>
                            <Logo />
                            <div className='text-4xl cursor-pointer'>
                                <FontAwesomeIcon
                                    icon={faBars}
                                    onClick={() => setBurgerMenu(prev => !prev)}
                                />
                            </div>
                            <div className={`${!burgerMenu ? `translate-x-[350px] w-460:translate-x-[100%]` : ""} flex flex-col justify-center items-center fixed z-[1000] top-0 right-0 bottom-0 w-[350px] text-center bg-textColor text-invertedTextColor transition-all w-460:w-full`}>
                                <FontAwesomeIcon
                                    className='absolute top-[45px] right-[10px] text-4xl cursor-pointer'
                                    icon={faCircleXmark}
                                    onClick={() => setBurgerMenu(false)}
                                />
                                <ul className='flex flex-col gap-[30px] text-center text-lg'>
                                    {navArr.map(navItem => (
                                        <li key={navItem.id}>
                                            <Link to={navItem.pathname}>{navItem.item}</Link>
                                        </li>
                                    ))}
                                    <li><Link to={PATHNAMES.recommendations}>Рекомендации</Link></li>
                                    <li><Link to={PATHNAMES.delivery}>Доставка</Link></li>
                                    <li><Link to={PATHNAMES.supportProject}>Поддержать проект</Link></li>
                                </ul>
                            </div>
                        </>
                    }
                </div>
            </div>
        </header>
    );
}
