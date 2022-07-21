import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import NavAdmin from "@comp/NavAdmin";

const CRUD = () => {
	return (
		<>
			<NavAdmin />

			<main id="MainCRUD">CRUD</main>
		</>
	);
};

export default CRUD;
