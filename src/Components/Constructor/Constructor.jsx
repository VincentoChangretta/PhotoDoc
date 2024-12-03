import React, { useEffect, useState } from 'react';
import { FunctionalBar } from './FunctionalBar';
import { PhotoArea } from './PhotoArea';
import { useDispatch, useSelector } from 'react-redux';
import { Check } from '../Global/Check';
import { Link } from 'react-router-dom';
import { faFaceSmileWink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CLOTH_INPUT_LOCALSTORE, CURRENT_ELECTRO_QUANTITY, CURRENT_PHYSICAL_QUANTITY, FIRST_OPTIONS, PATHNAMES, PHOTODOC_ELECTRO_QUANTITY, PHOTODOC_INITIAL_ELECTRO_QUANTITY, PHOTODOC_PHYSICAL_QUANTITY, RUBLE, SIZE_9x12 } from '../../../public/AppData';
import { setCurrentPhotoDocQuantity } from '../../Redux/currentPhotoDocQuantityReducer';
import { setPreviousPhotoAction } from '../../Redux/previousPhotoDocReducer';
import { currentPhotoColoredAction } from '../../Redux/currentPhotoColors';
import { currentPhotoWithoutClothAction } from '../../Redux/currentPhotoClothReducer';
import { changeOptionClothAction, changeOptionColorAction } from '../../Redux/currentPhotoDocOptionReducer';
import { setCurrentBasketPhotodocInfo } from '../../Redux/currentBasketReducer';
import { useScrollToTop } from '../../Hooks/useScrollToTop';
import { useWindowSize } from '../../Hooks/useWindowSize';

export const Constructor = () => {
    useScrollToTop()
    const currentSize = useSelector(state => state.currentSize.currentSize)
    const [photoQuantity, setPhotoQuantity] = useState(0)
    const dispatch = useDispatch()
    const {
        currentElectroQuantity: electroQuantity,
        currentPhysicalQuantity: physicalQuantity
    } = useSelector(state => state.currentPhotoDocQuantity);
    const {
        electroPhotoType: electroType,
        physicalPhotoType: physicalType
    } = useSelector(state => state.currentPhotoType)
    const previousSize = useSelector(state => state.previousPhotoDoc.previousPhotoSize)
    useEffect(() => {
        const resetToDefault = () => {
            dispatch(currentPhotoColoredAction())
            dispatch(changeOptionColorAction(FIRST_OPTIONS.color))
            dispatch(currentPhotoWithoutClothAction())
            dispatch(changeOptionClothAction(FIRST_OPTIONS.cloth))
            localStorage.removeItem(CLOTH_INPUT_LOCALSTORE)
        }
        if (currentSize?.name.includes(SIZE_9x12)) {
            if (previousSize && previousSize.id !== currentSize.id) {
                dispatch(setCurrentPhotoDocQuantity(CURRENT_PHYSICAL_QUANTITY, 1));
                dispatch(setCurrentPhotoDocQuantity(CURRENT_ELECTRO_QUANTITY, 1));
                resetToDefault()
            }
        } else if (previousSize && previousSize.id !== currentSize.id) {
            // если актуальный размер не совпадает с прошлым размером, то возвращаем начальные значения
            dispatch(setCurrentPhotoDocQuantity(CURRENT_PHYSICAL_QUANTITY, PHOTODOC_PHYSICAL_QUANTITY));
            dispatch(setCurrentPhotoDocQuantity(CURRENT_ELECTRO_QUANTITY, PHOTODOC_INITIAL_ELECTRO_QUANTITY));
            resetToDefault()
        }

        return () => dispatch(setPreviousPhotoAction(currentSize))
    }, [currentSize]);
    const screenWidth = useWindowSize()
    const screen1200 = screenWidth <= 1200


    const saveTobasket = () => {
        dispatch(setCurrentBasketPhotodocInfo(currentSize))
    }

    const currentPhotoStore = {
        quantity: {
            electroQuantity,
            physicalQuantity
        },
        type: {
            electroType,
            physicalType
        }
    }

    const getPaddingClass = (photoQuantity) => {
        if (screenWidth > 500) {
            if (photoQuantity > 4) return 'w-1200:pt-[600px]';
            if (photoQuantity > 2) return 'w-1200:pt-[430px]';
            return 'w-1200:pt-[260px]'
        } else {
            if (photoQuantity > 4) return 'w-1200:pt-[460px]';
            if (photoQuantity > 2) return 'w-1200:pt-[340px]';
            return 'w-500:pt-[220px]'
        }
    };

    if (!currentSize) {
        return (
            <div className='flex items-center justify-center fixed inset-0 bg-white'>
                <div className='flex items-center flex-col gap-[40px]'>
                    <h2 className='text-5xl font-bold'>
                        Вы не добавили фотографии для заказа <FontAwesomeIcon icon={faFaceSmileWink} />
                    </h2>
                    <Link to={PATHNAMES.photoDocument} className='btn bg-invertedTextColor'>Добавить</Link>
                </div>
            </div>
        )
    }
    return (
        <section className='relative mb-0'>
            <div className="container">
                <div className="title-box text-center">
                    <h2>Конструктор заказа</h2>
                    <h3>Выберите количество и тип фотографий</h3>
                </div>
                <div className='flex flex-col '>
                    <div className={`flex justify-between mb-[70px] min-h-[550px] w-1200:gap-[40px] transition-all  w-1200:flex-col w-1200:relative ${getPaddingClass(photoQuantity)}`}>
                        {
                            !screen1200
                                ? <>
                                    <FunctionalBar currentPhotoStore={currentPhotoStore} />
                                    <PhotoArea
                                        photoQuantity={photoQuantity}
                                        setPhotoQuantity={setPhotoQuantity}
                                        screenWidth={screenWidth}
                                    />
                                    <Check
                                        photoDoc={true}
                                        currentSize={currentSize}
                                        currentPhotoStore={currentPhotoStore} /
                                    >

                                </>
                                :
                                <>
                                    <PhotoArea
                                        photoQuantity={photoQuantity}
                                        setPhotoQuantity={setPhotoQuantity}
                                    />
                                    <div className='flex justify-center gap-[30px] w-750:flex-wrap'>
                                        <FunctionalBar currentPhotoStore={currentPhotoStore} />
                                        <Check
                                            photoDoc={true}
                                            currentSize={currentSize}
                                            currentPhotoStore={currentPhotoStore} /
                                        >
                                    </div>
                                </>
                        }
                    </div>
                    <Link className='btn mx-auto' to={PATHNAMES.order} onClick={saveTobasket}>
                        Заказать
                    </Link>
                </div>
            </div>
        </section>
    );
}
