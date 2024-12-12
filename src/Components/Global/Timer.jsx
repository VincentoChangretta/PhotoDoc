import React, { useState, useEffect } from 'react';
import { nyBg } from '../../../public/ImgData';
import "./Timer.css"
import { useWindowSize } from '../../Hooks/useWindowSize';

export const Timer = () => {
    const innerWidth = useWindowSize()
    const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [nulled, setNulled] = useState(null);
    const countdownDate = new Date("2025-01-12T23:59:59").getTime();

    const calculateTimeLeft = () => {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        if (distance < 0) {
            setNulled(true);
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        return { days, hours, minutes, seconds };
    };

    useEffect(() => {
        setCountdown(calculateTimeLeft());
        const interval = setInterval(() => setCountdown(calculateTimeLeft()), 1000);
        return () => clearInterval(interval);
    }, [countdownDate]);

    if (nulled) {
        return null;
    }

    return (
        <div style={{ backgroundImage: `url(${nyBg})` }} className='bg-cover'>
            <div className="container">
                <div className='flex justify-around items-center py-[10px] w-1080:gap-[10px] w-1080:flex-wrap'>
                    <div className='text-invertedTextColor w-1080:text-center'>
                        {
                            innerWidth >= 420
                                ? <>
                                    <p className='text-2xl font-extrabold w-500:text-xl'>Новогодние скидки на фотографии!</p>
                                    <p className='w-500:text-[15px]'>Активируйте промокод
                                        <strong className='bg-textColor py-[2px] px-[5px] mx-[5px]'>2025</strong>
                                        и получите скидку 15%
                                    </p>
                                </>
                                : <>
                                    <p className='font-extrabold text-xl mb-[10px]'>Новогодние скидки на фотографии!</p>
                                    <p className='text-[15px] leading-none mb-[8px]'>Активируйте промокод
                                        <strong className='bg-textColor py-[2px] px-[5px] mx-[2px]'>2025</strong>
                                    </p>
                                    <p className='w-500:text-[15px] leading-none'> и получите скидку 15%</p>
                                </>
                        }
                    </div>
                    <div className="flex gap-[10px] text-xl font-extrabold w-630:text-base w-500:text-[15px] w-385:gap-[5px]">
                        <div className="timer-item">
                            <p>{String(countdown.days).padStart(2, '0')}</p>
                            <p className="w-385:text-xs w-385:leading-none">дней</p>
                        </div>
                        <div className="timer-item">
                            <p>{String(countdown.hours).padStart(2, '0')}</p>
                            <p className="w-385:text-xs w-385:leading-none">часов</p>
                        </div>
                        <div className="timer-item">
                            <p>{String(countdown.minutes).padStart(2, '0')}</p>
                            <p className="w-385:text-xs w-385:leading-none">минут</p>
                        </div>
                        <div className="timer-item">
                            <p>{String(countdown.seconds).padStart(2, '0')}</p>
                            <p className="w-385:text-xs w-385:leading-none">секунд</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}