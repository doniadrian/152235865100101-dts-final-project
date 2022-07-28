import "./navbar.css";
import { useNavigate, Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Navbar = () => {
	const [user] = useAuthState(auth);

	const navigate = useNavigate();

	const onLogout = async () => {
		try {
			await signOut(auth);
			navigate("/");
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<header id="site-header" className="site-header">
			<Link className="branding-link" to="/">
				FOOD RECIPE
			</Link>

			<nav className="main-navigation">
				<ul className="menu">
					<li className="menu-item">
						<Link to="/">Home</Link>
					</li>
					<li className="menu-item">
						<Link to="/">Italian</Link>
					</li>
					<li className="menu-item">
						<Link to="/">American</Link>
					</li>
					<li className="menu-item">
						<Link to="/">Thai</Link>
					</li>
					<li className="menu-item">
						<Link to="/">Japanese</Link>
					</li>
					<li className="menu-item">
						<Link className="btn-signup" to="/register">
							Sign up
						</Link>
					</li>
					<li className="menu-item">
						{user ? (
							<button
								className="btn-signin"
								onClick={onLogout}
							>
								Sign out
							</button>
						) : (
							<Link className="btn-signin" to="/login">
								Sign in
							</Link>
						)}
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
