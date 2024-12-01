import React, { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Main } from './Main/Main';
import { PhotoDocument } from './PhotoDocument/PhotoDocument';
import { PATHNAMES } from '../../public/AppData';
import { Constructor } from './Constructor/Constructor';
import { PromoCode } from './Global/PromoCode';
import { Order } from './Order/Order';
import { Recommendations } from './Recommendations/Recommendations';
import { Restoration } from './Restoration/Restoration';
import { Retouch } from './Retouch/Retouch';
import { AboutUs } from './AboutUs/AboutUs';
import { Delivery } from './Delivery/Delivery';
import { PrivacyPolicy } from './PrivacyPolicy/PrivacyPolicy';
import { SupportProject } from './Cooperation/SupportProject';

export const promoCodeModalContext = createContext("no provider")

export const Navigation = () => {
    const [promoCodeModal, setPromoCodeModal] = useState(null)
    return (
        <>
            <promoCodeModalContext.Provider value={{ promoCodeModal, setPromoCodeModal }}>
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path={PATHNAMES.photoDocument} element={<PhotoDocument />} />
                    <Route path={PATHNAMES.recommendations} element={<Recommendations />} />
                    <Route path={PATHNAMES.restoration} element={<Restoration />} />
                    <Route path={PATHNAMES.retouch} element={<Retouch />} />
                    <Route path={PATHNAMES.constructor} element={<Constructor />} />
                    <Route path={PATHNAMES.order} element={<Order />} />
                    <Route path={PATHNAMES.aboutUs} element={<AboutUs />} />
                    <Route path={PATHNAMES.delivery} element={<Delivery />} />
                    <Route path={PATHNAMES.privacyPolicy} element={<PrivacyPolicy />} />
                    <Route path={PATHNAMES.supportProject} element={<SupportProject />} />
                </Routes>
                {promoCodeModal && <PromoCode />}
            </promoCodeModalContext.Provider>
        </>
    );
}
