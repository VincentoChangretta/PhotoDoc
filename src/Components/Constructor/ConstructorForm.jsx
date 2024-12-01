import React, { useEffect, useRef, useState } from 'react';
import { Input } from '../UI/Input';
import { InputFile } from '../UI/InputFile';
import { handleSubmit } from '../../../public/functions';
import { CheckboxVerification } from '../Global/Checkbox';
import classes from './ConstructorForm.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCircleInfo, faSave } from '@fortawesome/free-solid-svg-icons';
import { PhotoDocDelivery } from './PhotoDocDelivery';
import { useDispatch, useSelector } from 'react-redux';
import { currentClientPhotoCodeCreator } from '../../Redux/currentCliendPhotoCodeReducer';
import { TextArea } from '../UI/TextArea';
import { PHOTO_COLOR_COLORED, PHOTO_COLOR_COLORLESS, RUBLE } from '../../../public/AppData';

export const ConstructorForm = ({ currentPhotoStore, setInfoModal, setSavePhotoModal }) => {

    const currentPhotoCode = useSelector(state => state.currentClientPhotoCode.code)
    const prevPhoto = useSelector(state => state.previousPhotoDoc.previousPhotoSize)
    const [fileInput, setFileInput] = useState(null)
    const [privacyCheckbox, setPrivacyCheckbox] = useState(null)
    const [infoCheckbox, setInfoPrivacyCheckbox] = useState(null)
    const [privacyError, setPrivacyError] = useState("")
    const [infoError, setInfoError] = useState("")
    const [fetchedDescr, setFetchedDescr] = useState(null)
    const {
        currentDeliveryDate,
        currentDeliveryTime,
    } = useSelector(state => state.currentDeliveryDate);
    const formRef = useRef(null)
    const dispatch = useDispatch()

    const cloth = currentPhotoStore.cloth.state ? currentPhotoStore.cloth.form : false
    const color = currentPhotoStore.color ? PHOTO_COLOR_COLORED : PHOTO_COLOR_COLORLESS
    const photoSize = currentPhotoStore.photoInfo.info.name
    const price = currentPhotoStore.photoInfo.price + RUBLE
    const electroPhoto = currentPhotoStore.type.electroType ? currentPhotoStore.quantity.electroQuantity : 0
    const physicalPhoto = currentPhotoStore.type.physicalType ? currentPhotoStore.quantity.physicalQuantity : 0







    useEffect(() => {
        if (currentPhotoStore.photoInfo.info.id !== prevPhoto?.id) {
            dispatch(currentClientPhotoCodeCreator(null))
            // меняем сохраненный код фотографии 
        }
    }, [])

    return (
        <div className='flex items-center justify-center w-full min-h-[50svh]'>
            <form
                ref={formRef}
                onSubmit={e =>
                    handleSubmit(
                        e,
                        formRef.current,
                        setFetchedDescr,
                        privacyCheckbox,
                        infoCheckbox,
                        privacyError,
                        setPrivacyError,
                        infoError,
                        setInfoError,
                        setFileInput
                    )
                }
                className={classes.form}
            >
                <h2 className='text-3xl font-bold mb-[40px]'>Форма</h2>
                <div className='flex gap-[50px] mb-[20px]'>
                    <div className={classes['form_block']}>
                        <Input
                            name="name"
                            type="text" placeholder="Ваше имя"
                            required={true}
                        />
                        <Input
                            name="phone"
                            type="text"
                            placeholder="Ваш номер телефона"
                            required={currentPhotoStore.type.physicalType}
                        />
                        <Input
                            name="сontact-with"
                            type="text"
                            placeholder=""
                            withSelect={true}
                            required={currentPhotoStore.type.electroType}
                        />
                        <InputFile fileInput={fileInput} setFileInput={setFileInput} />
                    </div>
                    <div className={classes['form_block']}>
                        {currentPhotoStore.type.physicalType && <PhotoDocDelivery />}
                        <TextArea name="message" placeholder="Сообщение (необязательно)" />
                    </div>
                    <div className='hidden'>
                        <input readOnly name="photo-size" type="text" value={photoSize} />
                        <input readOnly name="photo-electro" type="text" value={electroPhoto} />
                        <input readOnly name="photo-physical" type="text" value={physicalPhoto} />
                        <input readOnly name="photo-cloth" type="text" value={cloth} />
                        <input readOnly name="photo-color" type="text" value={color} />
                        <input readOnly name="photo-price" type="text" value={price} />
                        <input readOnly name='photo-deliveryDate' type="text" value={currentDeliveryDate} />
                        <input readOnly name='photo-deliveryTime' type="text" value={currentDeliveryTime} />
                        <input readOnly name='photo-saveCode' type="text" value={`${currentDeliveryDate}_${currentPhotoCode}`} />
                    </div>
                    <div className='flex flex-col justify-between'>
                        <div className='flex flex-col gap-[15px] p-[30px] bg-grayHover rounded-elementRounded'>
                            <button
                                type='button'
                                className='btn'
                                onClick={e => !currentPhotoCode ? (e.stopPropagation(), setSavePhotoModal(true)) : null}>
                                {currentPhotoCode
                                    ? <>
                                        <span>Фото будет сохранено</span>
                                        <FontAwesomeIcon className='text-xl ml-[10px]' icon={faCheck} />
                                    </>
                                    : <>
                                        <span>Сохранить фото в базу</span>
                                        <FontAwesomeIcon className='text-xl ml-[10px]' icon={faSave} />
                                    </>
                                }
                            </button>
                            <button
                                type='button'
                                className='btn'
                                onClick={e => (e.stopPropagation(), setInfoModal(true))}
                            >
                                Информация о заказе
                                <FontAwesomeIcon className='ml-[10px] text-xl' icon={faCircleInfo} />
                            </button>
                        </div>
                        <div className='flex flex-col gap-[10px] justify-end'>
                            <CheckboxVerification
                                errorStatus={privacyError}
                                stateChanger={setPrivacyCheckbox}
                            />
                            <CheckboxVerification
                                errorStatus={infoError}
                                stateChanger={setInfoPrivacyCheckbox}
                                infoCheckbox={true}
                            />
                            <button className='btn darkened' type='submit'>Заказать</button>
                            {fetchedDescr && <p>Заказ успешно оформлен!</p>}
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
