import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from '../UI/Input';
import Calendar from 'react-calendar';
import { createFullDate } from '../../../public/functions';
import { currentDeliveryDateCreator } from '../../Redux/currentDeliveryDate';
import { DeliveryTime } from '../Global/DeliveryTime';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css';
import './PhotoDocDelivery.css';

export const PhotoDocDelivery = () => {
    const [isCalendarActive, setIsCalendarActive] = useState(false);
    const [calendarValue, setCalendarValue] = useState(new Date());
    const [isDeliveryTimeActive, setIsDeliveryTimeActive] = useState(false);
    const {
        city: currentDeliveryCity,
    } = useSelector(state => state.currentDeliveryAddress)

    const {
        currentDeliveryDate,
        currentDeliveryTime,
    } = useSelector(state => state.currentDeliveryDate);
    const dispatch = useDispatch();

    const calendarRef = useRef(null);
    const deliveryTimeRef = useRef(null);

    useEffect(() => {
        dispatch(currentDeliveryDateCreator(createFullDate(new Date())))
        // dispatch(currentDeliveryTimeCreator(TIME_18)) // включить когда будут доступны другие часы доставки
    }, [])

    useEffect(() => {
        const handleClickOutside = e => {
            if (
                calendarRef.current && !calendarRef.current.contains(e.target) &&
                deliveryTimeRef.current && !deliveryTimeRef.current.contains(e.target)
            ) {
                setIsCalendarActive(false);
                setIsDeliveryTimeActive(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    const handleChangeDeliveryData = value => {
        setCalendarValue(value);
        dispatch(currentDeliveryDateCreator(createFullDate(value)));
        setIsCalendarActive(false)
    };

    return (
        <>
            <label className='relative'>
                <p className='photodoc-city'>г. {currentDeliveryCity}</p>
                <Input
                    className="pl-[200px]"
                    name="address"
                    type="text"
                    placeholder="Ваш адрес для доставки"
                    required={true}
                />
            </label>
            <div className="relative p-[10px] bg-invertedTextColor rounded-elementRounded">
                <p className='relative z-[1010] mb-[10px] text-center'>Дата и время доставки</p>
                <div className="flex justify-between p-[10px] gap-[15px] rounded-elementRounded bg-grayHover ">
                    <div
                        className="photodoc-deliveryDate"
                        onClick={e => {
                            e.stopPropagation();
                            setIsCalendarActive(prev => !prev);
                            setIsDeliveryTimeActive(false);
                        }}
                    >
                        Дата:
                        {' ' + currentDeliveryDate.replaceAll("-", ".")}
                    </div>
                    <div
                        className='relative'
                        ref={deliveryTimeRef}
                        onClick={e => {
                            e.stopPropagation();
                            setIsDeliveryTimeActive(prev => !prev);
                            setIsCalendarActive(false);
                        }}
                    >
                        <DeliveryTime
                            isActive={isDeliveryTimeActive}
                            setIsDeliveryTimeActive={setIsDeliveryTimeActive}
                        />
                    </div>
                </div>
                {isCalendarActive && (
                    <div ref={calendarRef}>
                        <Calendar
                            className="calendar"
                            value={calendarValue}
                            minDate={new Date()}
                            onChange={handleChangeDeliveryData}
                        />
                    </div>
                )}
            </div>
        </>
    );
};
