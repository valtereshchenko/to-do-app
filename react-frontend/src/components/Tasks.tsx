import React from 'react'
import '../App.css';

type TasksProps = {
    tasks:{
        id: number,
        name:string,
        checked?:boolean,
    }[]
}

export const ToDoList =({tasks}:TasksProps)=> {
  const [tasksList, setTaskItems] = React.useState(tasks);
  const [value, setValue] = React.useState('');

  // fetch some data from the backend
  React.useEffect(() => {
    console.log('we are in the Use Effect')
    let itemsFromServer;
    fetch('/tasks')
    .then((res)=> res.json()) //res.json
    .then((fetchedItems)=> { //this is an array of object so we should do a map
      console.log('fetched items', fetchedItems)
      itemsFromServer = fetchedItems.map((item:any)=>{
        const {id:id, name:name}=item;//destructuring the item, at the same time we can chagnge the names of the fields 
        return {id, name}
      })
      setTaskItems(itemsFromServer)
    })
  },[]) //call the callback func only once

  function deleteTask (myIndex:number) {
    const newList = tasksList.filter((item, index) => index!== myIndex) // leave all the items besides the one with myIndex
    console.log('New List', newList)
    setTaskItems(newList);
    }
  
  function createTask(event:any) {
    event.preventDefault(); //prevents from re-loading the page
    let newTask = {id:tasksList.length +1, name: value, checked: false}
    fetch("/tasks", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: value, checked: false }),
    }) //add new items to the DB 
    const newList = [...tasksList, newTask] //adds new item to the list and saves in the new variable 
    setTaskItems(newList)
    setValue(''); 
  }
  
  function inputHandler(event:any){
    setValue(event.target.value)
  }
  
  function handleChange(e:any, index:number) {
    const newList =[...tasksList] //spread the items inside the array and put them in the new array
    newList[index].checked = e.target.checked //increase the count of the item with the specific index
    setTaskItems(newList)
  }

  return(
    <div>
      <input className='addItemInput' value={value} onChange={inputHandler} ></input>
      <button className='Button-submit' type='submit' onClick={(event)=> createTask(event)}>Add Task</button>
      <ul style={{listStyle:'none'}}>
        {
          tasksList.map((task, index) =>
          <li className='taskListItem' key={task.id}> 
          <span className={task.checked? "done" :"todo"}>{task.name}</span>
          <input className='checkbox' type='checkbox' onChange={(e) => {handleChange(e,index);}}></input>
          <button className='Button-delete' onClick={()=> deleteTask(index)}>Delete Task</button>
          </li>
          )
        }
      </ul>
    </div>
      )
  }