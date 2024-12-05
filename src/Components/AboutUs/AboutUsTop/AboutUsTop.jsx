import React from 'react';
import { ButtonNavigator } from '../../Global/ButtonNavigator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

export const AboutUsTop = () => {
    return (
        <section className='text-lg'>
            <div className="container mx-auto p-4">
                <div className="title-box text-center">
                    <h2 className="text-2xl font-bold mb-4">О нас</h2>
                    <h3>
                        Добро пожаловать на наш сайт! Мы — команда профессионалов, специализирующихся на создании качественных фотографий на документы. Наша миссия — облегчить процесс подготовки фотографий для различных документов, таких как паспорта, визы, удостоверения личности и другие официальные документы.
                    </h3>
                </div>
                <div className='flex flex-wrap gap-[30px] mb-[30px] w-1600:justify-center'>
                    <div className='max-w-[500px] p-[30px] bg-invertedTextColor rounded-elementRounded shadow-xl transition-all hover:scale-[1.02]'>
                        <h4 className="text-3xl font-extrabold mb-[30px] w-600:text-2xl">— Почему выбирают нас?</h4>
                        <ul className="flex flex-col gap-[15px]">
                            <li>
                                <strong className='text-xl'>Профессиональный подход: </strong>
                                У нас работают опытные фотографы, которые знают, как сделать идеальные снимки в соответствии с требованиями различных организаций.
                            </li>
                            <li>
                                <strong className='text-xl'>Качество на первом месте: </strong>
                                Мы используем современное оборудование и технологии, чтобы обеспечить высокое качество изображений. Каждая фотография проходит тщательную обработку для достижения безупречного результата.
                            </li>
                            <li>
                                <strong className='text-xl'>Удобство для клиентов: </strong>
                                Наша платформа позволяет загружать фотографии прямо с вашего устройства. Мы заботимся о вашем времени, предлагая простую и быструю процедуру.
                            </li>
                            <li>
                                <strong className='text-xl'>Клиентский сервис: </strong>
                                Наша команда всегда готова помочь вам с любыми вопросами и предложениями. Мы стремимся к полному удовлетворению потребностей наших клиентов.
                            </li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-[30px]'>
                        <div className='max-w-[500px] p-[30px] bg-invertedTextColor rounded-elementRounded shadow-xl transition-all hover:scale-[1.02]'>
                            <h4 className="text-3xl font-extrabold mb-[30px] w-600:text-2xl">— Наша команда</h4>
                            <p>
                                Мы собрали талантливую команду профессионалов, которые не только имеют опыт в фотографии, но и глубоко понимают, насколько важно соответствие всем стандартам для документов. Мы готовы сделать все возможное, чтобы ваш опыт работы с нами был положительным и результативным.
                            </p>
                        </div>
                        <div className='max-w-[500px] p-[30px] bg-invertedTextColor rounded-elementRounded shadow-xl transition-all hover:scale-[1.02]'>
                            <h4 className="text-3xl font-extrabold mb-[30px] w-600:text-2xl">— Как работает сайт?</h4>
                            <ul className="flex flex-col gap-[15px]">
                                <li>
                                    <strong className='text-xl'>Загрузите свою фотографию</strong>: Выберите подходящее изображение, следуя нашим рекомендациям по требованиям к фотографиям на документы.
                                </li>
                                <li>
                                    <strong className='text-xl'>Обработка</strong>: Наша команда проверит вашу фотографию и, при необходимости, выполнит коррекцию.
                                </li>
                                <li>
                                    <strong className='text-xl'>Получите готовую фотографию</strong>: Вы получите готовую фотографию на электронную почту в короткие сроки.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='max-w-[500px] p-[30px] bg-invertedTextColor rounded-elementRounded shadow-xl transition-all hover:scale-[1.02]'>
                        <h4 className="text-3xl font-extrabold mb-[30px] w-600:text-2xl">— В ближайшем будущем: Физическая точка обслуживания</h4>
                        <p>
                            Хотя на данный момент у нас нет физической точки в городе, мы рады сообщить, что в скором времени планируем открыть наш офис, где вы сможете получить услуги напрямую и получить консультации наших специалистов. Мы уверены, что это еще больше упростит взаимодействие с вами и повысит качество нашего сервиса.
                        </p>
                    </div>
                </div>
 
            </div>
        </section>
    );
}
