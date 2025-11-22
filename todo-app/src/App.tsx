import { useState } from 'react'
import './App.css'
import type { Todo } from './todo'
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
    const [todo, setTodo]= useState<Todo[]>([]);
    const [query,setQuery] = useState<string>("")


    const AddTodo=()=>{

     const NewTodo: Todo={
       id: Date.now(),
        text:query,
        completed:false,
     }
     setTodo([...todo, NewTodo]);
     setQuery("")
    }
      const DeleteTodo=(id:number)=>{
          const filtered = todo.filter((item)=> item.id !== id)
           setTodo(filtered);
         
      }
  return (
    <div className='bg-purple-400 text-white h-screen flex items-center flex-col justify-center '>
      <TodoForm AddTodo={AddTodo} query={query} setQuery={setQuery}/>
      <TodoList todo={todo} setTodo={setTodo}  DeleteTodo={ DeleteTodo}/>
    </div>
  )
}

export default App
