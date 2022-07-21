import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import Nav from "@comp/Nav";

const PanelDetails = () => {
	const { id } = useParams();
	const [panel, setPanel] = useState([]);

	useEffect(() => {
		axios
			.get(`http://localhost:5000/${id}`)
			.then((res) => {
				setPanel(res.data);
			})
			.catch((err) => console.error(err));
	}, []);

	return (
		<>
			<Nav />

			<Link to="/admin">
				<button>Retour aux panneaux</button>
			</Link>

			<main id="MainPanelDetails">
				<h1>{panel.panel_title}</h1>
				<p>{panel.category}</p>

				<div className="main-image">
					<cite>{panel.main_title}</cite>
					<img src={`../${panel.main_url}`} alt={panel.main_alt} />
				</div>

				<div className="illustration-container">
					<div className="illustration">
						<img src={`../${panel.illus1_url}`} alt={panel.illus1_alt} />
					</div>

					<div className="illustration">
						<img src={`../${panel.illus2_url}`} alt={panel.illus2_alt} />
					</div>

					<div className="illustration">
						<img src={`../${panel.illus3_url}`} alt={panel.illus3_alt} />
					</div>
				</div>

				<p>{panel.text}</p>
			</main>
		</>
	);
};

export default PanelDetails;
