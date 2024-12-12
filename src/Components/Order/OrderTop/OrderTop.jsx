import React, { useState } from 'react';
import { OrderInformation } from '../../Global/OrderInformation';
import { ConstructorForm } from '../../Constructor/ConstructorForm';
import { useSelector } from 'react-redux';
import { SavePhotoModal } from '../../Global/SavePhotoModal';
import { OrderCodeGenerator } from '../../Global/OrderCodeGenerator';

export const OrderTop = () => {
    const {
        currentElectroQuantity: electroQuantity,
        currentPhysicalQuantity: physicalQuantity
    } = useSelector(state => state.currentPhotoDocQuantity);
    const {
        electroPhotoType: electroType,
        physicalPhotoType: physicalType
    } = useSelector(state => state.currentPhotoType)
    const currentPhotoDocInBasket = useSelector(state => state.currentBasket.photoDoc)
    const currentPhotoColor = useSelector(state => state.currentPhotoColor.colored)
    const {
        cloth: currentClothState,
        clothForm: currentClothForm
    } = useSelector(state => state.currentPhotoCloth)
    const [infoModal, setInfoModal] = useState(null);
    const [savePhotoModal, setSavePhotoModal] = useState(null)
    const [orderCodeGenerator, setOrderCodeGenerator] = useState(null)
    const currentPhotoStore = {
        photoInfo: currentPhotoDocInBasket,
        color: currentPhotoColor,
        cloth: {
            state: currentClothState,
            form: currentClothForm
        },
        quantity: {
            electroQuantity,
            physicalQuantity
        },
        type: {
            electroType,
            physicalType
        }
    }

    return (
        <section>
            <div className="container">
                <div className="title-box text-center">
                    <h2>Корзина</h2>
                    <h3>Запоните форму, чтобы оформить заказ</h3>
                </div>
                <div className='inner'>
                    <ConstructorForm
                        currentPhotoStore={currentPhotoStore}
                        setInfoModal={setInfoModal}
                        setSavePhotoModal={setSavePhotoModal}
                        setOrderCodeGenerator={setOrderCodeGenerator}
                    />
                </div>
                {infoModal && <OrderInformation currentPhotoStore={currentPhotoStore} setInfoModal={setInfoModal} />}
                {savePhotoModal && <SavePhotoModal setSavePhotoModal={setSavePhotoModal} />}
                {orderCodeGenerator && <OrderCodeGenerator setOrderCodeGenerator={setOrderCodeGenerator} />}
            </div>
        </section>
    );
}
