import React from 'react';
import { PictureRetoucher } from '../../Global/PictureRetoucher';
import { Restoration1, Restoration2 } from '../../../../public/ImgData';
import { links, restorationPriceData } from '../../../../public/AppData';
import { ServicePriceCard } from '../../Global/ServicePriceCard';

export const RestorationTop = () => {
    return (
        <section>
            <div className="container">
                <div className="title-box text-center">
                    <h2>Реставрация</h2>
                    <h3>Новый вдох в старые фотографии!</h3>
                </div>
                <div className='section-content flex gap-[50px] items-center mb-[50px] w-1160:flex-wrap w-1160:justify-center w-1160:text-center w-700:text-left'>
                    <PictureRetoucher className="max-w-[500px] w-1160:max-w-[400px]" img1={Restoration1} img2={Restoration2} />
                    <div className='max-w-[1000px]'>
                        <h4 className='text-4xl font-extrabold mb-[40px]'>Реставрация фотографий на заказ – это отличный способ вернуть первоначальный вид поврежденному изображению.</h4>
                        <ul className='flex flex-col gap-[10px]'>
                            <li className='text-lg'>— удалим все изъяны и трещины</li>
                            <li className='text-lg'>— восстановим даже сильно поврежденные изображения</li>
                            <li className='text-lg'>— сохраним уникальность фотографии и дух давно ушедшей эпохи</li>
                            <li className='text-lg'>— учтем и воплотим в жизнь любые Ваши пожелания;</li>
                            <li className='text-lg'>— сделаем из черно-белого фото цветное.</li>
                        </ul>
                    </div>
                </div>
                <div className='flex items-center w-1630:flex-wrap w-1630:gap-[30px] w-1630:justify-center'>
                    <div className='max-w-[750px] w-1630:text-center w-700:text-left'>
                        <p className='mb-[30px] text-4xl font-extrabold w-420:text-2xl'>При заказе от 10 снимков действуют выгодные скидки - ОТ 15%!</p>
                        <p className='mb-[30px] text-xl'>
                            Назвать точную стоимость работы мы сможем только после того, как увидим снимки и ознакомимся с Вашими пожеланиями. Отправьте изображение мастеру на оценку прямо сейчас – это бесплатно и ни к чему Вас не обязывает.
                        </p>
                        <div className='w-1630:w-[280px] w-1630:mx-auto'>
                            <a target='blank w-1630:inline-block w-1630:mx-auto' href={links.telegram} className='btn'>
                                Узнать стоимость
                            </a>
                        </div>
                    </div>
                    <div className='flex gap-[30px] w-1160:flex-wrap w-1160:justify-center'>
                        {restorationPriceData.map(item => (
                            <ServicePriceCard key={item.id} data={item} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
