import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const RecipeDetail = () => {
	const [details, setDetails] = useState({});
    const MY_API_KEY = "9e63b10e6a3b4956a1d4e2905e4a4627";
	let params = useParams();

	const fetchDetails = async () => {
		const data = await fetch(
			`https://api.spoonacular.com/recipes/${
				params.name
			}/information?apiKey=${MY_API_KEY}`
		);
		const detailData = await data.json();
		setDetails(detailData);
	};

	useEffect(() => {
		fetchDetails();
	}, [params.name]);

    console.log(details);

	return (
		<>
			<Navbar />

			<main id="site-main" className="site-main">
				<section className="is-section section-recipe-detail" >
					<div className="detailWrapper">
						<h2>{details.title}</h2>
						<img src={details.image} alt={details.title} />
					</div>
				</section>
			</main>

			<Footer />
		</>
	);
};

export default RecipeDetail;