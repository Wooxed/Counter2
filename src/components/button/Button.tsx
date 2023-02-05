import {MouseEventHandler} from "react";
import style from 'Button.module.css'

type ButtonPropsType = {
    title: string
    onClick: MouseEventHandler<HTMLButtonElement>
    disabled: boolean | undefined
}

export const Button = (props: ButtonPropsType) => {
    return (
        <button className={props.disabled ? style.disabled : style.button}
                onClick={props.onClick}
                disabled={props.disabled}>
            {props.title}
        </button>
    )
}