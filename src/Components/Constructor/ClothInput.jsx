import React, { useEffect, useState } from 'react';
import { CLOTH_INPUT_LOCALSTORE } from '../../../public/AppData';
import { faPencil, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { clothCurrentPhotoSizeCreator, currentClothSavedCreator, currentPhotoClothFormAction } from '../../Redux/currentPhotoClothReducer';
import './ClothInput.css'

export const ClothInput = () => {
    const [value, setValue] = useState("")
    const [storedValue, setStoredValue] = useState(localStorage.getItem(CLOTH_INPUT_LOCALSTORE) || '')
    const [isSavedValue, setIsSavedValue] = useState(
        localStorage.getItem(CLOTH_INPUT_LOCALSTORE) ? true : null
    )
    const [emptyErr, setEmptyErr] = useState(null)
    const {
        cloth: clothState,
        clothForm: formInput,
    } = useSelector(state => state.currentPhotoCloth)
    const currentPhotoSize = useSelector(state => state.currentSize.currentSize)
    const dispatch = useDispatch()

    useEffect(() => {
        if (formInput === "" && storedValue) {
            dispatch(currentPhotoClothFormAction(storedValue))
        }
    }, [storedValue]) // следит за обновлением состояния и меняет ЗАПИСЬ в store

    useEffect(() => {
        setValue(storedValue)
        if (clothState && storedValue) {
            dispatch(currentClothSavedCreator(true))
        }
    }, [clothState, storedValue])

    // useEffect(() => {
    //     if (clothState && storedValue) {
    //         dispatch(currentClothSavedCreator(true))
    //     }
    // }, [clothState, storedValue])

    const handleValueChange = e => {
        const newValue = e.target.value
        setValue(newValue)
    }

    const handleDeleteValue = () => {
        setValue("")
        setStoredValue("")
        setIsSavedValue(false)
        dispatch(currentPhotoClothFormAction(""))
        dispatch(currentClothSavedCreator(false))
        localStorage.removeItem(CLOTH_INPUT_LOCALSTORE)
    }

    const handleEditValue = () => {
        setIsSavedValue(false)
        dispatch(currentClothSavedCreator(false))
    }

    const handleSaveValue = () => {
        if (value) {
            setIsSavedValue(true)
            setStoredValue(value)
            dispatch(currentPhotoClothFormAction(value))
            dispatch(clothCurrentPhotoSizeCreator(currentPhotoSize.id)) // устанавливаем размер на котором установлена форма для даьнейшего использования при проверке состояния формы в различных размерах
            dispatch(currentClothSavedCreator(true))
            localStorage.setItem(CLOTH_INPUT_LOCALSTORE, value)
        } else {
            setEmptyErr(true)
            setTimeout(() => setEmptyErr(false), 1000);
        }
    }
    if (isSavedValue) {
        return (
            <>
                <div className='saved-input'>
                    <div className="cloth-text">
                        <p className='break-words'>Форма: {storedValue}</p>
                    </div>
                    <div className='flex gap-[10px]'>
                        <button className='btn small smallest' onClick={handleEditValue}>
                            <FontAwesomeIcon icon={faPencil} />
                        </button>
                        <button className='btn small smallest' onClick={handleDeleteValue}>
                            <FontAwesomeIcon icon={faX} />
                        </button>
                    </div>
                </div>
            </>
        )
    }



    return (
        <div className='mt-[15px]'>
            <label className='cursor-pointer'>
                <p className='text-invertedTextColor mb-[5px] text-center'>
                    Заполните поле
                </p>
                <input
                    type="text"
                    className={`${emptyErr ? 'bg-errorColor placeholder:text-white text-lg' : ''} cloth-input`}
                    value={value}
                    onChange={handleValueChange}
                    placeholder='Название формы, звание ...'
                />
            </label>
            <button
                className='btn darkened'
                onClick={handleSaveValue}
            >
                Сохранить поле
            </button>
        </div>
    );
}
