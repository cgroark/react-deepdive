import React, {useEffect, useState} from 'react'

function generateId(){
    return '-' + Math.random().toString(36).substr(2,9)
}

export default function Todos(){
    const [item, setItem] = useState('')
    const [todos, setTodos] = useState([])

    const handleAdd = (e) => {
        e.preventDefault()
         //update the array based on previous state using spread operator. downside is there is no unique identifier 
        // setTodolist(todoList => [...todoList, todoitem])
        setTodos((todos) => todos.concat({
            text: item,
            id: generateId()
        }))
        setItem('')
    }

    const handleRemove = (id) =>{
        let updatedList = todos.filter((each) => {
            return each.id !== id
        })
        setTodos(updatedList)
    }

    return(
        <React.Fragment>
            <form>
                <label htmlFor="item">Add an item</label><br></br>
                <input type="text" value={item} name="item" id="item" onChange={(e) => setItem(e.target.value)} /><br></br>
                <button onClick={handleAdd}>Add it</button>
            </form>
            <ul>
                {todos.map((each) => {
                    const {text, id} = each;
                    return(
                        <li key={id}>{text}&nbsp;<button onClick={() => handleRemove(id)}>x</button></li>
                    )
                })}
            </ul>
        </React.Fragment>
    )
}

