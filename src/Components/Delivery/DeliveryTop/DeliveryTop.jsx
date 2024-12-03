import React from 'react';
import { ButtonNavigator } from '../../Global/ButtonNavigator';

export const DeliveryTop = () => {
    return (
        <section>
            <div className="container mx-auto p-4">
                <div className="title-box text-center">
                    <h2 className="text-2xl font-bold mb-4">Информация о доставке</h2>
                </div>
                <div className='flex gap-[30px] text-xl mb-[30px] w-1600:flex-wrap w-1600:justify-center'>
                    <div className=' flex flex-col gap-[20px] p-[30px] bg-invertedTextColor rounded-elementRounded max-w-[800px] shadow-xl transition-all hover:scale-[1.02]'>
                        <p>
                            Мы рады сообщить вам, что в данный момент осуществляем доставку фотографий по городу
                            Калининграду и в несколько близлежащих районов, включая:
                        </p>
                        <ul className='font-extrabold'>
                            <li>— поселок Ласкино</li>
                            <li>— поселок Яблоневка</li>
                            <li>— Новое Голубево</li>
                        </ul>
                        <p>Список со временем будет расширяться</p>
                        <p>
                            Доставка осуществляется во все дни недели после 18:00.
                            Наша команда сделает все возможное, чтобы ваши фотографии были доставлены в максимально
                            сжатые сроки!
                        </p>
                    </div>
                    <div className=' flex flex-col gap-[20px] p-[30px] bg-invertedTextColor rounded-elementRounded max-w-[800px] shadow-xl transition-all hover:scale-[1.02]'>
                        <p>
                            При получении заказа, пожалуйста, укажите код заказа, который выдали вам на сайте при
                            оформлении. Также вам будет предоставлен лист для расписки, который будет свидетельствовать о том,
                            что вы действительно получили заказы. Пожалуйста, убедитесь, что вы подписали его.
                        </p>
                        <p className='font-extrabold'>
                            Важно: Мы ждем максимум 15 минут после прихода курьера с заказом.
                            Если вы не сможете встретиться с курьером в указанный срок, ваш заказ будет перенесен
                            на следующий день.
                        </p>
                        <p>
                            Спасибо за понимание! Мы стремимся обеспечить качественный сервис и удобство для наших
                            клиентов.
                        </p>
                    </div>
                </div>
                <ButtonNavigator delivery={true} />
            </div>
        </section>
    );
}
