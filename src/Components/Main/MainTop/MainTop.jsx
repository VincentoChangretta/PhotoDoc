import React from 'react';
import { MainTopSlider } from './MainTopSlider';
import { Link } from 'react-router-dom';
import { PATHNAMES } from '../../../../public/AppData';

export const MainTop = () => {


    return (
        <section>
            <div className="container">
                <div className="inner">
                    <div>
                        <h1 className='text-7xl mb-[30px]'>
                            <span className='block'>Просто.</span>
                            <span className='block'>Быстро.</span>
                            <span className='block'>Эффективно.</span>
                        </h1>
                        <Link className='btn mb-[40px]' to={PATHNAMES.photoDocument}>Фото на документы</Link>
                    </div>
                    <MainTopSlider />
                </div>
            </div>
        </section>
    );
}
