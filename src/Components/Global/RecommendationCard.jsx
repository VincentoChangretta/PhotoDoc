import React from 'react';

export const RecommendationCard = ({ cardData, index}) => {
    return (
        <div key={cardData.id} className='relative max-w-[800px] p-[20px] rounded-elementRounded bg-gray shadow-cardShadow transition-transform cursor-pointer hover:scale-[1.02]'>
            <div className='flex items-start gap-[15px]'>
                <span className='counter-item'>{index + 1}</span>
                <div>
                    <h4 className='text-3xl font-extrabold mb-[15px]'>{cardData.title}</h4>
                    <p>{cardData.text}</p>
                </div>
            </div>
        </div>
    );
}
