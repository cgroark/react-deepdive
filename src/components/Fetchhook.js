import React, {useState, useEffect} from 'react'

export default function Fetchhook(){
    const [books, setBooks] = useState([])
    const [error, setError] = useState(null)

    // const fetchBooks = async () =>{
    //     try{
    //         const data = await fetch('https://api.nytimes.com/svc/books/v3/lists/hardcover-fiction.json?api-key=BAGqFvDh9IJi1JWLxfJ9SIh2rctbgwiE')
    //         const bookData = await data.json()
    //         setBooks(bookData)
    //     }
    //     catch{
    //         console.warn(error)
    //         setError(error.message)
    //     }
    // }

    // const fetchBooks = () => {
    //     fetch('https://api.nytimes.com/svc/books/v3/lists/hardcover-fiction.json?api-key=BAGqFvDh9IJi1JWLxfJ9SIh2rctbgwiE')
    //         .then((res) => res.json())
    //         .then((data) =>{
    //             setBooks(data)
    //         })
    //         .catch((error) => {
    //             setError(error.message)
    //             console.warn(error)
    //         })
    // }

    const fetchBooks = () => {
        fetch('https://api.nytimes.com/svc/books/v3/lists/hardcover-fiction.json?api-key=BAGqFvDh9IJi1JWLxfJ9SIh2rctbgwiE')
            .then((res) => res.json())
            .then((data) => {
                setBooks(data)
            })
            .catch((error) => {
                console.warn(error)
                setError(error.message)
            })
    }

    useEffect(()=>{
        fetchBooks()
    }, [])


    return(
        <React.Fragment>
            <div>Bestselling books</div>
        </React.Fragment>
    )
}