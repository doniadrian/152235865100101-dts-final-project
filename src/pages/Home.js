import React from "react";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Veggies from "../containers/Veggies";

const Home = () => {
	return (
		<>
			<Navbar />

			<main id="site-main" className="site-main">
				<Banner/>

				<section id="section-veggie" className="is-section section-veggie">
					<h2>Random Veggie</h2>
					<Veggies/>
				</section>
				
			</main>

			<Footer/>
		</>
	);
};

export default Home;
