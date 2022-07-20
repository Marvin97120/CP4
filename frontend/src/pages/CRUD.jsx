import { useState, useEffect } from "react";
import axios from "axios";

const CRUD = () => {
	const [panelsList, setPanelsList] = useState();

	useEffect(() => {
		axios
			.get("http://localhost:5000/")
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
		<main id="MainCRUD">
			<h1>Liste des panneaux</h1>

			{panelsList.map((p, index) => (
				<article key={index}>
					<p>{p.panel_title}</p>
					<p>{p.main_url}</p>
					<p>{p.main_title}</p>
					<p>{p.category}</p>
				</article>
			))}
		</main>
	);
};

export default CRUD;
