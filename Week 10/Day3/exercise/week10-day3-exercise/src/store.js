import { configureStore, combineReducers } from "@reduxjs/toolkit";

import todosReducer from "./features/todosSlice";



 export const appReducer = combineReducers({
  todosReducer
})

export const logger = (store) => (next) => (action) => {
  console.log("prev state=>", store.getState())
  console.log("action=>", action)
  const retAction = next(action)
  console.log("action=>", retAction)
  console.log("next state=>", store.getState())
}

const store = configureStore({
  reducer: appReducer,
  middleware: () => [logger]
});




export default store;

