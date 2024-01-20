import { createContext, useState } from "react";
import axios from "axios";


const BooksContext = createContext()

function Provider({children}){

    const [books, setBooks] = useState([])

    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books')
        setBooks(response.data)
    }


    const createBook = async (title) => {
        const response = await axios.post("http://localhost:3001/books", {
            title
        })

        const updateBooks=[...books, response.data]
        setBooks(updateBooks)
    }


    const editBookById = async (id, newTitle) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            
        title: newTitle

        })
        console.log(response)
        const updatedBooks = books.map((book) => {
            if (book.id === id){
                return {...book, title: newTitle}
            }
            return book
        })
        setBooks(updatedBooks)
    }


    const deleteBookById = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`)


        const updatedBooks = books.filter((books) => books.id !== id)

        setBooks(updatedBooks)
    }

    const valueToShare = {
        createBook,
        deleteBookById,
        editBookById,
        fetchBooks,
        books
    }

return (
    <BooksContext.Provider value = {valueToShare}>
        {children}
    </BooksContext.Provider>
    )
}
export { Provider }
export default BooksContext