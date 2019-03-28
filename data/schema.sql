-- ---
-- Database
-- ---

DROP DATABASE IF EXISTS `checkout`;

CREATE DATABASE `checkout`;

USE `checkout`;

DROP TABLE IF EXISTS `Room`;

-- ---
-- Table 'Room'
-- 
-- ---
		
CREATE TABLE `Room` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `cost` INTEGER NULL DEFAULT NULL,
  `reviews` INTEGER NULL DEFAULT NULL,
  `guests` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Calendar'
-- 
-- ---

DROP TABLE IF EXISTS `Calendar`;
		
CREATE TABLE `Calendar` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `bookedDates` INTEGER NULL DEFAULT NULL,
  `room_id` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `Calendar` ADD FOREIGN KEY (room_id) REFERENCES `Room` (`id`);

-- ---
-- Test Data
-- ---

-- INSERT INTO `Room` (`id`,`cost`,`reviews`,`guests`) VALUES
-- ('','','','');
-- INSERT INTO `Calendar` (`id`,`bookedDates`,`room_id`) VALUES
-- ('','','');