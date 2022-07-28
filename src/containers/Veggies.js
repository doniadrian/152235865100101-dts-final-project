import { useEffect, useState } from "react";
import axios from "axios";
import VeggieItem from "../components/VeggieItem/VeggieItem";

const Veggies = () => {
	const [veggiesRandom, setVeggiesRandom] = useState([]);
	const MY_API_KEY = "9e63b10e6a3b4956a1d4e2905e4a4627";

	useEffect(() => {
		console.log(process.env);

		const fetchVeggies = async () => {
			const fetchedVeggies = await axios.get(
				`https://api.spoonacular.com/recipes/random?apiKey=${MY_API_KEY}&number=9&tags=vegetarian`
			);
			setVeggiesRandom(fetchedVeggies.data.recipes);
		};

		fetchVeggies();
	}, []);
	
	return (
		<div className="veggie-grid">
			{veggiesRandom.map((veggie) => (
				<VeggieItem key={veggie.title} veggie={veggie}></VeggieItem>
			))}
		</div>
	);
};

export default Veggies;
