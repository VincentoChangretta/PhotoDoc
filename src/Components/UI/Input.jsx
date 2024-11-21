import React, { useEffect, useState } from 'react';
import { useInput } from '../../Hooks/useInput';
import { InputSelect } from './InputSelect';
import './input.css'

export const Input = ({
    withSelect,
    name,
    type,
    placeholder,
    required,
    className,
    setPromoCodeValue,
    textCenter,
    setNewSizeWidth,
    setNewSizeHeight,
    dateNow,
    setPhotoCodeValue,
}) => {

    const { value, onChange, isActive } = useInput()
    const [parrentActiveOption, setParrentActiveOption] = useState(null)


    useEffect(() => {
        if (setPromoCodeValue) {
            setPromoCodeValue(value)
        } else if (setNewSizeWidth) {
            setNewSizeWidth(value)
        } else if (setNewSizeHeight) {
            setNewSizeHeight(value)
        } else if (setPhotoCodeValue) {
            setPhotoCodeValue(value)
        }
    }, [value])


    if (withSelect) {
        return (
            <div className={`${className} input-box py-[20px] px-[10px] pl-[85px] max-w-[450px] relative`}>
                <InputSelect setParrentActiveOption={setParrentActiveOption} />
                <input
                    name={`${name}-${parrentActiveOption?.id}`}
                    type={parrentActiveOption?.type || type}
                    placeholder={parrentActiveOption?.placeholder}
                    value={value}
                    onChange={onChange}
                    required={required}
                />
            </div>
        )
    }

    return (
        <div className={`input-box p-[20px] ${className ? className : 'max-w-[450px]'}`}>
            {dateNow && <p className='absolute left-[10px] top-[50%] translate-y-[-50%] bg-textColor py-[10px] px-[25px] text-invertedTextColor rounded-elementRounded'>{dateNow}</p>}
            <input
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
                className={`${textCenter ? 'text-center text-2xl font-extrabold' : ''}`}
            />
        </div>
    );
}
