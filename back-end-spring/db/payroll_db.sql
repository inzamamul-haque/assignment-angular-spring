/*
SQLyog Ultimate v11.11 (64 bit)
MySQL - 5.6.47-log : Database - payroll_db
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`payroll_db` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_bin */;

USE `payroll_db`;

/*Table structure for table `account` */

DROP TABLE IF EXISTS `account`;

CREATE TABLE `account` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `account_name` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `account_no` varchar(255) COLLATE utf8_bin NOT NULL,
  `account_type` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `current_balance` double NOT NULL,
  `bank_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKawl1lrpngb7h5ktg79odeic5w` (`bank_id`),
  CONSTRAINT `FKawl1lrpngb7h5ktg79odeic5w` FOREIGN KEY (`bank_id`) REFERENCES `bank` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

/*Data for the table `account` */

insert  into `account`(`id`,`account_name`,`account_no`,`account_type`,`current_balance`,`bank_id`) values (1,'IBCS','210000098','Savings',80000000,2),(2,'Inzamamul Haque','2101040510','Current',500000,1);

/*Table structure for table `bank` */

DROP TABLE IF EXISTS `bank`;

CREATE TABLE `bank` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `branch_name` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `code` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

/*Data for the table `bank` */

insert  into `bank`(`id`,`branch_name`,`code`,`name`) values (1,'Mirpur','110','Dutch-bangla'),(2,'Pallabi','111','City Bank');

/*Table structure for table `employee` */

DROP TABLE IF EXISTS `employee`;

CREATE TABLE `employee` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `address` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `basic_salary` double NOT NULL,
  `employee_id` varchar(4) COLLATE utf8_bin DEFAULT NULL,
  `gross_salary` double NOT NULL,
  `house_rent` double NOT NULL,
  `medical_allowance` double NOT NULL,
  `mobile_no` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `account_id` bigint(20) DEFAULT NULL,
  `salary_rank_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_mc5x07dj0uft9opsxchp0uwji` (`employee_id`),
  KEY `FKcfg6ajo8oske94exynxpf7tf9` (`account_id`),
  KEY `FKn8pqxdfr5x19hoxooto2tykir` (`salary_rank_id`),
  CONSTRAINT `FKcfg6ajo8oske94exynxpf7tf9` FOREIGN KEY (`account_id`) REFERENCES `account` (`id`),
  CONSTRAINT `FKn8pqxdfr5x19hoxooto2tykir` FOREIGN KEY (`salary_rank_id`) REFERENCES `salary_rank` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

/*Data for the table `employee` */

insert  into `employee`(`id`,`address`,`basic_salary`,`employee_id`,`gross_salary`,`house_rent`,`medical_allowance`,`mobile_no`,`name`,`account_id`,`salary_rank_id`) values (1,'Mirpur',25000,'1215',33750,5000,3750,'01619007878','Inzamamul Haque',1,4),(2,'Mirpur',10000,'1216',13500,2000,1500,'01785243434','Md Mominul Haque',2,7);

/*Table structure for table `salary_rank` */

DROP TABLE IF EXISTS `salary_rank`;

CREATE TABLE `salary_rank` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `basic_salary` double NOT NULL,
  `name` varchar(255) COLLATE utf8_bin NOT NULL,
  `rank` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

/*Data for the table `salary_rank` */

insert  into `salary_rank`(`id`,`basic_salary`,`name`,`rank`) values (2,35000,'Rank 1',1),(3,30000,'Rank 2',2),(4,25000,'Rank 3',3),(5,20000,'Rank 4',4),(6,15000,'Rank 5',5),(7,10000,'Rank 6',6);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
