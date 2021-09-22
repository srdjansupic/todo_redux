import * as actionTypes from "./actionTypes";

export const START = () => {
    return {
        type: actionTypes.START
    }
}

export const ADD_NEW_MSG = (task) => {
    return {
        type: actionTypes.ADD_NEW_MSG,
        payload:task
    }
}

export const DELETE_TASK = (id) => {
    return {
        type: actionTypes.DELETE_TASK,
        payload:id
    }
}

export const ADD_TRUE = (id) => {
    return {
        type: actionTypes.ADD_TRUE,
        payload:id
    }
}
