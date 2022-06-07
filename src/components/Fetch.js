import React from 'react';

function Books({books}){
    return(
        <ul className="grid"> 
            {books.map((each) => {
                const {author, title, book_image, book_uri, rank} = each;
                return <li key={book_uri}> 
                    <div>
                        <p>#{rank}</p>
                        <img  src={book_image} alt={`cover a book that is called ${title}`}/>
                        <h3>{title}</h3>
                        <h4>{author}</h4>
                    </div>
                </li>
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
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    books: data.results.books
                })
            })
            .catch((error) =>{
                console.warn(`there's an error and its: ${error}`)
            })
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