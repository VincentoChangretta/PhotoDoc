import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { currentDeliveryAddressCityCreator } from '../../Redux/currentDeliveryAddressReducer';

export const Select = ({ activeItem, setActiveItem, optionArray, activeState, className, listClassName, activeClassName, listItemClassName }) => {
    const [active, setActive] = useState(false)
    const dispatch = useDispatch()
    const modalRef = useRef(null);


    useEffect(() => {
        const handleChange = e => {
            console.log(e.target)
            
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                setActive(false);
            }
        };
        document.addEventListener('click', handleChange);
        return () => document.removeEventListener('click', handleChange);
    }, []);

    const handleChangeActive = item => {
        setActive(false)
        setActiveItem(item)
        dispatch(currentDeliveryAddressCityCreator(item))
    }

    return (
        <div className={`${className} cursor-pointer`} >
            <div
                ref={modalRef}
                className={activeClassName}
                onClick={() => setActive(prev => !prev)}
            >
                {activeState}
            </div>
            {
                active &&
                <ul className={listClassName} onClick={(e) => e.stopPropagation()}>
                    {optionArray.map((item, index) => {
                        if (item !== activeState) {
                            return (
                                <li
                                    key={index}
                                    onClick={() => handleChangeActive(item)}
                                    className={listItemClassName}
                                >
                                    {item}
                                </li>
                            )
                        }
                    })}
                </ul>
            }
        </div>
    );
}
