import React, { useRef, useEffect, useState } from 'react';
import { DELIVERY_TIME_DATA, TIME_12 } from '../../../public/AppData';
import './DeliveryTime.css';
import { useDispatch, useSelector } from 'react-redux';
import { currentDeliveryTimeCreator } from '../../Redux/currentDeliveryDate';

export const DeliveryTime = ({ isActive, setIsDeliveryTimeActive }) => {
    const currentDeliveryTime = useSelector(state => state.currentDeliveryDate.currentDeliveryTime)
    const [activeTime, setActiveTime] = useState(currentDeliveryTime);
    
    const modalRef = useRef(null);
    const dispatch = useDispatch()

    useEffect(() => {
        const handleClickOutside = e => {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                setIsDeliveryTimeActive(prev => !prev) // Здесь можно дополнительно обработать действия
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    const handleChangeActive = time => {
        if (time !== TIME_12) {
            setActiveTime(time);
            dispatch(currentDeliveryTimeCreator(time))
        }
    };

    return (
        <div>
            <div className="photodoc-deliveryTime">
                Время: {activeTime}+
            </div>
            {isActive && (
                <ul
                    ref={modalRef}
                    className="delivery-time__select"
                >
                    {DELIVERY_TIME_DATA.map((time, index) => (
                        <li
                            key={index}
                            className={`${time === TIME_12 ? 'bg-grayBlock text-grayBlockText leading-[30px]' : 'bg-textColor text-invertedTextColor hover:bg-textColorHover'} delivery-time__select-item `}
                            onClick={() => handleChangeActive(time)}
                        >
                            <p className={`${time === TIME_12 ? "mb-[10px]" : 'sad'}`}>
                                После {time}
                            </p>
                            {time === TIME_12 && (
                                <span className="absolute bottom-[10px] text-xs">
                                    временно недоступно
                                </span>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
