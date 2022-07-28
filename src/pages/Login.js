import { useState } from "react";
import {
	GoogleAuthProvider,
	signInWithEmailAndPassword,
	signInWithPopup,
} from "firebase/auth";
import { auth } from "../config/firebase";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
	const navigate = useNavigate();
	const [errorMessage, setErrorMessage] = useState("");

	const handleSubmit = async (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const email = data.get("email");
		const password = data.get("password");

		try {
			await signInWithEmailAndPassword(auth, email, password);
			navigate("/");
		} catch (error) {
			setErrorMessage(error.message);
		}
	};

	const signInWithGoogle = () => {
		const provider = new GoogleAuthProvider();
		signInWithPopup(auth, provider)
			.then((result) => {
				const credential =
					GoogleAuthProvider.credentialFromResult(result);
				const token = credential.accessToken;
				const user = result.user;

				navigate("/");
			})
			.catch((error) => {
				console.log(error);
				const errorCode = error.code;
				const errorMessage = error.message;
				const email = error.customData.email;
				const credential =
					GoogleAuthProvider.credentialFromError(error);

				setErrorMessage(errorMessage);
			});
	};

	return (
		<>
			<main id="site-main" className="site-main">
				<section className="section-formlogin">
					<div className="formlogin">
						<div className="box-formlogin">
							<h1>Welcome back</h1>
							<p>Welcome back! Please enter your details.</p>
							{
								errorMessage && <span className="info-form error">{errorMessage}</span>
							}
							<form
								className="form-wrapper"
								onSubmit={handleSubmit}
							>
								<div className="form-field">
									<label>Email</label>
									<input
										name="email"
										type="email"
										placeholder="email-address"
									/>
								</div>
								<div className="form-field">
									<label>Password</label>
									<input
										name="password"
										type="password"
										placeholder="password"
									/>
								</div>
								<div className="form-field form-field-submit">
									<button
										type="submit"
										className="btn-submit"
									>
										Sign in
									</button>
								</div>
							</form>
							<button
								className="btn-social-login google"
								type="button"
								onClick={signInWithGoogle}
							>
								<img src="/images/google.png" alt="" />
								Sign in with Google
							</button>
							<Link className="link-register" to="/register">
								Don't have an account? <strong>Sign up for free</strong>
							</Link>
							<Link className="link-home" to="/">
								<strong>Go to homepage</strong>
							</Link>
						</div>
					</div>
					<div className="side-formlogin">
						<img src="/images/hero-banner-login.jpg" alt="hero banner login" />
					</div>
				</section>
			</main>
		</>
	);
};

export default Login;
