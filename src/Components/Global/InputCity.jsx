import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Select } from '../UI/Select';
import { DELIVERY_CITYIES } from '../../../public/AppData';
import { Input } from '../UI/Input';

export const InputCity = () => {
    const {
        city: currentDeliveryCity,
    } = useSelector(state => state.currentDeliveryAddress)
    const [activeItem, setActiveItem] = useState(null)
    const [addressValue, setAddressValue] = useState("")
    return (
        <div className='relative'>
            <Select
                activeItem={activeItem}
                setActiveItem={setActiveItem}
                optionArray={DELIVERY_CITYIES}
                activeState={currentDeliveryCity}
                className="w-[190px] text-center absolute z-[1020] top-[50%] left-[15px] translate-y-[-50%] w-540:top-[15px] w-540:translate-y-0"
                activeClassName="relative z-[1022] bg-textColor rounded-elementRounded text-invertedTextColor cursor-pointer py-[10px] px-[25px]"
                listClassName="flex flex-col gap-[10px] absolute left-[-10px] top-[-10px] right-[-10px] z-[1021] pt-[60px] px-[10px] pb-[10px]  rounded-elementRounded  bg-invertedTextColor shadow-xl"
                listItemClassName="text-invertedTextColor py-[10px] bg-textColor rounded-elementRounded"
            />
            <Input
                className="pl-[215px] w-540:pl-[20px] w-540:pt-[65px]"
                type="text"
                placeholder="Ваш адрес доставки"
                required={true}
                getValue={setAddressValue}
            />
            <input
                readOnly
                className='hidden'
                type="text"
                name="address"
                value={currentDeliveryCity + " " + addressValue}
            />
        </div>
    );
}
