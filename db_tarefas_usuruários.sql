-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: crud_db
-- ------------------------------------------------------
-- Server version	8.0.39

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tarefas`
--

DROP TABLE IF EXISTS `tarefas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tarefas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `lugar` varchar(255) NOT NULL,
  `prioridade` enum('alta','media','baixa') NOT NULL,
  `concluida` tinyint(1) DEFAULT '0',
  `horario` datetime NOT NULL,
  `responsavel` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `responsavel` (`responsavel`),
  CONSTRAINT `tarefas_ibfk_1` FOREIGN KEY (`responsavel`) REFERENCES `users` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tarefas`
--

LOCK TABLES `tarefas` WRITE;
/*!40000 ALTER TABLE `tarefas` DISABLE KEYS */;
INSERT INTO `tarefas` VALUES (1,'Fazer o crud','casa','alta',0,'2024-09-29 06:23:51',1,'2024-09-29 03:23:51','2024-09-29 03:23:51'),(2,'Atualizar crud','casa','alta',0,'2024-09-29 06:25:36',2,'2024-09-29 03:25:36','2024-09-29 03:25:36'),(3,'Revisar documentação','escritório','media',0,'2024-09-29 07:12:32',1,'2024-09-29 04:12:32','2024-09-29 04:12:32'),(4,'Implementar nova feature','remoto','alta',0,'2024-09-29 07:12:48',2,'2024-09-29 04:12:48','2024-09-29 04:12:48'),(5,'Corrigir bugs','escritório','alta',0,'2024-09-29 07:14:35',2,'2024-09-29 04:14:35','2024-09-29 04:14:35'),(6,'Organizar repositório','remoto','media',0,'2024-09-29 07:14:44',1,'2024-09-29 04:14:44','2024-09-29 04:14:44'),(7,'Planejar sprint','casa','alta',0,'2024-09-29 07:15:46',3,'2024-09-29 04:15:46','2024-09-29 04:15:46'),(8,'Refatorar código','escritório','media',0,'2024-09-29 07:15:57',3,'2024-09-29 04:15:57','2024-09-29 04:15:57'),(9,'Atualizar banco de dados','remoto','alta',0,'2024-09-29 07:16:09',3,'2024-09-29 04:16:09','2024-09-29 04:16:09'),(10,'Documentar API','casa','baixa',0,'2024-09-29 07:16:18',3,'2024-09-29 04:16:18','2024-09-29 04:16:18');
/*!40000 ALTER TABLE `tarefas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `age` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Rodrigo','rodrigo.francisco@gmail.com',34),(2,'Matheus','matheus.sousa@gmail.com',23),(3,'Romulo','romulo_santos@gmail.com',26);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-09-29  2:00:46
