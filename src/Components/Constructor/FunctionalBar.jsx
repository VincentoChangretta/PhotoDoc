import React, { useEffect, useState } from 'react';
import './FunctionalBar.css'
import { ChangerQuantity } from '../UI/ChangerQuantity';
import { ChangerType } from '../UI/ChangerType';
import { TYPES } from '../../../public/AppData';

export const FunctionalBar = ({ currentPhotoStore }) => {
    const [typesArr, setTypesArr] = useState([])

    const electroQuantity = currentPhotoStore.quantity.electroQuantity;
    const electroType = currentPhotoStore.type.electroType;
    const physicalQuantity = currentPhotoStore.quantity.physicalQuantity;
    const physicalType = currentPhotoStore.type.physicalType;


    useEffect(() => {
        if (electroType && physicalType) {
            setTypesArr([TYPES.PHYSICAL, TYPES.ELECTRO])
        } else if (physicalType) {
            setTypesArr([TYPES.PHYSICAL])
        } else if (electroType) {
            setTypesArr([TYPES.ELECTRO])
        }
    }, [electroType, physicalType])


    return (
        <div className="functional-bar">
            <div className='flex flex-col items-center gap-[40px] w-full '>
                {typesArr.map((type, index) => (
                    <ChangerQuantity
                        key={index}
                        electroQuantity={electroQuantity}
                        physicalQuantity={physicalQuantity}
                        electroType={electroType}
                        physicalType={physicalType}
                        type={type}
                    />
                ))}
            </div>
            <div className='max-w-[280px] w-full'>
                <h5 className='text-invertedTextColor text-center mb-[5px] text-lg'>Формат</h5>
                <ChangerType format={true} />
            </div>
            <div className='max-w-[280px] w-full'>
                <h5 className='text-invertedTextColor text-center mb-[5px] text-lg'>Цветность</h5>
                <ChangerType color={true} />
            </div>
            <div className='max-w-[280px] w-full'>
                <h5 className='text-invertedTextColor text-center mb-[5px] text-lg'>Форма одежды</h5>
                <ChangerType cloth={true} />
            </div>
        </div>
    );
}
