import { useState, useEffect } from "react"
import axios from "axios"

function Get (){
    const [data, setData] = useState([])
    const [names, setNames] = useState([])
    const fetchData = async() =>{
        const response = await axios.get("http://localhost:8080/api/get")
        setData(response.data)
    }

    useEffect(() =>{
        fetchData()
    },[])

    const handleNameClick=()=>{
        const newNames = data.map((post) => post.Name)
        setNames(newNames)
    }
    
    return (
        <div>
            <button onClick={handleNameClick}>Show Names</button>
            <ul>
                {names.map((name, index) => (
                    <li key={index} style={{listStyle: "none"}}>{name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Get;