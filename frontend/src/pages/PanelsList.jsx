import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Nav from "@comp/Nav";

const PanelsList = () => {
	const [panelsList, setPanelsList] = useState();

	useEffect(() => {
		axios
			.get("http://localhost:5000/all")
			.then((res) => {
				setPanelsList(res.data);
			})
			.catch((err) => {
				console.error(err.res.data);
			});
	}, []);

	if (!panelsList) return "";

	console.log(panelsList);

	return (
		<>
			<Nav />

			<main id="MainPanelsList">
				<h1>Liste des panneaux</h1>

				{panelsList.map((p, index) => (
					<Link to={`/panel/${p.id}`} key={index}>
						<section>
							<h2>
								{p.panel_title} <span>{p.category}</span>
							</h2>
							<article>
								<img src={p.main_url} alt={p.main_alt} />

								<cite>{p.main_title}</cite>
							</article>
						</section>
					</Link>
				))}
			</main>
		</>
	);
};

export default PanelsList;
