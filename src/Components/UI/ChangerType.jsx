import React, { useEffect, useRef, useState } from 'react';
import { PHOTO_COLOR_COLORED, PHOTO_COLOR_COLORLESS, photoClothArr, photoColorTypes, photoDocTypes, TYPES, PHOTO_WITHOUT_CLOTH, PHOTO_WITH_CLOTH } from '../../../public/AppData';
import { useDispatch, useSelector } from 'react-redux';
import { currentPhotoTypeElectro, currentPhotoTypePhysical } from '../../Redux/currentPhotoType';
import { currentPhotoColoredAction, currentPhotoColorlessAction } from '../../Redux/currentPhotoColors';
import { currentClothSavedCreator, currentPhotoClothFormAction, currentPhotoWithClothAction, currentPhotoWithoutClothAction } from '../../Redux/currentPhotoClothReducer'
import { ClothInput } from '../Constructor/ClothInput';
import { changeOptionClothAction, changeOptionColorAction, changeOptionTypeAction } from '../../Redux/currentPhotoDocOptionReducer';

export const ChangerType = ({ format, color, cloth }) => {
    const selectRef = useRef(null)
    const [isActive, setIsActive] = useState(false)
    const {
        optionTypes: optionTypes,
        optionColor: optionColor,
        optionCloth: optionCloth
    } = useSelector(state => state.currentPhotoOptions);
    const [array, setArray] = useState(
        format
            ? photoDocTypes : color
                ? photoColorTypes : cloth
                    ? photoClothArr : null
    )
    const [activeOption, setActiveOption] = useState(
        format
            ? optionTypes : color
                ? optionColor : cloth
                    ? optionCloth : null)
    const {
        cloth: currentClothState,
        clothForm: clothFormState,
        clothCurrentPhotoSize: clothCurrentPhotoSizeState,
    } = useSelector(state => state.currentPhotoCloth)
    const [clothInput, setClothInput] = useState(currentClothState)
    const currentPhotoSize = useSelector(state => state.currentSize.currentSize)
    const dispatch = useDispatch()

    useEffect(() => {
        setClothInput(currentClothState)
    }, [currentClothState])

    useEffect(() => {
        if (format) {
            setActiveOption(optionTypes);
        } else if (color) {
            setActiveOption(optionColor);
        } else if (cloth) {
            setActiveOption(optionCloth);
        }
    }, [optionTypes, optionColor, optionCloth]);


    useEffect(() => {
        const closeChangerType = e => {
            if (selectRef.current && !selectRef.current.contains(e.target)) {
                setIsActive(false)
            }
        }
        document.addEventListener("click", closeChangerType)
        return () => document.removeEventListener("click", closeChangerType)
    }, [])



    const handleSelectActiveOption = item => {
        setIsActive(false);
        setActiveOption(item);
        const isTypeFormat = format && [TYPES.ELECTRO, TYPES.PHYSICAL, TYPES.ELECTRO_PHYSICAL].includes(item);
        const isColorFormat = color && [PHOTO_COLOR_COLORED, PHOTO_COLOR_COLORLESS].includes(item);
        if (isTypeFormat) {
            const electro = item === TYPES.ELECTRO || item === TYPES.ELECTRO_PHYSICAL;
            const physical = item === TYPES.PHYSICAL || item === TYPES.ELECTRO_PHYSICAL;
            dispatch(currentPhotoTypeElectro(electro));
            dispatch(currentPhotoTypePhysical(physical));
            dispatch(changeOptionTypeAction(item))
        } else if (isColorFormat) {
            if (item === PHOTO_COLOR_COLORED) {
                dispatch(currentPhotoColoredAction());
            } else if (item === PHOTO_COLOR_COLORLESS) {
                dispatch(currentPhotoColorlessAction());
            }
            dispatch(changeOptionColorAction(item))
        } else if (cloth) {
            if (item === PHOTO_WITHOUT_CLOTH) {
                dispatch(currentPhotoWithoutClothAction())
                setClothInput(false)
                dispatch(currentClothSavedCreator(false))
            } else if (item === PHOTO_WITH_CLOTH) {
                dispatch(currentPhotoWithClothAction())
                setClothInput(true)
                if(currentPhotoSize.id !== clothCurrentPhotoSizeState){
                    dispatch(currentPhotoClothFormAction(""))
                    dispatch(currentClothSavedCreator(false))
                }
            }
            dispatch(changeOptionClothAction(item))
        }
    };

    return (
        <>
            <div ref={selectRef} className='relative max-w-[280px] w-full bg-white cursor-pointer rounded-t-[20px] text-xl shadow-xl'>
                <p
                    onClick={() => setIsActive(prev => !prev)}
                    className='p-[5px] px-[20px]'
                >
                    {activeOption}
                </p>
                <ul className={`${!isActive ? 'hidden' : 'flex flex-col absolute z-10 top-[100%] left-0 right-0 bg-white rounded-b-[20px] overflow-hidden shadow-xl'}`}>
                    {array.map((item, index) => (
                        <li
                            key={`type-${index}`}
                            onClick={() => handleSelectActiveOption(item)}
                            className='p-[5px] pl-[20px]  bg-gray hover:bg-grayHover'
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
            {clothInput && cloth && <ClothInput />}
        </>
    );
}
