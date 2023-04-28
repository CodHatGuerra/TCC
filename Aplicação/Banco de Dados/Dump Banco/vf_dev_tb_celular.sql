-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: vf_dev
-- ------------------------------------------------------
-- Server version	8.0.33

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
-- Table structure for table `tb_celular`
--

DROP TABLE IF EXISTS `tb_celular`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_celular` (
  `ID_Celular` int NOT NULL,
  `Numero` varchar(45) NOT NULL,
  `TB_Posto_ID_Instituicao` int NOT NULL,
  `TB_Usuario_ID_Usuario` int NOT NULL,
  PRIMARY KEY (`ID_Celular`),
  UNIQUE KEY `ID_Celular_UNIQUE` (`ID_Celular`),
  KEY `fk_TB_Celular_TB_Posto1_idx` (`TB_Posto_ID_Instituicao`),
  KEY `fk_TB_Celular_TB_Usuario1_idx` (`TB_Usuario_ID_Usuario`),
  CONSTRAINT `fk_TB_Celular_TB_Posto1` FOREIGN KEY (`TB_Posto_ID_Instituicao`) REFERENCES `tb_posto` (`ID_Posto`),
  CONSTRAINT `fk_TB_Celular_TB_Usuario1` FOREIGN KEY (`TB_Usuario_ID_Usuario`) REFERENCES `tb_usuario` (`ID_Usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_celular`
--

LOCK TABLES `tb_celular` WRITE;
/*!40000 ALTER TABLE `tb_celular` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_celular` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-28 17:15:13
