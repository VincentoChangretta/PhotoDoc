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
                <div className='flex items-center gap-[50px] mb-[30px]'>
                    <PictureRetoucher className="max-w-[500px]" img1={Retouch1} img2={Retouch2} />
                    <div className='max-w-[1000px]'>
                        <h3 className='text-3xl font-extrabold mb-[40px]'>Профессиональная ретушь способна улучшить даже самое невзрачное изображение. Наша студия работает как с бытовыми снимками, так и с профессиональными. Мы очень аккуратно подходим к обработке фотографий:</h3>
                        <ul className='flex flex-col gap-[10px]'>
                            <li>— подчеркнем достоинства Вашей внешности, уберем недостатки</li>
                            <li>— максимально сохраним естественность лица</li>
                            <li>— не оставим следов фотошопа</li>
                            <li>— обработаем фото точно в срок и учтем все Ваши пожелания</li>
                        </ul>
                    </div>
                </div>
                <div className='flex justify-center gap-[50px] mb-[30px]'>
                    {retouchPriceData.map(item => (
                        <ServicePriceCard key={item.id} data={item} />
                    ))}
                </div>
                <h3 className='text-3xl text-center font-extrabold mb-[40px]'>При заказе от 10 фотографий действуют выгодные ссылки - от 15%!</h3>
                <div>
                    <h3 className='text-3xl text-center font-extrabold mb-[40px]'>Особенности заказа</h3>
                    <p>
                        Красота – дело вкуса, и каждый видит ее по-своему. Поэтому перед тем, как заказать ретушь для фото, обязательно расскажите мастеру о своих предпочтениях. Или оставьте обработку фото на наше усмотрение!
                    </p>
                    <p>
                        Помните, что качество изображения задается при съемке, поэтому его нельзя улучшить при последующей обработке. Это значит, что сделать фото с телефона четким и резким невозможно, а из бытовой непрофессиональной фотографии вряд ли получится снимок как «на обложку журнала». Но это не помешает нам исправить недостатки и заретушировать неудачные моменты фото. Обратившись к нам, вы получите качественно обработанные фотографии, которые смогут украсить Вашу домашнюю коллекцию или Ваш профиль в социальной сети.
                    </p>
                </div>
            </div>
        </section>
    );
}
