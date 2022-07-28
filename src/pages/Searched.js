import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import FormSearch from "../components/FormSearch/FormSearch";
import SearchList from "../containers/SearchList";
import { useParams } from "react-router-dom";

const Searched = () => {
	let params = useParams();

	return (
		<>
			<Navbar />
			<main id="site-main" className="site-main">
				<section className="is-section section-search-result">
					<h1 className="title-search">Search result: <strong>"{params.search}"</strong></h1>
					
					<FormSearch/>
					<SearchList/>
				</section>
			</main>
			<Footer/>
		</>
	);
};

export default Searched;
