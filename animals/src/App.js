import { useState } from "react";
import Animals from "./Animals";
import "./App.css"

function getRandom(){
    const animals = ["bird", "cat", "cow", "dog", "gator", "horse"]

    return animals[Math.floor(Math.random() * animals.length)]
}

function App(){
    const [animals, setAnimals] = useState([])

    const handleClick = () => {
        setAnimals([...animals, getRandom()])
    }

    const renderedAnimals = animals.map((animal, value) => {
        return <Animals type = {animal} key = {value} />
    })

    return (
<body>
    <div className = "app">
        <button onClick={handleClick}>Press Me!!</button>
        <div className="animal-list">
            {renderedAnimals}
        </div>
    </div>
</body>
    )
}

export default App;