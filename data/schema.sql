-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Room'
-- 
-- ---

DROP TABLE IF EXISTS `Room`;
		
CREATE TABLE `Room` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
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
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `bookedDates` INTEGER NULL DEFAULT NULL,
  `room_id` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `Calendar` ADD FOREIGN KEY (room_id) REFERENCES `Room` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `Room` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Calendar` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `Room` (`id`,`cost`,`reviews`,`guests`) VALUES
-- ('','','','');
-- INSERT INTO `Calendar` (`id`,`bookedDates`,`room_id`) VALUES
-- ('','','');