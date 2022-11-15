-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 05-Ago-2019 às 17:54
-- Versão do servidor: 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jogos`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `jogoteste`
--

CREATE TABLE `jogoteste` (
  `id` int(11) NOT NULL,
  `mandante` int(1) NOT NULL,
  `adversario` varchar(50) NOT NULL,
  `golsBotafogo` int(2) NOT NULL,
  `golsAdversario` int(2) NOT NULL,
  `campeonato` enum('Carioca','Série A','Série B','Libertadores','Copa do Brasil','Sul-Americana','Amistoso','Mundial') NOT NULL,
  `dataJogo` date NOT NULL,
  `estadio` varchar(50) NOT NULL,
  `tecnico` varchar(50) NOT NULL,
  `autorBotafogo` text NOT NULL,
  `autorAdversario` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `jogoteste`
--

INSERT INTO `jogoteste` (`id`, `mandante`, `adversario`, `golsBotafogo`, `golsAdversario`, `campeonato`, `dataJogo`, `estadio`, `tecnico`, `autorBotafogo`, `autorAdversario`) VALUES
(1, 1, 'Vasco', 6, 0, 'Série A', '2019-07-28', 'Nilton Santos', 'Eduardo Barroca', '57iguyhu', ''),
(2, 0, 'Atlético-MG', 6, 4, 'Carioca', '2019-07-29', 'Nilton Santos', 'Eduardo Barroca', 'uyguiyg', ''),
(3, 1, 'Goiás', 5, 0, 'Carioca', '2019-07-31', 'Nilton Santos', 'Eduardo Barroca', 'joijoijoij', ''),
(4, 0, 'Goiás', 5, 6, 'Série A', '2018-07-28', 'Nilton Santos', 'Eduardo Barroca', 'asdas', ''),
(5, 1, 'Athletico-PR', 3, 0, 'Carioca', '2019-08-31', 'Nilton Santos', 'Eduardo Barroca', 'ppokppo', ''),
(6, 1, 'CSA', 2, 0, 'Libertadores', '2019-09-28', 'Nilton Santos', 'Eduardo Barroca', 'asdfasdf', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `jogoteste`
--
ALTER TABLE `jogoteste`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `jogoteste`
--
ALTER TABLE `jogoteste`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
