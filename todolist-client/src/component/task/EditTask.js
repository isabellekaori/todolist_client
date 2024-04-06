import React, {
	useEffect,
	useState,
} from "react";
import axios from "axios";

import {
	Link,
	useNavigate,
	useParams,
} from "react-router-dom";

const EditStudent = () => {
	let navigate = useNavigate();

	const { id } = useParams();

    const[task, setTask] = useState({
        name : '',
        description : '',
        status: false
    })

    const{name, description, status} = task;

	useEffect(() => {
		loadTask();
	}, []);

	const loadTask = async () => {
		const result = await axios.get(
			`http://localhost:9192/tasks/${id}`
		);
		setTask(result.data);
	};

	const handleInputChange = (e) => {
		setTask({
			...task,
			[e.target.name]: e.target.value,
		});
	};
	const updateTask = async (e) => {
		e.preventDefault();
		await axios.put(
			`http://localhost:9192/tasks/update/${id}`,
			task
		);
		navigate("/view-tasks");
	};

	return (
		<div className="col-sm-8 py-2 px-5 offset-2 shadow">
			<h2 className="mt-5"> Edit Task</h2>
			<form onSubmit={(e) => updateTask(e)}>
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
						checked={status.toString() === 'true' ? true : false}
						values={status.toString()}
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

export default EditStudent;