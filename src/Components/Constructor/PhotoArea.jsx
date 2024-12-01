import React, { useEffect, useState } from 'react';
import { photo4x6Img } from '../../../public/ImgData';
import { MAX_PHOTO_QUANTITY_IN_DESIGN } from '../../../public/AppData';
import { useSelector } from 'react-redux';
import './PhotoArea.css'

export const PhotoArea = ({ screenWidth, photoQuantity, setPhotoQuantity }) => {
    const { currentElectroQuantity: electroQuantity, currentPhysicalQuantity: physicalQuantity }
        = useSelector(state => state.currentPhotoDocQuantity);
    const { electroPhotoType: electroType, physicalPhotoType: physicalType }
        = useSelector(state => state.currentPhotoType)
    const colorState = useSelector(state => state.currentPhotoColor.colored)

    const toRenderByType = (quantity) => {
        if (quantity > MAX_PHOTO_QUANTITY_IN_DESIGN) {
            setPhotoQuantity(MAX_PHOTO_QUANTITY_IN_DESIGN)
        } else {
            setPhotoQuantity(quantity)
        }
    }

    useEffect(() => {
        if (electroType && physicalType) {
            toRenderByType(physicalQuantity)
        } else if (electroQuantity && !physicalType) {
            toRenderByType(electroQuantity)
        } else if (physicalType && !electroType) {
            toRenderByType(physicalQuantity)
        }
    }, [electroQuantity, physicalQuantity, electroType, physicalType])

    return (
        <div className='shrink-0 flex justify-center items-center w-1200:absolute w-1200:top-0 w-1200:left-[50%] w-1200:translate-x-[-50%]'>
            <div className={
                `${photoQuantity > 6 ? 'max-w-[400px] w-[400px]' : 'max-w-[280px]'} photodoc-bg`
            }>
                <span
                    className={
                        `${electroType || electroType && physicalType ? '' : 'hidden'} 
                        photodoc-bg__electro`
                    }>
                    {electroType && physicalType ? '+JPG' : 'JPG'}
                </span>
                {Array.from({ length: photoQuantity }, (_, index) => {
                    return (
                        <div key={`photo-${index}`} className='max-w-[100px]'>
                            <img className={`${!colorState ? 'grayscale' : ''} img`} src={photo4x6Img} alt="фото на документ" />
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
