import {useState} from "react";
import style from './Counter.module.css'
import {CounterDisplay} from "./counterDisplay/CounterDisplay";
import {Button} from "../button/Button";

export type CounterPropsType = {
    number: number
    numberInc: () => void
    numberReset: () => void
    maxNumber: number
    startNumber: number
    tempStartValue: number
    tempMaxValue: number
    btnDisabled: boolean
    error: boolean
}
export const Counter = (props: CounterPropsType) => {


    return (
        <div className={style.counter}>
            <div className={style.displayContainer}>
                <CounterDisplay
                    title={props.number}
                    maxNumber={props.maxNumber}
                    startNumber={props.startNumber}
                    disabled={props.btnDisabled}
                    number={props.number}
                    tempStartNumber={props.tempStartValue}
                    tempMaxNumber={props.tempMaxValue}
                    error={props.error}
                />
                <Button title={"INC"}
                        callBack={props.numberInc}
                        number={props.number}
                        maxNumber={props.maxNumber}
                        btnDisabled={props.btnDisabled}
                />
                <Button title={"Reset"}
                        callBack={props.numberReset}/>
            </div>

        </div>
    )
}