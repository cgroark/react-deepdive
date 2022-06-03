import React from 'react';

class PropsTest extends React.Component{
    render(){
        console.log('this is a props test', this.props);
        return(
            <div>
                <div>{this.props.header}</div>
                <p>This is a Props Test and {this.props.string} and your name could only be {this.props.name}</p>
                <button onClick={this.props.functionPass}>Alert me</button>
            </div>
        )
    }
}

export default PropsTest;