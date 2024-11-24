import React from 'react';
import { PATHNAMES, photoDocumentArr, SIZE_35x45, SIZE_3x4, SIZE_4x6, SIZE_9x12 } from '../../../../public/AppData';
import { faArrowRight, faCamera } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { MainInfoPhoto } from './MainInfoPhoto';
import { IconBtn } from '../../UI/IconBtn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { currentSizeChanger } from '../../../Redux/currentSizeReducer';
import classes from "./MainInfo.module.css"


const toShowSizeArr = [SIZE_3x4, SIZE_35x45, SIZE_4x6, SIZE_9x12]

export const MainInfo = () => {
    const dispatch = useDispatch()
    const filteredPhotoDocArr = photoDocumentArr.filter(service => toShowSizeArr.includes(service.id))
    const handleSetNewSize = photoObj => {
        dispatch(currentSizeChanger(photoObj))
    }

    return (
        <section className='mb-[120px]'>
            <div className="container">
                <div className="title-box text-center">
                    <h2>Идея которая стала реальностью!</h2>
                    <h3>Мы создали платформу для быстрого заказа фотографий на любые цели</h3>
                </div>
                <div className="inner">
                    <MainInfoPhoto />
                    <div className='section-content max-w-[750px]'>
                        <h4 className='max-w-[500px]'>
                            Все виды фотографий на документы
                            <FontAwesomeIcon className='ml-iconMarginX' icon={faCamera} />
                        </h4>
                        <div className='flex flex-col gap-3 relative z-20'>
                            {filteredPhotoDocArr.map(photoObj => (
                                <div
                                    className={`${classes['service-card']}`}
                                    key={photoObj.id}
                                >
                                    <div>
                                        <h5 className='text-2xl font-bold mb-[5px]'>{photoObj.name}</h5>
                                        <p>{photoObj.descr}</p>
                                    </div>
                                    <IconBtn
                                        pathname="/constructor"
                                        icon={faArrowRight}
                                        onClick={() => handleSetNewSize(photoObj)}
                                    />
                                </div>
                            ))}
                            <Link className='btn' to={PATHNAMES.photoDocument}>Все размеры</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
