import {useState} from 'react';
import './App.css'

export default function App(){
    const [task,setTask]=useState('');
    const [desc,setDesc]=useState('');
    const [list,setList] = useState([]);



 const inputHandler=(e)=>{
        e.preventDefault();
        console.log(task,desc)
        const data = {task,desc}
        setList((le)=>[...le,data])
        setTask('')
        setDesc('')
   }

  const handleRemoveItem = (index) => {
   const newList = [...list];

        delete newList[index];;
        setList(newList)

  };

    return(
        <div className='form'>
            <h1>New Task</h1>
            <form onSubmit={inputHandler} >
                <input  value={task} onChange={(e)=>setTask(e.target.value)} name='task' placeholder="Your Task..."/>
                <input  value={desc} onChange={(e)=>setDesc(e.target.value)} name='desc' placeholder="Describe it..."/>
                <button>Add task</button>
            </form>
            <h1>To do list</h1>
        {
          list.map((item,index)=>

                <div key={index}>
                <ul>
                    <li className="listOfTask">
                        <h3>{item.task}</h3>
                        <p>{item.desc} </p>
                         <button   onClick= {()=>handleRemoveItem(index)}> Done</button>
                    </li>
                </ul>
                </div>

            )
        }

         </div>
    )

}