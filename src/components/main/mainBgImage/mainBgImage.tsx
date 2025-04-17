import { Button } from '../../ui/button/button'
import { Container } from '../../ui/container/container'
import s from './mainBgImage.module.scss'

export const MainBgImage = () => {

    const mainArr = [
        {id: 1, text: 'Totam rem aperiam eaque ipsa'},
        {id: 2, text: 'Sit voluptatem accusantium doloremque laudantium'},
        {id: 3, text: 'Sed ut perspiciatis, unde omnis iste natus error'},
    ]
    
    return (
        <section className={s.main}>
            <Container>
                <h1 className={s.h1}>
                    <span className={s.span}>Lorem ipsum</span> dolor sit ametconsectetur <span className={s.span}>adipiscing</span>
                </h1>
                <div className={s.contentContainer}>
                    <p className={s.h2}>At vero eos et accusamus et iusto odio dignissimos ducimus!</p>
                    <ul className={s.contentList}>
                        {mainArr.map(el => <li className={s.item} key={el.id}>{el.text}</li>)}
                    </ul>
                </div>
                <div className={s.buttonContainer}>
                    <Button variant={'order'}>Заказать</Button>
                    <Button variant={'info'}>Подробнее</Button>
                </div>
            </Container>
        </section>
    )
}