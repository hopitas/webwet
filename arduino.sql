-- phpMyAdmin SQL Dump
-- version 3.2.4
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jan 20, 2013 at 06:42 PM
-- Server version: 5.1.44
-- PHP Version: 5.3.1

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `arduino`
--

-- --------------------------------------------------------

--
-- Table structure for table `arduinosettings`
--

CREATE TABLE IF NOT EXISTS `arduinosettings` (
  `plantnumber` tinyint(3) unsigned NOT NULL,
  `arduinonumber` tinyint(11) NOT NULL,
  `plantname` varchar(40) NOT NULL,
  `MAC` char(16) NOT NULL,
  `ip` char(16) NOT NULL,
  `preset` tinyint(3) unsigned NOT NULL,
  `minval` tinyint(3) unsigned NOT NULL,
  `maxval` tinyint(3) unsigned NOT NULL,
  `pump` tinyint(1) NOT NULL DEFAULT '0',
  `wlevel` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`plantnumber`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `arduinosettings`
--

INSERT INTO `arduinosettings` (`plantnumber`, `arduinonumber`, `plantname`, `MAC`, `ip`, `preset`, `minval`, `maxval`, `pump`, `wlevel`) VALUES
(1, 0, '', '', '', 0, 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `ID` mediumint(9) NOT NULL AUTO_INCREMENT,
  `username` varchar(60) DEFAULT NULL,
  `password` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`ID`, `username`, `password`) VALUES
(1, 'admin', '');

-- --------------------------------------------------------

--
-- Table structure for table `water`
--

CREATE TABLE IF NOT EXISTS `water` (
  `date_time` datetime NOT NULL,
  `plantnumber` tinyint(3) unsigned NOT NULL,
  `moisture_val` int(11) unsigned NOT NULL,
  `sensor_val` int(11) NOT NULL,
  `watered` int(11) NOT NULL,
  PRIMARY KEY (`date_time`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `water`
--


-- --------------------------------------------------------

--
-- Table structure for table `waterval`
--

CREATE TABLE IF NOT EXISTS `waterval` (
  `id` tinyint(4) NOT NULL,
  `waterval` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `waterval`
--

INSERT INTO `waterval` (`id`, `waterval`) VALUES
(1, 0);
