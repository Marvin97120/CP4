import { useState } from "react";
import { Link } from "react-router-dom";

import { VscMenu, VscClose } from "react-icons/vsc";

const Nav = () => {
	const [navOpen, setNavOpen] = useState(false);

	return (
		<nav id="Nav">
			<button type="button" onClick={() => setNavOpen(!navOpen)}>
				{navOpen ? <VscClose /> : <VscMenu />}
			</button>

			<div className="normal">
				<Link to="/">Accueil</Link>
				<Link to="/details">Exposition</Link>
				<Link to="/a-propos">L'Association</Link>
				<Link to="/connexion">Admin</Link>
			</div>

			{navOpen ? (
				<div className="burger">
					<Link to="/">Accueil</Link>
					<Link to="/details">Exposition</Link>
					<Link to="/a-propos">L'Association</Link>
					<Link to="/connexion">Admin</Link>
				</div>
			) : (
				<></>
			)}
		</nav>
	);
};

export default Nav;
