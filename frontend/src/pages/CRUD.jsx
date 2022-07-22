import { useState, useEffect } from "react";
import axios from "axios";

import NavAdmin from "@comp/NavAdmin";

const initialFormState = {
	panel_title: "",
	text: "",
	category_id: "",
	main_image_id: "",
	illus1_id: "",
	illus2_id: "",
	illus3_id: "",
};

const CRUD = () => {
	const [panels, setPanels] = useState([]);
	const [newPanel, setNewPanel] = useState(initialFormState);
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		axios
			.get(`${import.meta.env.VITE_BACKEND_URL}/all`)
			.then((res) => {
				setPanels(res.data);
			})
			.catch((err) => {
				console.error(err.res.data);
			});
	}, []);

	useEffect(() => {
		axios
			.get(`${import.meta.env.VITE_BACKEND_URL}/cat`)
			.then((res) => {
				setCategories(res.data);
			})
			.catch((err) => {
				console.error(err.res.data);
			});
	}, []);

	const loadIdFromImage = (id) => {
		setNewPanel(panels.find((panel) => panel.id === id));
	};

	const addPanel = (newPanel) => {
		axios
			.post(`${import.meta.env.VITE_BACKEND_URL}/create`, newPanel)
			.then((result) => {
				alert("Le panneau a bien été créé.");
				setNewPanel(initialFormState);
			})
			.catch((err) => console.error(err.res.data));
	};

	const updatePanel = (panel, id) => {
		axios
			.put(`${import.meta.env.VITE_BACKEND_URL}/panel/${id}`, panel)
			.then((res) => alert("Le panneau a bien été modifié."))
			.catch((err) => console.error(err.res.data));
	};

	const deletePanel = (id) => {
		axios
			.delete(`${import.meta.env.VITE_BACKEND_URL}/panel/${id}`)
			.then((res) => {
				alert("Le panneau a bien été supprimé.");
				setPanels(panels.filter((panel) => panel.id !== id));
			})
			.catch((err) => {
				console.warn(err.res.data);
			});
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
				<div className="button-container">
					<button onClick={() => setNewPanel(initialFormState)}>
						Ajouter un Panneau
					</button>

					<button onClick={() => setNewPanel(panels[0])}>
						Modifier les panneaux
					</button>
				</div>

				<h1>{!newPanel.id ? "Ajouter un panneau" : "Modifier un panneau"}</h1>

				{newPanel.id ? (
					<section className="panelChoice">
						{panels.map((p, index) => (
							<article key={index}>
								<img
									src={p.main_url}
									alt={p.main_alt}
									className="thumbnail"
									onClick={() => loadIdFromImage(p.id)}
								/>
							</article>
						))}
					</section>
				) : (
					<section className="panelChoice"></section>
				)}

				{console.log(`${import.meta.env.BASE_URL}`)}

				<section>
					<fieldset>
						<legend>
							{!newPanel.id ? "panneau" : `panneau ${newPanel.id}`}
						</legend>

						{console.log(newPanel)}

						{/* TITRE */}
						<label>Titre</label>

						{!newPanel.id ? (
							<input
								type="text"
								name="panel_title"
								value={newPanel.panel_title}
								onChange={handleChange}
							/>
						) : (
							<input
								type="text"
								name="panel_title"
								value={newPanel.panel_title}
								placeholder={newPanel.panel_title}
								onChange={handleChange}
							/>
						)}

						{/* TEXTE */}
						<label>Texte</label>
						<input
							type="text"
							name="text"
							value={newPanel.text}
							placeholder={!newPanel.id ? "" : newPanel.text}
							onChange={handleChange}
						/>

						{/* CATEGORIE */}
						<label>Catégorie</label>

						{!newPanel.id ? (
							<input
								type="text"
								name="category_id"
								value={newPanel.category_id}
								onChange={handleChange}
							/>
						) : (
							<select
								type="text"
								name="category_id"
								value={newPanel.category_id}
								placeholder={!newPanel.id ? "" : newPanel.category}
								onChange={handleChange}
							>
								{categories.map((cat) => (
									<option value={cat.id}>{cat.name}</option>
								))}
							</select>
						)}

						{/* IMAGE PRINC */}
						<label>URL image principale</label>

						<input
							type="text"
							name="main_image_id"
							value={newPanel.main_image_id}
							placeholder={!newPanel.id ? "" : newPanel.main_image_id}
							onChange={handleChange}
						/>

						{/* IMAGE 2 */}
						<label>URL image 1</label>
						<input
							type="text"
							name="illus1_id"
							value={newPanel.illus1_id}
							placeholder={!newPanel.id ? "" : newPanel.illus1_id}
							onChange={handleChange}
						/>

						{/* IMAGE 3 */}
						<label>URL image 2</label>
						<input
							type="text"
							name="illus2_id"
							value={newPanel.illus2_id}
							placeholder={!newPanel.id ? "" : newPanel.illus2_id}
							onChange={handleChange}
						/>

						{/* IMAGE 4 */}
						<label>URL image 3</label>
						<input
							type="text"
							name="illus3_id"
							value={newPanel.illus3_id}
							placeholder={!newPanel.id ? "" : newPanel.illus3_id}
							onChange={handleChange}
						/>
					</fieldset>

					<div className="button-container">
						{!newPanel.id ? (
							<button onClick={() => addPanel(newPanel)}>
								Créer le panneau
							</button>
						) : (
							<>
								<button onClick={() => updatePanel(newPanel, newPanel.id)}>
									Modifier le panneau
								</button>

								<button onClick={() => deletePanel(newPanel.id)}>
									Supprimer le panneau
								</button>
							</>
						)}
					</div>
				</section>
			</main>
		</>
	);
};

export default CRUD;
