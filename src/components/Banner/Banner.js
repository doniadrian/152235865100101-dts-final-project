import "./banner.css";
import { HashLink } from "@xzar90/react-router-hash-link";
import Search from "../FormSearch/FormSearch";
import scrollIntoView from "scroll-into-view-if-needed";

const Banner = () => {
	return (
		<>
			<div id="site-banner" className="site-banner">
				<div className="pattern-kitchen">
					<img src="/images/pattern-kitchen.png" loading="lazy" />
				</div>
				<div className="content-banner">
					<h1>We Serve The Test You Love</h1>
					<p>
						This is a type of restaurant which typically serves
						food. In additional to light refreshments such as backed
						goods or snacks. The term comes from the rench word
						meaning food.
					</p>

					<div className="button-group">
						<HashLink
							scroll={(el) =>
								scrollIntoView(el, {
									scrollMode: "always",
									block: "nearest",
									inline: "nearest",
								})
							}
							className="btn-primary"
							to="#section-veggie"
						>
							Explore Food
						</HashLink>

						<div className="btn-secondary" to="/">
							<Search />
						</div>
					</div>
				</div>
				<figure className="figure-banner">
					<img
						src="https://source.unsplash.com/random/1920x1080/?food,recipe,vegetable,rice"
						alt="hero banner recipes homepage"
						className="thumbnail-banner"
						loading="lazy"
					/>
				</figure>
			</div>
		</>
	);
};

export default Banner;
