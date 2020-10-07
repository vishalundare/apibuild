-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 24, 2020 at 08:36 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.2.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `stock`
--

-- --------------------------------------------------------

--
-- Table structure for table `locmaster`
--

CREATE TABLE `locmaster` (
  `locname` varchar(20) NOT NULL,
  `product` varchar(20) NOT NULL,
  `full` int(11) NOT NULL,
  `empty` int(11) NOT NULL,
  `defective` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `physicalstock`
--

CREATE TABLE `physicalstock` (
  `date` date NOT NULL,
  `location` varchar(20) NOT NULL,
  `product` int(11) NOT NULL,
  `full` int(11) NOT NULL,
  `empty` int(11) NOT NULL,
  `defective` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `prodname` varchar(20) NOT NULL,
  `prodcode` int(11) NOT NULL,
  `description` varchar(20) NOT NULL,
  `reamrk` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `stockreport`
--

CREATE TABLE `stockreport` (
  `date` date NOT NULL,
  `prodcode` varchar(11) NOT NULL,
  `full` int(11) NOT NULL,
  `empty` int(11) NOT NULL,
  `defective` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `transaction`
--

CREATE TABLE `transaction` (
  `date` date NOT NULL,
  `location` int(11) NOT NULL,
  `product` int(11) NOT NULL,
  `fullout` int(11) NOT NULL,
  `emptyout` int(11) NOT NULL,
  `fullreceipt` int(11) NOT NULL,
  `emptyreceipt` int(11) NOT NULL,
  `defout` int(11) NOT NULL,
  `defin` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstname` varchar(15) NOT NULL,
  `lastname` varchar(15) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(50) NOT NULL,
  `mobile` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstname`, `lastname`, `email`, `password`, `mobile`) VALUES
(1, 'Vishal', 'Undare', 'vishalundre1@gmail.com', '$2b$10$tlarUwMThET/4iDgShI8cu3rbo4oFnuk6F3Lvm6tCdU', 9372221181);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
