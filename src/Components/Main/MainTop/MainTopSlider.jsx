import React, { useEffect, useState } from 'react';
import './MainTopSlider.css'
import { mainTopImgArr } from '../../../../public/AppData';

export const MainTopSlider = () => {
    const [coverEl, setCoverEl] = useState(null)
    const [activeEl, setActiveEl] = useState('img-box-1')
    const [fistChildIndex, setFirstChildIndex] = useState(0)
    const classesToCheck = ['img-box-2', 'img-box-3'];

    useEffect(() => {
        let cur = 0
        const imgArray = ['img-box-1', ...classesToCheck,]
        const imgTimeout = setInterval(() => {
            if (cur === imgArray.length) {
                cur = 0
            }
            setActiveEl(imgArray[cur])
            setCoverEl(true)
 
            cur++
        }, 10000);
        return () => clearTimeout(imgTimeout)
    }, [])


    useEffect(() => {
        const card = document.querySelectorAll(".img-box")
        const handleHoverEffect = (e, index) => {
            if (classesToCheck.some(cls => e.target.classList.contains(cls))) {
                setCoverEl(true)
            }
            if (fistChildIndex !== index) {
                setFirstChildIndex(null)
            }
            const activeElClass = Array.from(e.target.classList).filter(classname => classname.startsWith('img-box-')).filter(className => !className.includes('cover'))
            setActiveEl(...activeElClass)
        }
        card.forEach((item, index) => {
            item.addEventListener("mouseenter", e => handleHoverEffect(e, index));
        })
        return () => {
            card.forEach((item, index) => item.removeEventListener("mouseenter", e => handleHoverEffect(e, index)))
        };
    }, [])

    return (
        <div className='flex justify-end gap-[30px] max-w-[1100px] w-full card-container w-1630:max-w-[1000px]'>
            {mainTopImgArr.map((imgObject, index) => {
                const baseClass = 'img-box';
                const indexClass = `img-box-${index + 1}` || 'img-box-1'
                const coverClass = (index === 0 && coverEl) ? 'img-box-1-cover' : '';
                const activeImg = indexClass === activeEl ? 'active-img' : ''
                const className = `${baseClass} ${indexClass} ${coverClass} ${activeImg}`
                return (
                    <div
                        key={imgObject.id}
                        className={className}
                        style={{ backgroundImage: `url(${imgObject.img})`, }}
                    >
                        <div className='img-box__price'>
                            <div>
                                <h3>{imgObject.text}</h3>
                                <p className='rounded-l-[30px]'>от <span className='font-bold'>{imgObject.price}</span> рублей</p>
                            </div>
                        </div>
                        <div className='img-box__block '>
                            <p className='img-box__block-text rounded-r-[30px]'>{imgObject.text}</p>
                        </div>
                    </div>
                )
            })}
        </div >
    );
}
