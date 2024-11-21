import classes from './PhotoDocumentCard.module.css'
import { useDispatch } from 'react-redux';
import { currentSizeChanger } from '../../Redux/currentSizeReducer';
import { PATHNAMES } from '../../../public/AppData';
import { IconBtn } from '../UI/IconBtn';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export const PhotoDocumentCard = ({ photo }) => {
  const dispatch = useDispatch()
  const handleChangeCurrentSize = (photo) => {
    dispatch(currentSizeChanger(photo))
  }

  return (
    <article className={classes.card}>
      <div className='flex justify-between items-center gap-[30px]'>
        <div>
          <h3 className='text-2xl font-bold'>{photo.name}</h3>
          <p className='max-w-[450px]'>{photo.descr}</p>
        </div>
        <IconBtn
          pathname={PATHNAMES.constructor}
          icon={faArrowRight}
          onClick={() => handleChangeCurrentSize(photo)}
        >
          Заказать
        </IconBtn>
      </div>
    </article>
  );
}
