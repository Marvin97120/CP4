import { useState } from "react";
import { Link } from "react-router-dom";

import { VscMenu, VscClose } from "react-icons/vsc";

const Nav = () => {
	const [navOpen, setNavOpen] = useState(false);

	return (
		<nav id="Nav">
			<button onClick={() => setNavOpen(!navOpen)}>
				{navOpen ? <VscMenu /> : <VscClose />}
			</button>

			<div
				style={
					navOpen && screen.width <= 450
						? { display: "none" }
						: { display: "flex" }
				}
			>
				<Link to="/">Accueil</Link>
				<Link to="/details">Exposition</Link>
				<Link to="/a-propos">L'Association</Link>
				<Link to="/connexion">Admin</Link>
			</div>

			{/* <ul>
				<li>
					<Link to="/">Accueil</Link>
				</li>
				<li>
					<Link to="/details">Exposition</Link>
				</li>
				<li>
					<Link to="/a-propos">L'Association</Link>
				</li>
				<li>
					<Link to="/connexion">Admin</Link>
				</li>
			</ul> */}
		</nav>
	);
};

export default Nav;
