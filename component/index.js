import React,{Component} from 'react';
import {Link} from 'react-router-dom';

export default class Index extends Component{
    render(){
        return <div>
            <Link to="test">点击</Link>
            <h1>Holle Word!</h1>
            {this.props.children}
        </div>
    }
}