import React from 'react';

export const ActivatePromoCodeBtn = ({ setPromoCodeModal }) => {
    return (
        <button
            className='btn inverted font-extrabold'
            onClick={e => (e.stopPropagation(), setPromoCodeModal(true))}
        >
            Активировать промокод
        </button>
    );
}
