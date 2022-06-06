import React from 'react'

function RenderBooks({books}){
    return(
        <ul className="grid">
            {books.map( (book) => {
                const {author, title, book_uri, rank, book_image} = book
                return(
                    <li className="book" key={book_uri}>
                        <img src={book_image} alt={`front cover of the book, ${title}`}/>
                        <h3>#{rank}</h3>
                        <h3>{title} by {author}</h3>
                        
                    </li>
                )
            })}
                
        </ul>
    ) 
    
}
class Fetch extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            books: []
        }
    }
    componentDidMount(){
        fetch('https://api.nytimes.com/svc/books/v3/lists/hardcover-fiction.json?api-key=BAGqFvDh9IJi1JWLxfJ9SIh2rctbgwiE')
            .then((response) => response.json())    
            .then((data) => {
                this.setState({
                    books: data.results.books
                })
            })
            .catch((error) =>{
                console.warn(`there's an error and it's: ${error}`)
            })
    }
 
    render(){
        const {books} = this.state
        return(
            <div>
                <h2>bestsellers</h2>
                <RenderBooks books={books}/>
            </div>
        )
    }
}

export default Fetch;







