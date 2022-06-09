import React, { useState, useEffect } from "react"
import Loginfunction from '../utils/Loginfunction'

export default function Loginhooks(){

    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [loading, setLoading] = useState(false)

    const disabled = !username || password.length < 6 || loading
    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        Loginfunction({username, password})
        setLoading(false)
    }
  
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="username"  >username</label><br></br>
            <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)}></input><br></br>
            <label htmlFor="password" >password</label><br></br>
            <input type="text" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}></input><br></br>
            <input type="submit" value="submit" disabled={disabled}></input>
        </form>
    )
}