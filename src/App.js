import image from "./list.jpg";
import './App.css';
import { ToDoApp } from "./ToDoApp";

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <h1>To Do List</h1>
      </div>
        <ToDoApp/>
      <div className='container'>
        <img src={image} alt='to do list' width="350px"/>
      </div>
    </div>
  );
}

export default App;
