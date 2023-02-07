import {useEffect, useState} from "react";
import style from "./CounterDisplay.module.css"

export type TitleType = number | string

type DisplayPropsType = {
    title: TitleType
    maxNumber: number
    startNumber: number
    disabled: boolean
    number: number
    tempStartNumber: number
    tempMaxNumber: number
    error: boolean
}

export const CounterDisplay = (props: DisplayPropsType) => {
    const [title, setTitle] = useState<TitleType>('')
    const [startTitle, setStartTitle] = useState<string>("Enter values and press 'Set'")

    let textColor = style.normal
    props.error ? textColor = style.max : textColor = style.normal

    useEffect(() => {
            setTitle("Enter values and press 'Set'")
        },
        [props.startNumber !== props.tempStartNumber || props.maxNumber !== props.tempMaxNumber])

    useEffect(() => {
            setTitle(props.number)
        },
        [props.maxNumber])

    useEffect(() => {
            setTitle(props.number)
        },
        [props.number])


    useEffect(()=> {
        props.tempStartNumber >= props.tempMaxNumber ?
            setTitle('Incorrect value!') : setTitle("Enter values and press 'Set'")
        if(props.tempStartNumber < 0 || props.tempMaxNumber < 0) setTitle("Incorrect value")
    }, [props.tempStartNumber, props.tempMaxNumber])

    return (
        <div className={`${style.counterDisplay} ${textColor}`}>
            <h1>{title}</h1>
        </div>
    )

}