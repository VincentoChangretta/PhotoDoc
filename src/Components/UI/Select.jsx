import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { currentDeliveryAddressCityCreator } from '../../Redux/currentDeliveryAddressReducer';

export const Select = ({ activeItem, setActiveItem, optionArray, activeState, className, listClassName, activeClassName, listItemClassName }) => {
    const [active, setActive] = useState(false)
    const dispatch = useDispatch()
    const handleChangeActive = item => {
        setActive(false)
        setActiveItem(item)
        dispatch(currentDeliveryAddressCityCreator(item))
    }
    return (
        <div className={`${className} cursor-pointer`}>
            <div className={activeClassName} onClick={() => setActive(prev => !prev)}>{activeState}</div>
            {
                active &&
                <ul className={listClassName}>
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
