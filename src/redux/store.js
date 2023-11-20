import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

export const store=configureStore({
    //redicer can only update value of state in store
    //reducer key is predefined(it is an  object which can hold more tha 1 reducer)
    reducer:{
        //reducer is comming from counterslice since we are export reducer as export default
        counter:counterSlice
    }
})

//store cheyyan vendeet ---reduxtoolkit install akyath configstore()

//create Action //create Reducer seperate aayt create akknindenki