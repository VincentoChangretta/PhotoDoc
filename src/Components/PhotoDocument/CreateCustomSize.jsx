import React, { useEffect, useRef, useState } from 'react';
import './CreateCustomSize.css'
import { Input } from '../UI/Input';
import { useDispatch } from 'react-redux';
import { ATTENTION_DATA, PATHNAMES, PHOTODOC_PHYSICAL_QUANTITY, PHOTODOC_PRICE_ADDITIONAL, PHOTODOC_PRICE_DELIVERY, PHOTODOC_PRICE_ONLINE, photoDocumentArr } from '../../../public/AppData';
import { useNavigate } from 'react-router-dom';
import { currentSizeChanger } from '../../Redux/currentSizeReducer';

export const CreateCustomSize = ({ setCreateCustomSizeModal }) => {

    const createCustomSizeRef = useRef(null)
    const [newSizeWidth, setNewSizeWidth] = useState(null)
    const [newSizeHeight, setNewSizeHeight] = useState(null)
    const [sizeError, setSizeError] = useState(null)
    const [attentionText, setAttentionText] = useState(ATTENTION_DATA.maxSize)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        const closeModal = e => {
            if (createCustomSizeRef.current && !createCustomSizeRef.current.contains(e.target)) {
                setCreateCustomSizeModal(false)
            }
        }
        document.addEventListener("click", closeModal)
        return () => document.removeEventListener("click", closeModal)
    }, [])

    useEffect(() => {
        if ((newSizeHeight || newSizeWidth) && attentionText !== ATTENTION_DATA.maxSize) {
            setAttentionText(ATTENTION_DATA.maxSize)
        }
    }, [newSizeWidth, newSizeHeight])

    const handleSaveNewSize = () => {
        if ((newSizeHeight && newSizeWidth) && +newSizeHeight <= 12 && +newSizeWidth <= 9) {
            const findSizeInData = photoDocumentArr.find(photoData => photoData.id === `${newSizeWidth}x${newSizeHeight}`)
            if (findSizeInData) {
                setAttentionText(ATTENTION_DATA.sizeExists)
                setSizeError(true)
                setTimeout(() => setSizeError(false), 1500);
            } else {
                const newSizePhoto = {
                    id: `${newSizeWidth}x${newSizeHeight}`,
                    name: `Фото ${newSizeWidth}x${newSizeHeight}`,
                    descr: '',
                    priceOnline: PHOTODOC_PRICE_ONLINE,
                    priceOrder: PHOTODOC_PRICE_ONLINE + PHOTODOC_PRICE_DELIVERY,
                    physicalQuantity: PHOTODOC_PHYSICAL_QUANTITY,
                    AdditionalPrice: PHOTODOC_PRICE_ADDITIONAL,
                    newSizeWidth,
                    newSizeHeight,
                }
                dispatch(currentSizeChanger(newSizePhoto))
                setCreateCustomSizeModal(false)
                navigate(PATHNAMES.constructor);
            }

        } else if ((!newSizeHeight || !newSizeWidth)) {
            setAttentionText(ATTENTION_DATA.emptyInput)
            setSizeError(true)
            setTimeout(() => setSizeError(false), 1500);
        } else {
            setSizeError(true)
            setTimeout(() => setSizeError(false), 1500);
        }
    }

    return (
        <div className='customSize-wrapper '>
            <div ref={createCustomSizeRef} className='customSize-modal'>
                <h3 className='max-w-[500px] text-4xl font-extrabold mb-[30px] '>
                    Создайте собственный размер фото
                </h3>
                <p className='mb-[15px] leading-[35px]'>
                    Например, чтобы получить фотографию
                    <span className='customSize-size'>3.9 на 4.5</span> нужно ввести в поле ширины -
                    <span className='customSize-size'>3.9</span>
                    , в поле высоты - <span className='customSize-size'>4.5</span> <br />
                </p>
                <p className={`${sizeError ? 'bg-errorColorNoOpacity' : 'bg-textColorHover'} transition-all max-w-fit p-[5px] px-[15px] mb-[15px] rounded-elementRounded`}>
                    {attentionText}
                </p>
                <div className='flex items-center gap-[30px] mb-[15px] bg-textColorHover rounded-elementRounded p-[20px] pb-[35px]'>
                    <label className='text-invertedTextColor text-center'>
                        <p className='mb-[5px]'>Введите ширину</p>
                        <Input
                            type="number"
                            placeholder="3.9"
                            className="max-w-[250px]"
                            textCenter={true}
                            setNewSizeWidth={setNewSizeWidth}
                        />
                    </label>
                    <label className='text-invertedTextColor text-center'>
                        <p className='mb-[5px]'>Введите высоту</p>
                        <Input
                            type="number"
                            placeholder="4.5"
                            className="max-w-[250px]"
                            textCenter={true}
                            setNewSizeHeight={setNewSizeHeight}
                        />
                    </label>
                </div>

                <button className='btn inverted' onClick={handleSaveNewSize}>
                    Создать
                </button>
            </div>
        </div>
    );
}
