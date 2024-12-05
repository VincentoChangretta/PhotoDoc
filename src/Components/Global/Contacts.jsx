import { faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export const Contacts = () => {
    return (
        <section className='text-center mb-[20px]'>
            <h4 className='text-3xl font-extrabold mb-[20px] w-420:mb-[15px]'>Связь с нами</h4>
            <div className='flex justify-center items-center gap-[30px] mb-[30px] text-[50px] w-420:text-[35px]'>
                <a href="https://t.me/photodoc39" target='blank'>
                    <FontAwesomeIcon
                        className='cursor-pointer transition-all hover:scale-[1.1]'
                        icon={faTelegram}
                    />
                </a>
                <a href="https://wa.me/79527964873" target='blank'>
                    <FontAwesomeIcon
                        className='cursor-pointer transition-all hover:scale-[1.1]'
                        icon={faWhatsapp}
                    />
                </a>
            </div>
            <div className='flex flex-col gap-[10px]'>
                <a href="mailto:photodoc.online@mail.ru">photodoc.online@mail.ru</a>
                <a href="tel:+79527964873">+7(952)796-48-73</a>
            </div>
        </section>
    );
}
