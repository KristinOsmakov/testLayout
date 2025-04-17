import SearchIcon from '../../../../assets/icons/search.tsx'; // Импортируем как компоненты
import PercentIcon from '../../../../assets/icons/percent.tsx';
import SubtractIcon from '../../../../assets/icons/subtract.tsx';
import MessageIcon from '../../../../assets/icons/message.tsx';
import MoneyIcon from '../../../../assets/icons/money.tsx';
import { Step } from './Step/step.tsx';
import s from './stepsContainer.module.scss';
import { ReactNode } from 'react';

export const StepsContainer = () => {
    type StepItemType = {id: number, img: ReactNode, text: string}
        type StepsArrType = StepItemType[]
    
    const stepsArr: StepsArrType = [
        { id: 1, img: <SearchIcon />, text: 'Lorem ipsum dolor sit amet' },
        { id: 2, img: <PercentIcon />, text: 'Сonsectetur adipiscing elit' },
        { id: 3, img: <SubtractIcon />, text: 'Sed do eiusmod tempor' },
        { id: 4, img: <MessageIcon />, text: 'Esse cillum dolore eu fugiat' },
        { id: 5, img: <MoneyIcon />, text: 'Excepteur sint occaecat cupidatat non proident' },
    ];

    return (
        <div className={s.stepsContainer}>
            {stepsArr.map((el) => (
                <div key={el.id}>
                    <Step SVGIcon={el.img} text={el.text} />
                    {/* {index < stepsArr.length - 1 && (
                        <div className={s.dotsContainer}>
                            {[...Array(5)].map((_, i) => (
                                <Dot key={i} />
                            ))}
                        </div>
                    )} */}
                </div>
            ))}
        </div>
    );
};