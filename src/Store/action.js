import axios from "../axios_url";

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';

export const FETCH_COUNTER_REQUEST = 'FETCH_COUNTER_REQUEST';
export const FETCH_COUNTER_SUCCESS = 'FETCH_COUNTER_SUCCESS';
export const FETCH_COUNTER_ERROR = 'FETCH_COUNTER_ERROR';
export const FETCH_COUNTER_POST = 'FETCH_COUNTER_POST';

export const TO_DO_LIST_SUCCESS = 'TO_DO_LIST_SUCCESS';
export const POST_TODOLIST = 'POST_TODOLIST';
export const DELETE_TODOLIST = 'DELETE_TODOLIST';
export const KEEP_NEW_TEXT = 'KEEP_NEW_TEXT';


export const incrementCounter = () => {
    return {type: INCREMENT};
};

export const decrementCounter = () => {
    return {type: DECREMENT};
};
export const addCounter = amount => {
    return {type: ADD, amount};
};

export const subtractCounter = amount => {
    return {type: SUBTRACT, amount};
};

export const fetchCounterRequest = () => {
    return {type: FETCH_COUNTER_REQUEST};
};

export const fetchCounterSuccess = counter => {
    return {type: FETCH_COUNTER_SUCCESS, counter};
};

export const fetchCounterPost = () => {
    return {type: FETCH_COUNTER_POST};
};

export const fetchCounterError = error => {
    return {type: FETCH_COUNTER_ERROR, error};
};

export const toDoListSuccess = toDoList => {
    return {type: TO_DO_LIST_SUCCESS, toDoList};
};

export const addNewTask = newText => {
    return {type: POST_TODOLIST, newText};
};

export const deleteTask = (index) => {
    return {type: DELETE_TODOLIST, index};
};

export const keepNewText = newText => {
    return {type: KEEP_NEW_TEXT, newText};
};

export const fetchCounter = () => {
    return (dispatch, getState) => {
        dispatch(fetchCounterRequest());
        axios.get('counter/-LYqlQsadn8K5bJkRhjL.json').then(response => {
            dispatch(fetchCounterSuccess(response.data.number));
        }, error => {
            dispatch(fetchCounterError())
        })
    }
};

export const fetchPost = () => {

    return (dispatch, getState) => {
        const state = getState();
        dispatch(fetchCounterRequest());
        axios.put('counter/-LYqlQsadn8K5bJkRhjL.json', {number: state.counter}).then(response => {
            dispatch(fetchCounterPost());
        })
    }
};

export const fetchList = () => {

    return (dispatch) => {

        dispatch(fetchCounterRequest());
        axios.get('toDoList/task.json').then(response => {
            if (response.data === null) {
                dispatch(fetchCounterPost());
                return;
            }
            dispatch(toDoListSuccess(Object.values(response.data)));

        })
    }
};

export const postNewTask = () => {

    return (dispatch, getState) => {
        dispatch(fetchCounterRequest());
        const state = getState();
        axios.put('toDoList.json', {task: state.toDoList}).then(response => {
            dispatch(fetchCounterPost());
        })
    }
};

export const deleteToDoList = () => {
    return (dispatch, getState) => {
        dispatch(postNewTask());
    }
};
