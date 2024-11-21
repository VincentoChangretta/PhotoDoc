import React from 'react';
import { girlDoc, photo4x6Img } from '../../../../public/ImgData';
import classes from './MainInfoPhoto.module.css'

export const MainInfoPhoto = ({ photoDocPage }) => {

    if (photoDocPage) {
        return (
            <div className='relative'>
                <div className={classes['img-four']}>
                    <div className='max-w-[200px]'>
                        <img className='img' src={girlDoc} alt="фото на документ" />
                    </div>
                    <div className='max-w-[200px]'>
                        <img className='img' src={girlDoc} alt="фото на документ" />
                    </div>
                    <div className='max-w-[200px]'>
                        <img className='img' src={girlDoc} alt="фото на документ" />
                    </div>
                    <div className='max-w-[200px]'>
                        <img className='img' src={girlDoc} alt="фото на документ" />
                    </div>
                </div>
                <div className={classes['img-big-left']} >
                    <img className='img' src={girlDoc} alt="фото на документ" />
                </div>
            </div>
        )
    }

    return (
        <div className='relative'>
            <div className={classes['img-four']}>
                <div className='max-w-[200px]'>
                    <img className='img' src={photo4x6Img} alt="фото на документ" />
                </div>
                <div className='max-w-[200px]'>
                    <img className='img' src={photo4x6Img} alt="фото на документ" />
                </div>
                <div className='max-w-[200px]'>
                    <img className='img' src={photo4x6Img} alt="фото на документ" />
                </div>
                <div className='max-w-[200px]'>
                    <img className='img' src={photo4x6Img} alt="фото на документ" />
                </div>
            </div>
            <div className={classes['img-big']} >
                <img className='img' src={photo4x6Img} alt="фото на документ" />
            </div>
        </div>
    );
}
