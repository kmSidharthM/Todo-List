import { useState } from "react";
import TodoContainer from "./TodoContainer";
import TodoInput from "./TodoInput";

const Body = () => {
  const [allTasks, setAllTasks] = useState(JSON.parse(localStorage.getItem("todoList")) || []);
  const [key, setKey] = useState(JSON.parse(localStorage.getItem("key")) || 0);

  const addTask = (task) => {
    const modifiedTasks = [...allTasks, {id: key ,task, isActive: true}];
    setAllTasks(modifiedTasks);
    localStorage.setItem("todoList", JSON.stringify(modifiedTasks));
    // console.log(localStorage.getItem("todoList"));
    const updatedKey = key + 1;
    setKey(updatedKey);
    localStorage.setItem("key", JSON.stringify(updatedKey));
    // console.log(allTasks);
  }
  const isTaskActive = (id) => {
    const modifiedTasks = allTasks.map((task) => {
      if(task.id === id)
        return {...task, isActive: !task.isActive};
      return task;
    })
    setAllTasks(modifiedTasks);
    localStorage.setItem("todoList", JSON.stringify(modifiedTasks));
  }

  const deleteTask = (id) => {
    const modifiedTasks = allTasks.filter(task => task.id != id)
    setAllTasks(modifiedTasks);
    localStorage.setItem("todoList", JSON.stringify(modifiedTasks));
    if(modifiedTasks.length === 0) {
      setKey(0);
      localStorage.setItem("key", 0);
    }
        
  }

  return ( 
    <div className="flex flex-col items-center">
      <p>{Date()}</p>
      <TodoInput addTask={addTask}/>
      <TodoContainer allTasks={allTasks} isTaskActive={isTaskActive} deleteTask={deleteTask} />
    </div>
   );
}
 
export default Body;