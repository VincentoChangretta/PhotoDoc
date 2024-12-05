import React from 'react';
import { RetouchTop } from './RetouchTop/RetouchTop';
import { useSelector } from 'react-redux';
import { ModalForm } from '../Global/ModalForm';
import { useScrollToTop } from '../../Hooks/useScrollToTop';

export const Retouch = () => {
    useScrollToTop()
    const {
        state: ModalFormState,
        service: ModalFormData
    } = useSelector(state => state.currentModalFormState)

    return (
        <>
            <RetouchTop />
            {ModalFormState && ModalFormData && <ModalForm service="ретушь" data={ModalFormData} />}
        </>
    );
}
