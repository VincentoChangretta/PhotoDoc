import { faPaintBrush } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

export const MainServicesBlock = ({ service }) => {
    return (
        <>
            <h4>
                {service.title}
                <FontAwesomeIcon className='ml-iconMarginX' icon={faPaintBrush} />
            </h4>
            <ul className='mb-[15px]'>
                {service.serviceParagraphs.map((item, index) => (
                    <li key={index}>— {item}</li>
                ))}
            </ul>
            <Link className='btn' to={service.pathname}>Подробнее</Link>
        </>
    );
}
