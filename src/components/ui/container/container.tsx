import { FC, ReactNode } from "react";
import s from './container.module.scss';

type ContainerProps = {
    children: ReactNode;
    className?: string; // Добавляем пропс для дополнительных классов
};

export const Container: FC<ContainerProps> = ({ children, className }) => {
    return (
        <div className={`${s.container} ${className || ''}`}>{children}</div>
    );
};