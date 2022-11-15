-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 05-Jun-2020 às 00:36
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
-- Extraindo dados da tabela `jogo`
--

INSERT INTO `jogo` (`id`, `mandante`, `adversario`, `golsBotafogo`, `golsAdversario`, `campeonato`, `dataJogo`, `estadio`, `tecnico`, `autorBotafogo`, `autorAdversario`) VALUES
(1, 1, 'Fluminense', 2, 3, 'Série A', '2002-10-26', 'Maracanã', 'Ivo Wortmann', '-Galeano <br />-Léo Inácio', '-César <br />-Magno Alves <br />-Romário'),
(2, 1, 'Flamengo', 1, 0, 'Carioca', '2004-03-14', 'Maracanã', 'Levir Culpi', '-Alex Alves', ''),
(3, 1, 'Atlético-PR', 1, 1, 'Série A', '2004-08-12', 'Caio Martins', 'Mauro Galvão', '-Schwenck', '-Washington'),
(4, 1, 'Criciúma', 1, 1, 'Série A', '2004-08-28', 'Caio Martins', 'Paulo Bonamigo', '-Schwenck', '-Fernandinho'),
(5, 0, 'Fluminense', 4, 1, 'Série A', '2004-10-02', 'Maracanã', 'Paulo Bonamigo', '-Almir <br />-Ruy <br />-Ricardinho <br />-Têti', '-Edmundo'),
(6, 1, 'Coritiba', 4, 1, 'Série A', '2004-11-13', 'Caio Martins', 'Paulo Bonamigo', '-Caio Ribeiro (2x)  <br />-Schwenck <br />-Ricardinho', '-Jorginho Paulista'),
(7, 1, 'Guarani', 1, 0, 'Série A', '2004-11-27', 'Caio Martins', 'Paulo Bonamigo', '-Alex Alves', ''),
(8, 1, 'Corinthians', 1, 2, 'Série A', '2004-12-12', 'Caio Martins', 'Paulo Bonamigo', '-Alex Alves', '-Fábio Baiano <br />-Wendel'),
(9, 1, 'Americano', 1, 2, 'Carioca', '2005-02-13', 'Maracanã', 'Paulo Bonamigo', '-Alex Alves', '-Marcos Antônio <br />-Washington'),
(10, 0, 'Fluminense', 0, 4, 'Carioca', '2005-03-13', 'Maracanã', 'Paulo Bonamigo', '', '-Fabiano Eller <br />-Gabriel <br />-Juninho <br />-Alex'),
(11, 1, 'Atlético-PR', 2, 0, 'Série A', '2005-05-29', 'Luso Brasileiro', 'Paulo César Gusmão', '-Rafael Marques <br />-Almir', ''),
(12, 1, 'Goiás', 3, 1, 'Série A', '2005-09-18', 'Luso Brasileiro', 'Celso Roth', '-Ramón <br />-Zé Roberto (2x)', '-Souza'),
(13, 1, 'Palmeiras', 1, 2, 'Série A', '2005-10-08', 'Luso Brasileiro', 'Celso Roth', '-Alex Alves', '-Marcinho Guerreiro <br />-Marcinho'),
(14, 1, 'Paraná', 2, 0, 'Série A', '2005-11-12', 'Luso Brasileiro', 'Celso Roth', '-Ramón <br/>-Juca', ''),
(15, 1, 'Vasco', 5, 3, 'Carioca', '2006-01-22', 'Maracanã', 'Carlos Roberto', '-Zé Roberto<br/>-Lúcio Flávio<br/>-Reinaldo<br/>-Ruy<br/>-Felipe Adão', '-Romário (3x)'),
(16, 1, 'Nova Iguaçu', 1, 1, 'Carioca', '2006-02-19', 'Maracanã', 'Carlos Roberto', '-Dodô', '-Marcos Denner'),
(17, 1, 'Madureira', 3, 1, 'Carioca', '2006-04-09', 'Maracanã', 'Carlos Roberto', '-Dodô (2x)<br/>-Reinaldo', '-Fábio Júnior'),
(18, 1, 'Grêmio', 2, 2, 'Série A', '2006-05-13', 'Maracanã', 'Carlos Roberto', '-Reinaldo<br/>-Christian', '-Ricardinho<br/>-Alessandro'),
(19, 1, 'Santos', 4, 3, 'Série A', '2006-10-14', 'Maracanã', 'Cuca', '-Asprilla<br/>-Reinaldo<br/>-Zé Roberto<br/>-Juca', '-Kléber<br/>-Welligton Paulista<br/>-Reinaldo'),
(20, 1, 'São Caetano', 2, 1, 'Série A', '2006-10-22', 'Maracanã', 'Cuca', '-Juninho<br/>-Reinaldo', '-Marabá'),
(21, 1, 'Internacional', 0, 1, 'Série A', '2006-11-02', 'Maracanã', 'Cuca', '', '-Alex Meschini'),
(22, 1, 'Goiás', 2, 2, 'Série A', '2006-11-19', 'Maracanã', 'Cuca', '-Wando<br/>-Lúcio Flávio', '-Robson Luiz<br/>-Rogério Corrêa'),
(23, 1, 'Figueirense', 3, 1, 'Copa do Brasil', '2007-05-23', 'Maracanã', 'Cuca', '-Zé Roberto<br/>-André Lima<br/>-Vinícius (Gol Contra)', '-Cleiton Xavier'),
(24, 1, 'Grêmio', 3, 0, 'Série A', '2007-06-02', 'Maracanã', 'Cuca', '-Juninho<br/>-Luciano Almeida<br/>-Dodô', ''),
(25, 1, 'Náutico', 3, 1, 'Série A', '2007-06-17', 'Maracanã', 'Cuca', '-Juninho<br/>-André Lima<br/>-Jorge Henrique', '-Alex (Gol Contra)'),
(26, 1, 'Internacional', 1, 1, 'Série A', '2007-08-19', 'Maracanã', 'Cuca', '-André Lima', '-Ceará'),
(27, 1, 'Fluminense', 0, 2, 'Série A', '2007-09-23', 'Maracanã', 'Cuca', '', '-Thiago Neves<br/>-David'),
(28, 1, 'Fluminense', 3, 1, 'Carioca', '2008-03-30', 'Maracanã', 'Cuca', '-Welligton Paulista<br/>-Lúcio Flávio<br/>-Jorge Henrique', '-Alan'),
(29, 1, 'Atlético-MG', 2, 0, 'Copa do Brasil', '2008-05-14', 'Nilton Santos', 'Cuca', '-Zé Carlos<br/>-Alessandro', ''),
(30, 1, 'Vasco', 1, 1, 'Série A', '2008-05-25', 'Nilton Santos', 'Cuca', '-Lúcio Flávio', '-Eduardo Luiz'),
(31, 1, 'Náutico', 1, 1, 'Série A', '2008-08-30', 'Nilton Santos', 'Ney Franco', '-Carlos Alberto', '-Adriano'),
(32, 0, 'Fluminense', 1, 2, 'Carioca', '2009-03-28', 'Maracanã', 'Ney Franco', '-Maicosuel', '-Maicon<br/>-Conca'),
(33, 1, 'Boavista', 4, 1, 'Carioca', '2010-03-29', 'São Januário', 'Joel Santana', '-Loco Abreu (3x)<br/>-Marcelo Cordeiro', ''),
(34, 1, 'Atlético-MG', 3, 0, 'Série A', '2010-08-07', 'Nilton Santos', 'Joel Santana', '-Maicosuel<br/>-Somália<br/>-Herrera', ''),
(35, 1, 'Vitória', 1, 0, 'Série A', '2010-10-23', 'Nilton Santos', 'Joel Santana', '-Marcelo Cordeiro', ''),
(36, 1, 'Volta Redonda', 4, 2, 'Carioca', '2011-03-05', 'Nilton Santos', 'Joel Santana', '-Caio<br/>-Herrera<br/>-Alex<br/>-Rodrigo Mancha', '-Gláuber<br/>-Cristiano Ávalos'),
(37, 1, 'Vasco', 0, 2, 'Carioca', '2011-03-20', 'Nilton Santos', 'Joel Santana', '', '-Éder Luís<br/>-Diego Souza'),
(38, 1, 'Ceará', 4, 0, 'Série A', '2011-09-07', 'Nilton Santos', 'Caio Júnior', '-Herrera (2x)<br/>-Loco Abreu<br/>-Cidinho', ''),
(39, 1, 'Bahia', 2, 2, 'Série A', '2011-10-08', 'São Januário', 'Caio Júnior', '-Alex<br/>-Caio', '-Souza (2x)'),
(40, 1, 'Vasco', 3, 1, 'Carioca', '2012-04-29', 'Nilton Santos', 'Oswaldo de Oliveira', '-Loco Abreu (2x)<br/>-Maicosuel', '-Carlos Alberto'),
(41, 0, 'Flamengo', 0, 1, 'Carioca', '2013-02-17', 'Nilton Santos', 'Oswaldo de Oliveira', '', '-Hernane'),
(42, 1, 'Fluminense', 1, 0, 'Carioca', '2013-05-05', 'Raulino de Oliveira (Volta Redonda-RJ)', 'Oswaldo de Oliveira', '-Rafael Marques', ''),
(43, 1, 'Grêmio', 0, 1, 'Série A', '2013-10-05', 'Maracanã', 'Oswaldo de Oliveira', '', '-Alex Telles'),
(44, 1, 'Criciúma', 3, 0, 'Série A', '2013-12-08', 'Maracanã', 'Oswaldo de Oliveira', '-Lodeiro<br/>-Elias<br/>-Seedorf', ''),
(45, 1, 'Deportivo Quito-EQU', 4, 0, 'Libertadores', '2014-02-05', 'Maracanã', 'Eduardo Húngaro', '-Wallyson (3x)<br/>-Henrique Almeida', ''),
(46, 1, 'Independiente Del Valle-EQU', 1, 0, 'Libertadores', '2014-03-18', 'Maracanã', 'Eduardo Húngaro', '-\'El Tanque\' Ferreyra', ''),
(47, 0, 'Flamengo', 0, 1, 'Série A', '2014-07-27', 'Maracanã', 'Vagner Mancini', '', '-Alecsandro'),
(48, 1, 'Chapecoense', 1, 0, 'Série A', '2014-08-23', 'Maracanã', 'Vagner Mancini', '-Cachito Ramírez', ''),
(49, 1, 'Santos', 1, 0, 'Série A', '2014-08-31', 'Maracanã', 'Vagner Mancini', '-Daniel', ''),
(50, 1, 'Bahia', 2, 3, 'Série A', '2014-09-17', 'Maracanã', 'Vagner Mancini', '-Emerson Sheik (2x)', '-Dankler (Gol Contra)<br/>-Maxi Biancucchi<br/>-Branquinho'),
(51, 1, 'Palmeiras', 0, 1, 'Série A', '2014-10-08', 'Maracanã', 'Vagner Mancini', '', '-Henrique Dourado'),
(52, 1, 'Boavista', 1, 0, 'Carioca', '2015-01-31', 'São Januário', 'Renê Simões', '-Roger Carvalho', ''),
(53, 1, 'Bonsucesso', 4, 0, 'Carioca', '2015-02-07', 'Nilton Santos', 'Renê Simões', '-Diego Jardel<br/>-Bill<br/>-Thiago Carleto<br/>-Fernandes', ''),
(54, 1, 'Nova Iguaçu', 2, 1, 'Carioca', '2015-02-21', 'Nilton Santos', 'Renê Simões', '-Paulo Henrique (Gol Contra)<br/>-Jóbson', '-Marlon'),
(55, 1, 'Flamengo', 1, 0, 'Carioca', '2015-03-01', 'Maracanã', 'Renê Simões', '-Tomás Bastos', ''),
(56, 0, 'Fluminense', 1, 3, 'Carioca', '2015-03-08', 'Maracanã', 'Renê Simões', '-Jóbson', '-Kenedy<br/>-Gerson<br/>-Fred'),
(57, 1, 'Resende', 3, 0, 'Carioca', '2015-03-15', 'Nilton Santos', 'Renê Simões', '-Tássio<br/>-Jóbson<br/>-Rodrigo Pimpão', ''),
(58, 0, 'Vasco', 1, 1, 'Carioca', '2015-03-29', 'Maracanã', 'Renê Simões', '-Roger Carvalho', '-Gilberto'),
(59, 1, 'Madureira', 4, 1, 'Carioca', '2015-04-05', 'Nilton Santos', 'Renê Simões', '-Thiago Carleto<br/>-Renan Fonseca<br/>-Fernandes<br/>-Bill', '-Rodrigo Lindoso'),
(60, 1, 'Vasco', 1, 2, 'Carioca', '2015-05-03', 'Maracanã', 'Renê Simões', '-Diego Jardel', '-Rafael Silva<br/>-Gilberto'),
(61, 1, 'CRB', 4, 1, 'Série B', '2015-05-16', 'Nilton Santos', 'Renê Simões', '-Bill<br/>-Lulinha<br/>-William Arão<br/>-Élvis', '-Fernando'),
(62, 1, 'Vitória', 2, 0, 'Série B', '2015-05-30', 'Nilton Santos', 'Renê Simões', '-Diego Giaretta<br/>-William Arão', ''),
(63, 1, 'Mogi Mirim', 3, 0, 'Série B', '2015-06-05', 'Nilton Santos', 'Renê Simões', '-Rodrigo Pimpão<br/>-Bill<br/>-Lulinha', ''),
(64, 1, 'Boa Esporte', 1, 1, 'Série B', '2015-06-19', 'Nilton Santos', 'Renê Simões', '-Rodrigo Pimpão', '-Bruninho'),
(65, 1, 'Figueirense', 0, 1, 'Copa do Brasil', '2015-07-14', 'Nilton Santos', 'Renê Simões', '', '-Marcão'),
(66, 1, 'Criciúma', 0, 0, 'Série B', '2015-07-28', 'Nilton Santos', 'Ricardo Gomes', '', ''),
(67, 1, 'Paysandu', 2, 3, 'Série B', '2015-08-23', 'Nilton Santos', 'Ricardo Gomes', '-Daniel Carvalho<br/>-Sassá', '-Yago Pikachu<br/>-Thiago Martins<br/>-Jhonnatan'),
(68, 1, 'Bragantino', 4, 0, 'Série B', '2015-10-17', 'Nilton Santos', 'Ricardo Gomes', '-Navarro (2x)<br/>-William Arão<br/>-Neílton', ''),
(69, 1, 'Santa Cruz', 0, 3, 'Série B', '2015-11-14', 'Nilton Santos', 'Ricardo Gomes', '', '-Lelê<br/>-Grafite<br/>-Bruno Moraes'),
(70, 1, 'América-MG', 0, 0, 'Série B', '2015-11-28', 'Nilton Santos', 'Ricardo Gomes', '', ''),
(71, 1, 'Portuguesa-RJ', 2, 1, 'Carioca', '2016-02-02', 'São Januário', 'Ricardo Gomes', '-Gegê<br/>-Damián Lizio', '-Rafael Paty'),
(72, 1, 'Boavista', 1, 0, 'Carioca', '2016-03-06', 'São Januário', 'Ricardo Gomes', '-Fernandes', ''),
(73, 1, 'Vasco', 0, 1, 'Carioca', '2016-05-01', 'Maracanã', 'Ricardo Gomes', '', '-Jorge Henrique'),
(74, 0, 'Vasco', 1, 1, 'Carioca', '2016-05-08', 'Maracanã', 'Ricardo Gomes', '-Leandrinho', '-Rafael Vaz'),
(75, 1, 'São Paulo', 0, 1, 'Série A', '2016-05-15', 'Raulino de Oliveira (Volta Redonda-RJ)', 'Ricardo Gomes', '', '-Lucas Fernandes'),
(76, 1, 'Santa Cruz', 2, 1, 'Série A', '2016-07-03', 'Mário Helênio (Juiz de Fora-MG)', 'Ricardo Gomes', '-Sassá<br/>-Neílton', '-João Paulo'),
(77, 1, 'Palmeiras', 3, 1, 'Série A', '2016-07-31', 'Arena Botafogo', 'Ricardo Gomes', '-Neílton (2x)<br/>-Camilo', '-Erik'),
(78, 1, 'Grêmio', 2, 1, 'Série A', '2016-09-04', 'Arena Botafogo', 'Jair Ventura', '-Camilo<br/>-Sassá', '-Batista'),
(79, 1, 'Fluminense', 1, 0, 'Série A', '2016-09-07', 'Arena Botafogo', 'Jair Ventura', '-Neílton', ''),
(80, 1, 'Internacional', 1, 0, 'Série A', '2016-10-12', 'Arena Botafogo', 'Jair Ventura', '-Sassá', ''),
(81, 1, 'Atlético-MG', 3, 2, 'Série A', '2016-10-16', 'Arena Botafogo', 'Jair Ventura', '-Bruno Silva<br/>-Rodrigo Pimpão<br/>-Dudu Cearense', '-Fred<br/>-Leonardo Silva'),
(82, 1, 'Coritiba', 0, 0, 'Série A', '2016-10-29', 'Arena Botafogo', 'Jair Ventura', '', ''),
(83, 1, 'Chapecoense', 0, 2, 'Série A', '2016-11-16', 'Arena Botafogo', 'Jair Ventura', '', '-Kempes<br/>-Sérgio Manoel'),
(84, 1, 'Ponte Preta', 1, 1, 'Série A', '2016-11-26', 'Arena Botafogo', 'Jair Ventura', '-Sassá', '-William Potker'),
(85, 1, 'Nova Iguaçu', 1, 1, 'Carioca', '2017-01-28', 'Nilton Santos', 'Jair Ventura', '-Marcelo Benevenuto', '-Murilo Henrique'),
(86, 1, 'Colo-Colo-CHI', 2, 1, 'Libertadores', '2017-02-01', 'Nilton Santos', 'Jair Ventura', '-Airton<br/>-Esteban Pavez (Gol Contra)', '-Paredes'),
(87, 1, 'Macaé', 2, 1, 'Carioca', '2017-02-04', 'Nilton Santos', 'Jair Ventura', '-Rodrigo Lindoso<br/>-Vinicius Tanque', '-Guilherme Xavier'),
(88, 1, 'Olimpia-PAR', 1, 0, 'Libertadores', '2017-02-15', 'Nilton Santos', 'Jair Ventura', '-Rodrigo Pimpão', ''),
(89, 1, 'Volta Redonda', 1, 0, 'Carioca', '2017-03-09', 'Nilton Santos', 'Jair Ventura', '-Victor Luís', ''),
(90, 1, 'Vasco', 0, 0, 'Carioca', '2017-03-19', 'Nilton Santos', 'Jair Ventura', '', ''),
(91, 1, 'Fluminense', 2, 3, 'Carioca', '2017-03-23', 'Nilton Santos', 'Jair Ventura', '-Roger (2x)', '-Richarlison (2x)<br/>-Renato Chaves'),
(92, 1, 'Fluminense', 3, 1, 'Carioca', '2017-04-09', 'Nilton Santos', 'Jair Ventura', '-Igor Rabello<br/>-Dudu Cearense<br/>-Sassá', '-Richarlison'),
(93, 1, 'Vasco', 0, 2, 'Carioca', '2017-04-16', 'Nilton Santos', 'Jair Ventura', '', '-Douglas Luiz<br/>-Luís Fabiano'),
(94, 1, 'Sport', 2, 1, 'Copa do Brasil', '2017-04-26', 'Nilton Santos', 'Jair Ventura', '-Guilherme (2x)', '-Samuel Xavier'),
(95, 1, 'Barcelona de Guayaquil-EQU', 0, 2, 'Libertadores', '2017-05-02', 'Nilton Santos', 'Jair Ventura', '', '-Ayoví<br/>-Jonatan Álvez'),
(96, 1, 'Atlético Nacional-COL', 1, 0, 'Libertadores', '2017-05-18', 'Nilton Santos', 'Jair Ventura', '-Rodrigo Pimpão', ''),
(97, 1, 'Ponte Preta', 2, 0, 'Série A', '2017-05-21', 'Nilton Santos', 'Jair Ventura', '-Bruno Silva <br />-Rodrigo Lindoso', ''),
(98, 1, 'Bahia', 1, 0, 'Série A', '2017-05-28', 'Nilton Santos', 'Jair Ventura', '-Bruno Silva', ''),
(99, 1, 'Coritiba', 2, 2, 'Série A', '2017-06-11', 'Nilton Santos', 'Jair Ventura', '-Roger<br/>-Joel Carli', '-Kléber<br/>-Henrique Almeida'),
(100, 1, 'Vasco', 3, 1, 'Série A', '2017-06-21', 'Nilton Santos', 'Jair Ventura', '-Roger (2x)<br/>-Victor Luís', '-Caio Monteiro'),
(101, 1, 'Avaí', 0, 2, 'Série A', '2017-06-26', 'Nilton Santos', 'Jair Ventura', '', '-Joel (2x)'),
(102, 1, 'Atlético-MG', 1, 1, 'Série A', '2017-07-09', 'Nilton Santos', 'Jair Ventura', '-Roger', '-Marlone'),
(103, 0, 'Fluminense', 1, 0, 'Série A', '2017-07-12', 'Maracanã', 'Jair Ventura', '-Roger', ''),
(104, 1, 'Sport', 2, 1, 'Série A', '2017-07-17', 'Nilton Santos', 'Jair Ventura', '-Rodrigo Lindoso<br/>-Guilherme', '-Rithely'),
(105, 1, 'Atlético-MG', 3, 0, 'Copa do Brasil', '2017-07-26', 'Nilton Santos', 'Jair Ventura', '-Joel Carli<br/>-Roger<br/>-Gilson', ''),
(106, 1, 'São Paulo', 3, 4, 'Série A', '2017-07-29', 'Nilton Santos', 'Jair Ventura', '-Marcos Vinícius (2x) <br/>-Guilherme', '-Cueva <br/>-Marcos Guilherme (2x)<br/>-Hernanes'),
(107, 1, 'Palmeiras', 1, 2, 'Série A', '2017-08-02', 'Nilton Santos', 'Jair Ventura', '-Rodrigo Pimpão', '-Igor Rabello (Gol Contra) <br/>-Deyverson'),
(108, 1, 'Nacional-URU', 2, 0, 'Libertadores', '2017-08-10', 'Nilton Santos', 'Jair Ventura', '-Bruno Silva <br/>-Rodrigo Pimpão', ''),
(109, 1, 'Grêmio', 1, 0, 'Série A', '2017-08-13', 'Nilton Santos', 'Jair Ventura', '-Leandrinho', ''),
(110, 1, 'Flamengo', 0, 0, 'Copa do Brasil', '2017-08-16', 'Nilton Santos', 'Jair Ventura', '', ''),
(111, 0, 'Flamengo', 0, 1, 'Copa do Brasil', '2017-08-23', 'Maracanã', 'Jair Ventura', '', '-Diego'),
(112, 1, 'Flamengo', 2, 0, 'Série A', '2017-09-10', 'Nilton Santos', 'Jair Ventura', '-Roger (2x)', ''),
(113, 1, 'Grêmio', 0, 0, 'Libertadores', '2017-09-13', 'Nilton Santos', 'Jair Ventura', '', ''),
(114, 1, 'Santos', 2, 0, 'Série A', '2017-09-16', 'Nilton Santos', 'Jair Ventura', '-Rodrigo Lindoso <br/>-Guilherme', ''),
(115, 1, 'Vitória', 2, 3, 'Série A', '2017-10-01', 'Nilton Santos', 'Jair Ventura', '-Brenner (2x)', '-David <br/>-André Lima <br/>-Danilinho'),
(116, 1, 'Chapecoense', 2, 1, 'Série A', '2017-10-11', 'Nilton Santos', 'Jair Ventura', '-Brenner <br/>-Vinicius Tanque', '-Apodi'),
(117, 0, 'Vasco', 0, 1, 'Série A', '2017-10-14', 'Maracanã', 'Jair Ventura', '', '-Nenê'),
(118, 1, 'Corinthians', 2, 1, 'Série A', '2017-10-23', 'Nilton Santos', 'Jair Ventura', '-Brenner <br/>-Igor Rabello', '-Jô'),
(119, 1, 'Fluminense', 1, 2, 'Série A', '2017-11-04', 'Nilton Santos', 'Jair Ventura', '-Marcos Vinícius', '-Marcos Júnior <br/>-Matheus Alessandro'),
(120, 1, 'Atlético-PR', 0, 1, 'Série A', '2017-11-11', 'Nilton Santos', 'Jair Ventura', '', '-Guilherme'),
(121, 1, 'Atlético-GO', 1, 2, 'Série A', '2017-11-16', 'Nilton Santos', 'Jair Ventura', '-João Paulo', '-Jorginho <br/>-Luiz Fernando'),
(122, 1, 'Cruzeiro', 2, 2, 'Série A', '2017-12-03', 'Nilton Santos', 'Jair Ventura', '-Brenner <br/>-Ezequiel', '-Thiago Neves <br/>-Arrascaeta'),
(123, 1, 'Portuguesa-RJ', 2, 2, 'Carioca', '2018-01-16', 'Nilton Santos', 'Felipe Conceição (Tigrão)', '-Brenner <br/>-Marcos Vinícius', '-Jefferson Oliveira (2x)'),
(124, 0, 'Fluminense', 0, 0, 'Carioca', '2018-01-20', 'Maracanã', 'Felipe Conceição (Tigrão)', '', ''),
(125, 1, 'Boavista', 1, 0, 'Carioca', '2018-01-28', 'Nilton Santos', 'Felipe Conceição (Tigrão)', '-Brenner', ''),
(126, 1, 'Madureira', 0, 0, 'Carioca', '2018-02-03', 'Nilton Santos', 'Felipe Conceição (Tigrão)', '', ''),
(127, 1, 'Bangu', 1, 0, 'Carioca', '2018-03-06', 'Nilton Santos', 'Alberto Valentim', '-Rodrigo Pimpão', ''),
(128, 1, 'Vasco', 2, 3, 'Carioca', '2018-03-18', 'Nilton Santos', 'Alberto Valentim', '-Rodrigo Lindoso <br/>-Brenner', '-Riascos <br/>-Andrés Ríos <br/>-Paulinho'),
(129, 1, 'Vasco', 3, 2, 'Carioca', '2018-03-21', 'Nilton Santos', 'Alberto Valentim', '-Brenner <br/>-Luiz Fernando <br/>-Igor Rabello', '-Erazo <br/>-Riascos'),
(130, 0, 'Fluminense', 0, 3, 'Carioca', '2018-03-25', 'Maracanã', 'Alberto Valentim', '', '-Pedro <br/>-Marcos Júnior <br/>-Jadson'),
(131, 0, 'Flamengo', 1, 0, 'Carioca', '2018-03-28', 'Maracanã', 'Alberto Valentim', '-Luiz Fernando', ''),
(132, 1, 'Vasco', 2, 3, 'Carioca', '2018-04-01', 'Nilton Santos', 'Alberto Valentim', '-Renatinho <br/>-Brenner', '-Yago Pikachu (2x) <br/>-Andrés Ríos'),
(133, 0, 'Vasco', 1, 0, 'Carioca', '2018-04-08', 'Maracanã', 'Alberto Valentim', '-Joel Carli<br>\r\n<br>Pênaltis: (4)<br>\r\n-Brenner<br>\r\n-Gilson<br>\r\n-Marcinho<br>\r\n-Renatinho', '<br><br>Pênaltis: (3)<br>\r\n-Wagner<br>\r\n-Andrés Ríos<br>\r\n-Yago Pikachu'),
(134, 1, 'Grêmio', 2, 1, 'Série A', '2018-04-28', 'Nilton Santos', 'Alberto Valentim', '-Brenner <br/>-Gilson', '-Igor Rabello (Gol Contra)'),
(135, 1, 'Audax Italiano-CHI', 1, 1, 'Sul-Americana', '2018-05-09', 'Nilton Santos', 'Alberto Valentim', '-Matheus Fernandes', '-Luis Cabrera'),
(136, 1, 'Fluminense', 2, 1, 'Série A', '2018-05-14', 'Nilton Santos', 'Alberto Valentim', '-Rodrigo Lindoso <br/>-Kieza', '-Pedro'),
(137, 1, 'Vitória', 1, 1, 'Série A', '2018-05-27', 'Nilton Santos', 'Alberto Valentim', '-Kieza', '-Denílson'),
(138, 0, 'Vasco', 2, 1, 'Série A', '2018-06-02', 'São Januário', 'Alberto Valentim', '-Kieza <br/>-Igor Rabello', '-Andrey'),
(139, 1, 'Ceará', 0, 0, 'Série A', '2018-06-06', 'Nilton Santos', 'Alberto Valentim', '', ''),
(140, 1, 'Chapecoense', 1, 0, 'Série A', '2018-07-26', 'Nilton Santos', 'Marcos Paquetá', '-Marcinho', ''),
(141, 1, 'Santos', 0, 0, 'Série A', '2018-08-04', 'Nilton Santos', 'Bruno Lazaroni', '', ''),
(142, 1, 'Nacional-PAR', 2, 0, 'Sul-Americana', '2018-08-16', 'Nilton Santos', 'Zé Ricardo', '-Rodrigo Lindoso <br/>-Léo Valencia', ''),
(143, 1, 'Atlético-MG', 0, 3, 'Série A', '2018-08-19', 'Nilton Santos', 'Zé Ricardo', '', '-Luan <br/>-Cazares <br/>-Tomás Andrade'),
(144, 1, 'Sport', 2, 0, 'Série A', '2018-08-25', 'Nilton Santos', 'Zé Ricardo', '-Joel Carli <br/>-Rodrigo Aguirre', ''),
(145, 1, 'Cruzeiro', 1, 1, 'Série A', '2018-09-05', 'Nilton Santos', 'Zé Ricardo', '-Luiz Fernando', '-Edílson'),
(146, 0, 'Fluminense', 0, 1, 'Série A', '2018-09-09', 'Maracanã', 'Zé Ricardo', '', '-Digão'),
(147, 1, 'América-MG', 1, 0, 'Série A', '2018-09-16', 'Nilton Santos', 'Zé Ricardo', '-Rodrigo Lindoso', ''),
(148, 1, 'São Paulo', 2, 2, 'Série A', '2018-09-30', 'Nilton Santos', 'Zé Ricardo', '-Jean <br/>-Kieza', '-Diego Souza <br/>-Gonzalo Carneiro'),
(149, 1, 'Bahia', 2, 1, 'Sul-Americana', '2018-10-03', 'Nilton Santos', 'Zé Ricardo', '-Rodrigo Pimpão <br/>-Luiz Fernando\r\n<br><br>Pênaltis: (4)<br>\r\n-Rodrigo Lindoso<br>\r\n-Aguirre<br>\r\n-Kieza<br>\r\n-Renatinho<br>', '-Edigar Junio\r\n<br><br>Pênaltis: (5)<br>\r\n-Gilberto<br>\r\n-Zé Rafael<br>\r\n-Allione<br>\r\n-Nilton<br>\r\n-Flávio'),
(150, 1, 'Vasco', 1, 1, 'Série A', '2018-10-09', 'Nilton Santos', 'Zé Ricardo', '-Luiz Fernando', '-Maxi López'),
(151, 1, 'Bahia', 0, 1, 'Série A', '2018-10-20', 'Nilton Santos', 'Zé Ricardo', '', '-Edigar Junio'),
(152, 1, 'Corinthians', 1, 0, 'Série A', '2018-11-04', 'Nilton Santos', 'Zé Ricardo', '-Jean', ''),
(153, 1, 'Flamengo', 2, 1, 'Série A', '2018-11-10', 'Nilton Santos', 'Zé Ricardo', '-Erik <br />-Léo Valencia', '-Vitinho'),
(154, 1, 'Internacional', 1, 0, 'Série A', '2018-11-18', 'Nilton Santos', 'Zé Ricardo', '-Erik', ''),
(155, 1, 'Paraná', 2, 1, 'Série A', '2018-11-28', 'Nilton Santos', 'Zé Ricardo', '-Erik (2x)', '-Alex Santana'),
(156, 1, 'Bangu', 0, 0, 'Carioca', '2019-01-23', 'Nilton Santos', 'Zé Ricardo', '', ''),
(157, 1, 'Resende', 0, 1, 'Carioca', '2019-01-31', 'Nilton Santos', 'Zé Ricardo', '', '-Maxwell'),
(158, 1, 'Defensa y Justicia-ARG', 1, 0, 'Sul-Americana', '2019-02-06', 'Nilton Santos', 'Zé Ricardo', '-Erik', ''),
(159, 1, 'Vasco', 1, 1, 'Carioca', '2019-02-23', 'Nilton Santos', 'Zé Ricardo', '-Marcelo Benevenuto', '-Yago Pikachu'),
(160, 1, 'Cuiabá', 3, 0, 'Copa do Brasil', '2019-02-27', 'Nilton Santos', 'Zé Ricardo', '-Erik (2x)<br>-Rodrigo Pimpão', ''),
(161, 1, 'Madureira', 2, 1, 'Carioca', '2019-03-11', 'Nilton Santos', 'Zé Ricardo', '-Jonathan<br>-Kieza', '-Marcinho (Gol contra)'),
(162, 0, 'Fluminense', 1, 1, 'Carioca', '2019-03-17', 'Maracanã', 'Zé Ricardo', '-Alex Santana', '-Paulo Henrique Ganso'),
(163, 1, 'Juventude', 1, 1, 'Copa do Brasil', '2019-04-04', 'Nilton Santos', 'Zé Ricardo', '-Erik', '-Paulo Sérgio'),
(164, 0, 'São Paulo', 0, 2, 'Série A', '2019-04-27', 'Morumbi (São Paulo-SP)', 'Eduardo Barroca', '', '-Éverton<br>-Hudson'),
(165, 1, 'Fortaleza', 1, 0, 'Série A', '2019-05-05', 'Nilton Santos', 'Eduardo Barroca', '-Alex Santana', ''),
(166, 0, 'Fluminense', 1, 0, 'Série A', '2019-05-11', 'Maracanã', 'Eduardo Barroca', '-Alex Santana', ''),
(167, 1, 'Sol de America-PAR', 4, 0, 'Sul-Americana', '2019-05-29', 'Nilton Santos', 'Eduardo Barroca', '-Cícero<br>-Luiz Fernando<br>-Gustavo Bochecha<br>-Diego Souza', ''),
(168, 1, 'Vasco', 1, 0, 'Série A', '2019-06-02', 'Nilton Santos', 'Eduardo Barroca', '-Diego Souza', ''),
(169, 1, 'Santos', 0, 1, 'Série A', '2019-07-21', 'Nilton Santos', 'Eduardo Barroca', '', '-Marinho'),
(170, 1, 'Atlético-MG', 0, 1, 'Sul-Americana', '2019-07-24', 'Nilton Santos', 'Eduardo Barroca', '', '-Vinicius'),
(171, 0, 'Flamengo', 2, 3, 'Série A', '2019-07-28', 'Maracanã', 'Eduardo Barroca', '-Cícero<br>-Diego Souza', '-Gerson<br>-Gabriel<br>-Bruno Henrique'),
(172, 0, 'Atlético-MG', 0, 2, 'Sul-Americana', '2019-07-31', 'Arena Independência (Belo Horizonte-MG)', 'Eduardo Barroca', '', '-Fábio Santos<br>-Vinicius'),
(174, 1, 'Athletico-PR', 2, 1, 'Série A', '2019-08-11', 'Nilton Santos', 'Eduardo Barroca', '-Luiz Fernando<br>-Diego Souza', '-Thonny Anderson'),
(175, 0, 'Corinthians', 0, 2, 'Série A', '2019-08-17', 'Arena Corinthians (São Paulo-SP)', 'Eduardo Barroca', '', '-Mauro Boselli<br>-Everaldo'),
(176, 1, 'Chapecoense', 0, 0, 'Série A', '2019-08-26', 'Nilton Santos', 'Eduardo Barroca', '', ''),
(177, 1, 'Atlético-MG', 2, 1, 'Série A', '2019-09-08', 'Nilton Santos', 'Eduardo Barroca', '-Diego Souza<br>-Alex Santana', '-Di Santo'),
(178, 1, 'São Paulo', 1, 2, 'Série A', '2019-09-21', 'Nilton Santos', 'Eduardo Barroca', '-João Paulo', '-Hernanes<br>-Pablo'),
(179, 1, 'Fluminense', 0, 1, 'Série A', '2019-10-06', 'Nilton Santos', 'Eduardo Barroca', '', '-Yony González'),
(181, 1, 'Goiás', 3, 1, 'Série A', '2019-10-09', 'Nilton Santos', 'Bruno Lazaroni', '-Gabriel<br>-João Paulo<br>-Leo Valencia', '-Marcelo Benevenuto (Gol contra)'),
(182, 0, 'Vasco', 1, 2, 'Série A', '2019-10-16', 'São Januário', 'Alberto Valentim', '-Marcelo Benevenuto', '-Bruno Gomes<br>-Ribamar'),
(183, 1, 'CSA', 2, 1, 'Série A', '2019-10-21', 'Nilton Santos', 'Alberto Valentim', '-Luciano Castán (Gol Contra)<br>-Igor Cássio', '-Ricardo Bueno'),
(184, 1, 'Cruzeiro', 0, 2, 'Série A', '2019-10-31', 'Nilton Santos', 'Alberto Valentim', '', '-Cacá<br>-Éderson'),
(185, 0, 'Santos', 1, 4, 'Série A', '2019-11-03', 'Vila Belmiro (Santos-SP)', 'Alberto Valentim', '-Igor Cássio', '-Eduardo Sasha<br>-Marinho<br>-Soteldo(2x)'),
(186, 1, 'Avaí', 2, 0, 'Série A', '2019-11-11', 'Nilton Santos', 'Alberto Valentim', '-Ricardo Thalheimer (Gol Contra)<br>-Diego Souza', ''),
(187, 1, 'Corinthians', 1, 0, 'Série A', '2019-11-24', 'Nilton Santos', 'Alberto Valentim', '-Diego Souza', ''),
(188, 1, 'Internacional', 0, 1, 'Série A', '2019-11-30', 'Nilton Santos', 'Alberto Valentim', '', '-Guerrero'),
(189, 1, 'Ceará', 1, 1, 'Série A', '2019-12-08', 'Nilton Santos', 'Alberto Valentim', '-Marcos Vinícius', '-Thiago Galhardo'),
(190, 0, 'Volta Redonda', 0, 1, 'Carioca', '2020-01-18', 'Raulino de Oliveira (Volta Redonda-RJ)', 'Bruno Lazaroni', '', '-Saulo'),
(191, 0, 'Madureira', 0, 2, 'Carioca', '2020-01-21', 'Aniceto Moscoso (Conselheiro Galvão)', 'Bruno Lazaroni', '', '-Emerson Carioca<br>-Ygor Catatau'),
(192, 1, 'Macaé', 3, 1, 'Carioca', '2020-01-26', 'Nilton Santos', 'Alberto Valentim', '-Pedro Raúl<br>-Luis Henrique<br>-Bruno Nazário', '-Matheus Babi'),
(194, 1, 'Resende', 2, 1, 'Carioca', '2020-01-30', 'Nilton Santos', 'Alberto Valentim', '-Bruno Nazário<br>-Pedro Raúl', '-Geovani'),
(195, 1, 'Vasco', 1, 0, 'Carioca', '2020-02-02', 'Nilton Santos', 'Alberto Valentim', '-Igor Cássio', ''),
(196, 0, 'Fluminense', 0, 3, 'Carioca', '2020-02-09', 'Maracanã', 'Alberto Valentim', '', '-Nenê (2x)<br>-Wellington Silva'),
(197, 1, 'Boavista', 2, 1, 'Carioca', '2020-03-01', 'Nilton Santos', 'Paulo Autuori', '-Alex Santana<br>-Bruno Nazário', '-Michel'),
(202, 0, 'Flamengo', 0, 3, 'Carioca', '2020-03-07', 'Maracanã', 'Paulo Autuori', '', '-Éverton Ribeiro<br>-Gabriel<br>-Michael');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=204;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
