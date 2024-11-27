import React from 'react';
import { PictureRetoucher } from '../../Global/PictureRetoucher';
import { Restoration1, Restoration2 } from '../../../../public/ImgData';
import { restorationPriceData } from '../../../../public/AppData';
import { ServicePriceCard } from '../../Global/ServicePriceCard';

export const RestorationTop = () => {
    return (
        <section>
            <div className="container">
                <div className="title-box text-center">
                    <h2>Реставрация</h2>
                    <h3>Новый вдох в старые фотографии!</h3>
                </div>
                <div className='flex gap-[50px] items-center'>
                    <PictureRetoucher className="max-w-[500px]" img1={Restoration1} img2={Restoration2} />
                    <div className='max-w-[1000px]'>
                        <h3 className='text-4xl font-extrabold mb-[40px]'>Реставрация фотографий на заказ – это отличный способ вернуть первоначальный вид поврежденному изображению.</h3>
                        <ul className='flex flex-col gap-[10px]'>
                            <li>— удалим все изъяны и трещины</li>
                            <li>— восстановим даже сильно поврежденные изображения</li>
                            <li>— сохраним уникальность фотографии и дух давно ушедшей эпохи</li>
                            <li>— учтем и воплотим в жизнь любые Ваши пожелания;</li>
                            <li>— сделаем из черно-белого фото цветное.</li>
                        </ul>
                    </div>
                </div>
                <div className='flex items-center'>
                    <div className='max-w-[750px]'>
                        <p className='mb-[30px] text-4xl font-extrabold'>При заказе от 10 снимков действуют выгодные скидки - ОТ 15%!</p>
                        <p className='mb-[30px] text-xl'>
                            Назвать точную стоимость работы мы сможем только после того, как увидим снимки и ознакомимся с Вашими пожеланиями. Отправьте изображение мастеру на оценку прямо сейчас – это бесплатно и ни к чему Вас не обязывает.
                        </p>
                        <button className='btn'>Узнать стоимость</button>
                    </div>
                    <div className='flex gap-[30px]'>
                        {restorationPriceData.map(item => (
                            <ServicePriceCard key={item.id} data={item} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
