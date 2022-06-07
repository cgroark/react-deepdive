import React from 'react';

class Login extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            username: '',
            password: '',
            submitted: false
        }
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        this.setState({
            submitted: true
        })
    }

    render(){
        const {username, password, submitted} = this.state
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="username">username</label><br></br>
                <input type="text" name="username" value={username} onChange={this.handleChange} id="username"/>
                <br></br>
                <label htmlFor="password">password</label><br></br>
                <input type="text" name="password" value={password} onChange={this.handleChange} id="password" /><br></br>
                <input value="submit" type="submit" disabled={submitted || username === '' || password.length < 6 ? true : false}/>

            </form>
        )
    }
}

export default Login;