import React, { useEffect, useState } from 'react'
import store from "./store";
import * as actionCreators from "./actionCreators";
import { useDispatch } from 'react-redux'
import { useSelector } from "react-redux";

function App() {

    const dispatch = useDispatch()
    const state = useSelector((state) => state);

    useEffect(() => {
        dispatch(actionCreators.START());
    }, []);


    const addNewMsg = (e) => {
        if (e.key === 'Enter') {
            dispatch(actionCreators.ADD_NEW_MSG({ id: Math.floor(Math.random() * 100000), msg: e.target.value, class: false }));
            e.target.value = "";
        }
    }

    const deleteMsg = (e) => {
        dispatch(actionCreators.DELETE_TASK(e.target.getAttribute("data-id")));
    }
    const trueMsg = (e) => {
        dispatch(actionCreators.ADD_TRUE(e.target.getAttribute("data-id")));
    }


    return (
        <div>
            <div className="header">
                <div className="input">
                    <input type="text" placeholder="Type msg..." onKeyPress={addNewMsg} />
                </div>
            </div>
            <div className="allTask">
                {state.task.map(x => {
                    return (
                        <div className="task" key={x.id}>
                            <div id="msg" className={x.class && x.class ? "active-true" : null}>{x.msg}</div>
                            <div className="listener">
                                <div className="true" data-id={x.id} onClick={trueMsg}></div>
                                <div className="delete" data-id={x.id} onClick={deleteMsg}></div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default App
