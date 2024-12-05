import React, { useEffect, useRef, useState } from 'react';
import { ModalCloser } from './ModalCloser';
import { Input } from '../UI/Input';
import { changerOrderByCode } from '../../Redux/currentOrderByCode';
import { useDispatch } from 'react-redux';

export const OrderByCode = ({ setOrderByCode }) => {
    const modalRef = useRef(null);
    const [codeValue, setCodeValue] = useState(null)
    const dispatch = useDispatch()
    useEffect(() => {
        const handleChange = e => {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                setOrderByCode(false);
            }
        };
        document.addEventListener('click', handleChange);
        return () => document.removeEventListener('click', handleChange);
    }, []);

    const handleOrderByCode = () => {
        if (codeValue.length > 0) {
            dispatch(changerOrderByCode(codeValue))
            setOrderByCode(false)
        }
    }

    return (
        <div className='fixed z-[2000] inset-0 flex justify-center items-center backdrop-blur'>
            <div ref={modalRef} className='relative max-w-[600px] w-full p-[30px] rounded-elementRounded bg-textColor text-invertedTextColor text-center shadow-cardShadow'>
                <ModalCloser closeModal={setOrderByCode} />
                <div className='flex flex-col items-center gap-[20px]'>
                    <h3 className='text-2xl font-extrabold max-w-[400px] mx-auto'>Чтобы заказать фотографии из архива, введите код фотографии</h3>
                    <div className='max-w-[350px] w-full'>
                        <p className='text-xs mb-2'>(код фотографии состоит из даты и кодового слова)</p>
                        <Input getValue={setCodeValue} className="max-w-[350px] w-full" placeholder="пример: 07.05.24 - Давид" />
                    </div>
                    <button className='btn inverted' onClick={handleOrderByCode}>Продолжить</button>
                </div>
            </div>
        </div>
    );
}
