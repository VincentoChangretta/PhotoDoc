import React, { useState } from 'react';
import { Input } from '../UI/Input';

export const ToSavePhotoDoc = ({ setPhotoCodeValue }) => {
    const [dateNow, setDateNow] = useState(new Date())

    const year = dateNow.getFullYear();
    const month = dateNow.getMonth() + 1;
    const day = dateNow.getDate();
    const fullDate = `${day}.${month}.${year}`

    return (
        <label className='flex flex-col gap-[20px] mb-[20px]'>
            <p>Если вы хотите, чтобы мы сохранили ваше фото, то напишите свою фамилию в поле, рядом с датой.</p>
            <p>Это будет ваш код по которому вы сможете заказать фотографии вновь со скидкой. Рекомендуем сохранить его.</p>
            <Input
                name="save-picture"
                type="text"
                dateNow={`${fullDate}`}
                className="realtive pl-[160px]"
                placeholder="Иванов"
                setPhotoCodeValue={setPhotoCodeValue}
            />
        </label>
    );
}