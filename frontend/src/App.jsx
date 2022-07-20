import { BrowserRouter, Route, Routes } from "react-router-dom";

import AboutUs from "@page/AboutUs";
import CRUD from "@page/CRUD";
import ExpoDetails from "@page/ExpoDetails";
import Home from "@page/Home";
import Login from "@page/Login";
import NotFound from "@page/NotFound";
import PanelsList from "@page/PanelsList";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/a-propos" element={<AboutUs />} />
				<Route path="/details" element={<ExpoDetails />} />
				<Route path="/connexion" element={<Login />} />
				<Route path="/liste" element={<PanelsList />} />
				<Route path="/admin" element={<CRUD />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;

