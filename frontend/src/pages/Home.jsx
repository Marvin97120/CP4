import { Link } from "react-router-dom";
import Nav from "@comp/Nav";

const Home = () => {
	return (
		<>
			<Nav />

			<main id="MainHome">
				<h1>Home</h1>
				<p>Home page</p>
				<Link to="/home">
					<button>CLICK ME</button>
				</Link>
			</main>
		</>
	);
};

export default Home;
