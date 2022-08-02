import { useEffect, useState } from "react";
import axios from "axios";
import VeggieItem from "../components/VeggieItem/VeggieItem";

const Veggies = () => {
	const [veggiesRandom, setVeggiesRandom] = useState([]);

	useEffect(() => {

		const fetchVeggies = async () => {
			const fetchedVeggies = await axios.get(
				`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API}&number=20&tags=vegetarian`
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
