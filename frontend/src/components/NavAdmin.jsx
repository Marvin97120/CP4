import { useState } from "react";
import { Link } from "react-router-dom";

import { VscMenu, VscClose } from "react-icons/vsc";

const NavAdmin = () => {
	const [navOpen, setNavOpen] = useState(false);

	return (
		<nav id="NavAdmin">
			<button type="button" onClick={() => setNavOpen(!navOpen)}>
				{navOpen ? <VscClose /> : <VscMenu />}
			</button>

			<div className="normal">
				<Link to="/">Accueil</Link>
				<Link to="/details">Exposition</Link>
				<Link to="/a-propos">L'Association</Link>
				<Link to="/connexion">Déconnexion</Link>
			</div>

			{navOpen ? (
				<div className="burger">
					<Link to="/">Accueil</Link>
					<Link to="/details">Exposition</Link>
					<Link to="/a-propos">L'Association</Link>
					<Link to="/connexion">Déconnexion</Link>
				</div>
			) : (
				<></>
			)}
		</nav>
	);
};

export default NavAdmin;
