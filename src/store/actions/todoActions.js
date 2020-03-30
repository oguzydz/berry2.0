import * as actions from './actionTypes';

export const start_todo = (todoId) => async dispatch => {


    const initTodo = {
        id: todoId,
        title: "Awesome todo list's title",
        text: "Awesome todo list's text",
        createdAt: new Date().getTime(),
        editedAt: new Date().getTime(),
        words: 0,
        characters: 0,
        readTime: 0,
        lastEditingDevice: "",
        isPinned: false,
        isAlarmed: false,
        isTrashed: false,
    }

    dispatch({
        type: actions.START_TODO,
        payload: initTodo
    })
}


export const update_todo = (values) => async dispatch => {
    dispatch({
        type: actions.UPDATE_TODO,
        payload: values
    })
}

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

export const init_todos = () => async dispatch => {
    dispatch({
        type: actions.INIT_TODOS
    })
}

