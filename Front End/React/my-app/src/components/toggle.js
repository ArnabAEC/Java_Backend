import { Component } from "react";

export default class Toggle extends Component{
    state = {toggle : true}

    handleClick = () =>{
        this.setState(state =>(
            {toggle : !state.toggle}
        ));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.toggle? 'ON' : 'OFF'}
            </button>
        );
    }
}