-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.4.28-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.5.0.6677
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para prueba_macarenia
CREATE DATABASE IF NOT EXISTS `prueba_macarenia` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `prueba_macarenia`;

-- Volcando estructura para tabla prueba_macarenia.personas
CREATE TABLE IF NOT EXISTS `personas` (
  `id` int(3) NOT NULL AUTO_INCREMENT,
  `document_number` int(10) NOT NULL,
  `first_name` varchar(30) NOT NULL,
  `middle_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `second_surname` varchar(30) NOT NULL,
  `birthdate` date NOT NULL,
  `country_birth` varchar(60) NOT NULL,
  `gender` varchar(30) NOT NULL,
  `civil_status` varchar(30) NOT NULL,
  `id_type_document` int(2) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `personas_ibfk_1` (`id_type_document`),
  CONSTRAINT `personas_ibfk_1` FOREIGN KEY (`id_type_document`) REFERENCES `tipo_documento` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla prueba_macarenia.tareas
CREATE TABLE IF NOT EXISTS `tareas` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `title` varchar(60) NOT NULL,
  `description` text NOT NULL,
  `limit_date` date DEFAULT NULL,
  `id_person` int(3) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `tareas_ibfk_1` (`id_person`),
  CONSTRAINT `tareas_ibfk_1` FOREIGN KEY (`id_person`) REFERENCES `personas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla prueba_macarenia.tipo_documento
CREATE TABLE IF NOT EXISTS `tipo_documento` (
  `id` int(2) NOT NULL AUTO_INCREMENT,
  `type_document` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- La exportación de datos fue deseleccionada.

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
