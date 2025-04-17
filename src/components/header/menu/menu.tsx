import { Link } from 'react-router-dom'
import s from './menu.module.scss'
import { menuArr } from './menuArr'


export const Menu = () => {
    
    return (
        <div className={s.menu}>
            {menuArr.map(el => <Link className={s.link} key={el.id} to={el.link}>{el.title}</Link>)}
        </div>
    )
}