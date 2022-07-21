const panelsRouter = require("express").Router();
const panels = require("../models/panels");

panelsRouter.get("/all", (req, res) => {
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
	panels
		.add(req.body)
		.then(([result]) => {
			res.status(200).send({ ...req.body, id: result.insertId });
		})
		.catch((err) => {
			console.error(err);
			res.status(500).send(`Error creating panel.`);
		});
});

panelsRouter.put("/:id", (req, res) => {
	console.log(req.body);
	panels
		.update(req.body, parseInt(req.params.id, 10))
		.then(([result]) => {
			if (result.affectedRows === 0) {
				res.sendStatus(404);
			} else {
				res.status(201).send(`Panel ${req.params.id} successfully updated`);
			}
		})
		.catch((err) => {
			console.error(err);
			res.status(500).send("Error updating panel.");
		});
});

panelsRouter.delete("/:id", (req, res) => {
	panels
		.remove(req.params.id)
		.then((result) => {
			res.status(200).send(`Panel ${req.params.id} successfully deleted`);
		})
		.catch((err) => {
			console.error(err);
			res.status(500).send("Error during panel deletion.");
		});
});

module.exports = panelsRouter;
