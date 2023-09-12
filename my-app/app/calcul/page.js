"use client"
import { useState, useMemo } from "react"
//Utilsiation de useMemo avec un gros calcul qui peut prendre du temps, permete de mémoriser UNE VALEUR

const calcul = () => {

    const [number, setNumber] = useState(1);
    const [letters, setLetters] = useState(null);

    const increment = () => {
        setNumber(prevNumber => prevNumber + 1)
    }
    const expensiveFunction = () => {
        for(let i = 0; i < 2000000000; i++) {}
        return number * Math.random()
        
    }
    const value = useMemo(() => expensiveFunction(), [number]) 
    //[number] est le tableau de dépendance -> si [number] change, alors le calcul est refait comme si on utilisait pas useMemo

    return (
    <>
        <button onClick={() => increment()}>Increment</button> : {number}<br />
        {value}<br />
        <input type="text" onChange={(e) => setLetters(e.target.value)}/> : {letters} <br />
    </>
  )
}

export default calcul