const panelsRouter = require("express").Router();
const panels = require("../models/panels");

panelsRouter.get("/", (req, res) => {
	panels
		.findAll()
		.then((result) => {
			res.status(200).send(result);
		})
		.catch((err) => {
			console.error(err);
			res.status(500).send("Error requesting panels informations.");
		});
});

panelsRouter.get("/:id", (req, res) => {
	panels
		.findOne(req.params.id)
		.then((result) => {
			res.status(200).send(result);
		})
		.catch((err) => {
			console.error(err);
			res
				.status(500)
				.send(`Error requesting panel ${req.params.id} informations.`);
		});
});

panelsRouter.post("/", (req, res) => {
	res.status(200).send("post");
});

panelsRouter.put("/:id", (req, res) => {
	res.status(200).send("put");
});

panelsRouter.delete("/:id", (req, res) => {
	res.status(200).send("delete");
});

module.exports = panelsRouter;
