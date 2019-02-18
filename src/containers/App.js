import React, {Component, Fragment} from 'react';
import './App.css';
import {Switch, Route, NavLink} from "react-router-dom";
import Counter from "../components/Counter/Counter";
import ToDoList from "../components/ToDoList/ToDoList";

class App extends Component {
    render() {
        return (
            <Fragment>
                <button className='counter'><NavLink to='/'>Counter</NavLink></button>
                <button className='to_do_list'><NavLink to='/to_do_list'>To Do List</NavLink></button>

                <Switch>
                    <Route path="/" exact component={Counter}/>
                    <Route path="/to_do_list" component={ToDoList}/>
                </Switch>
            </Fragment>
        );
    }
}

export default App;
