import React, { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Main } from './Main/Main';
import { PhotoDocument } from './PhotoDocument/PhotoDocument';
import { PATHNAMES } from '../../public/AppData';
import { Constructor } from './Constructor/Constructor';
import { PromoCode } from './Global/PromoCode';
import { Order } from './Order/Order';

export const promoCodeModalContext = createContext("no provider")

export const Navigation = () => {
    const [promoCodeModal, setPromoCodeModal] = useState(null)
    return (
        <>
            <promoCodeModalContext.Provider value={{ promoCodeModal, setPromoCodeModal }}>
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path={PATHNAMES.photoDocument} element={<PhotoDocument />} />
                    <Route path={PATHNAMES.constructor} element={<Constructor />} />
                    <Route path={PATHNAMES.order} element={<Order />} />
                </Routes>
                {promoCodeModal && <PromoCode />}
            </promoCodeModalContext.Provider>
        </>
    );
}
