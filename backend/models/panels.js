const connection = require("../db-config");
const db = connection.promise();

const findAll = () => {
	return db
		.query(
			`SELECT
            p.title panel_title,
            p.text,
            p.main_image_id,
            p.illus1_id illustration_01,
            p.illus2_id illustration_02,
            p.illus3_id illustration_03,
            i.title main_title,
            i.url main_url,
            i.alt main_alt,
            i1.title illus1_title,
            i1.url illus1_url,
            i1.alt illus1_alt,
            i2.title illus2_title,
            i2.url illus2_url,
            i2.alt illus2_alt,
            i3.title illus3_title,
            i3.url illus3_url,
            i3.alt illus3_alt,
            c.name category
            FROM panels p
            INNER JOIN categories c
            ON p.id = c.id
            INNER JOIN images i
            ON p.main_image_id = i.id
            INNER JOIN images i1
            ON p.illus1_id = i1.id
            INNER JOIN images i2
            ON p.illus2_id = i2.id
            INNER JOIN images i3
            ON p.illus3_id = i3.id
            `
		)
		.then(([res]) => res);
};

const findOne = (id) => {
	return db
		.query("SELECT firstname, lastname, email, phone FROM users WHERE id = ?", [
			id,
		])
		.then(([res]) => res[0]);
};

const add = (user) => {
	return db.query(
		"INSERT INTO users (firstname, lastname, password, email, phone) VALUES (?, ?, ?, ?, ?)",
		[user.firstname, user.lastname, user.password, user.email, user.phone]
	);
};

const update = (user, id) => {
	return db.query(`UPDATE users SET ? WHERE id = ?`, [user, id]);
};

const remove = (id) => {
	return db.query("DELETE FROM users WHERE id = ?", [id]);
};

module.exports = { findAll, findOne, add, update, remove };
