import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Register = () => {
	const navigate = useNavigate();
	const [errorMessage, setErrorMessage] = useState("");

	const handleSubmit = async (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const email = data.get("email");
		const password = data.get("password");

		try {
			const { user } = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);
			console.log(user);
			navigate("/login");
		} catch (error) {
			setErrorMessage(error.message);
		}
	};

	return (
		<>
			<main id="site-main" className="site-main">
				<section className="section-formlogin">
					<div className="formlogin">
						<div className="box-formlogin">
							<h1>Register</h1>
							<p>Hello! Please register here.</p>
							{errorMessage && (
								<span className="info-form error">
									{errorMessage
										.replace(/-/g, " ")
										.replace(/Firebase:/g, "")
										.replace("auth/", "")}
								</span>
							)}
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
										Register
									</button>
								</div>
							</form>
							<Link className="link-register" to="/login">
								Already have an account?{" "}
								<strong>Sign in here</strong>
							</Link>
							<Link className="link-home" to="/">
								<strong>Go to homepage</strong>
							</Link>
						</div>
					</div>
					<div className="side-formlogin">
						<img
							src="/images/hero-banner-login.jpg"
							alt="hero banner login"
						/>
					</div>
				</section>
			</main>
		</>
	);
};

export default Register;
