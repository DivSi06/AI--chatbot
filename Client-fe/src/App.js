import { Route, Routes, Navigate } from "react-router-dom";
import Chat from "./components/Chat";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/" exact element={<Login />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/main" exact element={<Chat/>} />
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
	);
}

export default App;
