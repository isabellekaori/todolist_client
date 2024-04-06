import React, {
	useEffect,
	useState,
} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const TaskDetails = () => {
    const { id } = useParams();

	const[task, setTask] = useState({
        name : '',
        description : '',
        status: false
    })

	useEffect(() => {
		loadTask();
	}, []);

	const loadTask = async () => {
		const result = await axios.get(
			`http://localhost:9192/tasks/${id}`
		);
		setTask(result.data);
	};

	return (
		<section
			className="shadow"
			style={{ backgroundColor: "whitesmoke" }}>
			<div className="container py-5">
				<div className="row">
					<div className="col-lg-9">
						<div className="card mb-4">
							<div className="card-body">
								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
											Task
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{task.name}
										</p>
									</div>
								</div>

								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
											Description
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{task.description}
										</p>
									</div>
								</div>
								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
											Status
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{task.status}
										</p>
									</div>
								</div>
								<hr />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default TaskDetails
