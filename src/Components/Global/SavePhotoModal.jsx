import React, {  useEffect, useRef, useState } from 'react';
import { ToSavePhotoDoc } from './ToSavePhotoDoc';
import { ModalCloser } from './ModalCloser';
import { useDispatch } from 'react-redux';
import { currentClientPhotoCodeCreator } from '../../Redux/currentCliendPhotoCodeReducer';


export const SavePhotoModal = ({ setSavePhotoModal }) => {
    const [photoCodeValue, setPhotoCodeValue] = useState(null)
    const modalRef = useRef(null);
    const dispatch = useDispatch() 

    useEffect(() => {
        const handleChange = e => {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                setSavePhotoModal(false);
            }
        };
        document.addEventListener('click', handleChange);
        return () => document.removeEventListener('click', handleChange);
    }, []);


    const changeCode = () => {
        dispatch(currentClientPhotoCodeCreator(photoCodeValue))
        setSavePhotoModal(false)
    }

    return (
        <div className='fixed inset-0 flex justify-center items-center backdrop-blur'>
            <div ref={modalRef} className='relative max-w-[480px] w-full pt-[60px] p-[30px] bg-textColor text-invertedTextColor rounded-elementRounded shadow-xl'>
                <ModalCloser closeModal={setSavePhotoModal} />
                <ToSavePhotoDoc setPhotoCodeValue={setPhotoCodeValue}/>
                <button className='btn inverted mx-auto' onClick={changeCode}>
                    Сохранить
                </button>
            </div>
        </div>
    );
}
