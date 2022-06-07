import React from 'react'


function Books({books}){
    return(
       <React.Fragment>
            <h3>Bestsellers</h3>
            <ul className='grid'>
                {books.map((book)=>{
                    const {author, title, book_image, rank, book_uri} = book;
                    return <li key={book_uri}>
                        <div>
                            <h4>#{rank}</h4>
                            <img src={book_image} alt={`this is cover of a book called ${title}`}/>
                            <h5>{title}</h5>
                            <p>by {author}</p>
                        </div>
                    </li>
                })}
            </ul>
       </React.Fragment>
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
            .catch((error) => console.warn(`we have an error and its ${error}`))
    }

    render(){
        const {books} = this.state;
        return(
            <React.Fragment>
                <h2>Books</h2>
                <Books books={books}/>
            </React.Fragment>
        )
    }
}

export default Fetch;