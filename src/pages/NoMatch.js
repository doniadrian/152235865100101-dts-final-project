import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

const NoMatch = () => {
    return (
		<>
			<Navbar />
			<main id="site-main" className="site-main">
				<section className="is-section section-404 pd-screen">
					<img
						src="https://cdn3d.iconscout.com/3d/premium/thumb/404-error-4461124-3696774.png"
						alt="404"
					/>
					<h1>Sorry..<br/>This page was not found</h1>
					<Link className="underline" to="/">Take me home!</Link>
				</section>
			</main>
		</>
	);
}

export default NoMatch;