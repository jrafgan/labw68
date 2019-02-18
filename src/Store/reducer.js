import {
    INCREMENT,
    DECREMENT,
    ADD,
    SUBTRACT,
    FETCH_COUNTER_ERROR,
    FETCH_COUNTER_POST,
    FETCH_COUNTER_REQUEST,
    FETCH_COUNTER_SUCCESS,
    TO_DO_LIST_SUCCESS,
    KEEP_NEW_TEXT, POST_TODOLIST, DELETE_TODOLIST
} from "./action";

const initialState = {
    loading: false,
    toDoList: [],
};

let newText = '';

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            };
        case DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            };
        case ADD:
            return {
                ...state,
                counter: state.counter + action.amount
            };
        case SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.amount
            };
        case FETCH_COUNTER_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_COUNTER_SUCCESS:
            return {
                ...state,
                counter: action.counter,
                loading: false,
            };
        case FETCH_COUNTER_POST:
            return {
                ...state,
                loading: false,
            };
        case FETCH_COUNTER_ERROR:
            return {
                ...state,
                loading: false,
            };

        case KEEP_NEW_TEXT:
            newText = action.newText;
            return state;

        case POST_TODOLIST:
            let copy = state.toDoList;
            if (copy.length !== 0) {
                copy = [...copy, newText];
            } else {
                copy = [newText];
            }
            return {
                ...state,
                toDoList: copy,
            };

        case TO_DO_LIST_SUCCESS:
            return {
                ...state,
                toDoList: action.toDoList,
                loading: false,
            };

        case DELETE_TODOLIST:
            const id = action.index;
            copy = state.toDoList;
            copy.splice(id, 1);
            return {
                ...state,
                toDoList: copy,
                loading: true,
            };

        default:
            return state;
    }

};

export default reducer;