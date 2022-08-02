import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Contact = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");

	const [loader, setLoader] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoader(true);

		try {
			await addDoc(collection(db, "contact"), {
				name: name,
				email: email,
				subject: subject,
				message: message,
			});
			setLoader(false);
			alert("Your message has been submitted👍");
		} catch (e) {
			alert(e.message);
			setLoader(false);
		}

		setName("");
		setEmail("");
		setSubject("");
		setMessage("");
	};
	return (
		<>
			<Navbar />
			<main id="site-main" className="site-main">
				<section className="is-section section-contact">
					<h1>Challenge me!</h1>
					<form className="form-wrapper" onSubmit={handleSubmit}>
						<div className="form-field">
							<label>Name</label>
							<input
								name="name"
								type="text"
								placeholder="name"
								value={name}
								onChange={(e) => setName(e.target.value)}
								required
							/>
						</div>
						<div className="form-field">
							<label>Email</label>
							<input
								name="email"
								type="email"
								placeholder="email-address"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
							/>
						</div>
						<div className="form-field">
							<label>Subject</label>
							<input
								name="subject"
								type="text"
								placeholder="message"
								value={subject}
								onChange={(e) => setSubject(e.target.value)}
								required
							/>
						</div>
						<div className="form-field">
							<label>Message</label>
							<textarea
								placeholder="message"
								value={message}
								onChange={(e) => setMessage(e.target.value)}
								required
							></textarea>
						</div>
						<div className="form-field form-field-submit">
							<button
								type="submit"
								className="btn-submit"
								style={{ background: loader ? "" : " " }}
							>
								Call me
							</button>
						</div>
					</form>
				</section>
			</main>

			<Footer />
		</>
	);
};

export default Contact;
