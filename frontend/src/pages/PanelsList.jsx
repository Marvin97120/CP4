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
						<article>
							<h2>{p.panel_title}</h2>
							<img src={p.main_url} alt={p.main_alt} />
							<span>{p.category}</span>
							<cite>{p.main_title}</cite>
						</article>
					</Link>
				))}
			</main>
		</>
	);
};

export default PanelsList;
