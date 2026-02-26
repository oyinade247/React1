import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement , reset} from "../slices/CounterSlice";


const Counter = ()=>{
    const counter = useSelector((state) => state.Counter.count);
    const dispatch = useDispatch();
    return(
        <div>
            <span>{counter}</span>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(reset())}>reset</button>

        </div>
    )
}

export default Counter;