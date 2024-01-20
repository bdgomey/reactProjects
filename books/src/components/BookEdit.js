import { useState, useContext } from "react"
import BooksContext from "../context/books"

function BookEdit({book, onSubmit}){
    
    const [title, setTitle] = useState(book.title)
    const { editBookById } = useContext(BooksContext)


    const handleChange = (event) => {
        event.preventDefault()
        setTitle(event.target.value)
        
    }

    const handleSubmit = (event) =>{
        event.preventDefault()

        onSubmit()
        editBookById(book.id, title)
    }

    return (
        <form onSubmit={handleSubmit} className="book-edit" >
            <div>
                <label>Title</label>
                <input 
                className="input" 
                value = {title}
                placeholder="placeholder" 
                onChange={handleChange}
                />
                <button className="button is-primary">Save</button>
            </div>
        </form>
    )
}

export default BookEdit