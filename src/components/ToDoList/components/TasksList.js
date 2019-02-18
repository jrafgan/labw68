import React from 'react';
import CheckBox from "./CheckBox";
import {deleteTask, deleteToDoList} from "../../../Store/action";
import image from '../assets/ic-remove.png';
import {connect} from "react-redux";


const TasksList = props => {
    return (
        <div className="task">
            <div className='task-text'>{props.taskText}
            <CheckBox check={(event)=>{props.check(event)}}/>
                <img className="btn-dlt" alt='deleteBtn' src={image} id={props.id} onClick={e=>props.deleteToDoList(e)}/>
            </div>
        </div>
    )
};

const mapDispatchToProps = dispatch => {
    return {
        deleteToDoList: (e) => {
            dispatch(deleteTask(e.currentTarget.id));
            dispatch(deleteToDoList());
        }
    }
};

export default connect(null, mapDispatchToProps)(TasksList);