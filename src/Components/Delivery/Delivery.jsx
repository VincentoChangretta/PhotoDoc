import React from 'react';
import { DeliveryTop } from './DeliveryTop/DeliveryTop';
import { useScrollToTop } from '../../Hooks/useScrollToTop';

export const Delivery = () => {
    useScrollToTop()
    return (
        <>
            <DeliveryTop />
        </>
    );
}
