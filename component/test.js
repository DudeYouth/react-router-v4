import React,{Component} from 'react';
import {Link} from 'react-router-dom';

export default class Test extends Component{
    render(){
        return <div>
            <Link to="test/children">点击</Link>
            <h1>Hi Word!</h1>
        </div>
    }
}