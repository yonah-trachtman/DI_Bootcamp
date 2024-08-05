

export const ADD = "add";
export const COMPLETE = "complete";
export const REMOVE = "remove";

export const addToDo = (text, key)=> {

     return {
        type: ADD,
        id: key,
        text: text,
     }
}


export const completeToDO = (key) => {
    return {
        type: COMPLETE,
        id: key
    }
}

export const removeToDo = (key) => {
    return {
        type: REMOVE,
        id: key,
    }
}