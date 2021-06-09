import { Component } from "react";

export default class Greet extends Component{
    state = { name : '' , clicked : false}

    updateName = () => {
        this.setState( state =>(
            {clicked : true}
        ))
    }

    render(){
        return (
            <div>
                Enter Name :
                <input onChange = {e => this.setState(
                    {name : e.target.value}
                )}/>
                <button onClick={this.updateName}>Greeting</button>
                <br/>
                {this.state.clicked === true && (<div>Hello {this.state.name}</div>)}
            </div>
        );
    }

}