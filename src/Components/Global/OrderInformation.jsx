import React, { useEffect, useRef, useState } from 'react';
import './OrderInformation.css'
import { PHOTO_COLOR_COLORED, PHOTO_COLOR_COLORLESS, RUBLE } from '../../../public/AppData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { ModalCloser } from './ModalCloser';
export const OrderInformation = ({ currentPhotoStore, setInfoModal }) => {

    const infoModalRef = useRef(null);
    useEffect(() => {
        const handleChange = e => {
            if (infoModalRef.current && !infoModalRef.current.contains(e.target)) {
                setInfoModal(false);
            }
        };
        document.addEventListener('click', handleChange);
        return () => document.removeEventListener('click', handleChange);
    }, []);

    return (
        <div className='fixed flex justify-center items-center inset-0 z-[2000] backdrop-blur	'>
            <div ref={infoModalRef} className='order-information'>
                <ModalCloser closeModal={setInfoModal} />
                <h3 className='text-4xl font-bold mb-[25px] w-560:text-2xl w-420:max-w-[250px]'>
                    Информация о заказе
                    <FontAwesomeIcon className='ml-iconMarginX' icon={faCircleInfo} />
                </h3>
                <h3 className='text-4xl font-extrabold mb-[25px] w-560:text-2xl'>
                    {currentPhotoStore.photoInfo.info.name}
                </h3>
                <div className='flex flex-col gap-[10px] text-4xl mb-[25px]'>
                    {currentPhotoStore.type.physicalType &&
                        <p className='order-information__text'>
                            <strong>Бумажный: </strong>
                            {currentPhotoStore.quantity.physicalQuantity}шт.
                        </p>
                    }
                    {currentPhotoStore.type.electroType &&
                        <p className='order-information__text'>
                            <strong>Электронный: </strong>
                            {currentPhotoStore.quantity.electroQuantity}шт.
                        </p>
                    }
                    <p className='order-information__text'>
                        <strong>Цветность: </strong>
                        {currentPhotoStore.color ? PHOTO_COLOR_COLORED : PHOTO_COLOR_COLORLESS}
                    </p>
                    {
                        currentPhotoStore.cloth.state && currentPhotoStore.cloth.form &&
                        <p className='order-information__text'>
                            <strong>Форма: </strong>
                            {currentPhotoStore.cloth.form}
                        </p>
                    }
                </div>
                <p className='text-4xl font-extrabold w-560:text-2xl'>
                    <strong>Цена: </strong>
                    {currentPhotoStore.photoInfo.price + RUBLE}
                </p>
            </div>
        </div>
    );
}
