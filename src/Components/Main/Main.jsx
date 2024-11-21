import React from 'react';
import { MainTop } from './MainTop/MainTop';
import { MainInfo } from './MainInfo/MainInfo';
import { MainServices } from './MainServices/MainServices';

export const Main = () => {
    return (
        <>
            <MainTop />
            <MainInfo />
            <MainServices />
        </>
    );
}
