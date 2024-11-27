import React, { useState, useEffect, useRef } from 'react';
import './PictureRetoucher.css';

export const PictureRetoucher = ({ className, img1, img2  }) => {
    const [linePosition, setLinePosition] = useState(50); // начальная позиция линии
    const [isDragging, setIsDragging] = useState(false); // состояние удерживания мыши
    const containerRef = useRef(null); // используем ref для контейнера

    // Обработка перемещения мыши
    const handleMouseMove = (e) => {
        if (!isDragging) return; // проверяем, удерживается ли кнопка мыши
        const container = containerRef.current;
        if (!container) return;
        const containerRect = container.getBoundingClientRect(); // получаем размеры контейнера 
        const offsetX = e.clientX - containerRect.left; // координата X относительно контейнера
        const containerWidth = containerRect.width; // ширина контейнера
        // Рассчитываем позицию линии как процент от ширины контейнера
        let newPosition = (offsetX / containerWidth) * 100;
        newPosition = Math.max(0, Math.min(99, newPosition)); // ограничиваем значение в диапазоне от 0 до 100%
        setLinePosition(newPosition); // обновляем состояние с новой позицией линии
    };
    // Начало перемещения
    const handleMouseDown = () => {
        setIsDragging(true); // устанавливаем флаг, что кнопка мыши нажата
    };
    // Остановка перемещения
    const handleMouseUp = () => {
        setIsDragging(false); // сбрасываем флаг, что кнопка мыши отпущена
    };
    useEffect(() => {
        if (isDragging) {
            // Добавляем глобальные обработчики при перемещении мыши и отпускании кнопки
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        } else {
            // Убираем обработчики, когда перемещение заканчивается
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        }
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging]);

    return (
        <div
            className={`${className} picture-retoucher`}
            ref={containerRef}
            onMouseDown={handleMouseDown}
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
