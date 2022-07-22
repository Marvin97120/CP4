const Joi = require("joi");

const checkPost = (req, res, next) => {
	const {
		panel_title,
		text,
		category_id,
		main_image_id,
		illus1_id,
		illus2_id,
		illus3_id,
	} = req.body;

	const { error } = Joi.object({
		panel_title: Joi.string().max(255).required(),
		text: Joi.string().max(255).required(),
		category_id: Joi.number().integer().less(5).required(),
		main_image_id: Joi.number().integer().required(),
		illus1_id: Joi.number().integer().optional(),
		illus2_id: Joi.number().integer().optional(),
		illus3_id: Joi.number().integer().optional(),
	}).validate(
		{
			panel_title,
			text,
			category_id,
			main_image_id,
			illus1_id,
			illus2_id,
			illus3_id,
		},
		{ abortEarly: false }
	);

	if (!error) {
		next();
	} else {
		console.log(error);
		res.status(400).json(error);
	}
};

module.exports = { checkPost };
