import React, { useEffect, useRef, useState } from 'react';
import { ModalCloser } from './ModalCloser';
import { generateOrderCode } from '../../../public/functions';
import { Link } from 'react-router-dom';
import { PATHNAMES } from '../../../public/AppData';

export const OrderCodeGenerator = ({ setOrderCodeGenerator }) => {
    const modalRef = useRef(null);

    useEffect(() => {
        const handleChange = e => {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                setOrderCodeGenerator(false);
            }
        };
        document.addEventListener('click', handleChange);
        return () => document.removeEventListener('click', handleChange);
    }, []);
    return (
        <div className='fixed inset-0 flex justify-center items-center backdrop-blur'>
            <div ref={modalRef} className='relative max-w-[480px] w-full pt-[60px] p-[30px] bg-textColor text-invertedTextColor rounded-elementRounded shadow-xl'>
                <ModalCloser closeModal={setOrderCodeGenerator} />
                <h2 className='text-2xl text-center font-extrabold mb-[20px]'>Заказ успешно оформлен!</h2>
                <div className='flex flex-col gap-[15px] mb-[20px] w-420:text-base'>
                    <p>В ближайшее время мы свяжемся с вами в мессенджерах для подтверждения заказа</p>
                    <p>Пожалуйста, подтвердите заказ, отправив нам код заказа</p>
                    <h2 className='p-[15px] text-xl text-center bg-invertedTextColor rounded-elementRounded text-textColor w-420:text-lg'>Код заказа - <strong>{generateOrderCode()}</strong></h2>
                    <strong className='text-center'>Настоятельно рекомендуем сохранить код до получения заказа!</strong>
                </div>
                <Link className='btn inverted mx-auto' to={PATHNAMES.home}>На главную</Link>
            </div>
        </div>
    );
}
