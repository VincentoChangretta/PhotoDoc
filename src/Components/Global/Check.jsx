import React, { useContext, useEffect, useState } from 'react';
import './Check.css';
import { promoCodeModalContext } from '../Navigation';
import { useDispatch, useSelector } from 'react-redux';
import { ActivatePromoCodeBtn } from './ActivatePromoCodeBtn';
import { calculateAdditionalPhotoSum, calculateWithDiscount } from '../../../public/functions';
import { setCurrentBasketPhotodocPrice } from '../../Redux/currentBasketReducer';
import { PHOTODOC_CLOTH_PRICE } from '../../../public/AppData';

export const Check = ({ photoDoc, currentSize, currentPhotoStore }) => {
    const { promoCodeModal, setPromoCodeModal } = useContext(promoCodeModalContext);
    const promoCodeState = useSelector(state => state.currentPromoCode.photoDocPromoCode);
    const {
        cloth: clothState,
        clothSaved: clothSavedState,
    } = useSelector(state => state.currentPhotoCloth)
    const dispatch = useDispatch()

    const electroQuantity = currentPhotoStore.quantity.electroQuantity;
    const electroType = currentPhotoStore.type.electroType;
    const physicalQuantity = currentPhotoStore.quantity.physicalQuantity;
    const physicalType = currentPhotoStore.type.physicalType;

    // Функция для расчета стоимости бумажного формата
    const calculatePhysicalFormat = () => {
        if (physicalQuantity && physicalType) {
            return physicalQuantity > currentSize.physicalQuantity
                ? currentSize.priceOrder + calculateAdditionalPhotoSum(physicalQuantity, currentSize.physicalQuantity, currentSize.AdditionalPrice)
                : currentSize.priceOrder;
        }
        return 0;
    };
    // Функция для расчета стоимости электронного формата
    const calculateElectroFormat = () => {
        return electroQuantity && electroType ? currentSize.priceOnline : 0;
    };

    const totalElectroSum = calculateElectroFormat();
    const totalPhysicalSum = calculatePhysicalFormat();
    const storedTotalSum = totalElectroSum + totalPhysicalSum
    const totalSum = promoCodeState
        ? calculateWithDiscount(totalElectroSum + totalPhysicalSum + (clothSavedState && clothState ? PHOTODOC_CLOTH_PRICE : 0), promoCodeState)
        : totalElectroSum + totalPhysicalSum + (clothSavedState && clothState ? PHOTODOC_CLOTH_PRICE : 0)

    useEffect(() => {
        dispatch(setCurrentBasketPhotodocPrice(totalSum))
    }, [totalSum])


    if (photoDoc) {
        return (
            <div className='check'>
                <div className='mb-[20px]'>
                    <div className='text-center'>
                        <h3 className='text-3xl font-bold mb-[20px]'>Чек</h3>
                        <h2 className='check-photoName'>
                            {currentSize.name}
                        </h2>
                    </div>
                    <div className='mb-[20px] '>
                        <span className='font-bold text-xl'>Общая стоимость:</span>
                        <div className='text-lg'>
                            {electroQuantity && electroType
                                ? <p>— электронный: {electroQuantity}шт. - {totalElectroSum}₽</p>
                                : null
                            }
                            {physicalQuantity && physicalType
                                ? <p>— бумажный формат: {physicalQuantity}шт. - {totalPhysicalSum}₽ <strong className='pl-[15px] w-385:pl-0'>(с доставкой)</strong></p>
                                : null
                            }
                            {
                                clothSavedState && clothState && <p>— форма: {PHOTODOC_CLOTH_PRICE}₽</p>
                            }
                        </div>
                    </div>
                    <div className='flex flex-col items-center gap-[5px] text-xl font-bold'>
                        <span>В сумме:</span>
                        {
                            storedTotalSum + (clothSavedState && clothState ? PHOTODOC_CLOTH_PRICE : 0) > totalSum
                                ?
                                <div className='flex gap-[15px] text-4xl'>
                                    <span className='line-through'>
                                        {storedTotalSum + (clothSavedState && clothState ? PHOTODOC_CLOTH_PRICE : 0)}₽
                                    </span>
                                    <span>{totalSum}₽</span>
                                </div>
                                : <span className='text-3xl ml-[10px]'>{totalSum}₽</span>
                        }
                    </div>
                </div>
                {!promoCodeState
                    ? <ActivatePromoCodeBtn setPromoCodeModal={setPromoCodeModal} />
                    : <p>Промокод активирован!</p>
                }
            </div>
        );
    }
    return null;
};
