import React, { useEffect, useState } from 'react';
import render from 'dom-serializer';

function Books(props){
    return(
        <ul className="grid">
            {props.books.map((each) => {
                const {author, title, book_image, book_uri, rank} = each;
                return(
                    <li key={book_uri}>
                    <div>
                        <h1>#{rank}</h1>
                        <img src={book_image} alt={`this is a cover that looks like the cover of: ${title}`}/>
                        <h2>{title}</h2>
                        <h3>{author}</h3>
                    </div>

                </li>
                )
            })}
        </ul>
    )
}

export default function Fetchhooks(){
    const [books, setBooks] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('https://api.nytimes.com/svc/books/v3/lists/hardcover-fiction.json?api-key=BAGqFvDh9IJi1JWLxfJ9SIh2rctbgwiE')
            .then((res) => res.json())
            .then((data) => {
                setBooks(data.results.books)
            })
            .catch((error) => {
                setError(error.message)
                console.warn(`got an error and its ${error.message}`)
            })
    }, [])

   return(
       <React.Fragment>
           <h2>books</h2>
           <Books books={books} />
       </React.Fragment>
   )
}