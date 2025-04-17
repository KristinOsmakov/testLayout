import { useIsTablet } from '../../common/hooks/use-is-tablet'
import { Container } from '../ui/container/container'
import s from './header.module.scss'
import { BurgerMenu } from './menu/burgerMenu/burgerMenu'
import { Menu } from './menu/menu'
import {Link} from 'react-router-dom'

export const Header = () => {
    const isTablet = useIsTablet()
    return (
        <div className={s.header}>
            <Container className={s.headerContainer}>
                <Link to="/" className={s.link}>Loremipsum.<span className={s.span}>net</span></Link>
                {isTablet ? <BurgerMenu/> : <Menu/> }
            </Container>
        </div>
    )
}