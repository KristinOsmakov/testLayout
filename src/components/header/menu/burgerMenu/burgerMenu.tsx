import { Link } from "react-router-dom";
import { menuArr } from "../menuArr";
import s from './burgerMenu.module.scss';
import { useState } from "react";

export const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
        <button 
            className={`${s.burgerButton} ${isOpen ? s.open : ''}`}
            onClick={toggleMenu}>
            <span className={s.burgerLine}></span>
            <span className={s.burgerLine}></span>
            <span className={s.burgerLine}></span>
        </button>

            {isOpen && (
                <div className={s.menuWrapper}>
                    <nav className={s.menu}>
                        {menuArr.map(el => (
                            <Link 
                                className={s.link} 
                                key={el.id} 
                                to={el.link}
                                onClick={toggleMenu}
                            >
                                {el.title}
                            </Link>
                        ))}
                    </nav>
                    <div className={s.overlay} onClick={toggleMenu} />
                </div>
            )}
        </>
    );
};