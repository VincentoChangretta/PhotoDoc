import React, { useEffect, useState } from 'react';
import { useInput } from '../../Hooks/useInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export const Search = () => {

    const searchInput = useInput(null)

    console.log(searchInput.isActive)

    return (
        <div className='input-box relative max-w-[500px] p-[20px] pl-[60px] bg-textColorHover'>
            <FontAwesomeIcon
                className={`icon ${searchInput.isActive && 'text-iconActive'} 
                absolute top-[50%] left-[25px] translate-y-[-50%]`}
                icon={faMagnifyingGlass}
            />
            <input
                className='input '
                type="text"
                placeholder='Поиск по сайту'
                value={searchInput.value}
                onChange={searchInput.onChange}
            />
        </div>
    );
}
