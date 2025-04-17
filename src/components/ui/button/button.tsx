import { ReactNode } from "react";
import s from './button.module.scss';
import clsx from "clsx";
import AttachFile from "../../../assets/icons/attachFile";

type ButtonProps = {
    children: ReactNode;
    variant: 'order' | 'info' | 'attach' | 'send';
};

export const Button: React.FC<ButtonProps> = ({ children, variant }: ButtonProps) => {
    const handleClick = () => {
        switch(variant) {
            case 'info': 
                alert('Кнопка Подробнее')
                break
            case 'order':
                alert('Кнопка Заказать')
                break
            case 'attach':
                alert('Кнопка Прикрепить')
                break
            case 'send':
                alert('Кнопка Отправить')
                break

        }
    }
    return (
        <button onClick={handleClick} className={clsx(s.button, {
            [s.order]: variant === 'order',
            [s.info]: variant === 'info',
            [s.attach]: variant === 'attach',
            [s.send]: variant === 'send'
        })}>
            <div className={s.buttonContainer}>
                {variant === 'attach' && <AttachFile />}
                {children}
            </div>
        </button>
    );
};