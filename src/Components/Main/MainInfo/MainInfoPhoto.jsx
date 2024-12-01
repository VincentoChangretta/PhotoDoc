import React from 'react';
import { girlDoc, photo4x6Img } from '../../../../public/ImgData';
import classes from './MainInfoPhoto.module.css'

export const MainInfoPhoto = ({ photoDocPage }) => {

    if (photoDocPage) {
        return (
            <div className='relative w-1160:translate-x-[90px] w-560:translate-x-[70px] w-460:translate-x-[60px] w-375:translate-x-[50px]'>
                <div className={`${classes['img-four-photoDoc']} ${classes['main-four']}`}>
                    <div className='max-w-[200px]'>
                        <img className={`${classes["smallImg-photoDoc"]} img`} src={girlDoc} alt="фото на документ" />
                    </div>
                    <div className='max-w-[200px]'>
                        <img className={`${classes["smallImg-photoDoc"]} img`} src={girlDoc} alt="фото на документ" />
                    </div>
                    <div className='max-w-[200px]'>
                        <img className={`${classes["smallImg-photoDoc"]} img`} src={girlDoc} alt="фото на документ" />
                    </div>
                    <div className='max-w-[200px]'>
                        <img className={`${classes["smallImg-photoDoc"]} img`} src={girlDoc} alt="фото на документ" />
                    </div>
                </div>
                <div className={`${classes['img-big-photoDoc']} ${classes['main-big']}`} >
                    <img className='img' src={girlDoc} alt="фото на документ" />
                </div>
            </div>
        )
    }

    return (
        <div className='relative'>
            <div className={`${classes['img-four']} ${classes['main-four']}`}>
                <div className='max-w-[200px]'>
                    <img className={`${classes.smallImg} img`} src={photo4x6Img} alt="фото на документ" />
                </div>
                <div className='max-w-[200px]'>
                    <img className={`${classes.smallImg} img`} src={photo4x6Img} alt="фото на документ" />
                </div>
                <div className='max-w-[200px]'>
                    <img className={`${classes.smallImg} img`} src={photo4x6Img} alt="фото на документ" />
                </div>
                <div className='max-w-[200px]'>
                    <img className={`${classes.smallImg} img`} src={photo4x6Img} alt="фото на документ" />
                </div>
            </div>
            <div className={`${classes['img-big']} ${classes['main-big']}`} >
                <img className='img' src={photo4x6Img} alt="фото на документ" />
            </div>
        </div>
    );
}
