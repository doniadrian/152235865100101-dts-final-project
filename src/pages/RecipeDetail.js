import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const RecipeDetail = () => {
	const [details, setDetails] = useState({});
	let params = useParams();

	useEffect(() => {

		const fetchDetails = async () => {
			const data = await fetch(
				`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API}`
			);
			const detailData = await data.json();
			setDetails(detailData);
		};

		fetchDetails();
	}, [params.name]);
	
	useEffect(() => {
		console.log(details);
	}, [details]);

	return (
		<>
			<Navbar />

			<main id="site-main" className="site-main">
				<section className="is-section section-recipe-detail">
					<div className="detailWrapper">
						<div className="figure-summary">
							<img
								src={details.image}
								alt={details.title}
								loading="lazy"
							/>
						</div>

						<div className="summary">
							<h1>{details.title}</h1>

							<div className="cooking-spec">
								<span className="price-perserving">
									${details.pricePerServing} per serving
								</span>
								<span className="aggregate-likes">
									{details.aggregateLikes} likes
								</span>
								<span className="ready-in-minutes">
									Ready in {details.readyInMinutes} minutes
								</span>
							</div>

							<div className="col-diets-dishtypes">
								<div className="col-diets">
									<h4>Diets</h4>
									<ul className="diets">
										{details.diets?.map((item, i) => {
											return <li key={i}>{item}</li>;
										})}
									</ul>
								</div>

								<div className="col-dishtypes">
									<h4>dishTypes</h4>
									<ul className="dishtypes">
										{details.dishTypes?.map((item, i) => {
											return <li key={i}>{item}</li>;
										})}
									</ul>
								</div>
							</div>
						</div>

						<div className="summary-full">
							<div
								className="content-summary"
								dangerouslySetInnerHTML={{
									__html: details.summary,
								}}
							/>

							{details.instructions && (
								<div className="detail-instruction">
									<h2>Instructions</h2>
									<div
										dangerouslySetInnerHTML={{
											__html: details.instructions,
										}}
									/>
								</div>
							)}

							{details.extendedIngredients?.length && (
								<div className="detail-ingredients">
									<h3>Ingredients</h3>
									<ul className="ingredients">
										{details.extendedIngredients?.map(
											(ingredients) => {
												return (
													<li key={ingredients.id}>
														<img
															src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredients.image}`}
															alt={
																ingredients.name
															}
															loading="lazy"
														/>
														<span className="ingredients-original">
															{
																ingredients.original
															}
														</span>
													</li>
												);
											}
										)}
									</ul>
								</div>
							)}
						</div>
					</div>
				</section>
			</main>

			<Footer />
		</>
	);
};

export default RecipeDetail;
