import { Link } from "react-router-dom";

const AboutUs = () => {
	return (
		<main id="MainAboutUs">
			<h1>AboutUs</h1>
			<p>AboutUs page</p>
			<Link to="/home">
				<button>CLICK ME</button>
			</Link>
		</main>
	);
};

export default AboutUs;
