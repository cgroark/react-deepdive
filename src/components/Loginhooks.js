import React, { useState, useEffect } from "react"
import Loginfunction from '../utils/Loginfunction'


export default function LoginHooks(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(null)
        setLoading(true)
        try{
            const sendData = await Loginfunction({username, password})
            alert(`you signed in ${username}`)
            setLoading(false)
            setUsername('')
            setPassword('')
        }
        catch(Error){
            setError(Error.message)
            console.warn(Error)
        }

    }
    const disabledButton = !username || password.length < 6 || !loading

    return(
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label><br></br>
                <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)}></input><br></br>
                <label htmlFor="password">password</label><br></br>
                <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}></input><br></br>
                <button disabled={disabledButton} type="submit" value="submit" >Submit</button>
            </form>
        </React.Fragment>
    )
}