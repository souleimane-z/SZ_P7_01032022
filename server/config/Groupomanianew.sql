-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: groupomanianew
-- ------------------------------------------------------
-- Server version	8.0.28

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
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `idComment` int NOT NULL AUTO_INCREMENT,
  `comment` text NOT NULL,
  `idUser` int DEFAULT NULL,
  `idPost` int DEFAULT NULL,
  PRIMARY KEY (`idComment`),
  KEY `idUser` (`idUser`),
  KEY `idPost` (`idPost`),
  CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `users` (`idUser`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`idPost`) REFERENCES `posts` (`idPost`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=103 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES 
(83,'Bonjour John ! Comment tu vas ? ',48,NULL),
(85,'Yeah',50,123),(88,'On est prêt ! ',51,123),
(89,'Salut Alan !',47,126),(90,'Bienvenue Emilie ! Heureuse que tu partage notre vision !',52,147),
(91,'Let\'s Go ! ?',51,147),(92,'bienvenue Émilie, si tu as des questions on est là pour t\'aider. Bon courage pour la suite ',50,147),
(93,'Ne t\'inquiète pas tout le monde est heureux de t\'accueillir au sein de Groupomania ?',48,147),
(96,'Bonjour à toi, et on espère que tu réussiras dans cette nouvelle aventure',47,147);
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `idPost` int NOT NULL AUTO_INCREMENT,
  `content` text,
  `imageUrl` text,
  `idUser` int DEFAULT NULL,
  PRIMARY KEY (`idPost`),
  KEY `idUser` (`idUser`),
  CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `users` (`idUser`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=158 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES 
(122,'Bienvenu à tous sur le réseau Groupomania ! ici vous pourrez partager entre collègues à propos du travail ou de la vie ; surtout de la vie j\'espère !  ?  ','http://localhost:8080/images/welcome.gif1647429496076.gif',47),
(123,'une bonne journée qui commence chez Groupomania !','http://localhost:8080/images/cat-busy.gif1647503394151.gif',48),
(124,'Les locaux sont beaux vu de l\'extérieur ','http://localhost:8080/images/Building_Groupomania_Logo.jpg1647506433207.jpg',51),(
125,'On est de plus en plus productifs grâce à ce réseau social ','http://localhost:8080/images/team.jpg1647526288516.jpg',52),(126,'bonjour',NULL,53),
(147,'Bonjour tout le monde, je suis nouvelle chez groupomania! Heureuse de pouvoir rejoindre l\'aventure et j\'espère qu\'on pourra tous porter emmener l\'entreprise bien au delà des objectifs fixés ? ',NULL,54),
(148,'La clé du succès ↓ ! ?','http://localhost:8080/images/Team_Work.png1647848711189.png',53);
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `idUser` int NOT NULL AUTO_INCREMENT,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `username` varchar(15) NOT NULL,
  `profilePicture` varchar(255) DEFAULT NULL,
  `isAdmin` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`idUser`),
  UNIQUE KEY `users_username_email` (`username`,`email`)
) ENGINE=InnoDB AUTO_INCREMENT=59 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES 
(47,'admin@admin.fr','$2a$08$OmjvXxG6lo381IWjX4w6kOG7UXcjz7TPupwjM2KdNWIY2twtoKqlC','admin','http://localhost:8080/images/Admin.png1647429234443.png',1),
(48,'jane@groupomania.com','$2a$08$mpm1LHB3O1kR6la3ZZUpLOi/y.n//io4DeFA/vevC4oZUfaqefmCi','Jane','http://localhost:8080/images/generated_face_woman.jpg1647503609095.jpg',0),
(49,'john.doe@groupomania.com','$2a$08$CVo.5TgK7gUoZQ5w4bVBue6x6AQGnhwzXns.QZEE1iP2lgnSTYEvC','John',NULL,0),
(50,'yanis@gmail.com','$2a$08$4E0ffQoQFqLwp7QCvnVnvOOsAb8hB3krgPmvIA9YnV9oW1G.kTeeq','Yanis','http://localhost:8080/images/generated_face_men.jpg1647505436431.jpg',0),
(51,'mamadou.dialo@gmail.com','$2a$08$AseeYgXwFnll3OUTkZWhgedaA4FlEx2j3vM2CENnb2QsqDCtZ47jG','MamadDialo',NULL,0),
(52,'sylvie@groupomania.com','$2a$08$/Y/s4g6uLmhU5M8ZkZw4CO3J786lattZ0SnsOLRcA2sWKPMbTgGuC','Sylvie','http://localhost:8080/images/generated_face_woman_n2.jpg1647526032529.jpg',0),
(53,'alan@gmail.com','$2a$08$8qJNoULZNTFtQHvCfya7PO1VBE7txQFcDrlqZJhM4IMqYoSoG3Ccy','alan',NULL,0),
(54,'emilie.durand@protonmail.com','$2a$08$Lyp3ZHzbdtP8XxfVf/U/7eNBe.Qc2mhxcMC97jr9pX5flbd3gSury','Emilie','http://localhost:8080/images/generated_face_woman3.jpg1647707788385.jpg',0),
(55,'test@test.com','$2a$08$C9GF9uRQIvwnwlRDvZniM.oh9FySmk7kq8725nExQUBup2BAnpquK','test',NULL,0),
(56,'test2@gmail.com','$2a$08$PMdVmmBWHI7cjqRu3U3T7O7j21uUWlMBfbtbWK7QZPsRRV11FBetW','test2',NULL,0),
(57,'test4@gmail.com','$2a$08$/DziJg3pX06LMLDFT5SQ/.s3.yYhJ4S3MDRpWoz4x8Fkj5XJ.15FO','test4',NULL,0),
(58,'test5@gmail.com','$2a$08$MO9YzMBn9OxUG3k5f7kMcu8U2p5a7j48MYELONCdfzYIdUYsQIFXy','test5',NULL,0);
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

-- Dump completed on 2022-03-21 14:09:32
