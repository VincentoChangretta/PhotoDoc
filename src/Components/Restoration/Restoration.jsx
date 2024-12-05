import React, { useState } from 'react';
import { RestorationTop } from './RestorationTop/RestorationTop';
import { ModalForm } from '../Global/ModalForm';
import { useSelector } from 'react-redux';
import { useScrollToTop } from '../../Hooks/useScrollToTop';

export const Restoration = () => {
    useScrollToTop()
    const {
        state: ModalFormState,
        service: ModalFormData
    } = useSelector(state => state.currentModalFormState)



    return (
        <>
            <RestorationTop />
            {ModalFormState && ModalFormData && <ModalForm service="реставрация" data={ModalFormData} />}
        </>
    );
}
