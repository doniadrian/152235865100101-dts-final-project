import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SearchItem from "../components/SearchItem/SearchItem";

const SearchList = () => {
	const [searchVeggies, setSearchVeggies] = useState([]);
	let params = useParams();

	const getSearched = async (name) => {
		const data = await fetch(
			`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API}&query=${name}`
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
