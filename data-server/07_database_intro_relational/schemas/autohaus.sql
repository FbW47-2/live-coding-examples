-- Schema online einsehen:
-- https://dbdesigner.page.link/ndRMWscSkAYEYx5R6

CREATE TABLE `hersteller` (
	`id` INT NOT NULL AUTO_INCREMENT UNIQUE,
	`name` varchar(255) NOT NULL UNIQUE,
	PRIMARY KEY (`id`)
);

CREATE TABLE `modell` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`hersteller_id` INT NOT NULL,
	`name` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `auto` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`modell_id` INT NOT NULL,
	`farbe` varchar(255) NOT NULL,
	`preis` FLOAT NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `ausstattung` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`bezeichnung` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `auto_ausstattung` (
	`auto_id` INT NOT NULL,
	`ausstattung_id` INT NOT NULL
);

CREATE TABLE `motor` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`bezeichnung` varchar(255) NOT NULL,
	`leistung` FLOAT NOT NULL,
	`hubraum` FLOAT NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `modell_motor` (
	`motor_id` INT NOT NULL,
	`modell_id` INT NOT NULL
);

CREATE TABLE `kaufvertrag` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`auto_id` INT NOT NULL,
	`kaufpreis` FLOAT NOT NULL,
	`rabatt` FLOAT NOT NULL,
	`skonto` FLOAT NOT NULL,
	`kaufdatum` DATE NOT NULL,
	`kunde_id` INT NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `kunde` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`name` varchar(255) NOT NULL,
	`telefonnummer` INT(255) NOT NULL,
	PRIMARY KEY (`id`)
);

ALTER TABLE `modell` ADD CONSTRAINT `modell_fk0` FOREIGN KEY (`hersteller_id`) REFERENCES `hersteller`(`id`);
ALTER TABLE `auto` ADD CONSTRAINT `auto_fk0` FOREIGN KEY (`modell_id`) REFERENCES `modell`(`id`);
ALTER TABLE `auto_ausstattung` ADD CONSTRAINT `auto_ausstattung_fk0` FOREIGN KEY (`auto_id`) REFERENCES `auto`(`id`);
ALTER TABLE `auto_ausstattung` ADD CONSTRAINT `auto_ausstattung_fk1` FOREIGN KEY (`ausstattung_id`) REFERENCES `ausstattung`(`id`);
ALTER TABLE `modell_motor` ADD CONSTRAINT `modell_motor_fk0` FOREIGN KEY (`motor_id`) REFERENCES `motor`(`id`);
ALTER TABLE `modell_motor` ADD CONSTRAINT `modell_motor_fk1` FOREIGN KEY (`modell_id`) REFERENCES `modell`(`id`);
ALTER TABLE `kaufvertrag` ADD CONSTRAINT `kaufvertrag_fk0` FOREIGN KEY (`auto_id`) REFERENCES `auto`(`id`);
ALTER TABLE `kaufvertrag` ADD CONSTRAINT `kaufvertrag_fk1` FOREIGN KEY (`kunde_id`) REFERENCES `kunde`(`id`);
