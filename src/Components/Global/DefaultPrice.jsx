import React from 'react';
import { RUBLE } from '../../../public/AppData';

export const DefaultPrice = ({ currentSize }) => {
    return (
        <div className='text-center mb-[30px]'>
            <h2 className='inline-block py-[10px] px-[40px] rounded-elementRounded text-4xl font-extrabold mb-[15px] bg-invertedTextColor'>{currentSize.name}</h2>
            <div className='flex justify-center gap-[50px] '>
                <h4 className='text-invertedTextColor bg-textColor p-[15px] rounded-elementRounded'>
                    Электронный формат: {currentSize.priceOnline + RUBLE}
                </h4>
                <h4 className='text-invertedTextColor bg-textColor p-[15px] rounded-elementRounded'>
                    Бумажный формат: {currentSize.priceOrder + RUBLE}({currentSize.physicalQuantity}шт. + доставка)
                </h4>
                <h4 className='text-invertedTextColor bg-textColor p-[15px] rounded-elementRounded'>
                    Дополнительное фото: {currentSize.AdditionalPrice + RUBLE}
                </h4>
            </div>
        </div>
    );
}
