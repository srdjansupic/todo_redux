import * as actionTypes from "./actionTypes";
import initState from "./initState";

function reducer(state = initState, action) {
    switch (action.type) {
        case actionTypes.START:
            return state;
        case actionTypes.ADD_NEW_MSG:
            return { ...state, task: [...state.task, action.payload] }
        case actionTypes.DELETE_TASK:
            let filter = state.task.filter(x => x.id != action.payload);
            return { ...state, task: filter };
        case actionTypes.ADD_TRUE:
            state.task.find(x => x.id == action.payload ? x.class = !x.class : null);
            return { ...state };
        default: return state;
    }
}

export default reducer;