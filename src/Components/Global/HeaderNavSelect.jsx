import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export const HeaderNavSelect = ({ navItem }) => {

    const [isActive, setIsActive] = useState(false)
    const selectRef = useRef(null)

    useEffect(() => {
        const closeModal = e => {
            if (selectRef && !selectRef.current.contains(e.target)) {
                setIsActive(false)
            }
        }
        document.addEventListener("click", closeModal)
        return () => document.removeEventListener("click", closeModal)
    }, [])

    return (
        <div
            ref={selectRef}
            className='relative cursor-pointer'
            onClick={() => setIsActive(prev => !prev)}
        >
            <p>{navItem.item}</p>
            <ul className={`${!isActive ? 'hidden' : ''} absolute z-[1000] left-0 bottom-[-100px] p-[5px] rounded-[15px] bg-invertedTextColor shadow-xl`}>
                {navItem.services.map(selectItem => (
                    <li className='my-[5px] py-[5px] px-[10px] rounded-[20px] bg-gray hover:bg-grayHover' key={selectItem.id} >
                        <Link to={selectItem.pathname}>
                            {selectItem.item}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
