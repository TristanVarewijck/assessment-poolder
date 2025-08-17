CREATE TABLE `users` (
	`id` int AUTO_INCREMENT NOT NULL,
	`created_at` timestamp DEFAULT (now()),
	`email` varchar(255) NOT NULL,
	`name` varchar(255) NOT NULL,
	`avatar` varchar(255),
	`bio` text,
	CONSTRAINT `users_id` PRIMARY KEY(`id`),
	CONSTRAINT `users_email_unique` UNIQUE(`email`)
);
