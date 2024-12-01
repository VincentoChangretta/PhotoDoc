import React, { useEffect, useState } from 'react';
import { PATHNAMES, photoDocumentArr, SIZE_35x45, SIZE_3x4, SIZE_4x6, SIZE_9x12 } from '../../../../public/AppData';
import { faArrowRight, faCamera } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { MainInfoPhoto } from './MainInfoPhoto';
import { IconBtn } from '../../UI/IconBtn';
import { useDispatch } from 'react-redux';
import { currentSizeChanger } from '../../../Redux/currentSizeReducer';
import classes from "./MainInfo.module.css"


const toShowSizeArr = [SIZE_3x4, SIZE_35x45, SIZE_4x6, SIZE_9x12]

export const MainInfo = () => {
    const dispatch = useDispatch()

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const smallScreen = screenWidth <= 1160;
    const mobileScreen = screenWidth <= 500
    const extraSmall = screenWidth <= 375



    const filteredPhotoDocArr = photoDocumentArr.filter(service => toShowSizeArr.includes(service.id))
    const handleSetNewSize = photoObj => {
        dispatch(currentSizeChanger(photoObj))
    }

    return (
        <section className='mb-[120px] w-1400:mb-[50px]'>
            <div className="container">
                {
                    !mobileScreen &&
                    <div className="title-box text-center">
                        <h2>Идея которая стала реальностью!</h2>
                        <h3 className='w-930:max-w-[600px] w-930:mx-auto'>
                            Мы создали платформу для быстрого заказа фотографий на любые цели
                            </h3>
                    </div>
                }
                <div className="inner w-1290:justify-center w-1290:gap-[220px] w-1160:flex-col-reverse">
                    {!smallScreen && <MainInfoPhoto />}
                    <div className='section-content max-w-[750px]'>
                        <h4 className='max-w-[500px] w-1160:text-center w-1160:mx-auto w-1160:leading-[80px]'>
                            Все виды фотографий на документы
                        </h4>
                        <div className='flex flex-col gap-3 relative z-20'>
                            {filteredPhotoDocArr.map(photoObj => (
                                <div
                                    className={`${classes['service-card']}`}
                                    key={photoObj.id}
                                >
                                    <div>
                                        <h5 className='text-2xl font-bold mb-[5px]'>{photoObj.name}</h5>
                                        {!extraSmall && <p className='w-500:text-xs'>{photoObj.descr}</p>}
                                    </div>
                                    <IconBtn
                                        pathname="/constructor"
                                        icon={faArrowRight}
                                        onClick={() => handleSetNewSize(photoObj)}
                                    />
                                </div>
                            ))}
                            <Link className='btn w-1160:mx-auto' to={PATHNAMES.photoDocument}>Все размеры</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
