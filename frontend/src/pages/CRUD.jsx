import { useState, useEffect } from "react";
import axios from "axios";

import NavAdmin from "@comp/NavAdmin";

const CRUD = () => {
	const [panels, setPanels] = useState([]);
	const [choice, setChoice] = useState(true);

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
	const [currentPanel, setCurrentPanel] = useState("");

	const addPanel = (newPanel) => {
		axios
			.post("http://localhost:5000/", newPanel)
			.then((result) => {
				alert("Le panneau a bien été créé.");
				window.location.reload();
			})
			.catch((err) => console.error(err.res.data));

		setNewPanel(initialFormState);
	};

	const updatePanel = () => {};

	const handleChange = (event) => {
		const { name, value } = event.target;

		setNewPanel({ ...newPanel, [name]: value });
	};

	if (!panels) return "";

	return (
		<>
			<NavAdmin />

			<main id="MainCRUD">
				<button onClick={() => setChoice(true)}>Ajouter un Panneau</button>
				<button onClick={() => setChoice(false)}>Modifier les panneaux</button>

				<h1>{choice ? "Ajouter un panneau" : "Modifier un panneau"}</h1>

				{!choice ? (
					<section className="panelChoice">
						{panels.map((p, index) => (
							<article key={index}>
								<img
									src={p.main_url}
									alt={p.main_alt}
									className="thumbnail"
									onClick={() => {
										axios
											.get(`http://localhost:5000/${p.id}`)
											.then((res) => setCurrentPanel(res.data))
											.catch((err) => console.error(err.res.data));
									}}
								/>
							</article>
						))}
					</section>
				) : (
					<section className="panelChoice"></section>
				)}

				<section>
					<fieldset>
						<legend>{choice ? "panneau" : `panneau ${currentPanel.id}`}</legend>
						<label>Titre</label>
						<input
							type="text"
							name="title"
							value={newPanel.title}
							placeholder={!choice ? `${currentPanel.panel_title}` : ""}
							onChange={handleChange}
						/>

						<label>Texte</label>
						<input
							type="text"
							name="text"
							value={newPanel.text}
							placeholder={!choice ? `${currentPanel.text}` : ""}
							onChange={handleChange}
						/>

						<label>Catégorie</label>
						<input
							type="text"
							name="category_id"
							value={newPanel.category_id}
							placeholder={!choice ? `${currentPanel.category}` : ""}
							onChange={handleChange}
						/>

						<label>URL image principale</label>
						<input
							type="text"
							name="main_image_id"
							value={newPanel.main_image_id}
							placeholder={!choice ? `${currentPanel.main_url}` : ""}
							onChange={handleChange}
						/>

						<label>URL image 1</label>
						<input
							type="text"
							name="illus1_id"
							value={newPanel.illus1_id}
							placeholder={!choice ? `${currentPanel.illus1_url}` : ""}
							onChange={handleChange}
						/>

						<label>URL image 2</label>
						<input
							type="text"
							name="illus2_id"
							value={newPanel.illus2_id}
							placeholder={!choice ? `${currentPanel.illus2_url}` : ""}
							onChange={handleChange}
						/>

						<label>URL image 3</label>
						<input
							type="text"
							name="illus3_id"
							value={newPanel.illus3_id}
							placeholder={!choice ? `${currentPanel.illus3_url}` : ""}
							onChange={handleChange}
						/>
					</fieldset>
					{choice ? (
						<button onClick={() => addPanel(newPanel)}>Créer le panneau</button>
					) : (
						<>
							<button onClick={() => changePanel(panel, id)}>
								Modifier le panneau
							</button>

							<button onClick={() => deletePanel(id)}>
								Supprimer le panneau
							</button>
						</>
					)}
				</section>
			</main>
		</>
	);
};

export default CRUD;
