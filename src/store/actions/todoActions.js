import * as actions from './actionTypes';

export const add_todo = (todo) => async dispatch => {
    dispatch({
        type: actions.ADD_TODO,
        payload: todo
    })
}

export const edit_todo = (todo) => async dispatch => {
    dispatch({
        type: actions.EDIT_TODO,
        payload: todo
    })
}

export const trash_todo = (todo) => async dispatch => {
    dispatch({
        type: actions.TRASH_TODO,
        payload: todo
    })
}

export const recycle_todo = (todo) => async dispatch => {
    dispatch({
        type: actions.RECYCLE_TODO,
        payload: todo
    })
}

export const remove_all_todos = () => async dispatch => {
    dispatch({
        type: actions.REMOVE_ALL_TODOS
    })
}

