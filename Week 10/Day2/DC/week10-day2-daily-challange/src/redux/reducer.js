import { ADD, EDIT, REMOVE } from "./actions";

const initialState = {
    toDos: [],
};

export const toDoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            const newToDos = [...state.toDos];
            newToDos.push({
                key: action.id,
                text: action.text,
                date: action.date,
                edit: false,
            });
            return { ...state, toDos: newToDos };

        case EDIT:
            const updatedToDos = state.toDos.map(todo =>
                todo.key === action.id ? { ...todo, text: action.text } : todo
            );
            return { ...state, toDos: updatedToDos };

        case REMOVE:
            const filteredToDos = state.toDos.filter(todo => todo.key !== action.id);
            return { ...state, toDos: filteredToDos };

        default:
            return state;
    }
};
