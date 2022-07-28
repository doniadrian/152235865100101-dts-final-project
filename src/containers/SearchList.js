import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import SearchItem from "../components/SearchItem/SearchItem";

const SearchList = () => {
	const [searchVeggies, setSearchVeggies] = useState([]);
	const MY_API_KEY = "9e63b10e6a3b4956a1d4e2905e4a4627";
	let params = useParams();

	const getSearched = async (name) => {
		const data = await fetch(
			`https://api.spoonacular.com/recipes/complexSearch?apiKey=${MY_API_KEY}&query=${name}`
		);
		const searchData = await data.json();
		setSearchVeggies(searchData.results);
	};

	useEffect(() => {
		getSearched(params.search);
	}, [params.search]);
	
	return (
		<div className="veggie-grid">
			{searchVeggies.map((veggie) => (
				<SearchItem key={veggie.title} veggie={veggie}></SearchItem>
			))}
		</div>
	);
};

export default SearchList;
