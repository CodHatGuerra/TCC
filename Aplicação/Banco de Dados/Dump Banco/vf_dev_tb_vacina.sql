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
-- Table structure for table `tb_vacina`
--

DROP TABLE IF EXISTS `tb_vacina`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_vacina` (
  `ID_Vacina` int NOT NULL,
  `Nome` varchar(150) NOT NULL,
  `Fábrica` varchar(150) NOT NULL,
  `Data_Fabricacao` date NOT NULL,
  `Lote` varchar(20) NOT NULL,
  `Data_Aplicacao` date NOT NULL,
  `Dose` varchar(45) NOT NULL,
  `Data_Vinculada` date NOT NULL,
  `TB_Carteira_vacina_ID_Carteira` int NOT NULL,
  PRIMARY KEY (`ID_Vacina`),
  UNIQUE KEY `ID_Vacina_UNIQUE` (`ID_Vacina`),
  KEY `fk_TB_Vacina_TB_Carteira_vacina1_idx` (`TB_Carteira_vacina_ID_Carteira`),
  CONSTRAINT `fk_TB_Vacina_TB_Carteira_vacina1` FOREIGN KEY (`TB_Carteira_vacina_ID_Carteira`) REFERENCES `tb_carteira_vacina` (`ID_Carteira`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_vacina`
--

LOCK TABLES `tb_vacina` WRITE;
/*!40000 ALTER TABLE `tb_vacina` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_vacina` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-28 17:15:14
