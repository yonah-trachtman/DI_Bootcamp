import { ADD, COMPLETE, REMOVE } from "./actions"

const initialState = {
    toDos: [],
}

export const toDoReducer = (state = initialState, action) => {

    

    if (action.type === ADD) {

        const newToDos = [...state.toDos]
        newToDos.push({
            key: action.id,
            text: action.text,
            completed: false
        })
        return {...state, toDos: newToDos}
        
    } else if (action.type === COMPLETE) {

        const updatedToDos = state.toDos.map(todo =>
            todo.key === action.id ? { ...todo, completed: !todo.completed } : todo
        );
        return { ...state, toDos: updatedToDos }
        
    } else if (action.type === REMOVE) {

    const updatedToDos = state.toDos.filter((todo) => todo.key !== action.id)
    return { ...state, toDos: updatedToDos }
    } else {
        return state
    }

}