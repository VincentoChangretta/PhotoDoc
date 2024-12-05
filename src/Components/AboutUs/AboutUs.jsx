import React from 'react';
import { AboutUsTop } from './AboutUsTop/AboutUsTop';
import { useScrollToTop } from '../../Hooks/useScrollToTop';
import { Contacts } from '../Global/Contacts';

export const AboutUs = () => {
    useScrollToTop()
    return (
        <>
            <AboutUsTop />
            <Contacts />
        </>
    );
}
