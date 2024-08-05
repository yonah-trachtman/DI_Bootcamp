import { configureStore } from "@reduxjs/toolkit"
import { toDoReducer } from "./reducer"


const store = configureStore(
    {
        reducer: {
            toDoReducer
        }
    }
)


export default store
