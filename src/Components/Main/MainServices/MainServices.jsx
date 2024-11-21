import React from 'react';
import { PictureRetoucher } from '../../Global/PictureRetoucher';
import { docImg, retImg, retouch1, retouch2 } from '../../../../public/ImgData';
import { MainServicesArr } from '../../../../public/AppData';
import { MainServicesBlock } from './MainServicesBlocks';

export const MainServices = () => {
    return (
        <section>
            <div className="container">
                <div className="inner">
                    <div className="section-content max-w-[1000px] ">
                        <div className="title-box text-left">
                            <h2 className='leading-[100px]'>
                                Также мы занимаемся ретушью и реставрацией фотографий
                            </h2>
                        </div>
                        {MainServicesArr.map(service => (
                            <div key={service.id} className='mb-[30px]'>
                                <MainServicesBlock service={service} />
                            </div>
                        ))}
                    </div>
                    <PictureRetoucher img1={retouch1} img2={retouch2} />
                </div>
            </div>
        </section>
    );
}
