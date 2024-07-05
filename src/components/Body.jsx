import { useState } from "react";
import TodoContainer from "./TodoContainer";
import TodoInput from "./TodoInput";

const Body = () => {
  const [allTasks, setAllTasks] = useState([]);
  const [key, setKey] = useState(0);

  const addTask = (task) => {
    setAllTasks([...allTasks, {id: key ,task, isActive: true}]);
    setKey(key + 1);
    // console.log(allTasks);
  }
  const isTaskActive = (id) => {
    const modifiedTasks = allTasks.map((task) => {
      if(task.id === id)
        return {...task, isActive: !task.isActive};
      return task;
    })
    setAllTasks(modifiedTasks);
  }

  const deleteTask = (id) => {
    const modifiedTasks = allTasks.filter(task => task.id != id)
    setAllTasks(modifiedTasks);
  }

  return ( 
    <div className="flex flex-col items-center">
      <TodoInput addTask={addTask}/>
      <TodoContainer allTasks={allTasks} isTaskActive={isTaskActive} deleteTask={deleteTask} />
    </div>
   );
}
 
export default Body;