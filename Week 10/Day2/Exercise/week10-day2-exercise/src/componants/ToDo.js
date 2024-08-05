import { connect } from "react-redux";
import { useRef } from "react";
import { addToDo, completeToDO, removeToDo } from "../redux/actions";

const ToDO = (props) => {
    const inputRef = useRef(null);
    const keyRef = useRef(1);


    const handleAddClick = () => {
        const inputValue = inputRef.current.value.trim();
        if (inputValue) {
            props.add(inputValue, keyRef.current);
            keyRef.current += 1;
            inputRef.current.value = ""; // Clear the input field
        }
    };

    return (
        <>
        <h1>REDUX ToDo</h1>
        <input ref={inputRef} />
        <button onClick={handleAddClick}>Add</button>
        <ul>
            {props.todo.map((todo) => (
                <li key={todo.key}>
                    <p className={todo.completed ? 'completed' : ''}>{todo.text}</p>
                    <button onClick={() => props.remove(todo.key)}>Remove</button>
                    <button onClick={() => props.complete(todo.key)}>Complete</button>
                </li>
            ))}
        </ul>
        </>
    );
};

const mapStatetoProps = (state) => {
    return {
        todo: state.toDoReducer.toDos
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        add: (text, id) => dispatch(addToDo(text, id)),
        remove: (id) => dispatch(removeToDo(id)),
        complete: (id) => dispatch(completeToDO(id))
    };
};

export default connect(mapStatetoProps, mapDispatchToProps)(ToDO);
