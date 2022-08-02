import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Searched from "./pages/Searched";
import ProtectedRoute from "./config/ProtectedRoute";
import NoMatch from "./pages/NoMatch";
import RecipeDetail from "./pages/RecipeDetail";
import Contact from "./pages/Contact";

function App() {
	return (
		<div className="App">
			<div id="page" className="site">
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route
							path="login"
							element={
								<ProtectedRoute loginOnly={false}>
									<Login />
								</ProtectedRoute>
							}
						/>
						<Route
							path="register"
							element={
								<ProtectedRoute loginOnly={false}>
									<Register />
								</ProtectedRoute>
							}
						/>
						<Route
							path="/recipe/:name"
							element={
								<ProtectedRoute>
									<RecipeDetail />
								</ProtectedRoute>
							}
						/>
						<Route
							path="/searched/:search"
							element={<Searched />}
						/>
						<Route path="/contact" element={<Contact />} />
						<Route path="*" element={<NoMatch />} />
					</Routes>
				</BrowserRouter>
			</div>
		</div>
	);
}

export default App;
