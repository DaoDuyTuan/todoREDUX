import { combineReducers } from 'redux'
import {
    ADD_TODO,
    SET_VISIBLE_FILTER,
    setVisibilityFilter,
    TOGGLE_TODO,
    VisibilityFilters
} from "./action";

const { SHOW_ALL } = VisibilityFilters;

function visibilityFilter(state = SHOW_ALL, action) {
    switch(action.type){
        case SET_VISIBLE_FILTER:
            return action.filter;
        default:
            return state;
    }
}
function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ];
        case TOGGLE_TODO:
            return state.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                return todo
            });
        default:
            return state;
    }
}

// function todoApp(state = {}, action) {
//     return {
//         visibilityFilter: setVisibilityFilter(state.visibilityFilter, action),
//         todos: todos(state.todos, action)
//     }
// }

const todoApp = combineReducers({
    visibilityFilter,
    todos
});

export default todoApp;