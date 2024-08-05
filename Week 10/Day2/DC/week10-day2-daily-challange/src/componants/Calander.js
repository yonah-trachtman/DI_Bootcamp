import { connect } from "react-redux";
import { useRef, useState } from "react";
import { addToDo, editToDO, removeToDo } from "../redux/actions";

const Calander = (props) => {
    const inputRef = useRef(null);
    const dateRef = useRef(null);
    const keyRef = useRef(1);
    const [editingKey, setEditingKey] = useState(null);
    const [editText, setEditText] = useState("");

    const handleAddClick = () => {
        const inputValue = inputRef.current.value.trim();
        const dateValue = dateRef.current.value.trim();
        if (inputValue && dateValue) {
            props.add(inputValue, dateValue, keyRef.current);
            keyRef.current += 1;
            inputRef.current.value = "";
            dateRef.current.value = "";
        }
    };

    const handleEditClick = (key, currentText) => {
        if (editingKey === key) {
            props.edit(key, editText);
            setEditingKey(null);
        } else {
            setEditingKey(key);
            setEditText(currentText);
        }
    };

    const handleChange = (event) => {
        setEditText(event.target.value);
    };

    return (
        <>
        <h1>REDUX Calander</h1>
        <div className="container">
            <div className="input_zone">
                <input type="date" ref={dateRef} />
                <textarea ref={inputRef} />
                <button onClick={handleAddClick}>Add</button>
            </div>
            <ul className="to_dos_container">
                {props.todo.map((todo) => (
                    <li key={todo.key} className="one_to_do">
                        <p>{todo.date}</p>
                        <textarea 
                            value={editingKey === todo.key ? editText : todo.text}
                            onChange={handleChange}
                            disabled={editingKey !== todo.key}
                        />
                        <div className="btns">
                            <button onClick={() => props.remove(todo.key)}>Remove</button>
                            <button onClick={() => handleEditClick(todo.key, todo.text)}>
                                {editingKey === todo.key ? 'Save' : 'Edit'}
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
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
        add: (text, date, id) => dispatch(addToDo(text, date, id)),
        remove: (id) => dispatch(removeToDo(id)),
        edit: (id, text) => dispatch(editToDO(id, text))
    };
};

export default connect(mapStatetoProps, mapDispatchToProps)(Calander);
