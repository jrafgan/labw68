import React from 'react';
import {addNewTask, keepNewText, postNewTask} from "../../../Store/action";
import {connect} from "react-redux";

const InputForm = (props) => {
    return (
        <div className="input_form">
            <form onSubmit={props.addNewTask}>
                <input type="text" onChange={e => props.keepNewText(e)}/>
                <button className="btn-addTask" type="submit" onClick={props.addNewTask}>Add Task</button>
            </form>
        </div>
    )
};

const mapDispatchToProps = dispatch => {
    return {
        keepNewText: (e) => dispatch(keepNewText(e.currentTarget.value),
        ),
        addNewTask: () => {
            dispatch(addNewTask());
            dispatch(postNewTask());
        }
    }
};

export default connect(null, mapDispatchToProps)(InputForm);