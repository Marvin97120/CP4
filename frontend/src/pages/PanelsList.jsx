import { Link } from "react-router-dom";

const PanelsList = () => {
	return (
		<main id="MainPanelsList">
			<h1>PanelsList</h1>
			<p>PanelsList page</p>
			<Link to="/home">
				<button>CLICK ME</button>
			</Link>
		</main>
	);
};

export default PanelsList;
