-- -----------------------------------------------------
-- Schema customer-satisfaction-survey
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `customer-satisfaction-survey`;

CREATE SCHEMA `customer-satisfaction-survey`;
USE `customer-satisfaction-survey` ;

-- -----------------------------------------------------
-- Table `customer-satisfaction-survey`.`topic`
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS `customer-satisfaction-survey`.`topic` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `description` VARCHAR(255) DEFAULT NULL,
  `npm_score` DECIMAL(13,2) DEFAULT NULL,
  PRIMARY KEY (`id`)) 
ENGINE=InnoDB
AUTO_INCREMENT = 1;

-- -----------------------------------------------------
-- Table `customer-satisfaction-survey`.`question`
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS `customer-satisfaction-survey`.`question` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `topic_id` BIGINT(20) NOT NULL,
  `description` VARCHAR(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_question_to_topic` (`topic_id`),
  CONSTRAINT `fk_question_to_topic` FOREIGN KEY (`topic_id`) REFERENCES `topic` (`id`)
) 
ENGINE=InnoDB
AUTO_INCREMENT = 1;

-- -----------------------------------------------------
-- Table `customer-satisfaction-survey`.`answer`
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS `customer-satisfaction-survey`.`answer` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `question_id` BIGINT(20) NOT NULL,
  `score` INT DEFAULT NULL,
  `feedback` VARCHAR(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_answer_to_question` (`question_id`),
  CONSTRAINT `fk_answer_to_question` FOREIGN KEY (`question_id`) REFERENCES `question` (`id`)
) 
ENGINE=InnoDB
AUTO_INCREMENT = 1;







