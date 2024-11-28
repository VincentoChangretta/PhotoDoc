import React from 'react';
import { AboutUsTop } from './AboutUsTop/AboutUsTop';
import { useScrollToTop } from '../../Hooks/useScrollToTop';

export const AboutUs = () => {
    useScrollToTop()
    return (
        <>
            <AboutUsTop />
        </>
    );
}
