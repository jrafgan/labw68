import React, {Component, Fragment} from 'react';
import TasksList from './components/TasksList.js';
import './ToDoList.css';
import InputForm from "./components/InputForm";

import Spinner from "../../Spinner/Spinner";
import {fetchList} from "../../Store/action";
import {connect} from "react-redux";

class ToDoList extends Component {

    componentDidMount() {
        this.props.fetchList();
    }

    render() {
        let form = (<Fragment>
            <InputForm />

            <div className="list-block">
                {this.props.toDoList !== undefined ? this.props.toDoList.map((text, index) => {
                    return <TasksList key={index} id={index} taskText={text} check={(event) => {
                        if (event.currentTarget.parentNode.parentNode.className === 'task-text') {
                            event.currentTarget.parentNode.parentNode.className = 'task-text green';
                        } else {
                            event.currentTarget.parentNode.parentNode.className = 'task-text';
                        }
                    }}/>
                }) : null}

            </div>
        </Fragment>);

        if (this.props.loading) {
            form = <Spinner/>
        }
        return (
            <div className="App grid-container">
                {form}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        toDoList: state.toDoList,
        loading: state.loading
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchList: () => dispatch(fetchList()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);