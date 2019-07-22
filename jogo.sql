-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 19-Dez-2018 às 05:31
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
-- Estrutura da tabela `jogo`
--

CREATE TABLE `jogo` (
  `id` int(11) NOT NULL,
  `escudo` varchar(50) DEFAULT NULL,
  `adversario` varchar(50) NOT NULL,
  `golsBotafogo` int(2) NOT NULL,
  `golsAdversario` int(2) NOT NULL,
  `VDE` enum('Vitória','Empate','Derrota') NOT NULL,
  `campeonato` enum('Carioca','Série A','Série B','Libertadores','Copa do Brasil','Sul-Americana','Amistoso','Mundial') NOT NULL,
  `dataJogo` date NOT NULL,
  `estadio` varchar(50) NOT NULL,
  `tecnico` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `jogo`
--

INSERT INTO `jogo` (`id`, `escudo`, `adversario`, `golsBotafogo`, `golsAdversario`, `VDE`, `campeonato`, `dataJogo`, `estadio`, `tecnico`) VALUES
(1, NULL, 'Fluminense', 2, 3, 'Derrota', 'Série A', '2002-10-26', 'Maracanã', 'Ivo Wortmann'),
(2, NULL, 'Flamengo', 1, 0, 'Vitória', 'Carioca', '2004-03-14', 'Maracanã', 'Levir Culpi'),
(3, NULL, 'Atlético-PR', 1, 1, 'Empate', 'Série A', '2004-08-12', 'Caio Martins', 'Mauro Galvão'),
(4, NULL, 'Criciúma', 1, 1, 'Empate', 'Série A', '2004-08-28', 'Caio Martins', 'Paulo Bonamigo'),
(5, NULL, 'Fluminense', 4, 1, 'Vitória', 'Série A', '2004-10-02', 'Maracanã', 'Paulo Bonamigo'),
(6, NULL, 'Coritiba', 4, 1, 'Vitória', 'Série A', '2004-11-13', 'Caio Martins', 'Paulo Bonamigo'),
(7, NULL, 'Guarani', 1, 0, 'Vitória', 'Série A', '2004-11-27', 'Caio Martins', 'Paulo Bonamigo'),
(8, NULL, 'Corinthians', 1, 2, 'Derrota', 'Série A', '2004-12-12', 'Caio Martins', 'Paulo Bonamigo'),
(9, NULL, 'Americano', 1, 2, 'Derrota', 'Carioca', '2005-02-13', 'Maracanã', 'Paulo Bonamigo'),
(10, NULL, 'Fluminense', 0, 4, 'Derrota', 'Carioca', '2005-03-23', 'Maracanã', 'Paulo Bonamigo'),
(11, NULL, 'Atlético-PR', 2, 0, 'Vitória', 'Série A', '2005-05-29', 'Luso Brasileiro', 'Paulo César Gusmão'),
(12, NULL, 'Goiás', 3, 1, 'Vitória', 'Série A', '2005-09-18', 'Luso Brasileiro', 'Celso Roth'),
(13, NULL, 'Palmeiras', 1, 2, 'Derrota', 'Série A', '2005-10-08', 'Luso Brasileiro', 'Celso Roth'),
(14, NULL, 'São Caetano', 2, 1, 'Vitória', 'Série A', '2005-10-22', 'Maracanã', 'Celso Roth'),
(15, NULL, 'Paraná', 2, 0, 'Vitória', 'Série A', '2005-11-12', 'Luso Brasileiro', 'Celso Roth'),
(16, NULL, 'Vasco', 5, 3, 'Vitória', 'Carioca', '2006-01-22', 'Maracanã', 'Carlos Roberto'),
(17, NULL, 'Nova Iguaçu', 1, 1, 'Empate', 'Carioca', '2006-02-19', 'Maracanã', 'Carlos Roberto'),
(18, NULL, 'Madureira', 3, 1, 'Vitória', 'Carioca', '2006-04-09', 'Maracanã', 'Carlos Roberto'),
(19, NULL, 'Grêmio', 2, 2, 'Empate', 'Série A', '2006-05-13', 'Maracanã', 'Carlos Roberto'),
(20, NULL, 'Santos', 4, 3, 'Vitória', 'Série A', '2006-10-14', 'Maracanã', 'Cuca'),
(21, NULL, 'Internacional', 0, 1, 'Derrota', 'Série A', '2006-11-02', 'Maracanã', 'Cuca'),
(22, NULL, 'Goiás', 2, 2, 'Empate', 'Série A', '2006-11-19', 'Maracanã', 'Cuca'),
(23, NULL, 'Figueirense', 3, 1, 'Vitória', 'Copa do Brasil', '2007-05-23', 'Maracanã', 'Cuca'),
(24, NULL, 'Grêmio', 3, 0, 'Vitória', 'Série A', '2007-06-02', 'Maracanã', 'Cuca'),
(25, NULL, 'Náutico', 3, 1, 'Vitória', 'Série A', '2007-06-17', 'Maracanã', 'Cuca'),
(26, NULL, 'Internacional', 1, 1, 'Empate', 'Série A', '2007-08-19', 'Maracanã', 'Cuca'),
(27, NULL, 'Fluminense', 0, 2, 'Derrota', 'Série A', '2007-09-23', 'Maracanã', 'Cuca'),
(28, NULL, 'Fluminense', 3, 1, 'Vitória', 'Carioca', '2008-03-30', 'Maracanã', 'Cuca'),
(29, NULL, 'Atlético-MG', 2, 0, 'Vitória', 'Copa do Brasil', '2008-05-14', 'Nilton Santos', 'Cuca'),
(30, NULL, 'Vasco', 1, 1, 'Empate', 'Série A', '2008-05-25', 'Nilton Santos', 'Cuca'),
(31, NULL, 'Náutico', 1, 1, 'Empate', 'Série A', '2008-08-30', 'Nilton Santos', 'Ney Franco'),
(32, NULL, 'Fluminense', 1, 2, 'Derrota', 'Carioca', '2009-03-28', 'Maracanã', 'Ney Franco'),
(33, NULL, 'Boavista', 4, 1, 'Vitória', 'Carioca', '2010-03-29', 'São Januário', 'Joel Santana'),
(34, NULL, 'Atlético-MG', 3, 0, 'Vitória', 'Série A', '2010-08-07', 'Nilton Santos', 'Joel Santana'),
(35, NULL, 'Vitória', 1, 0, 'Vitória', 'Série A', '2010-10-23', 'Nilton Santos', 'Joel Santana'),
(36, NULL, 'Volta Redonda', 4, 2, 'Vitória', 'Carioca', '2011-03-05', 'Nilton Santos', 'Joel Santana'),
(37, NULL, 'Vasco', 0, 2, 'Derrota', 'Carioca', '2011-03-20', 'Nilton Santos', 'Joel Santana'),
(38, NULL, 'Ceará', 4, 0, 'Vitória', 'Série A', '2011-09-07', 'Nilton Santos', 'Caio Júnior'),
(39, NULL, 'Bahia', 2, 2, 'Empate', 'Série A', '2011-10-08', 'São Januário', 'Caio Júnior'),
(40, NULL, 'Vasco', 3, 1, 'Vitória', 'Carioca', '2012-04-29', 'Nilton Santos', 'Oswaldo de Oliveira'),
(41, NULL, 'Flamengo', 0, 1, 'Derrota', 'Carioca', '2013-02-17', 'Nilton Santos', 'Oswaldo de Oliveira'),
(42, NULL, 'Fluminense', 1, 0, 'Vitória', 'Carioca', '2013-05-05', 'Raulino de Oliveira (Volta Redonda)', 'Oswaldo de Oliveira'),
(43, NULL, 'Grêmio', 0, 1, 'Derrota', 'Série A', '2013-10-05', 'Maracanã', 'Oswaldo de Oliveira'),
(44, NULL, 'Criciúma', 3, 0, 'Vitória', 'Série A', '2013-12-08', 'Maracanã', 'Oswaldo de Oliveira'),
(45, NULL, 'Deportivo Quito', 4, 0, 'Vitória', 'Libertadores', '2014-02-05', 'Maracanã', 'Eduardo Húngaro'),
(46, NULL, 'Independiente Del Valle', 1, 0, 'Vitória', 'Libertadores', '2014-03-18', 'Maracanã', 'Eduardo Húngaro'),
(47, NULL, 'Flamengo', 0, 1, 'Derrota', 'Série A', '2014-07-27', 'Maracanã', 'Vagner Mancini'),
(48, NULL, 'Chapecoense', 1, 0, 'Vitória', 'Série A', '2014-08-23', 'Maracanã', 'Vagner Mancini'),
(49, NULL, 'Santos', 1, 0, 'Vitória', 'Série A', '2014-08-31', 'Maracanã', 'Vagner Mancini'),
(50, NULL, 'Bahia', 2, 3, 'Derrota', 'Série A', '2014-09-17', 'Maracanã', 'Vagner Mancini'),
(51, NULL, 'Palmeiras', 0, 1, 'Derrota', 'Série A', '2014-10-08', 'Maracanã', 'Vagner Mancini'),
(52, NULL, 'Boavista', 1, 0, 'Vitória', 'Carioca', '2015-01-31', 'São Januário', 'Renê Simões'),
(53, NULL, 'Bonsucesso', 4, 0, 'Vitória', 'Carioca', '2015-02-07', 'Nilton Santos', 'Renê Simões'),
(54, NULL, 'Nova Iguaçu', 2, 1, 'Vitória', 'Carioca', '2015-02-21', 'Nilton Santos', 'Renê Simões'),
(55, NULL, 'Flamengo', 1, 0, 'Vitória', 'Carioca', '2015-03-01', 'Maracanã', 'Renê Simões'),
(56, NULL, 'Fluminense', 1, 3, 'Derrota', 'Carioca', '2015-03-08', 'Maracanã', 'Renê Simões'),
(57, NULL, 'Resende', 3, 0, 'Vitória', 'Carioca', '2015-03-15', 'Nilton Santos', 'Renê Simões'),
(58, NULL, 'Vasco', 1, 1, 'Vitória', 'Carioca', '2015-03-29', 'Maracanã', 'Renê Simões'),
(59, NULL, 'Madureira', 4, 1, 'Vitória', 'Carioca', '2015-04-05', 'Nilton Santos', 'Renê Simões'),
(60, NULL, 'Vasco', 1, 2, 'Derrota', 'Carioca', '2015-05-03', 'Maracanã', 'Renê Simões'),
(61, NULL, 'CRB', 4, 1, 'Vitória', 'Série B', '2015-05-16', 'Nilton Santos', 'Renê Simões'),
(62, NULL, 'Vitória', 2, 0, 'Vitória', 'Série B', '2015-05-30', 'Nilton Santos', 'Renê Simões'),
(63, NULL, 'Mogi Mirim', 3, 0, 'Vitória', 'Série B', '2015-06-05', 'Nilton Santos', 'Renê Simões'),
(64, NULL, 'Boa Esporte', 1, 1, 'Empate', 'Série B', '2015-06-19', 'Nilton Santos', 'Renê Simões'),
(65, NULL, 'Figueirense', 0, 1, 'Derrota', 'Copa do Brasil', '2015-07-14', 'Nilton Santos', 'Renê Simões'),
(66, NULL, 'Criciúma', 0, 0, 'Empate', 'Série B', '2015-07-28', 'Nilton Santos', 'Ricardo Gomes'),
(67, NULL, 'Paysandu', 2, 3, 'Derrota', 'Série B', '2015-08-23', 'Nilton Santos', 'Ricardo Gomes'),
(68, NULL, 'Bragantino', 4, 0, 'Vitória', 'Série B', '2015-10-17', 'Nilton Santos', 'Ricardo Gomes'),
(69, NULL, 'Santa Cruz', 0, 3, 'Derrota', 'Série B', '2015-11-14', 'Nilton Santos', 'Ricardo Gomes'),
(70, NULL, 'América-MG', 0, 0, 'Empate', 'Série B', '2015-11-28', 'Nilton Santos', 'Ricardo Gomes'),
(71, NULL, 'Portuguesa-RJ', 2, 1, 'Vitória', 'Carioca', '2016-02-02', 'São Januário', 'Ricardo Gomes'),
(72, NULL, 'Boavista', 1, 0, 'Vitória', 'Carioca', '2016-03-06', 'São Januário', 'Ricardo Gomes'),
(73, NULL, 'Vasco', 0, 1, 'Derrota', 'Carioca', '2016-05-01', 'Maracanã', 'Ricardo Gomes'),
(74, NULL, 'Vasco', 1, 1, 'Empate', 'Carioca', '2016-05-08', 'Maracanã', 'Ricardo Gomes'),
(75, NULL, 'São Paulo', 0, 1, 'Derrota', 'Série A', '2016-05-15', 'Raulino de Oliveira (Volta Redonda)', 'Ricardo Gomes'),
(76, NULL, 'Santa Cruz', 2, 1, 'Vitória', 'Série A', '2016-07-03', 'Mário Helênio (Juiz de Fora)', 'Ricardo Gomes'),
(77, NULL, 'Palmeiras', 3, 1, 'Vitória', 'Série A', '2016-07-31', 'Arena Botafogo', 'Jair Ventura'),
(78, NULL, 'Grêmio', 2, 1, 'Vitória', 'Série A', '2016-09-04', 'Arena Botafogo', 'Jair Ventura'),
(79, NULL, 'Fluminense', 1, 0, 'Vitória', 'Série A', '2016-09-07', 'Arena Botafogo', 'Jair Ventura'),
(80, NULL, 'Internacional', 1, 0, 'Vitória', 'Série A', '2016-10-12', 'Arena Botafogo', 'Jair Ventura'),
(81, NULL, 'Atlético-MG', 3, 2, 'Vitória', 'Série A', '2016-10-16', 'Arena Botafogo', 'Jair Ventura'),
(82, NULL, 'Coritiba', 0, 0, 'Empate', 'Série A', '2016-10-29', 'Arena Botafogo', 'Jair Ventura'),
(83, NULL, 'Chapecoense', 0, 2, 'Derrota', 'Série A', '2016-11-16', 'Arena Botafogo', 'Jair Ventura'),
(84, NULL, 'Ponte Preta', 1, 1, 'Empate', 'Série A', '2016-11-26', 'Arena Botafogo', 'Jair Ventura'),
(85, NULL, 'Nova Iguaçu', 1, 1, 'Empate', 'Carioca', '2017-01-28', 'Nilton Santos', 'Jair Ventura'),
(86, NULL, 'Colo-Colo', 2, 1, 'Vitória', 'Libertadores', '2017-02-01', 'Nilton Santos', 'Jair Ventura'),
(87, NULL, 'Macaé', 2, 1, 'Vitória', 'Carioca', '2017-02-04', 'Nilton Santos', 'Jair Ventura'),
(88, NULL, 'Olimpia', 1, 0, 'Vitória', 'Libertadores', '2017-02-15', 'Nilton Santos', 'Jair Ventura'),
(89, NULL, 'Volta Redonda', 1, 0, 'Vitória', 'Carioca', '2017-03-09', 'Nilton Santos', 'Jair Ventura'),
(90, NULL, 'Vasco', 0, 0, 'Empate', 'Carioca', '2017-03-19', 'Nilton Santos', 'Jair Ventura'),
(91, NULL, 'Fluminense', 2, 3, 'Derrota', 'Carioca', '2017-03-23', 'Nilton Santos', 'Jair Ventura'),
(92, NULL, 'Fluminense', 3, 1, 'Vitória', 'Carioca', '2017-04-09', 'Nilton Santos', 'Jair Ventura'),
(93, NULL, 'Vasco', 0, 2, 'Derrota', 'Carioca', '2017-04-16', 'Nilton Santos', 'Jair Ventura'),
(94, NULL, 'Sport', 2, 1, 'Vitória', 'Copa do Brasil', '2017-04-26', 'Nilton Santos', 'Jair Ventura'),
(95, NULL, 'Barcelona SC', 0, 2, 'Derrota', 'Libertadores', '2017-05-02', 'Nilton Santos', 'Jair Ventura'),
(96, NULL, 'Atlético Nacional', 1, 0, 'Vitória', 'Libertadores', '2017-05-18', 'Nilton Santos', 'Jair Ventura'),
(97, NULL, 'Ponte Preta', 2, 0, 'Vitória', 'Série A', '2017-05-21', 'Nilton Santos', 'Jair Ventura'),
(98, NULL, 'Bahia', 1, 0, 'Vitória', 'Série A', '2017-05-28', 'Nilton Santos', 'Jair Ventura'),
(99, NULL, 'Coritiba', 2, 2, 'Empate', 'Série A', '2017-06-11', 'Nilton Santos', 'Jair Ventura'),
(100, NULL, 'Vasco', 3, 1, 'Vitória', 'Série A', '2017-06-21', 'Nilton Santos', 'Jair Ventura'),
(101, NULL, 'Avaí', 0, 2, 'Derrota', 'Série A', '2017-06-26', 'Nilton Santos', 'Jair Ventura'),
(102, NULL, 'Atlético-MG', 1, 1, 'Empate', 'Série A', '2017-07-09', 'Nilton Santos', 'Jair Ventura'),
(103, NULL, 'Fluminense', 1, 0, 'Vitória', 'Série A', '2017-07-12', 'Maracanã', 'Jair Ventura'),
(104, NULL, 'Sport', 2, 1, 'Vitória', 'Série A', '2017-07-17', 'Nilton Santos', 'Jair Ventura'),
(105, NULL, 'Atlético-MG', 3, 0, 'Vitória', 'Copa do Brasil', '2017-07-26', 'Nilton Santos', 'Jair Ventura'),
(106, NULL, 'São Paulo', 3, 4, 'Derrota', 'Série A', '2017-07-29', 'Nilton Santos', 'Jair Ventura'),
(107, NULL, 'Palmeiras', 1, 2, 'Derrota', 'Série A', '2017-08-02', 'Nilton Santos', 'Jair Ventura'),
(108, NULL, 'Nacional-URU', 2, 0, 'Vitória', 'Libertadores', '2017-08-10', 'Nilton Santos', 'Jair Ventura'),
(109, NULL, 'Grêmio', 1, 0, 'Vitória', 'Série A', '2017-08-13', 'Nilton Santos', 'Jair Ventura'),
(110, NULL, 'Flamengo', 0, 0, 'Empate', 'Copa do Brasil', '2017-08-16', 'Nilton Santos', 'Jair Ventura'),
(111, NULL, 'Flamengo', 0, 1, 'Derrota', 'Copa do Brasil', '2017-08-23', 'Nilton Santos', 'Jair Ventura'),
(112, NULL, 'Flamengo', 2, 0, 'Vitória', 'Série A', '2017-09-10', 'Nilton Santos', 'Jair Ventura'),
(113, NULL, 'Grêmio', 0, 0, 'Empate', 'Libertadores', '2017-09-13', 'Nilton Santos', 'Jair Ventura'),
(114, NULL, 'Santos', 2, 0, 'Vitória', 'Série A', '2017-09-16', 'Nilton Santos', 'Jair Ventura'),
(115, NULL, 'Vitória', 2, 3, 'Derrota', 'Série A', '2017-10-01', 'Nilton Santos', 'Jair Ventura'),
(116, NULL, 'Chapecoense', 2, 1, 'Vitória', 'Série A', '2017-10-11', 'Nilton Santos', 'Jair Ventura'),
(117, NULL, 'Vasco', 0, 1, 'Derrota', 'Série A', '2017-10-14', 'Maracanã', 'Jair Ventura'),
(118, NULL, 'Corinthians', 2, 1, 'Vitória', 'Série A', '2017-10-23', 'Nilton Santos', 'Jair Ventura'),
(119, NULL, 'Fluminense', 1, 2, 'Derrota', 'Série A', '2017-11-04', 'Nilton Santos', 'Jair Ventura'),
(120, NULL, 'Atlético-PR', 0, 1, 'Derrota', 'Série A', '2017-11-11', 'Nilton Santos', 'Jair Ventura'),
(121, NULL, 'Atlético-GO', 1, 2, 'Derrota', 'Série A', '2017-11-16', 'Nilton Santos', 'Jair Ventura'),
(122, NULL, 'Cruzeiro', 2, 2, 'Empate', 'Série A', '2017-12-03', 'Nilton Santos', 'Jair Ventura'),
(123, NULL, 'Portuguesa-RJ', 2, 2, 'Empate', 'Carioca', '2018-01-16', 'Nilton Santos', 'Felipe Conceição (Tigrão)'),
(124, NULL, 'Fluminense', 0, 0, 'Empate', 'Carioca', '2018-01-20', 'Maracanã', 'Felipe Conceição (Tigrão)'),
(125, NULL, 'Boavista', 1, 0, 'Vitória', 'Carioca', '2018-01-28', 'Nilton Santos', 'Felipe Conceição (Tigrão)'),
(126, NULL, 'Madureira', 0, 0, 'Empate', 'Carioca', '2018-02-03', 'Nilton Santos', 'Felipe Conceição (Tigrão)'),
(127, NULL, 'Bangu', 1, 0, 'Vitória', 'Carioca', '2018-03-06', 'Nilton Santos', 'Alberto Valentim'),
(128, NULL, 'Vasco', 2, 3, 'Derrota', 'Carioca', '2018-03-18', 'Nilton Santos', 'Alberto Valentim'),
(129, NULL, 'Vasco', 3, 2, 'Vitória', 'Carioca', '2018-03-21', 'Nilton Santos', 'Alberto Valentim'),
(130, NULL, 'Fluminense', 0, 3, 'Derrota', 'Carioca', '2018-03-25', 'Maracanã', 'Alberto Valentim'),
(131, NULL, 'Flamengo', 1, 0, 'Vitória', 'Carioca', '2018-03-28', 'Maracanã', 'Alberto Valentim'),
(132, NULL, 'Vasco', 2, 3, 'Derrota', 'Carioca', '2018-04-01', 'Nilton Santos', 'Alberto Valentim'),
(133, NULL, 'Vasco', 1, 0, 'Vitória', 'Carioca', '2018-04-08', 'Maracanã', 'Alberto Valentim'),
(134, NULL, 'Grêmio', 2, 1, 'Vitória', 'Série A', '2018-04-28', 'Nilton Santos', 'Alberto Valentim'),
(135, NULL, 'Audax Italiano', 1, 1, 'Empate', 'Sul-Americana', '2018-05-09', 'Nilton Santos', 'Alberto Valentim'),
(136, NULL, 'Fluminense', 2, 1, 'Vitória', 'Série A', '2018-05-14', 'Nilton Santos', 'Alberto Valentim'),
(137, NULL, 'Vitória', 1, 1, 'Empate', 'Série A', '2018-05-27', 'Nilton Santos', 'Alberto Valentim'),
(138, NULL, 'Vasco', 2, 1, 'Vitória', 'Série A', '2018-06-02', 'São Januário', 'Alberto Valentim'),
(139, NULL, 'Ceará', 0, 0, 'Empate', 'Série A', '2018-06-06', 'Nilton Santos', 'Alberto Valentim'),
(140, NULL, 'Chapecoense', 1, 0, 'Vitória', 'Série A', '2018-07-26', 'Nilton Santos', 'Marcos Paquetá'),
(141, NULL, 'Santos', 0, 0, 'Empate', 'Série A', '2018-08-04', 'Nilton Santos', 'Bruno Lazaroni'),
(142, NULL, 'Nacional-PAR', 2, 0, 'Vitória', 'Sul-Americana', '2018-08-16', 'Nilton Santos', 'Zé Ricardo'),
(143, NULL, 'Atlético-MG', 0, 3, 'Derrota', 'Série A', '2018-08-19', 'Nilton Santos', 'Zé Ricardo'),
(144, NULL, 'Sport', 2, 0, 'Vitória', 'Série A', '2018-08-25', 'Nilton Santos', 'Zé Ricardo'),
(145, NULL, 'Cruzeiro', 1, 1, 'Empate', 'Série A', '2018-09-05', 'Nilton Santos', 'Zé Ricardo'),
(146, NULL, 'Fluminense', 0, 1, 'Derrota', 'Série A', '2018-09-09', 'Maracanã', 'Zé Ricardo'),
(147, NULL, 'América-MG', 1, 0, 'Vitória', 'Série A', '2018-09-16', 'Nilton Santos', 'Zé Ricardo'),
(148, NULL, 'São Paulo', 2, 2, 'Empate', 'Série A', '2018-09-30', 'Nilton Santos', 'Zé Ricardo'),
(149, NULL, 'Bahia', 2, 1, 'Vitória', 'Sul-Americana', '2018-10-03', 'Nilton Santos', 'Zé Ricardo'),
(150, NULL, 'Vasco', 1, 1, 'Empate', 'Série A', '2018-10-09', 'Nilton Santos', 'Zé Ricardo'),
(151, NULL, 'Bahia', 0, 1, 'Derrota', 'Série A', '2018-10-20', 'Nilton Santos', 'Zé Ricardo'),
(152, NULL, 'Corinthians', 1, 0, 'Vitória', 'Série A', '2018-11-04', 'Nilton Santos', 'Zé Ricardo'),
(153, NULL, 'Flamengo', 2, 1, 'Vitória', 'Série A', '2018-11-10', 'Nilton Santos', 'Zé Ricardo'),
(154, NULL, 'Internacional', 1, 0, 'Vitória', 'Série A', '2018-11-18', 'Nilton Santos', 'Zé Ricardo'),
(155, NULL, 'Paraná', 2, 1, 'Vitória', 'Série A', '2018-11-28', 'Nilton Santos', 'Zé Ricardo');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `jogo`
--
ALTER TABLE `jogo`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `jogo`
--
ALTER TABLE `jogo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=156;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
