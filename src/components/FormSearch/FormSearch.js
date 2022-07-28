import "./form-search.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
	const [inputSearch, setInputSearch] = useState("");

	const navigate = useNavigate();

	const submitHandler = (e) => {
		e.preventDefault();
		navigate("/searched/" + inputSearch);
	};

	return (
		<>
			<form className="form-search" onSubmit={submitHandler}>
				<input
					onChange={(e) => setInputSearch(e.target.value)}
					name="search"
					type="search"
					placeholder="Enter your search ..."
					value={inputSearch}
				/>
			</form>
		</>
	);
};

export default Search;
