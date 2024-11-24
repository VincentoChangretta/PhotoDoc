import React from 'react';
import { PATHNAMES, photoDocRecommendationsData } from '../../../public/AppData';
import { recPhoto } from '../../../public/ImgData';
import { RecommendationCard } from '../Global/RecommendationCard';
import { Link } from 'react-router-dom';

export const RecommendationsTop = () => {
    return (
        <section>
            <div className="container">
                <div className="title-box text-center">
                    <h2>Рекомендации</h2>
                    <h3 className='leading-[40px]'>
                        Следуйте простым рекомендациям, чтобы получить идеальные <br /> фотографии для ваших документов.
                    </h3>
                </div>
                <div className="photoDoc-recommendations">
                    <div className='flex justify-center gap-[50px] items-center mb-[20px]'>
                        <div className='flex flex-col gap-[10px]'>
                            {
                                photoDocRecommendationsData.map((item, index) => (
                                    <RecommendationCard cardData={item} index={index}/>
                                ))
                            }
                        </div>
                        <div className='max-w-[500px] '>
                            <img className='img rounded-elementRounded max-h-[700px] shadow-cardShadow' src={recPhoto} alt="Фотография-рекаомендации" />
                        </div>
                    </div>
                    <div className='max-w-[1050px] mx-auto text-center p-[20px] text-2xl font-extrabold text-textColor rounded-elementRounded'>
                        <p className='mb-[10px]'>Убедитесь, что ваша фотография подходит под пункты рекомендаций. <br /> Если не соблюдать рекомендации, фотографии могут быть забракованы!</p>
                        <p>В случае отправки фотографий не попадающих под пункты рекомендаций вы получите смс на указанную вами почту или мессенджеры о том, что нарушены условия отправки фотографий. Заказ будет отменен, a средства возвращены.</p>
                    </div>
                    <Link to={PATHNAMES.photoDocument} className='btn mx-auto'>Фото на документы</Link>
                </div>
            </div>
        </section>
    );
}
