import React from 'react';
import { PictureRetoucher } from '../../Global/PictureRetoucher';
import { Retouch1, Retouch2 } from '../../../../public/ImgData';
import { retouchPriceData } from '../../../../public/AppData';
import { ServicePriceCard } from '../../Global/ServicePriceCard';

export const RetouchTop = () => {
    return (
        <section>
            <div className="container">
                <div className="title-box text-center">
                    <h2>Ретушь</h2>
                    <h3>Преобразите свои фотографии с профессиональной ретушью</h3>
                </div>
                <div className='section-content flex items-center gap-[50px] mb-[50px] w-1370:flex-wrap w-1370:justify-center'>
                    <PictureRetoucher className="max-w-[500px]" img1={Retouch1} img2={Retouch2} />
                    <div className='max-w-[1000px] w-1370:text-center w-670:text-left'>
                        <h4 className='font-extrabold mb-[40px]'>Профессиональная ретушь способна улучшить даже самое невзрачное изображение. Мы очень аккуратно подходим к реставрации фотографий:</h4>
                        <ul className='flex flex-col gap-[10px]'>
                            <li className='text-lg'>— подчеркнем достоинства Вашей внешности, уберем недостатки</li>
                            <li className='text-lg'>— максимально сохраним естественность лица</li>
                            <li className='text-lg'>— не оставим следов фотошопа</li>
                            <li className='text-lg'>— обработаем фото точно в срок и учтем все Ваши пожелания</li>
                        </ul>
                    </div>
                </div>
                <div className='flex justify-center gap-[50px] mb-[30px] w-1330:flex-wrap'>
                    {retouchPriceData.map(item => (
                        <ServicePriceCard key={item.id} data={item} />
                    ))}
                </div>
                <h3 className='text-3xl text-center font-extrabold mb-[40px]'>При заказе от 10 фотографий действуют выгодные ссылки - от 15%!</h3>
                <div>
                    <h3 className='text-3xl text-center font-extrabold mb-[40px]'>Особенности заказа</h3>
                    <div className='flex gap-[30px] flex-wrap justify-center'>
                        <p className='p-[30px] max-w-[800px] bg-invertedTextColor rounded-elementRounded shadow-xl'>
                            Красота – дело вкуса, и каждый видит ее по-своему. Поэтому перед тем, как заказать ретушь для фото, обязательно расскажите мастеру о своих предпочтениях. Или оставьте обработку фото на наше усмотрение!
                        </p>
                        <p className='p-[30px] max-w-[800px] bg-invertedTextColor rounded-elementRounded shadow-xl'>
                            Помните, что качество изображения задается при съемке, поэтому его нельзя улучшить при последующей обработке. Это значит, что сделать фото с телефона четким и резким невозможно, а из бытовой непрофессиональной фотографии вряд ли получится снимок как «на обложку журнала». Но это не помешает нам исправить недостатки и заретушировать неудачные моменты фото. Обратившись к нам, вы получите качественно обработанные фотографии, которые смогут украсить Вашу домашнюю коллекцию или Ваш профиль в социальной сети.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
