import { Link } from "react-router-dom";

const CRUD = () => {
	return (
		<main id="MainCRUD">
			<h1>CRUD</h1>
			<p>CRUD page</p>
			<Link to="/home">
				<button>CLICK ME</button>
			</Link>
		</main>
	);
};

export default CRUD;
