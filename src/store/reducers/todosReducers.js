import * as actions from '../actions/actionTypes'

const initalState = {
    todos: []
}

const todosReducers = (state = initalState, action) => {
    switch (action.type) {
        case actions.ADD_TODO:
            return {
                todos: [
                    ...state.todos,
                    action.payload
                ]
            }
    }
    return state;
}

export default todosReducers;