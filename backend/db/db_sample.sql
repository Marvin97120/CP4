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
("image01", "./src/assets/image01.webp", "alttest", "https://padlet.com/afac974/expo_Bel_Air"),
("image02", "./src/assets/image02.webp", "alttest", "https://padlet.com/afac974/expo_Bel_Air"),
("image03", "./src/assets/image03.webp", "alttest", "https://padlet.com/afac974/expo_Bel_Air"),
("image04", "./src/assets/image04.webp", "alttest", "https://padlet.com/afac974/expo_Bel_Air"),
("image05", "./src/assets/image05.webp", "alttest", "https://padlet.com/afac974/expo_Bel_Air"),
("image06", "./src/assets/image06.webp", "alttest", "https://padlet.com/afac974/expo_Bel_Air"),
("image07", "./src/assets/image07.webp", "alttest", "https://padlet.com/afac974/expo_Bel_Air"),
("image08", "./src/assets/image08.webp", "alttest", "https://padlet.com/afac974/expo_Bel_Air"),
("image09", "./src/assets/image09.webp", "alttest", "https://padlet.com/afac974/expo_Bel_Air"),
("image10", "./src/assets/image10.webp", "alttest", "https://padlet.com/afac974/expo_Bel_Air"),
("image11", "./src/assets/image11.webp", "alttest", "https://padlet.com/afac974/expo_Bel_Air"),
("image12", "./src/assets/image12.webp", "alttest", "https://padlet.com/afac974/expo_Bel_Air");
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
("panneau 01", 1, 2, 3, 4, "description panneau01", 1),
("panneau 02", 5, 6, 7, 8, "description panneau02", 2),
("panneau 03", 9, 10, 11, 12, "description panneau03", 3);
UNLOCK TABLES;