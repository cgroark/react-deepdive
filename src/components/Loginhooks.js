import React, { useState, useEffect } from "react"
import Loginfunction from '../utils/Loginfunction'


export default function Loginhooks(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)


    const handleSubmit = async (e) =>{
        e.preventDefault();
        setLoading(true)
        try {
            const login = await  Loginfunction({username, password})
            console.log('done')
            setLoading(false)
            // setUsername('')
            // setPassword('')
        } 
        catch(error){
            setError(error.message)
            setLoading(false)
            setUsername('')
            setPassword('')
        }
    }



    const disabledButton = !username || password.length < 6 || loading

    return(
        <React.Fragment>
            <h3>Login</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">username</label><br></br>
                <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} /><br></br>
                <label htmlFor="password">password</label><br></br>
                <input type="text" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br></br>
                <input type="submit" value="submit" disabled={disabledButton}/>
            </form>
        </React.Fragment>
        
    )
}