import './PhotoDocument.css'
import { photoDocumentArr } from '../../../public/AppData';
import { PhotoDocumentCard } from './PhotoDocumentCard';
import { MainInfoPhoto } from '../Main/MainInfo/MainInfoPhoto';
import { CreateCustomSize } from './CreateCustomSize';
import { useState } from 'react';

export const PhotoDocument = () => {

  const [createCustomSizeModal, setCreateCustomSizeModal] = useState(null)

  return (
    <>
      <section className='photodocument mb-0'>
        <div className="container">
          <div className="title-box text-center">
            <h2>Выберите подходящий размер</h2>
          </div>
          <div className='flex justify-between items-center'>
            <div className="flex flex-col gap-[10px]">
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
