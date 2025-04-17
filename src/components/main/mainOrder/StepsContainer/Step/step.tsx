import { ReactNode } from "react"
import Circle from "../../../../../assets/icons/circle"
import s from './step.module.scss'


type stepProps = {
    SVGIcon: ReactNode
    text: string
}
export const Step = ({SVGIcon, text}: stepProps) => (
    <div className={s.stepContainer}>
        <div className={s.circleWrapper}>
            <Circle />
            <div className={s.svgIcon}>
                {SVGIcon}
            </div>
        </div>
        <span className={s.text}>{text}</span>
    </div>
)