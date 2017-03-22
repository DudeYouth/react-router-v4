import React,{Component} from 'react';
import {render} from 'react-dom';
import {Router,Route,IndexRoute} from 'react-router-dom';
import {createHashHistory} from 'history';
import Index from './component/index.js';
import Test from './component/test.js';
import Children from './component/children.js';

render(
    <Router history={createHashHistory()}>
        <div>
        <Route path="/" component={Index} ></Route>
        <Route path="/test" component={Test}></Route>
        <Route path="/test/children" component={Children}></Route>
        </div>
    </Router>,
    document.getElementById('container')
)