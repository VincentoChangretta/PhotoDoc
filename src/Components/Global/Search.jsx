import React, { useEffect, useState } from 'react';
import { useInput } from '../../Hooks/useInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faX } from '@fortawesome/free-solid-svg-icons';
import { allServiceData, PHOTODOC } from '../../../public/AppData';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { currentSizeChanger } from '../../Redux/currentSizeReducer';
import { useTypingAnimation } from '../../Hooks/useTypingAnimation';
import { useDebounce } from 'use-debounce';
export const Search = () => {
    const [findedServices, setFindedServices] = useState([]);
    const [notFound, setNotFound] = useState(false);
    const searchInput = useInput('');
    const [isFocused, setIsFocused] = useState(false);
    const strings = ['Фото на паспорт', 'Ретушь фотографий', 'Реставрация фотографий']
    const [textInArrayCur, setTextInArrayCur] = useState(0)
    const [debouncedSearch] = useDebounce(searchInput.value, 20);
    const placeholderText = useTypingAnimation(
        strings,
        textInArrayCur,
        setTextInArrayCur
    )
    const dispatch = useDispatch()
    useEffect(() => {
        if (debouncedSearch.length === 0) {
            setFindedServices([]);
            setNotFound(false);
            return;
        }

        const newFindedServices = [];
        // Фильтрация данных аналогична
        for (const key in allServiceData) {
            const serviceData = allServiceData[key];
            if (Array.isArray(serviceData)) {
                const findService = serviceData.filter(item =>
                    item.name?.toLowerCase().replaceAll(" ", "").includes(debouncedSearch.toLowerCase().replaceAll(" ", "")) ||
                    item.title?.toLowerCase().replaceAll(" ", "").includes(debouncedSearch.toLowerCase().replaceAll(" ", "")) ||
                    item.tag?.toLowerCase().replaceAll(" ", "").includes(debouncedSearch.toLowerCase().replaceAll(" ", ""))
                );
                newFindedServices.push(...findService);
            }
        }

        setFindedServices(newFindedServices);
        setNotFound(newFindedServices.length === 0);
    }, [debouncedSearch]);

    const toPathname = item => {
        if (item.type === PHOTODOC) {
            dispatch(currentSizeChanger(item))
        }
        searchInput.reset()
    }

    return (
        <div className={`inp-box relative max-w-[430px] p-[17px] pl-[60px] bg-textColorHover w-1400:max-w-[350px] w-420:max-w-[300px] w-420:pl-[50px] ${searchInput.value.length > 0 ? "rounded-t-elementRounded" : "rounded-elementRounded"}`}>
            <FontAwesomeIcon
                className={`absolute top-[50%] left-[25px] translate-y-[-50%] transition-all duration-100 ${searchInput.isActive ? 'text-textColor' : 'text-placeholder'}`}
                icon={faMagnifyingGlass}
            />
            <input
                type="search"
                placeholder={placeholderText}
                value={searchInput.value}
                onChange={searchInput.onChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setTimeout(() => setIsFocused(false), 100)}
            />
            {
                searchInput.value.length > 0 &&
                <div className='absolute z-[2000] top-[50%] right-[20px] translate-y-[-50%] cursor-pointer text-xs'>
                    <FontAwesomeIcon icon={faX} onClick={() => searchInput.reset()}></FontAwesomeIcon>
                </div>
            }
            {
                isFocused && searchInput.value.length > 0 &&
                <div className='absolute z-[2000] left-0 right-0 top-[40px] pt-[10px] p-[20px] bg-invertedTextColor rounded-b-elementRounded flex flex-col gap-[5px] shadow-xl'>
                    {notFound ? "Не найдено" : null}
                    {findedServices.length > 0 && findedServices.map((item, index) => (
                        <Link
                            key={index}
                            to={item.pathname}
                            onClick={() => toPathname(item)}
                            className='py-[5px] px-[10px] cursor-pointer hover:bg-gray'
                        >
                            {item.title || item.name}
                        </Link>
                    ))}
                </div>
            }
        </div>
    );
}