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
	res.status(200).send("get one");
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
