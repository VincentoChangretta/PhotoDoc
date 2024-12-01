import React from 'react';

export const SupportProjectTop = () => {
    return (
        <section>
            <div className="container">
                <div className='pt-[50px]'>
                    <div className='max-w-[800px] mx-auto bg-invertedTextColor p-[30px] rounded-elementRounded shadow-xl'>
                        <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">Поддержите наш проект</h1>
                        <p className="text-gray-700 mb-4">
                            Если вам нравятся наши услуги по реставрации и ретуши фотографий, вы можете поддержать нас, сделав пожертвование.
                            Ваша поддержка поможет нам продолжать создавать качественные фото на документы и улучшать наши услуги.
                        </p>

                        <h2 className="text-xl font-semibold mb-2 text-gray-800">Как вы можете помочь:</h2>
                        <ul className="mb-[30px]">
                            <li>— Сделать пожертвование на развитие проекта.</li>
                            <li>— Поделиться информацией о нашем сайте с друзьями и знакомыми.</li>
                            <li>— Оставить отзыв о наших услугах.</li>
                        </ul>

                        <h2 className="text-xl font-semibold mb-2 text-gray-800">Пожертвование</h2>
                        <p>...</p>
                        <div className="flex justify-center">
                            <a
                                href="https://www.paypal.com/donate?hosted_button_id=YOUR_BUTTON_ID"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn"
                            >
                                Поддержать нас
                            </a>
                        </div>

                        <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">Спасибо за вашу поддержку!</h2>
                        <p className="text-gray-700">
                            Каждое пожертвование, независимо от размера, делает огромную разницу.
                            Мы благодарны за ваше время и поддержку!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
