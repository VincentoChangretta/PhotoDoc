import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCurrentPhotoDocQuantity, getCurrentPhotoDocQuantity } from '../../Redux/currentPhotoDocQuantityReducer';
import { CURRENT_ELECTRO_QUANTITY, CURRENT_PHYSICAL_QUANTITY, MAX_PHOTO_QUANTITY, PHOTODOC_ELECTRO_QUANTITY, PHOTODOC_PHYSICAL_QUANTITY, SIZE_9x12, TYPES } from '../../../public/AppData';

export const ChangerQuantity = ({ electroQuantity, physicalQuantity, electroType, physicalType, type }) => {

  const [quantity, setQuantity] = useState(0)
  const dispatch = useDispatch()
  const currentSize = useSelector(state => state.currentSize.currentSize)

  useEffect(() => {
    if (electroType && type === TYPES.ELECTRO) {
      setQuantity(electroQuantity)
    } else if (physicalType && type == TYPES.PHYSICAL) {
      setQuantity(physicalQuantity)
    }
  }, [electroType, physicalType, electroQuantity, physicalQuantity, type])

  const handleAdd = () => {
    if (quantity < MAX_PHOTO_QUANTITY) {
      if (electroType && type === TYPES.ELECTRO) {
        dispatch(addCurrentPhotoDocQuantity(CURRENT_ELECTRO_QUANTITY))
      }
      if (physicalType && type === TYPES.PHYSICAL) {
        dispatch(addCurrentPhotoDocQuantity(CURRENT_PHYSICAL_QUANTITY))
      }
    }
  }

  const handleGet = () => {
    if (quantity > PHOTODOC_ELECTRO_QUANTITY && electroType && type === TYPES.ELECTRO) {
      dispatch(getCurrentPhotoDocQuantity(CURRENT_ELECTRO_QUANTITY))
    }
    if (quantity > (currentSize.id === SIZE_9x12 ? 1 : PHOTODOC_PHYSICAL_QUANTITY) && physicalType && type === TYPES.PHYSICAL) {
      dispatch(getCurrentPhotoDocQuantity(CURRENT_PHYSICAL_QUANTITY))
    }
  }

  return (
    <div className='relative w-[180px] flex items-center justify-between gap-[20px] p-[5px] rounded-elementRounded bg-white shadow-xl'>
      <h5 className='absolute left-[50%] top-[-30px] translate-x-[-50%] text-white text-lg'>{type}</h5>
      <button className='btn small' onClick={handleGet}>-</button>
      <h5 className='text-2xl'>{quantity}</h5>
      <button className='btn small' onClick={handleAdd}>+</button>
    </div>
  );
}
