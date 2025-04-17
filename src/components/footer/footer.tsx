import { ReactNode } from 'react'
import s from './footer.module.scss'
import Qiwi from '../../assets/icons/qiwi'
import YandexMoney from '../../assets/icons/yandexMoney'
import WebMoney from '../../assets/icons/webMoney'
import Mail from '../../assets/icons/mail'
import Vk from '../../assets/icons/vk'
import Separator from '../../assets/icons/separator'
import { Container } from '../ui/container/container'
import { useIsTablet } from '../../common/hooks/use-is-tablet'
import { useIsMobile } from '../../common/hooks/use-is-mobile'


export const Footer = () => {

    type FooterText = {
        id: number;
        text: string;
    };
    
    type PaymentOption = {
        id: number;
        img: ReactNode;
        text: string;
    };
    
    type LinkOption = {
        id: number;
        img: ReactNode;
        text: string;
        link: string;
    };
    
    type FooterArrType = [
        FooterText[],
        PaymentOption[],
        LinkOption[]
    ];

    const footerArr: FooterArrType = [
        [{id: 1, text: '© 2018 «LOREMIPSUM.NET» Все права защищены.'}],
        [
            {id: 2, img: <Qiwi/>, text: 'QIWI wallet'},
            {id: 3, img: <YandexMoney/>, text: 'Yandex Money'},
            {id: 4, img: <WebMoney/>, text: 'Web Money'},
        ],
        [
            {id: 5, img: <Mail/>, text: 'info@ipsum228.com', link: 'mailto:info@ipsum228.com'},
            {id: 6, img: <Vk/>, text: 'Мы вконтакте', link: 'https://vk.com/'},
        ]
    ]

    const isTablet = useIsTablet()
    const isMobile = useIsMobile()
    
    return (
        <div className={s.footer}>
            <Container className={s.footerContainer}>
                <div className={s.copyright}>
                    {footerArr[0][0].text}
                </div>
                {!isTablet && <Separator/>}
                <div className={s.paymentsRow}>
                    {footerArr[1].map(el => (
                    <div className={s.containerElFooter} key={el.id}>
                        <div>{el.img}</div>
                        {!isMobile && <div>{el.text}</div>}
                    </div>
                    ))}
                </div>
                {!isTablet && <Separator/>}
                <div className={s.contactsRow}>
                    {footerArr[2].map(el => (
                <a className={s.containerElFooter} href={el.link} key={el.id}>
                    <div>{el.img}</div>
                    {!isMobile && <div>{el.text}</div>}
                </a>
                ))}
                </div>
            </Container>
        </div>
    )
}