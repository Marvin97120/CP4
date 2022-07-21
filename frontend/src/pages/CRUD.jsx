import { useState, useEffect } from "react";
import axios from "axios";

import NavAdmin from "@comp/NavAdmin";

const CRUD = () => {
	const [panels, setPanels] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:5000/all")
			.then((res) => setPanels(res.data))
			.catch((err) => {
				console.error(err.res.data);
			});
	}, []);

	const initialFormState = {
		title: "",
		text: "",
		category_id: "",
		main_image_id: "",
		illus1_id: "",
		illus2_id: "",
		illus3_id: "",
	};

	const [newPanel, setNewPanel] = useState(initialFormState);

	const addPanel = (newPanel) => {
		axios
			.post("http://localhost:5000/", newPanel)
			.then((result) => alert("Le panneau a bien été créé."))
			.catch((err) => console.error(err.res.data));

		setNewPanel(initialFormState);
	};

	const handleChange = (event) => {
		const { name, value } = event.target;

		setNewPanel({ ...newPanel, [name]: value });
	};

	if (!panels) return "";

	return (
		<>
			<NavAdmin />

			<main id="MainCRUD">
				<h1>Ajouter un panneau</h1>

				<section>
					<fieldset>
						<legend>panneau</legend>
						<label>Titre</label>
						<input
							type="text"
							name="title"
							value={newPanel.title}
							onChange={handleChange}
						/>

						<label>Texte</label>
						<input
							type="text"
							name="text"
							value={newPanel.text}
							onChange={handleChange}
						/>

						<label>Catégorie</label>
						<input
							type="text"
							name="category_id"
							value={newPanel.category_id}
							onChange={handleChange}
						/>

						<label>URL image principale</label>
						<input
							type="text"
							name="main_image_id"
							value={newPanel.main_image_id}
							onChange={handleChange}
						/>

						<label>URL image 1</label>
						<input
							type="text"
							name="illus1_id"
							value={newPanel.illus1_id}
							onChange={handleChange}
						/>

						<label>URL image 2</label>
						<input
							type="text"
							name="illus2_id"
							value={newPanel.illus2_id}
							onChange={handleChange}
						/>

						<label>URL image 3</label>
						<input
							type="text"
							name="illus3_id"
							value={newPanel.illus3_id}
							onChange={handleChange}
						/>
					</fieldset>

					<button onClick={() => addPanel(newPanel)}>
						Valider le formulaire
					</button>
				</section>
			</main>
		</>
	);
};

export default CRUD;
