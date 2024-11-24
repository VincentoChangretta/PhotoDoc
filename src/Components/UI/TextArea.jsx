import React from 'react';

export const TextArea = (props) => {
    return (
        <textarea {...props} className="p-[20px] rounded-elementRounded resize-none grow shadow-cardShadow"></textarea>
    );
}
