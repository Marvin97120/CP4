DROP TABLE IF EXISTS `panels`;
DROP TABLE IF EXISTS `images`;
DROP TABLE IF EXISTS `categories`;

-- ------------------------------------------------------------------------- --

CREATE TABLE `categories` (
  `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL
  ) ENGINE=InnoDB;

LOCK TABLES `categories` WRITE;
INSERT INTO `categories` (`name`) VALUES
("l'usine"),
("les travailleurs"),
("les productions"),
("les K'Veguen");
UNLOCK TABLES;

-- ------------------------------------------------------------------------- --

CREATE TABLE `images` (
  `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `url` VARCHAR(255) NOT NULL,
  `alt` VARCHAR(255) NOT NULL,
  `original_src` VARCHAR(255) NOT NULL
  ) ENGINE=InnoDB;

LOCK TABLES `images` WRITE;
INSERT INTO `images` (`title`, `url`, `alt`, `original_src`) VALUES
("image01", "urltest01", "alttest", "originalsrctest"),
("image02", "urltest02", "alttest", "originalsrctest"),
("image03", "urltest03", "alttest", "originalsrctest"),
("image04", "urltest04", "alttest", "originalsrctest"),
("image05", "urltest05", "alttest", "originalsrctest"),
("image06", "urltest06", "alttest", "originalsrctest"),
("image07", "urltest07", "alttest", "originalsrctest"),
("image08", "urltest08", "alttest", "originalsrctest"),
("image09", "urltest09", "alttest", "originalsrctest"),
("image10", "urltest10", "alttest", "originalsrctest"),
("image11", "urltest11", "alttest", "originalsrctest"),
("image12", "urltest12", "alttest", "originalsrctest");
UNLOCK TABLES;

-- ------------------------------------------------------------------------- --

CREATE TABLE `panels` (
  `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `main_image_id` INT NOT NULL,
  `illus1_id` INT NULL,
  `illus2_id` INT NULL,
  `illus3_id` INT NULL,
  `text` VARCHAR(255) NOT NULL,
  `category_id` INT NOT NULL,
  FOREIGN KEY (main_image_id) REFERENCES images(id),
  FOREIGN KEY (illus1_id) REFERENCES images(id),
  FOREIGN KEY (illus2_id) REFERENCES images(id),
  FOREIGN KEY (illus3_id) REFERENCES images(id),
  FOREIGN KEY (category_id) REFERENCES categories(id)
  ) ENGINE=InnoDB;

LOCK TABLES `panels` WRITE;
INSERT INTO `panels` (`title`, `main_image_id`, `illus1_id`, `illus2_id`, `illus3_id`, `text`, `category_id`) VALUES
("panneau01", 1, 2, 3, 4, "description panneau01", 1),
("panneau02", 5, 6, 7, 8, "description panneau02", 2),
("panneau03", 9, 10, 11, 12, "description panneau03", 3);
UNLOCK TABLES;