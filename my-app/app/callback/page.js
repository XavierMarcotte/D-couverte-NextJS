"use client"
import { useState, useCallback } from "react"
import Puissance from './puissance'
//Utilsiation de useCallback permet de mémoriser une fonction

const callback = () => {

    const [number, setNumber] = useState(1);
    const [letters, setLetters] = useState(null);

    const increment = () => {
        setNumber(prevNumber => prevNumber + 1)
    }
    const calculPuissance = useCallback (() => {
        setNumber(prevNumber => prevNumber * prevNumber)
    }, [number])


    return (
    <>
        <button onClick={() => increment()}>Increment</button> : {number}<br />
        <Puissance calculPuissance={calculPuissance} /> <br/>
        <input type="text" onChange={(e) => setLetters(e.target.value)}/> : {letters} <br />
    </>
  )
}

export default callback