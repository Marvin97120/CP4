const panelsRouter = require("express").Router();

panelsRouter.get("/", (req, res) => {
	res.status(200).send("get all");
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
