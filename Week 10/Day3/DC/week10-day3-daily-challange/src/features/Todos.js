import { useSelector, useDispatch } from "react-redux";
import { addtodo, removetodo, edittodo } from "./todosSlice";
import { useRef } from "react";


const Todos = (props) => {
  const todos = useSelector((state) => state.todosReducer.todos);

  const dispatch = useDispatch();

  const textRef = useRef();
  const dateRef = useRef();
  const editRef = useRef();

  return (
    <>
    <div className="container">
      <h2>Tasks:</h2>
      <div className="input_zone">
            <input type="date" ref={dateRef} />
            <textarea placeholder='Name' ref={textRef} />
        <button
          onClick={() =>
            dispatch(
              addtodo({
                text: textRef.current?.value,
                date: dateRef.current?.value

              })
            )
          }
        >
          Add Task
        </button>
        </div>
        <ul className="to_dos_container">
            {todos.map((item) => (
                <li key={item.key} className="one_to_do">
                    <p>{item.date}</p>
                    <textarea 
                        value={item.text}
                        disabled={!item.edit}
                    />
                    <div className="btns">
                    <button onClick={() => 
                dispatch(
                  removetodo({
                    id: item.id
                  })
                )
              }>Remove</button>
                        <button  onClick={() => dispatch(edittodo({
                          id: item.id,
                           text: item.text
                           }))}>
                            {item.edit ? 'Save' : 'Edit'}
                        </button>
                    </div>
                </li>
            ))}
        </ul>
        </div>
     </>
  );
};
export default Todos;
