import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';

const TaskView = () => {
  const[tasks, setTasks] = useState([]);  

  useEffect(() => {
    loadTasks();
  }, [])

  const loadTasks = async()=>{
    const result = await axios.get("http://localhost:9192/tasks",{
        validateStatus: () =>{
            return true;
        }
    });
    if(result.status === 302){
        setTasks(result.data)
    }
};

const handleDelete = async (id) => {
  await axios.delete(
    `http://localhost:9192/tasks/delete/${id}`
  );
  loadTasks();
};


  return (
    <section>
      <table className='table table-bordered table-hover shadow'>
        <thead>
            <tr className='text-center'>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Status</th>
                <th colSpan="3">Actions</th>
            </tr>
        </thead>

        <tbody className='text-center'>
            {tasks.map((task, index) =>(
                <tr key={task.id}>
                <th scope="row" key={index}>
                    {index + 1}
                </th>
                <td>{task.name}</td>
                <td>{task.description}</td>
                <td>{task.status}</td>
                <td className='mx-2'>
                  <Link
                    to={`/details-task/${task.id}`}
                    className='btn btn-info'>
                    View
                  </Link>
                  </td>
                <td className='mx-2'>
                  <Link
                    to={`/edit-task/${task.id}`}
                    className='btn btn-warning'>
                    Update
									</Link>
                  </td>
                <td className='mx-2'>
                  <button
                    className='btn btn-danger' onClick={()=> handleDelete(task.id)}>
                    Delete
                  </button>
                  </td>
            </tr>
        ))}
        </tbody>
      </table>
    </section>
  )
}

export default TaskView
