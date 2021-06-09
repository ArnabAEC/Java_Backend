import { Component } from "react";

class Show extends Component{
    render(props){
        return (
            <h1>Hello from Class Component, designed by {this.props.author}</h1>
        );
    }
}

export default Show;