import { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';


const TodoItems = ({item, isTaskActive, deleteTask}) => {
const handleChange = (event) => {
  isTaskActive(item.id);
}

const handleClick = () => {
  deleteTask(item.id);
}

  return ( 
    <div className="flex gap-4 p-2 border-b-2 rounded-md items-center m-4 ">
      <input type="checkbox" checked={!item.isActive} onChange={handleChange}/>
      <p className={ `w-60 pr-2 overflow-hidden text-ellipsis ${item.isActive ? "no-underline" : "line-through"}` } >{item.task}</p>
      <button onClick={handleClick}><DeleteIcon sx={{ color: "mediumpurple" }} /></button>
    </div>
   );
}
export default TodoItems;