import React from 'react';
import { RUBLE } from '../../../public/AppData';
import styles from "./ServicePriceCard.module.css"
import { useDispatch } from 'react-redux';
import { modalFormDataCreator } from '../../Redux/currentInModalFormReducer';

export const ServicePriceCard = ({ data }) => {

    const dispatch = useDispatch()


    const handleOpenModal = e => {
        e.stopPropagation()
        dispatch(modalFormDataCreator(data))
    }

    return (
        <article className={styles['service-card']}>
            <div className={styles['service-card__triangle']}></div>
            <div className='pt-[80px]'>
                <p className='text-2xl mb-[20px] font-extrabold'>от {data.price + RUBLE}</p>
                <h3 className='text-2xl mb-[20px] font-extrabold'>{data.title}</h3>
                <p className='mb-[30px]'>{data.text}</p>
            </div>
            <button
                className='btn mt-auto'
                onClick={handleOpenModal}
            >
                Заказать
            </button>
        </article>
    );
}
