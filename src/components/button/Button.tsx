import style from './Button.module.css'


type ButtonPropsType = {
    title: string
    callBack: ()=> void
    number?: number
    btnDisabled?: boolean
    maxNumber?: number
}

export const Button = (props: ButtonPropsType) => {

    return (
        <button className={style.btn}
                onClick={props.callBack}
                disabled={props.btnDisabled}>
            {props.title}
        </button>
    )
}