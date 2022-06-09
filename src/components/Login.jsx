import React from 'react';

class Login extends React.Component{
    state = {username: '', password: '', loading: false}

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    handleSubmit = (e) =>{
        e.preventDefault()
        this.setState({
            loading:true
        })
        setTimeout(() => {
            console.log('submitted')
            this.setState({
                loading: false
            })
        }, 2000)
        

    }
    render(){
        const {username, password, loading} = this.state;
        const disabled = !username || password.length < 6 || loading
        
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="username">username</label><br></br>
                <input id="username" type="textbox" name="username" value={username} onChange={this.handleChange}/><br></br>
                <label htmlFor="password">password</label><br></br>
                <input id="password" type="textbox" name="password" value={password} onChange={this.handleChange}/><br></br>
                <input type="submit" value="submit" disabled={disabled}/>
            </form>
        )
    }
}

export default Login;