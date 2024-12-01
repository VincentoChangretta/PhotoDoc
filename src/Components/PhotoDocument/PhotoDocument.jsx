import './PhotoDocument.css'
import { photoDocumentArr } from '../../../public/AppData';
import { PhotoDocumentCard } from './PhotoDocumentCard';
import { MainInfoPhoto } from '../Main/MainInfo/MainInfoPhoto';
import { CreateCustomSize } from './CreateCustomSize';
import { useState } from 'react';
import { useScrollToTop } from '../../Hooks/useScrollToTop';

export const PhotoDocument = () => {
  const [createCustomSizeModal, setCreateCustomSizeModal] = useState(null)
  useScrollToTop()
  return (
    <>
      <section className='photodocument'>
        <div className="container">
          <div className="title-box text-center">
            <h2>Выберите подходящий размер</h2>
          </div>
          <div className='flex justify-between items-center w-1160:flex-col w-1160:gap-[60px]'>
            <div className="flex flex-col gap-[10px] w-1160:items-center">
              {photoDocumentArr.map(photo => (
                <PhotoDocumentCard key={photo.id} photo={photo} />
              ))}
              <button className='btn' onClick={e => (e.stopPropagation(), setCreateCustomSizeModal(true))}>
                Создать свой размер
              </button>
            </div>
            <MainInfoPhoto photoDocPage={true} />
          </div>
        </div>
      </section>
      {createCustomSizeModal && <CreateCustomSize setCreateCustomSizeModal={setCreateCustomSizeModal} />}
    </>
  );
}
