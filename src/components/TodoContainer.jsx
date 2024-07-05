import TodoItems from "./TodoItems";

const TodoContainer = ({ allTasks, isTaskActive, deleteTask }) => {
  return ( 
    <div>
      {
        allTasks.map(item => (
            <TodoItems item={item} isTaskActive={isTaskActive} deleteTask={deleteTask} key={item.id}/>
          )
        )
      }
    </div>
   );
}
 
export default TodoContainer;