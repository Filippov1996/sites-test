import intialTodos  from "./todos.js";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import TodoList from "./TodoList.js";
import TodoAdd from "./TodoAdd.js";


function App() {
  const [todos,setTodos] = useState(intialTodos);
  const setDone = (key)=>{
        const newTodos = [...todos];
        const deed = newTodos.find((item)=>item.key===key);
        if(deed){
          deed.done = true;
        }
        setTodos(newTodos);
  }
  const del =(key)=>{
          const newTodos = todos.filter((item)=>item.key!==key);
          setTodos(newTodos);
  }
  const add = (deed)=>{
        setTodos([...todos,deed]);
  }
  return (
    <div className="container">
        <nav>
          <div className="container">
          
          </div>
        </nav>
        <main className="content рх-6 ру-6">
            <h1>Дела</h1>
            <TodoList list={todos} setDone={setDone} del={del}/>
            <TodoAdd add={add}/>
        </main>
    </div>
  );
}

export default App;
