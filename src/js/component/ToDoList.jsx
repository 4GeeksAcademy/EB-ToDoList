import React, {useState } from "react";


const ToDoList=()=>{
    const[task, setTask]= useState("");
    const [todos, setTodos]= useState([]);

    const handleChangeTask=(e)=>{
        setTask(e.target.value); 
    }
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
          setTodos([...todos, task]);
          setTask("");
        }

      };
      
      const handleDelete = (index) => {
        const newTodos = todos.filter((todo, i) => i !== index);
        setTodos(newTodos);
      };
    return (
        <div className="container flex h-screen w-screen flex-col items-center justify-center">
        <div className="mb-5"><h1 className="font-sans text-5xl font-semibold italic hover:not-italic text-yellow-900">To Do List...</h1></div>
 
 
       <ul className="list flex flex-col items-center h-4/6 w-96 rounded-xl border-2 border-yellow-800 bg-yellow-100">
         <input type="text" placeholder="Enter Task" value={task} onChange={handleChangeTask} 
          onKeyDown={handleKeyDown} className="h-12 w-full mt-2 ml-2 mr-2 mb-2 rounded-md"/>


          {todos.map((todo, index) => (
          <li key={index} className="task text-yellow-700 text-3xl ">
            {todo}

            <button
              onClick={() => handleDelete(index)}
              className="px-1 bg-yellow-400 hover:bg-yellow-700 text-white text-xs rounded-lg m-2"
            >
              x
            </button>
          </li>
        ))}
        <div>
        {todos.length > 0 ? (
          <span>{todos.length} items left</span>
        ) : (
          <span>No items left</span>
        )}
      </div>
       </ul>
       
     </div>
 
    );
};

export default ToDoList;