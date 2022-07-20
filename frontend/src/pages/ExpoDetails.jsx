import { Link } from "react-router-dom";

const ExpoDetails = () => {
	return (
		<main id="MainExpoDetails">
			<h1>ExpoDetails</h1>
			<p>ExpoDetails page</p>
			<Link to="/home">
				<button>CLICK ME</button>
			</Link>
		</main>
	);
};

export default ExpoDetails;
