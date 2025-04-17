import { Button } from "../../../ui/button/button"
import { Input } from "../../../ui/input/input"
import { InputForFile } from "../../../ui/input/inputForFile/inputForFile"
import { RangeSlider } from "../../../ui/rangeSlider/rangeSlider"
import { Select } from "../../../ui/select/select"
import s from './formMain.module.scss'

export const FormMain = () => {
    return (
        <form className={s.form}>
            <div className={s.gridContainer}>
                <div className={s.select}>
                    <Select/>
                </div>
                <div className={s.email}>
                    <Input name={'email'} variant={'email'}/>
                </div>
                <div className={s.name}>
                    <Input name={'name'} variant={'name'}/>
                </div>
                
                <div className={s.rangeWrapper}>
                    <RangeSlider/>
                </div>
                <InputForFile/>
            </div>
            <div className={s.submitButton}>
                    <Button variant={"send"}>Отправить</Button>
            </div>
        </form>
    )
}