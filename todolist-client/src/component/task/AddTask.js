import { useState } from "react";
import {
	Link,
	useNavigate,
} from "react-router-dom";
import axios from "axios";

const AddTask = () => {
    let navigate = useNavigate();
    const[task, setTask] = useState({
        name : '',
        description : '',
        status: false
    })
    const{name, description, status} = task;

    const handleInputChange = (e)=>{
        setTask({...task, [e.target.name] : e.target.value});
    }

    const saveTask = async (e) => {
		e.preventDefault();
		await axios.post(
			"http://localhost:9192/tasks",
			task
		);
		navigate("/view-tasks");
	};

  return (
    <div className="col-sm-8 py-2 px-5 offset-2 shadow">
			<h2 className="mt-5"> Add Task</h2>
			<form onSubmit={(e) => saveTask(e)}>
				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="name">
						Task
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="name"
						id="name"
						required
						value={name}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>

				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="description">
						Description
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="description"
						id="description"
						required
						value={description}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>

				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="status">
						Status
					</label>
					<input
						className="col-sm-1"
						type="checkbox"
						name="status"
						id="status"
						checked={status}
						values={status}
						onChange={() => setTask(task=> ({...task, status: !task.status}))}
					/>
				</div>
				<div className="row mb-5">
					<div className="col-sm-2">
						<button
							type="submit"
							className="btn btn-outline-success btn-lg">
							Save
						</button>
					</div>

					<div className="col-sm-2">
						<Link
							to={"/view-tasks"}
							type="submit"
							className="btn btn-outline-warning btn-lg">
							Cancel
						</Link>
					</div>
				</div>
			</form>
		</div>
  );
};

export default AddTask
