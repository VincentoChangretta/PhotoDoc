import React, { useContext, useEffect, useRef, useState } from 'react';
import { Input } from '../UI/Input';
import { promoCodeModalContext } from '../Navigation';
import { promoCodeData } from '../../../public/AppData';
import { useDispatch } from 'react-redux';
import { photoDocPromoCodeAction } from '../../Redux/currentPromoCodeReducer';

export const PromoCode = () => {

    const { promoCodeModal, setPromoCodeModal } = useContext(promoCodeModalContext)
    const modalRef = useRef(null)
    const [promoCodeValue, setPromoCodeValue] = useState(null)
    const [notFound, setNotFound] = useState(null)
    const [errorText, setErrorText] = useState("Неверный промокод!")
    const dispatch = useDispatch()


    useEffect(() => {
        const closeModal = e => {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                setPromoCodeModal(false)
            }
        }
        document.addEventListener("click", closeModal)
        return () => document.removeEventListener("click", closeModal)

    }, [])


    const handleActivate = () => {
        let result = promoCodeValue.replace(/\s+/g, '');
        console.log(result)
        if (result !== "") {
            const findedPromoCode = promoCodeData.find(promocode => promocode.code.includes(result))
            if (findedPromoCode) {
                setPromoCodeModal(false)
                dispatch(photoDocPromoCodeAction(findedPromoCode.discount))
            } else {
                setErrorText("Неверный промокод!")
                setNotFound(true)
                setTimeout(() => setNotFound(false), 4000);
            }
        } else {
            setErrorText("Введите промокод")
            setNotFound(true)
            setTimeout(() => setNotFound(false), 4000);
        }
    }



    return (
        <div className='flex justify-center items-center fixed z-[2000] inset-0 backdrop-blur '>
            <div ref={modalRef} className='relative flex flex-col justify-center items-center max-w-[700px] w-full p-[50px] bg-textColor rounded-elementRounded shadow-2xl'>
                <h3 className='max-w-[550px] mb-[50px] text-4xl text-center font-extrabold text-invertedTextColor '>
                    Активируйте промокод и получайте приятные скидки!
                </h3>
                <Input
                    placeholder="Введите промокод"
                    className="mb-[30px] max-w-[350px]"
                    promoCode={true}
                    textCenter={true}
                    setPromoCodeValue={setPromoCodeValue}
                />
                <button className='btn darkened' onClick={handleActivate}>Активировать</button>
                {
                    notFound &&
                    <p className='absolute bottom-[20px] left-[50%] translate-x-[-50%] text-invertedTextColor'>
                        {errorText}
                    </p>
                }
            </div>
        </div>
    );
}
