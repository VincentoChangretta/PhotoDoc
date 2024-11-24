import React from 'react';
import { Logo } from './Logo';
import { navArr } from '../../../public/AppData';
import { Link } from 'react-router-dom';
import { HeaderNavSelect } from './HeaderNavSelect';
export const Header = () => {
    return (
        <header>
            <div className='container'>
                <div className="inner py-[35px]">
                    <div className='inner max-w-[900px] w-full'>
                        <Logo />
                        <ul className='flex gap-[30px] select-none'>
                            {navArr.map(navItem => (
                                <li key={navItem.id}>
                                    {navItem.services
                                        ? <HeaderNavSelect navItem={navItem} />
                                        : <Link to={navItem.pathname}>{navItem.item}</Link>
                                    }
                                </li>
                            ))}
                        </ul>
                    </div>
                    <button className='btn'>
                        Получить скидку
                    </button>
                </div>
            </div>
        </header>
    );
}
