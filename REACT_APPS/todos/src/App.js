import intialTodos  from "./todos.js";
import { useState } from "react";
import { Outlet,NavLink} from "react-router-dom";
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
        <nav className="navbar is-light">
          <div className="navbar-brand">
              <NavLink to='/' className={({isActive})=>'navbar-item is-uppercase'+(isActive ? ' is-active':'')}>Todos</NavLink>

          </div>
          <div className="navbar-menu">
              <div className="navbar-start">
                    <NavLink to='/add' className={({isActive})=>'navbar-item is-uppercase'+(isActive ? ' is-active':'')}>Add</NavLink>
              </div>
          </div>
        </nav>
        <main className="content рх-6 ру-6">
            
            <Outlet />
        </main>
    </div>
  );
}

export default App;
