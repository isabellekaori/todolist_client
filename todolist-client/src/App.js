import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "/node_modules/bootstrap/dist/js/bootstrap.min.js"
import './App.css';
import Home from './Home';
import TaskView from './component/task/TaskView';
import NavBar from "./component/common/NavBar";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import AddTask from "./component/task/AddTask";

function App() {
  return (
		<main className="container mt-5">
			<Router>
				<NavBar />
				<Routes>
					<Route
						exact
						path="/"
						element={<Home />}></Route>
					<Route
						exact
						path="/view-tasks"
						element={<TaskView />}></Route>
          <Route
						exact
						path="/add-tasks"
						element={<AddTask />}></Route>
				</Routes>
			</Router>
		</main>
	);
}

export default App;
