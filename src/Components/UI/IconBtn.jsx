import React from 'react';
import './IconBtn.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';


export const IconBtn = ({ pathname, icon, onClick }) => {
    return (
        <Link onClick={onClick} className='icon-btn' to={pathname}>
            <FontAwesomeIcon
                className="relative z-10"
                icon={icon}
            />
        </Link>
    );
}
