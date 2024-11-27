import React from 'react';
import { PictureRetoucher } from '../../Global/PictureRetoucher';
import { docImg, retImg, retouch1, retouch2 } from '../../../../public/ImgData';
import { MainServicesArr } from '../../../../public/AppData';
import { MainServicesBlock } from './MainServicesBlocks';

export const MainServices = () => {
    return (
        <section>
            <div className="container">
                <div className="title-box text-center">
                    <h2 className='leading-[100px] max-w-[800px] mx-auto'>
                        Также мы занимаемся ретушью и реставрацией фотографий
                    </h2>
                </div>
                <div className="flex justify-between items-center">
                    <div className="section-content max-w-[1150px] ">
                        <div className='flex gap-[30px]'>
                            {MainServicesArr.map(service => (
                                <div key={service.id} className='bg-gray p-[30px] rounded-elementRounded'>
                                    <MainServicesBlock service={service} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <PictureRetoucher className="max-w-[400px]" img1={retouch1} img2={retouch2} />
                </div>
            </div>
        </section>
    );
}
