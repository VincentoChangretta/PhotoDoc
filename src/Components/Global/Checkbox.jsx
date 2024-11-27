import React from 'react';
import { Link } from 'react-router-dom';
import { Checkbox } from '../UI/Checkbox';

export const CheckboxVerification = ({ stateChanger, infoCheckbox, errorStatus }) => {



  return (
    <div className={`${errorStatus ? `bg-errorColor` : ''} relative flex max-w-[400px] pl-[40px] pr-[15px] py-[7px] select-none  rounded-elementRounded transition-bg`}>
      <label className='cursor-pointer'>
        <Checkbox stateChanger={stateChanger} />
        <p className='text-sm'>
          {infoCheckbox ? 'Я ознакомлен с' : 'Нажимая на кнопку "Отправить" Вы соглашаетесь с'}
          <Link className='link' to={infoCheckbox ? '/recommendations' : '/privacypolicy'}>
            {infoCheckbox ? ' рекомендациями по отправляемым фотографиям' : ' политикой конфиденциальности'}
          </Link>
        </p>
      </label>
    </div>
  );
}
