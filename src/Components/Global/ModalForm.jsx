import React, { useRef, useState } from 'react';
import { RUBLE } from '../../../public/AppData';
import { useDispatch } from 'react-redux';
import { closeFormModalCreator } from '../../Redux/currentInModalFormReducer';
import { Input } from '../UI/Input';
import { InputFile } from '../UI/InputFile';
import { CheckboxVerification } from './Checkbox';
import { handleSubmit } from '../../../public/functions';
import { ModalCloser } from './ModalCloser';

export const ModalForm = ({ data }) => {
    const formRef = useRef(null)
    const [privacyCheckbox, setPrivacyCheckbox] = useState(null)
    const [infoCheckbox, setInfoPrivacyCheckbox] = useState(null)
    const [privacyError, setPrivacyError] = useState("")
    const [infoError, setInfoError] = useState("")
    const [fileInput, setFileInput] = useState(null)
    const [fetchedDescr, setFetchedDescr] = useState(null)
    const dispatch = useDispatch()
    const handleCloseModal = () => {
        dispatch(closeFormModalCreator())
    }

    return (
        <div onClick={handleCloseModal} className='fixed z-[2000] inset-0 flex items-center justify-center backdrop-blur '>
            <form
                ref={formRef}
                onSubmit={e =>
                    handleSubmit(
                        e,
                        formRef.current,
                        setFetchedDescr,
                        privacyCheckbox,
                        infoCheckbox,
                        privacyError,
                        setPrivacyError,
                        infoError,
                        setInfoError,
                        setFileInput
                    )
                }
                onClick={e => e.stopPropagation()}
                className='relative max-w-[510px] p-[30px] bg-textColor text-invertedTextColor rounded-elementRounded'
            >
                <ModalCloser closeModal={() => dispatch(closeFormModalCreator())}/>
                <div className='mb-[20px]'>
                    <h2 className='text-4xl font-extrabold mb-[20px]'>{data.title}</h2>
                    <p className='text-2xl font-extrabold'>от {data.price + RUBLE}</p>
                </div>
                <div className='flex flex-col gap-[10px]'>
                    <h3>Заполните форму, чтобы оформить заказ</h3>
                    <Input
                        name="name"
                        type="text"
                        placeholder="Ваше имя"
                    />
                    <Input
                        name="phone"
                        type="number"
                        placeholder="Ваш номер телефона"
                        required={true}
                    />
                    <Input
                        withSelect={true}
                        name="contact-with"
                        type="text"
                        placeholder="Ваш номер телефона"
                        required={true}
                    />
                    <InputFile fileInput={fileInput} setFileInput={setFileInput} />
                    <div className='hidden'>
                        <input readOnly name="price" type="text" value={`от ${data.price + RUBLE}`} />
                    </div>
                    <div className='max-w-[450px] raletive p-[20px] bg-invertedTextColor text-textColor rounded-elementRounded'>
                        <CheckboxVerification
                            errorStatus={privacyError}
                            stateChanger={setPrivacyCheckbox}
                        />
                        <CheckboxVerification
                            errorStatus={infoError}
                            stateChanger={setInfoPrivacyCheckbox}
                            infoCheckbox={true}
                        />
                    </div>
                    <button className='btn inverted'>Заказать</button>
                    {fetchedDescr && <p>Заказ успешно оформлен!</p>}
                </div>
            </form>
        </div>
    );
}
