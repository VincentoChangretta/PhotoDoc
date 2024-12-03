import React, { useEffect, useRef, useState } from 'react';
import { inputSelectData, TELEPHONE_NUMBER } from '../../../public/AppData';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const InputSelect = ({ setParrentActiveOption }) => {
    const [select, setSelect] = useState(inputSelectData)
    const [activeOption, setActiveOption] = useState(select[0])
    const [isActive, setIsActive] = useState(null)
    const inputSelectRef = useRef()
    const { physicalPhotoType: physicalType, electroPhotoType: electroType } = useSelector(state => state.currentPhotoType)

    useEffect(() => {
        setParrentActiveOption(activeOption)
        const closeInputSelect = e => {
            if (inputSelectRef.current && !inputSelectRef.current.contains(e.target)) {
                setIsActive(false)
            }
        }
        document.addEventListener("click", closeInputSelect)
        return () => document.removeEventListener("click", closeInputSelect)
    }, [])

    useEffect(() => {
        if (physicalType && !electroType || !physicalType && electroType) {
            const filteredSelect = select.filter(option => option.id !== TELEPHONE_NUMBER)
            setSelect(filteredSelect)
        } else {
            setSelect(inputSelectData)
        }
    }, [physicalType, electroType])

    const handleNewActive = option => {
        setActiveOption(option)
        setIsActive(prev => !prev)
        setParrentActiveOption(option)
    }

    return (
        <div ref={inputSelectRef} className='absolute z-[1020] left-[10px] top-[50%] translate-y-[-50%] rounded-elementRounded text-white '>
            <p
                className='w-fit relative z-10 py-[10px] px-[20px] bg-textColor rounded-elementRounded cursor-pointer'
                onClick={() => setIsActive(prev => !prev)}
            >
                <FontAwesomeIcon className='text-2xl' icon={activeOption.name} />
            </p>
            <ul className={`${!isActive ? 'hidden' : ''} w-fit absolute top-[-11px] left-[-11px] right-[-5px] bg-textColorHover pt-[63px] rounded-elementRounded px-[12px] pb-[12px] shadow-xl`}
            >
                {select.map(option => (
                    <li
                        key={option.id}
                        className='text-base w-fit py-[10px] px-[20px] hover:bg-textColor rounded-elementRounded whitespace-nowrap cursor-pointer'
                        onClick={() => handleNewActive(option)}
                    >
                        {option.id}
                    </li>
                ))}
            </ul>
        </div>
    );
}
