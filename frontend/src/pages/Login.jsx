import { Link } from "react-router-dom";

import Nav from "@comp/Nav";

const Login = () => {
	return (
		<>
			<Nav />

			<main id="MainLogin">
				<h1>Connexion</h1>

				<label htmlFor="name">Identifiant</label>
				<input name="name" type="text" />

				<label htmlFor="password">Mot de passe</label>
				<input name="password" type="password" />

				<Link to="/admin">
					<button type="button">Se Connecter</button>
				</Link>
			</main>
		</>
	);
};

export default Login;
