import { Link } from "react-router-dom";

const VeggieItem = ({ veggie }) => {
	return (
		<div className="veggie-item" key={veggie.id}>
			<Link to={"/recipe/" + veggie.id}>
				<div className="veggie-wrapper">
					<figure className="figure-veggie">
						<img
							src={veggie.image}
							alt={veggie.title}
							className="thumbnail-veggie"
						/>
					</figure>

					<div className="content-veggie">
						<h3 className="entry-title">{veggie.title}</h3>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default VeggieItem;
