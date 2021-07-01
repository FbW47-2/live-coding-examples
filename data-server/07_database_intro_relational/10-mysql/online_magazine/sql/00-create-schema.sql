-- Schema online einsehen:
-- https://dbdesigner.page.link/t16dLdHxLxiErZro6

CREATE TABLE `article` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`publish_date` DATETIME NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `translation` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`lang_code` varchar(2) NOT NULL,
	`article_id` INT NOT NULL,
	`title` varchar(255) NOT NULL,
	`teaser` varchar(255) NOT NULL,
	`text` TEXT NOT NULL,
	`link` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `user` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`name` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `reading_list` (
	`article_id` INT NOT NULL,
	`user_id` INT NOT NULL,
	`read` tinyint(1) NOT NULL DEFAULT '0',
	PRIMARY KEY (`article_id`,`user_id`)
);

CREATE TABLE `comment` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`article_id` INT NOT NULL,
	`user_id` INT NOT NULL,
	`text` TEXT NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `language` (
	`lang_code` varchar(2) NOT NULL,
	`name` varchar(255) NOT NULL,
	PRIMARY KEY (`lang_code`)
);

ALTER TABLE `translation` ADD CONSTRAINT `translation_fk0` FOREIGN KEY (`lang_code`) REFERENCES `language`(`lang_code`);
ALTER TABLE `translation` ADD CONSTRAINT `translation_fk1` FOREIGN KEY (`article_id`) REFERENCES `article`(`id`);
ALTER TABLE `reading_list` ADD CONSTRAINT `reading_list_fk0` FOREIGN KEY (`article_id`) REFERENCES `article`(`id`);
ALTER TABLE `reading_list` ADD CONSTRAINT `reading_list_fk1` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`);
ALTER TABLE `comment` ADD CONSTRAINT `comment_fk0` FOREIGN KEY (`article_id`) REFERENCES `article`(`id`);
ALTER TABLE `comment` ADD CONSTRAINT `comment_fk1` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`);
