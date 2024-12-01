import React from 'react';
import { PATHNAMES, photoDocSteps } from '../../../../public/AppData';
import { Link } from 'react-router-dom';

export const MainSteps = () => {
    return (
        <section>
            <div className="container">
                <div className="title-box text-center">
                    <h2>Шаги</h2>
                    <h3 className='w-930:max-w-[600px] w-930:mx-auto'>
                        Следуйте простым шагам, чтобы получить идеальные фото
                    </h3>
                </div>
                <div className="flex justify-between gap-[30px] mb-[30px] w-1500:flex-wrap w-1500:max-w-[1000px] w-1500:mx-auto w-1500:justify-center">
                    {photoDocSteps.map((item, index) => (
                        <div
                            key={item.id}
                            className='raltive z-10 flex flex-col p-[20px] py-[40px] bg-invertedTextColor rounded-elementRounded shadow-cardShadow transition-transform hover:scale-105 w-1500:max-w-[375px] w-420:py-[20px] w-420:px-[15px]'>
                            <div className='flex gap-[10px] items-start mb-[30px] w-420:mb-[10px]'>
                                <span className='counter-item'>{index + 1}</span>
                                <div>
                                    <h4 className='text-xl font-extrabold mb-[10px]'>{item.title}</h4>
                                    {
                                        index === 0
                                            ? <p>
                                                Cледуйте простым <Link className='underline' to={PATHNAMES.recommendations}>рекомендациям</Link>
                                                , чтобы сделать правильное фото
                                            </p>
                                            : <p>{item.text}</p>
                                    }

                                </div>
                            </div>
                            <div className='mt-auto'>
                                <img className='img rounded-elementRounded' src={item.img} alt={item.title} />
                            </div>
                        </div>
                    ))}
                </div>
                <Link to={PATHNAMES.recommendations} className='btn mx-auto'>Рекомендации к фото</Link>
            </div>
        </section>
    );
}
