import "./navbar.css";
import { useNavigate, Link, NavLink } from "react-router-dom";
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
			<NavLink className="branding-link" to="/">
				FOOD RECIPE
			</NavLink>

			<nav className="main-navigation">
				<ul className="menu">
					<li className="menu-item menu-item-challenge">
						<Link className="cta-challenge" to="/contact">
							Challenge me!
						</Link>
					</li>
					<li className="menu-item">
						{user ? (
							<button className="btn-signup">
								{user?.email}
							</button>
						) : (
							<Link className="btn-signup" to="/register">
								Sign up
							</Link>
						)}
					</li>
					<li className="menu-item">
						{user ? (
							<button className="btn-signin" onClick={onLogout}>
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
