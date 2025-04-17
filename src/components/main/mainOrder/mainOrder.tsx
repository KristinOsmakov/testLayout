import { Container } from '../../ui/container/container'
import { FormMain } from './formMain/formMain'
import s from './MainOrder.module.scss'
import { StepsContainer } from './StepsContainer/stepsContainer'

export const MainOrder = () => {
    return (
        <section className={s.section}>
            <Container>
                <p className={s.p}>Оформление <span className={s.pSpan}>заказа</span></p>
                <span className={s.span}>Перед заполнением формы ознакомьтесь с нашей схемой работы!</span>
                <div>
                    <StepsContainer/>
                    <FormMain/>
                </div>
            </Container>
        </section>
    )
}