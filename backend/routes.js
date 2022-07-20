const panelsRouter = require("./controllers/panels");

const setup = (app) => {
	app.use("/", panelsRouter);
};

module.exports = { setup };

