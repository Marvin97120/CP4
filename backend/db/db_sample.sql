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
("image01", "urltest", "alttest", "originalsrctest"),
("image02", "urltest", "alttest", "originalsrctest"),
("image03", "urltest", "alttest", "originalsrctest"),
("image04", "urltest", "alttest", "originalsrctest"),
("image05", "urltest", "alttest", "originalsrctest"),
("image06", "urltest", "alttest", "originalsrctest"),
("image07", "urltest", "alttest", "originalsrctest"),
("image08", "urltest", "alttest", "originalsrctest"),
("image09", "urltest", "alttest", "originalsrctest"),
("image10", "urltest", "alttest", "originalsrctest"),
("image11", "urltest", "alttest", "originalsrctest"),
("image12", "urltest", "alttest", "originalsrctest");
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
("panneau01", 1, 2, 3, 4, "description panneau", 1),
("panneau02", 5, 6, 7, 8, "description panneau", 2),
("panneau03", 9, 10, 11, 12, "description panneau", 3);
UNLOCK TABLES;