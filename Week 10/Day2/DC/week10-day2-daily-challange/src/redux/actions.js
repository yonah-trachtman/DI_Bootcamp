

export const ADD = "add";
export const EDIT = "edit";
export const REMOVE = "remove";

export const addToDo = (text, date, key)=> {

     return {
        type: ADD,
        id: key,
        date: date,
        text: text,
     }
}


export const editToDO = (key, text) => {
    return {
        type: EDIT,
        id: key,
        text: text

    }
}

export const removeToDo = (key) => {
    return {
        type: REMOVE,
        id: key,

    }
}