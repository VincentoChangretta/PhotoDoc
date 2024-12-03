import React from 'react';
import { PATHNAMES } from '../../../public/AppData';
import { Link } from 'react-router-dom';

export const ButtonNavigator = ({ delivery }) => {
    return (
        <div className='flex justify-center gap-[60px] w-1300:flex-wrap w-1300:justify-center w-1300:gap-[20px]'>
            {
                !delivery && <div className='text-center'>
                    <h4 className='text-3xl font-extrabold mb-[20px] w-600:text-2xl'>Ознакомьтесь с условиями доставки</h4>
                    <Link className='btn mx-auto' to={PATHNAMES.delivery}>Доставка</Link>
                </div>
            }
            <div className='text-center'>
                <h4 className='text-3xl font-extrabold mb-[20px] w-600:text-2xl'>Ознакомьтесь с рекомендациями по фото</h4>
                <Link className='btn mx-auto' to={PATHNAMES.recommendations}>Рекомендации</Link>
            </div>
        </div>
    );
}
