import { useSelector, useDispatch } from "react-redux";
import { addtodo, removetodo, completetodo } from "./todosSlice";
import { useRef } from "react";


const Todos = (props) => {
  const todos = useSelector((state) => state.todosReducer.todos);

  const dispatch = useDispatch();

  const textRef = useRef();

  return (
    <>
      <h2>Todos:</h2>
      <div>
        <input placeholder='Name' ref={textRef} />
        <button
          onClick={() =>
            dispatch(
              addtodo({
                text: textRef.current?.value,

              })
            )
          }
        >
          Add User
        </button>
      </div>
      <div>
        {todos.map((item) => {
          return (
            <div key={item.id}>
              <p className={item.complete ? 'complete' : ''}>{item.text}</p>
              <button onClick={() => 
                dispatch(
                  removetodo({
                    id: item.id
                  })
                )
              }>Remove</button>
              <button onClick={() => 
                dispatch(
                  completetodo({
                    id: item.id
                  })
                )
              }>complete</button>
              
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Todos;
