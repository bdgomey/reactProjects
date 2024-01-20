import { useState, useContext } from "react"
import BookEdit from "./BookEdit"
import BooksContext from "../context/books"

function BookShow( book ){
    console.log(book.book.title)
    const { deleteBookById } = useContext(BooksContext)

    const [edit, setEdit] = useState(false)

    const handleDeleteClick = () => {
        deleteBookById(book.book.id)
    }

    const handleEditClick = () => {
        setEdit(!edit)
    }

    const handleSubmit = () => {
        setEdit(false)
    }

    let content = <h3>{book.book.title}</h3>
    if (edit) {
        content = <BookEdit 
        onSubmit = {handleSubmit} 
        book = {book.book}/>
    }

    return (
        <div className="book-show">
            <img className="image" src = {`https://picsum.photos/seed/${book.book.id}/300/200`} alt="random" />
        <div>{content}</div>            
        <div className="actions">
            <button className="edit" onClick={handleEditClick}>Edit</button>
            <button className = "delete" onClick = {handleDeleteClick}>Delete</button>
        </div>
        </div>
    )
}

export default BookShow