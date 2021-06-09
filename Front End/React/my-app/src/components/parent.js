import Child from './child';
import { Component } from 'react';

export default class Parent extends Component{
    render(){
        return(
            <div>
                <h1> Hello from Parent</h1>
                <Child greeting="Hello from parent to child"/>
            </div>
        );
    }
}