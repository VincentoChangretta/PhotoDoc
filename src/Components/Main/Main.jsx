import React from 'react';
import { MainTop } from './MainTop/MainTop';
import { MainInfo } from './MainInfo/MainInfo';
import { MainServices } from './MainServices/MainServices';
import { MainSteps } from './MainSteps/MainSteps';
import { MainFAQ } from './MainQuestionsAnswers/MainFAQ';
import { useScrollToTop } from '../../Hooks/useScrollToTop';
import { Contacts } from '../Global/Contacts';

export const Main = () => {
    useScrollToTop()
    return (
        <>
            <MainTop />
            <MainInfo />
            <MainSteps />
            <MainFAQ />
            <MainServices />
            <Contacts />
        </>
    );
}
