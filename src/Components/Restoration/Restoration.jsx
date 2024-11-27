import React, { useState } from 'react';
import { RestorationTop } from './RestorationTop/RestorationTop';
import { ModalForm } from '../Global/ModalForm';
import { useSelector } from 'react-redux';

export const Restoration = () => {

    const {
        state: ModalFormState,
        service: ModalFormData
    } = useSelector(state => state.currentModalFormState)



    return (
        <>
            <RestorationTop />
            {ModalFormState && ModalFormData && <ModalForm data={ModalFormData} />}
        </>
    );
}
