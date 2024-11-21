import React, { useState } from 'react';
import './Checkbox.css'

export const Checkbox = ({ stateChanger }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = e => {
    const checked = e.target.checked;
    setIsChecked(checked);
    stateChanger(checked);
  };

  return (
    <>
      <input
        className='checkbox'
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
      />
      <span className={isChecked ? 'check-style active' : 'check-style'}></span>
    </>
  );
}