import React, { useEffect } from 'react';
import { OrderTop } from './OrderTop/OrderTop';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { PATHNAMES } from '../../../public/AppData';

export const Order = () => {

    const navigate = useNavigate()
    const currentPhotoDocInBasket = useSelector(state => state.currentBasket.photoDoc)
    useEffect(() => {
        if (!currentPhotoDocInBasket.info) {
            navigate(PATHNAMES.photoDocument)
        }
    })

    if(!currentPhotoDocInBasket.info){
        return null
    }

    return (
        <>
            <OrderTop />
        </>
    );
}
