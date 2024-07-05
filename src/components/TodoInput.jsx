import { useState } from "react";

const TodoInput = ({ addTask }) => {
  const [task, setTask] = useState('');
  
  const updateTodoItem = (event) => {
    setTask(event.target.value);
  }
  const addTodoItem = (event) => {
    event.preventDefault();
    if(task)
      addTask(task);
    setTask('');
  }

  return ( 
    <div>
      <form onSubmit={addTodoItem}>
        <input className="p-1 border-2 rounded-lg my-8" type="text" placeholder="eg: Buy eggs" onChange={updateTodoItem} name="taskInput" value={task}/>
        <button className="bg-violet-500 rounded-md text-white py-1 px-2 m-2" type="submit">Add task</button>
      </form>
    </div>
   );
}
 
export default TodoInput;