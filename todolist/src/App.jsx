import { useState } from 'react'
import './App.css'

function App() {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [toDoTask, setToDoTask] = useState([])  // This variable should contain both title and desc and take them as task. Here we have pass an empty array as there will be multiple task for that we nened array.

  const handleSubmit = (e) => {
    e.preventDefault(); // This is an in-built method which stops the form to submit by default
    // Here we pass an object inside array using varible title and desc as key andn we type anything into input will be its value
    setToDoTask([...toDoTask, {title, desc}])  // After writing one todo now we need to write another todo for that, and we dont want that the previous one to get removed that why we used ...toDoTask which is spread operator used to add values into existing array
    setTitle(""); // Emptying the variable after add task
    setDesc("");  // Emptying the variable after add task
    console.log(toDoTask);
    
  }

  // Passing argument as i because we want to delete the specific task, for that we need id which is denoted by i.
  const deleteHandler = (i) => {
    let copyToDoTask = [...toDoTask]
    copyToDoTask.splice(i,1)
    setToDoTask(copyToDoTask);
  }

  let renderToDo = <h2>No Task Available</h2>

  // This ensures that array contains some object then only it will execute otherwise above renderToDo will displayed
  if(toDoTask.length > 0){
    // We have passed a map method on toDoTask array, here t is the objects that maps inside array 
    renderToDo = toDoTask.map((t,i) => {
      return (
        <li key={i} className='flex items-center justify-evenly mb-5'> {/* key gives a unique identification for each element, because react can differentiate them */}
          <div className='mb-5 w-2/3'>
            <h5 className='text-2xl font-semibold'>{t.title}</h5>
            <p className='text-lg'>{t.desc}</p>
          </div>
          <button
          onClick={() => {deleteHandler(i)}} 
          className='bg-red-700 text-white px-4 py-2 rounded font-bold'>Delete</button>
        </li>
      )
    })
  }

  return (
    <>
      <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>
        Rohit's To-Do List
      </h1>

      <form className='text-center' onSubmit={handleSubmit}>  {/* onSubmit means when we submit the form */}
        <input 
        type="text" 
        className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2' 
        placeholder='Enter Title Here' 
        value={title} 
        onChange={(e) => {
          setTitle(e.target.value);
        }}/>
        
        <input 
        type="text" 
        className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2' 
        placeholder='Enter Description Here'
        value={desc}
        onChange={(e) => {
          setDesc(e.target.value)
        }}/>
        <button className='bg-black text-white px-4 py-3 m-5 text-2xl font-bold rounded'>Add Task</button>
      </form>
      <hr />
      <div className='p-8 bg-slate-200'>
        <ul>
          {renderToDo}
        </ul>
      </div>
    </>
  )
}

export default App
