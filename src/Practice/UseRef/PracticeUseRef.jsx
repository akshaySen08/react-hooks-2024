import React, { useRef, useState } from 'react'
import CSS from './PracticeUseRef.module.css'

// list of 50 fruits 
const fruits = [
    'Apple', 'Apricot', 'Avocado', 'Banana', 'Blackberry', 'Blueberry', 'Boysenberry', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Currant', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Grapefruit', 'Guava', 'Honeydew', 'Huckleberry', 'Jackfruit', 'Jujube', 'Kiwi', 'Kumquat', 'Lemon', 'Lime', 'Lychee', 'Mango', 'Mulberry', 'Nectarine', 'Orange', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Pineapple', 'Plum', 'Pomegranate', 'Raspberry', 'Redcurrant', 'Starfruit', 'Strawberry', 'Tangerine', 'Tomato', 'Watermelon']

const PracticeUseRef = () => {
    const [count, setCount] = useState(0)
    const scrollRef = useRef({});
    const countRef = useRef(0);

    const handleUseStateIncrement = () => {
        setCount(count + 1)
        console.log({
            count: count,
            countRef: countRef.current
        })
    }

    const handleUseRefIncrement = () => {
        countRef.current = countRef.current + 1
        console.log({
            count: count,
            countRef: countRef.current
        })
    }

    const handleScrollTo = (letter) => {
        const filteredFruit = fruits.find(fruit => fruit[0] === letter)
        scrollRef.current[filteredFruit].scrollIntoView({ behavior: 'smooth' })
    }

    console.log("component render");
    

    return (
        <>
            <h1>PracticeUseRef</h1>
            <h2>count: {count}</h2>
            <h2>countRef: {countRef.current}</h2>
            <h2>Scroll to a fruit</h2>
            {/* <button onClick={handleScrollTo}>Scroll to Watermelon</button> */}
            {/* <div className={CSS.LetterContainer}>
                {[...new Set(fruits.map(fruit => fruit[0]))].map((letter, index) => (
                    <span key={index} className={CSS.Letter} onClick={() => handleScrollTo(letter)}>{letter}</span>
                ))}
            </div>
            <ul>
                {fruits.map((fruit, index) => (
                    <li ref={(el) => scrollRef.current[fruit] = el} key={index}>{fruit}</li>
                ))}
            </ul> */}
            <button onClick={handleUseStateIncrement}>UseState Increment</button>
            <button onClick={handleUseRefIncrement}>UseREF Increment</button>
        </>
    )
}

export default PracticeUseRef