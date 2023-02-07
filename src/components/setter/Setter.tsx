import React, {ChangeEvent, useEffect, useState} from "react";
import style from './Setter.module.css'
import {Button} from "../button/Button";

type CounterSetterProps = {
    StartValue: number
    MaxValue: number
    setMaxValue: (e: number) => void
    setStartValue: (e: number) => void
    setTempStartValue: (e: number) => void
    setTempMaxValue: (e: number) => void
    setNumber: (e: number) => void
    setBtnDisabled: (e: boolean) => void
}

export const Setter = (props: CounterSetterProps) => {
    const [localMaxValue, setLocalMaxValue] = useState<number>(0)
    const [localStartValue, setLocalStartValue] = useState<number>(0)
    const [localBtnDisabled, setLocalBtnDisabled] = useState<boolean>(false)
    const [underZero, setUnderZero] = useState<boolean>(false)
    const zeroConditionStyle = {
        backgroundColor: underZero ? '#D16161' : 'white',
        border: underZero ? 'red 3px solid' : '',
        borderRadius: '5px',
    }

    useEffect(() => {
        if (localMaxValue <= localStartValue) setLocalBtnDisabled(true)
        else setLocalBtnDisabled(false)
    }, [localStartValue, localMaxValue])

    useEffect(() => {
        localMaxValue === props.MaxValue ? setLocalBtnDisabled(true) : setLocalBtnDisabled(false)
        localStartValue === props.StartValue ? setLocalBtnDisabled(true) : setLocalBtnDisabled(false)
    }, [props.MaxValue, props.StartValue])

    useEffect(() => {
        if (localMaxValue < 0 || localStartValue < 0) {
            setLocalBtnDisabled(true)
            setUnderZero(true)
        } else {
            setUnderZero(false)
        }
    }, [localStartValue, localMaxValue])

    const setMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setLocalMaxValue(Number(e.currentTarget.value))
        props.setTempMaxValue(Number(e.currentTarget.value))
    }
    const setStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        setLocalStartValue(Number(e.currentTarget.value))
        props.setTempMaxValue(Number(e.currentTarget.value))
    }

    const btnHandler = () => {
        props.setMaxValue(localMaxValue)
        props.setStartValue(localStartValue)
        props.setNumber(localStartValue)
        props.setBtnDisabled(false)
    }
    return (
        <div className={style.counterSetter}>
            <div className={style.inputContainer}>
                <div className={style.inputContainer}>
                    <span>Max value:</span>
                    <input
                        style={zeroConditionStyle}
                        onChange={setMaxValue}
                        value={localMaxValue}
                        className={style.input}
                        type='number'
                    />
                </div>
                <div className={style.inputContainer}>
                    <span>Start value:</span>
                    <input
                        style={zeroConditionStyle}
                        onChange={setStartValue}
                        value={localStartValue}
                        className={style.input}
                        type='number'
                    />
                </div>

            </div>
            <div className={style.btnContainer}>
                <Button title={'Set'} callBack={btnHandler} btnDisabled={localBtnDisabled}/>
            </div>

        </div>


    )
}