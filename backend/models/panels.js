const connection = require("../db-config");
const db = connection.promise();

const findAll = () => {
	return db
		.query(
			`SELECT
            p.id,
            p.title panel_title,
            p.text,
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
		.query(
			`SELECT
        p.title panel_title,
        p.text,
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
        WHERE p.id = ?
        `,
			[id]
		)
		.then(([res]) => res[0]);
};

const add = (panel) => {
	return db.query(
		"INSERT INTO panels (title, main_image_id, illus1_id, illus2_id, illus3_id, text, category_id) VALUES (?, ?, ?, ?, ?, ?, ?)",
		[
			panel.title,
			panel.main_image_id,
			panel.illus1_id,
			panel.illus2_id,
			panel.illus3_id,
			panel.text,
			panel.category_id,
		]
	);
};

const update = (panel, id) => {
	return db.query(`UPDATE panels SET ? WHERE id = ?`, [panel, id]);
};

const remove = (id) => {
	return db.query("DELETE FROM panels WHERE id = ?", [id]);
};

module.exports = { findAll, findOne, add, update, remove };
