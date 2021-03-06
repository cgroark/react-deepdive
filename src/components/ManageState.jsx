import React from 'react';

class ManageState extends React.Component{
     constructor(props){
         super(props);

         this.state = {
             name: 'colin',
             count: 0
         }
     }
     increment = () => {
        this.setState(({count}) =>({
          count: count + 1
        }))
      }
      decrement = () => {
        this.setState(({count}) =>({
          count: count -1
        }))
      }
    render(){
        const count = this.state.count;
        return(
            <div>
                <h4>Look we have state with a name of {this.state.name} and a count of {count} </h4>
                <button onClick={this.increment}>increase</button> {count}  <button onClick={this.decrement}>decrease</button>
            </div>
        )
    }
}

export default ManageState;