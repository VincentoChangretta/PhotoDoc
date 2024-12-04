import React, { useState, useEffect, useRef } from 'react';
import './PictureRetoucher.css';

export const PictureRetoucher = ({ className, img1, img2 }) => {
    const [linePosition, setLinePosition] = useState(50); // начальная позиция линии
    const [isDragging, setIsDragging] = useState(false); // состояние удерживания мыши или касания
    const containerRef = useRef(null); // используем ref для контейнера

    // Обработка перемещения (мышь или касание)
    const handleMove = (clientX) => {
        const container = containerRef.current;
        if (!container) return;
        const containerRect = container.getBoundingClientRect(); // размеры контейнера
        const offsetX = clientX - containerRect.left; // координата X относительно контейнера
        const containerWidth = containerRect.width; // ширина контейнера
        // Рассчитываем позицию линии как процент от ширины контейнера
        let newPosition = (offsetX / containerWidth) * 100;
        newPosition = Math.max(0, Math.min(99, newPosition)); // ограничиваем значение в диапазоне от 0 до 100%
        setLinePosition(newPosition); // обновляем состояние с новой позицией линии
    };

    // Начало перемещения (мышь)
    const handleMouseDown = (e) => {
        setIsDragging(true); // устанавливаем флаг, что кнопка мыши нажата
        handleMove(e.clientX); // сразу обновляем позицию
    };

    // Начало перемещения (касание)
    const handleTouchStart = (e) => {
        setIsDragging(true); // устанавливаем флаг, что касание началось
        handleMove(e.touches[0].clientX); // сразу обновляем позицию
    };

    // Обработка перемещения (мышь или касание)
    const handleMouseMove = (e) => {
        if (!isDragging) return; // проверяем, активен ли флаг перемещения
        handleMove(e.clientX);
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;
        handleMove(e.touches[0].clientX);
    };

    // Остановка перемещения
    const handleMouseUp = () => {
        setIsDragging(false); // сбрасываем флаг
    };

    const handleTouchEnd = () => {
        setIsDragging(false); // сбрасываем флаг
    };

    // Глобальные обработчики
    useEffect(() => {
        if (isDragging) {
            // Обработчики для мыши
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);

            // Обработчики для касания
            document.addEventListener('touchmove', handleTouchMove);
            document.addEventListener('touchend', handleTouchEnd);
        } else {
            // Убираем обработчики
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('touchmove', handleTouchMove);
            document.removeEventListener('touchend', handleTouchEnd);
        }
        return () => {
            // Убираем обработчики при размонтировании
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('touchmove', handleTouchMove);
            document.removeEventListener('touchend', handleTouchEnd);
        };
    }, [isDragging]);

    return (
        <div
            className={`${className} picture-retoucher`}
            ref={containerRef}
            onMouseDown={handleMouseDown} // Обработчик для мыши
            onTouchStart={handleTouchStart} // Обработчик для касания
        >
            <img className="no-retouch" src={img1} alt="без ретуши" />
            <img
                className="img retouched"
                src={img2}
                alt="с ретушью"
                style={{ clipPath: `inset(0 0 0 ${linePosition}%)` }}
            />
            <div
                className="img line"
                style={{ left: `${linePosition}%` }}
            ></div>
        </div>
    );
};
