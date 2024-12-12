import React from 'react';
import { AboutUsTop } from './AboutUsTop/AboutUsTop';
import { useScrollToTop } from '../../Hooks/useScrollToTop';
import { Contacts } from '../Global/Contacts';
import { MY_INN } from '../../../public/AppData';

export const AboutUs = () => {
    useScrollToTop()
    return (
        <>
            <AboutUsTop />
            <Contacts />
            <div className='text-center'>
                Папикян Марта Мхитаровна <br />
                ИНН: {MY_INN}
            </div>
        </>
    );
}
