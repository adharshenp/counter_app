import React, { useState } from "react";
import { decrement, increment, reset } from "../redux/counterSlice";
import { useDispatch, useSelector } from "react-redux";

function Counter(){

   const [range,setRange]=useState('')

   console.log(range);

    //hook to dispatch a function in action
  const dispatch=  useDispatch()
  //component can access the state by using useselector hook
  const count =useSelector((state)=>state.counter.value)
    return(
        <>
        <div className="d-flex align-items-center justify-content-center w-100 mt-5 flex-column">
            <h1 style={{fontSize:'90px'}}>{count}</h1>
            <div className="mt-5">
                <button onClick={()=>dispatch(decrement(Number(range)))} className="btn btn-warning p-3">Decrement</button>
                <button onClick={()=>dispatch(reset(Number(range)))} className="btn btn-danger p-3 ms-3">Reset</button>
                <button onClick={()=>dispatch(increment(Number(range)))} className="btn btn-success p-3 ms-3">Increment</button>
            </div>

        </div>

        <div className="w-100 mt-5">
            <input onChange={(e)=>setRange(e.target.value)} type="text" className="form-control  " placeholder="enter the range" style={{borderColor:'blue'}} />
        </div>



        </>
    )
}  
   export default Counter
