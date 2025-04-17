
import { useRef, useState, useEffect } from "react";
import s from './rangeSlider.module.scss';

export const RangeSlider = () => {
    const min = 0;
    const max = 100;
    const [value, setValue] = useState(min); // Теперь используем одно значение
    const rangeRef = useRef<HTMLDivElement>(null);

    const getPercent = (val: number) => ((val - min) / (max - min)) * 100;

    useEffect(() => {
        if (rangeRef.current) {
            const percent = getPercent(value);
            rangeRef.current.style.width = `${percent}%`;
        }
    }, [value]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(Number(e.target.value));
    };

    return (
        <div className={s.sliderContainer}>
            <div className={s.header}>
                <span className={s.title}>Sed ut perspiciatis, unde omnis iste natus</span>
                <span className={s.value}>{value} %</span>
            </div>
            
            <div className={s.slider}>
                <div className={s.track}></div>
                <div ref={rangeRef} className={s.range}></div>
                <input
                    type="range"
                    min={min}
                    max={max}
                    name={'rangeSlider'}
                    value={value}
                    onChange={handleChange}
                    className={`${s.thumb} ${s.thumbRight}`}
                />
            </div>
        </div>
    );
};