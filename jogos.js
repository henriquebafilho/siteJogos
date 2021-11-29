/*
0 - mandante
1 - adversario
2 - golsBotafogo
3 - golsAdversario
4 - campeonato
5 - data
6 - estádio
7 - técnico
8 - autorBotafogo
9 - autorAdversario
10 - vídeo do youtube
*/

var jogos = [];

var jogo20021026 = ["Botafogo", "Fluminense", 2, 3, "Série A", "2002-10-26", "Maracanã", "Ivo Wortmann", ["Galeano", "Léo Inácio"], ["César","Magno Alves","Romário"], "https://www.youtube.com/embed/PqiI2VnS3oU"];
jogos.push(jogo20021026);
var jogo20040229 =  ["Botafogo", "Fluminense", 0, 0, "Carioca", "2004-02-29", "Maracanã", "Levir Culpi", [[""]], [[""]]];
jogos.push(jogo20040229);
var jogo20040314 =  ["Botafogo", "Flamengo", 1, 0, "Carioca", "2004-03-14", "Maracanã", "Levir Culpi", ["Alex Alves"], [""], "https://www.youtube.com/embed/6flHjmxTW8w"];
jogos.push(jogo20040314);
var jogo20040812 = ["Botafogo", "Atlético-PR", 1, 1, "Série A", "2004-08-12", "Caio Martins", "Mauro Galvão", ["Schwenck"], ["Washington"], "https://www.youtube.com/embed/X6Mxaz0O9QM"];
jogos.push(jogo20040812);
var jogo20040828 = ["Botafogo", "Criciúma", 1, 1, "Série A", "2004-08-28", "Caio Martins", "Paulo Bonamigo", ["Schwenck"], ["Fernandinho"], "https://www.youtube.com/embed/DAQ1GFR00aw"];
jogos.push(jogo20040828);
var jogo20041002 = ["Fluminense", "Botafogo", 1, 4, "Série A", "2004-10-02", "Maracanã", "Paulo Bonamigo", ["Almir","Ruy","Ricardinho","Têti"], ["Edmundo"], "https://www.youtube.com/embed/YcDRtB4ii6U"];
jogos.push(jogo20041002);
var jogo20041113 = ["Botafogo", "Coritiba", 4, 1, "Série A", "2004-11-13", "Caio Martins", "Paulo Bonamigo", ["Caio Ribeiro (2x)","Schwenck","Ricardinho"], ["Jorginho Paulista"], "https://www.youtube.com/embed/kStiFan90c0"];
jogos.push(jogo20041113);
var jogo20041127 = ["Botafogo", "Guarani", 1, 0, "Série A", "2004-11-27", "Caio Martins", "Paulo Bonamigo", ["Alex Alves"], [""]];
jogos.push(jogo20041127);
var jogo20041212 = ["Botafogo", "Corinthians", 1, 2, "Série A", "2004-12-12", "Caio Martins", "Paulo Bonamigo", ["Alex Alves"], ["Fábio Baiano","Wendel"], "https://www.youtube.com/embed/47_CgK8epdo"];
jogos.push(jogo20041212);
var jogo20050213 = ["Botafogo", "Americano", 1, 2, "Carioca", "2005-02-13", "Maracanã", "Paulo Bonamigo", ["Alex Alves"], ["Marcos Antônio","Washington"]];
jogos.push(jogo20050213);
var jogo20050313 = ["Fluminense", "Botafogo", 4, 0, "Carioca", "2005-03-13", "Maracanã", "Paulo Bonamigo", [""], ["Fabiano Eller","Gabriel","Juninho","Alex"]];
jogos.push(jogo20050313);
var jogo20050529 = ["Botafogo", "Atlético-PR", 2, 0, "Série A", "2005-05-29", "Luso Brasileiro", "Paulo César Gusmão", ["Rafael Marques","Almir"], [""]];
jogos.push(jogo20050529);
var jogo20050918 = ["Botafogo", "Goiás", 3, 1, "Série A", "2005-09-18", "Luso Brasileiro", "Celso Roth", ["Ramón","Zé Roberto (2x)"], ["Souza"]];
jogos.push(jogo20050918);
var jogo20051008 = ["Botafogo", "Palmeiras", 1, 2, "Série A", "2005-10-08", "Luso Brasileiro", "Celso Roth", ["Alex Alves"], ["Marcinho Guerreiro","Marcinho"]];
jogos.push(jogo20051008);
var jogo20051112 = ["Botafogo", "Paraná", 2, 0, "Série A", "2005-11-12", "Luso Brasileiro", "Celso Roth", ["Ramón","Juca"], [""]];
jogos.push(jogo20051112);
var jogo20060122 = ["Botafogo", "Vasco", 5, 3, "Carioca", "2006-01-22", "Maracanã", "Carlos Roberto", ["Zé Roberto","Lúcio Flávio","Reinaldo","Ruy","Felipe Adão"], ["Romário (3x)"]];
jogos.push(jogo20060122);
var jogo20060219 = ["Botafogo", "Nova Iguaçu", 1, 1, "Carioca", "2006-02-19", "Maracanã", "Carlos Roberto", ["Dodô"], ["Marcos Denner"]];
jogos.push(jogo20060219);
var jogo20060409 = ["Madureira", "Botafogo", 1, 3, "Carioca", "2006-04-09", "Maracanã", "Carlos Roberto", ["Dodô (2x)","Reinaldo"], ["Fábio Júnior"]];
jogos.push(jogo20060409);
var jogo20061014 = ["Botafogo", "Santos", 4, 3, "Série A", "2006-10-14", "Maracanã", "Cuca", ["Asprilla","Reinaldo","Zé Roberto","Juca"], ["Kléber","Welligton Paulista","Reinaldo"]];
jogos.push(jogo20061014);
var jogo20061022 = ["Botafogo", "São Caetano", 2, 1, "Série A", "2006-10-22", "Maracanã", "Cuca", ["Juninho","Reinaldo"], ["Marabá"]];
jogos.push(jogo20061022);
var jogo20061102 = ["Botafogo", "Internacional", 0, 1, "Série A", "2006-11-02", "Maracanã", "Cuca", [""], ["Alex Meschini"]];
jogos.push(jogo20061102);
var jogo20061119 = ["Botafogo", "Goiás", 2, 2, "Série A", "2006-11-19", "Maracanã", "Cuca", ["Wando","Lúcio Flávio"], ["Robson Luiz","Rogério Corrêa"]];
jogos.push(jogo20061119);
var jogo20070523 = ["Botafogo", "Figueirense", 3, 1, "Copa do Brasil", "2007-05-23", "Maracanã", "Cuca", ["Zé Roberto","André Lima","Vinícius (GC)"], ["Cleiton Xavier"]];
jogos.push(jogo20070523);
var jogo20070602 = ["Botafogo", "Grêmio", 3, 0, "Série A", "2007-06-02", "Maracanã", "Cuca", ["Juninho","Luciano Almeida","Dodô"], [""]];
jogos.push(jogo20070602);
var jogo20070617 = ["Botafogo", "Náutico", 3, 1, "Série A", "2007-06-17", "Maracanã", "Cuca", ["Juninho","André Lima","Jorge Henrique"], ["Alex (GC)"]];
jogos.push(jogo20070617);
var jogo20070819 = ["Botafogo", "Internacional", 1, 1, "Série A", "2007-08-19", "Maracanã", "Cuca", ["André Lima"], ["Ceará"]];
jogos.push(jogo20070819);
var jogo20070923 = ["Botafogo", "Fluminense", 0, 2, "Série A", "2007-09-23", "Maracanã", "Cuca", [""], ["Thiago Neves","David"]];
jogos.push(jogo20070923);
var jogo20080330 = ["Botafogo", "Fluminense", 3, 1, "Carioca", "2008-03-30", "Maracanã", "Cuca", ["Welligton Paulista","Lúcio Flávio","Jorge Henrique"], ["Alan"]];
jogos.push(jogo20080330);
var jogo20080514 = ["Botafogo", "Atlético-MG", 2, 0, "Copa do Brasil", "2008-05-14", "Nilton Santos", "Cuca", ["Zé Carlos","Alessandro"], [""]];
jogos.push(jogo20080514);
var jogo20080525 = ["Botafogo", "Vasco", 1, 1, "Série A", "2008-05-25", "Nilton Santos", "Cuca", ["Lúcio Flávio"], ["Eduardo Luiz"]];
jogos.push(jogo20080525);
var jogo20080830 = ["Botafogo", "Náutico", 1, 1, "Série A", "2008-08-30", "Nilton Santos", "Ney Franco", ["Carlos Alberto"], ["Adriano"]];
jogos.push(jogo20080830);
var jogo20090328 = ["Fluminense", "Botafogo", 2, 1, "Carioca", "2009-03-28", "Maracanã", "Ney Franco", ["Maicosuel"], ["Maicon","Conca"]];
jogos.push(jogo20090328);
var jogo20100329 = ["Boavista", "Botafogo", 1, 4, "Carioca", "2010-03-29", "São Januário", "Joel Santana", ["Loco Abreu (3x)","Marcelo Cordeiro"], ["Tony"]];
jogos.push(jogo20100329);
var jogo20100807 = ["Botafogo", "Atlético-MG", 3, 0, "Série A", "2010-08-07", "Nilton Santos", "Joel Santana", ["Maicosuel","Somália","Herrera"], [""]];
jogos.push(jogo20100807);
var jogo20101023 = ["Botafogo", "Vitória", 1, 0, "Série A", "2010-10-23", "Nilton Santos", "Joel Santana", ["Marcelo Cordeiro"], [""]];
jogos.push(jogo20101023);
var jogo20110305 = ["Botafogo", "Volta Redonda", 4, 2, "Carioca", "2011-03-05", "Nilton Santos", "Joel Santana", ["Caio","Herrera","Alex","Rodrigo Mancha"], ["Gláuber","Cristiano Ávalos"]];
jogos.push(jogo20110305);
var jogo20110320 = ["Botafogo", "Vasco", 0, 2, "Carioca", "2011-03-20", "Nilton Santos", "Joel Santana", [""], ["Éder Luís","Diego Souza"]];
jogos.push(jogo20110320);
var jogo20110907 = ["Botafogo", "Ceará", 4, 0, "Série A", "2011-09-07", "Nilton Santos", "Caio Júnior", ["Herrera (2x)","Loco Abreu","Cidinho"], [""]];
jogos.push(jogo20110907);
var jogo20111008 = ["Botafogo", "Bahia", 2, 2, "Série A", "2011-10-08", "São Januário", "Caio Júnior", ["Alex","Caio"], ["Souza (2x)"]];
jogos.push(jogo20111008);
var jogo20120429 = ["Botafogo", "Vasco", 3, 1, "Carioca", "2012-04-29", "Nilton Santos", "Oswaldo de Oliveira", ["Loco Abreu (2x)","Maicosuel"], ["Carlos Alberto"]];
jogos.push(jogo20120429);
var jogo20130217 = ["Flamengo", "Botafogo", 1, 0, "Carioca", "2013-02-17", "Nilton Santos", "Oswaldo de Oliveira", [""], ["Hernane"]];
jogos.push(jogo20130217);
var jogo20130505 = ["Botafogo", "Fluminense", 1, 0, "Carioca", "2013-05-05", "Raulino de Oliveira (Volta Redonda-RJ)", "Oswaldo de Oliveira", ["Rafael Marques"], [""]];
jogos.push(jogo20130505);
var jogo20131005 = ["Botafogo", "Grêmio", 0, 1, "Série A", "2013-10-05", "Maracanã", "Oswaldo de Oliveira", [""], ["Alex Telles"]];
jogos.push(jogo20131005);
var jogo20131208 = ["Botafogo", "Criciúma", 3, 0, "Série A", "2013-12-08", "Maracanã", "Oswaldo de Oliveira", ["Lodeiro","Elias","Seedorf"], [""]];
jogos.push(jogo20131208);
var jogo20140205 = ["Botafogo", "Deportivo Quito-EQU", 4, 0, "Copa Libertadores", "2014-02-05", "Maracanã", "Eduardo Húngaro", ["Wallyson (3x)","Henrique Almeida"], [""]];
jogos.push(jogo20140205);
var jogo20140318 = ["Botafogo", "Independiente Del Valle-EQU", 1, 0, "Copa Libertadores", "2014-03-18", "Maracanã", "Eduardo Húngaro", ["\"El Tanque\" Ferreyra"], [""]];
jogos.push(jogo20140318);
var jogo20140727 = ["Flamengo", "Botafogo", 1, 0, "Série A", "2014-07-27", "Maracanã", "Vagner Mancini", [""], ["Alecsandro"]];
jogos.push(jogo20140727);
var jogo20140823 = ["Botafogo", "Chapecoense", 1, 0, "Série A", "2014-08-23", "Maracanã", "Vagner Mancini", ["Cachito Ramírez"], [""]];
jogos.push(jogo20140823);
var jogo20140831 = ["Botafogo", "Santos", 1, 0, "Série A", "2014-08-31", "Maracanã", "Vagner Mancini", ["Daniel"], [""]];
jogos.push(jogo20140831);
var jogo20140917 = ["Botafogo", "Bahia", 2, 3, "Série A", "2014-09-17", "Maracanã", "Vagner Mancini", ["Emerson Sheik (2x)"], ["Dankler (GC)","Maxi Biancucchi","Branquinho"]];
jogos.push(jogo20140917);
var jogo20141008 = ["Botafogo", "Palmeiras", 0, 1, "Série A", "2014-10-08", "Maracanã", "Vagner Mancini", [""], ["Henrique Dourado"]];
jogos.push(jogo20141008);
var jogo20150131 = ["Botafogo", "Boavista", 1, 0, "Carioca", "2015-01-31", "São Januário", "Renê Simões", ["Roger Carvalho"], [""]];
jogos.push(jogo20150131);
var jogo20150207 = ["Botafogo", "Bonsucesso", 4, 0, "Carioca", "2015-02-07", "Nilton Santos", "Renê Simões", ["Diego Jardel","Bill","Thiago Carleto","Fernandes"], [""]];
jogos.push(jogo20150207);
var jogo20150221 = ["Botafogo", "Nova Iguaçu", 2, 1, "Carioca", "2015-02-21", "Nilton Santos", "Renê Simões", ["Paulo Henrique (GC)","Jóbson"], ["Marlon"]];
jogos.push(jogo20150221);
var jogo20150301 = ["Botafogo", "Flamengo", 1, 0, "Carioca", "2015-03-01", "Maracanã", "Renê Simões", ["Tomás Bastos"], [""]];
jogos.push(jogo20150301);
var jogo20150308 = ["Fluminense", "Botafogo", 3, 1, "Carioca", "2015-03-08", "Maracanã", "Renê Simões", ["Jóbson"], ["Kenedy","Gerson","Fred"]];
jogos.push(jogo20150308);
var jogo20150315 = ["Botafogo", "Resende", 3, 0, "Carioca", "2015-03-15", "Nilton Santos", "Renê Simões", ["Tássio","Jóbson","Rodrigo Pimpão"], [""]];
jogos.push(jogo20150315);
var jogo20150329 = ["Vasco", "Botafogo", 1, 1, "Carioca", "2015-03-29", "Maracanã", "Renê Simões", ["Roger Carvalho"], ["Gilberto"]];
jogos.push(jogo20150329);
var jogo20150405 = ["Botafogo", "Madureira", 4, 1, "Carioca", "2015-04-05", "Nilton Santos", "Renê Simões", ["Thiago Carleto","Renan Fonseca","Fernandes","Bill"], ["Rodrigo Lindoso"]];
jogos.push(jogo20150405);
var jogo20150503 = ["Botafogo", "Vasco", 1, 2, "Carioca", "2015-05-03", "Maracanã", "Renê Simões", ["Diego Jardel"], ["Rafael Silva","Gilberto"]];
jogos.push(jogo20150503);
var jogo20150516 = ["Botafogo", "CRB", 4, 1, "Série B", "2015-05-16", "Nilton Santos", "Renê Simões", ["Bill","Lulinha","William Arão","Élvis"], ["Fernando"]];
jogos.push(jogo20150516);
var jogo20150530 = ["Botafogo", "Vitória", 2, 0, "Série B", "2015-05-30", "Nilton Santos", "Renê Simões", ["Diego Giaretta","William Arão"], [""]];
jogos.push(jogo20150530);
var jogo20150605 = ["Botafogo", "Mogi Mirim", 3, 0, "Série B", "2015-06-05", "Nilton Santos", "Renê Simões", ["Rodrigo Pimpão","Bill","Lulinha"], [""]];
jogos.push(jogo20150605);
var jogo20150619 = ["Botafogo", "Boa Esporte", 1, 1, "Série B", "2015-06-19", "Nilton Santos", "Renê Simões", ["Rodrigo Pimpão"], ["Bruninho"]];
jogos.push(jogo20150619);
var jogo20150714 = ["Botafogo", "Figueirense", 0, 1, "Copa do Brasil", "2015-07-14", "Nilton Santos", "Renê Simões", [""], ["Marcão"]];
jogos.push(jogo20150714);
var jogo20150728 = ["Botafogo", "Criciúma", 0, 0, "Série B", "2015-07-28", "Nilton Santos", "Ricardo Gomes", [""], [""]];
jogos.push(jogo20150728);
var jogo20150823 = ["Botafogo", "Paysandu", 2, 3, "Série B", "2015-08-23", "Nilton Santos", "Ricardo Gomes", ["Daniel Carvalho","Sassá"], ["Yago Pikachu","Thiago Martins","Jhonnatan"]];
jogos.push(jogo20150823);
var jogo20151017 = ["Botafogo", "Bragantino", 4, 0, "Série B", "2015-10-17", "Nilton Santos", "Ricardo Gomes", ["Navarro (2x)","William Arão","Neílton"], [""]];
jogos.push(jogo20151017);
var jogo20151114 = ["Botafogo", "Santa Cruz", 0, 3, "Série B", "2015-11-14", "Nilton Santos", "Ricardo Gomes", [""], ["Lelê","Grafite","Bruno Moraes"]];
jogos.push(jogo20151114);
var jogo20151128 = ["Botafogo", "América-MG", 0, 0, "Série B", "2015-11-28", "Nilton Santos", "Ricardo Gomes", [""], [""]];
jogos.push(jogo20151128);
var jogo20160202 = ["Botafogo", "Portuguesa-RJ", 2, 1, "Carioca", "2016-02-02", "São Januário", "Ricardo Gomes", ["Gegê","Damián Lizio"], ["Rafael Paty"]];
jogos.push(jogo20160202);
var jogo20160306 = ["Botafogo", "Boavista", 1, 0, "Carioca", "2016-03-06", "São Januário", "Ricardo Gomes", ["Fernandes"], [""]];
jogos.push(jogo20160306);
var jogo20160501 = ["Botafogo", "Vasco", 0, 1, "Carioca", "2016-05-01", "Maracanã", "Ricardo Gomes", [""], ["Jorge Henrique"]];
jogos.push(jogo20160501);
var jogo20160508 = ["Vasco", "Botafogo", 1, 1, "Carioca", "2016-05-08", "Maracanã", "Ricardo Gomes", ["Leandrinho"], ["Rafael Vaz"]];
jogos.push(jogo20160508);
var jogo20160515 = ["Botafogo", "São Paulo", 0, 1, "Série A", "2016-05-15", "Raulino de Oliveira (Volta Redonda-RJ)", "Ricardo Gomes", [""], ["Lucas Fernandes"]];
jogos.push(jogo20160515);
var jogo20160703 = ["Botafogo", "Santa Cruz", 2, 1, "Série A", "2016-07-03", "Mário Helênio (Juiz de Fora-MG)", "Ricardo Gomes", ["Sassá","Neílton"], ["João Paulo"]];
jogos.push(jogo20160703);
var jogo20160731 = ["Botafogo", "Palmeiras", 3, 1, "Série A", "2016-07-31", "Arena Botafogo", "Ricardo Gomes", ["Neílton (2x)","Camilo"], ["Erik"]];
jogos.push(jogo20160731);
var jogo20160904 = ["Botafogo", "Grêmio", 2, 1, "Série A", "2016-09-04", "Arena Botafogo", "Jair Ventura", ["Camilo","Sassá"], ["Batista"]];
jogos.push(jogo20160904);
var jogo20160907 = ["Botafogo", "Fluminense", 1, 0, "Série A", "2016-09-07", "Arena Botafogo", "Jair Ventura", ["Neílton"], [""]];
jogos.push(jogo20160907);
var jogo20161012 = ["Botafogo", "Internacional", 1, 0, "Série A", "2016-10-12", "Arena Botafogo", "Jair Ventura", ["Sassá"], [""]];
jogos.push(jogo20161012);
var jogo20161016 = ["Botafogo", "Atlético-MG", 3, 2, "Série A", "2016-10-16", "Arena Botafogo", "Jair Ventura", ["Bruno Silva","Rodrigo Pimpão","Dudu Cearense"], ["Fred","Leonardo Silva"]];
jogos.push(jogo20161016);
var jogo20161029 = ["Botafogo", "Coritiba", 0, 0, "Série A", "2016-10-29", "Arena Botafogo", "Jair Ventura", [""], [""]];
jogos.push(jogo20161029);
var jogo20161116 = ["Botafogo", "Chapecoense", 0, 2, "Série A", "2016-11-16", "Arena Botafogo", "Jair Ventura", [""], ["Kempes","Sérgio Manoel"]];
jogos.push(jogo20161116);
var jogo20161126 = ["Botafogo", "Ponte Preta", 1, 1, "Série A", "2016-11-26", "Arena Botafogo", "Jair Ventura", ["Sassá"], ["William Potker"]];
jogos.push(jogo20161126);
var jogo20170128 = ["Botafogo", "Nova Iguaçu", 1, 1, "Carioca", "2017-01-28", "Nilton Santos", "Jair Ventura", ["Marcelo Benevenuto"], ["Murilo Henrique"]];
jogos.push(jogo20170128);
var jogo20170201 = ["Botafogo", "Colo-Colo-CHI", 2, 1, "Copa Libertadores", "2017-02-01", "Nilton Santos", "Jair Ventura", ["Airton","Esteban Pavez (GC)"], ["Paredes"]];
jogos.push(jogo20170201);
var jogo20170204 = ["Botafogo", "Macaé", 2, 1, "Carioca", "2017-02-04", "Nilton Santos", "Jair Ventura", ["Rodrigo Lindoso","Vinicius Tanque"], ["Guilherme Xavier"]];
jogos.push(jogo20170204);
var jogo20170215 = ["Botafogo", "Olimpia-PAR", 1, 0, "Copa Libertadores", "2017-02-15", "Nilton Santos", "Jair Ventura", ["Rodrigo Pimpão"], [""]];
jogos.push(jogo20170215);
var jogo20170309 = ["Botafogo", "Volta Redonda", 1, 0, "Carioca", "2017-03-09", "Nilton Santos", "Jair Ventura", ["Victor Luís"], [""]];
jogos.push(jogo20170309);
var jogo20170319 = ["Botafogo", "Vasco", 0, 0, "Carioca", "2017-03-19", "Nilton Santos", "Jair Ventura", [""], [""]];
jogos.push(jogo20170319);
var jogo20170323 = ["Botafogo", "Fluminense", 2, 3, "Carioca", "2017-03-23", "Nilton Santos", "Jair Ventura", ["Roger (2x)"], ["Richarlison (2x)","Renato Chaves"]];
jogos.push(jogo20170323);
var jogo20170409 = ["Botafogo", "Fluminense", 3, 1, "Carioca", "2017-04-09", "Nilton Santos", "Jair Ventura", ["Igor Rabello","Dudu Cearense","Sassá"], ["Richarlison"]];
jogos.push(jogo20170409);
var jogo20170416 = ["Botafogo", "Vasco", 0, 2, "Carioca", "2017-04-16", "Nilton Santos", "Jair Ventura", [""], ["Douglas Luiz","Luís Fabiano"]];
jogos.push(jogo20170416);
var jogo20170426 = ["Botafogo", "Sport", 2, 1, "Copa do Brasil", "2017-04-26", "Nilton Santos", "Jair Ventura", ["Guilherme (2x)"], ["Samuel Xavier"]];
jogos.push(jogo20170426);
var jogo20170502 = ["Botafogo", "Barcelona de Guayaquil-EQU", 0, 2, "Copa Libertadores", "2017-05-02", "Nilton Santos", "Jair Ventura", [""], ["Ayoví","Jonatan Álvez"]];
jogos.push(jogo20170502);
var jogo20170518 = ["Botafogo", "Atlético Nacional-COL", 1, 0, "Copa Libertadores", "2017-05-18", "Nilton Santos", "Jair Ventura", ["Rodrigo Pimpão"], [""]];
jogos.push(jogo20170518);
var jogo20170521 = ["Botafogo", "Ponte Preta", 2, 0, "Série A", "2017-05-21", "Nilton Santos", "Jair Ventura", ["Bruno Silva","Rodrigo Lindoso"], [""]];
jogos.push(jogo20170521);
var jogo20170528 = ["Botafogo", "Bahia", 1, 0, "Série A", "2017-05-28", "Nilton Santos", "Jair Ventura", ["Bruno Silva"], [""]];
jogos.push(jogo20170528);
var jogo20170611 = ["Botafogo", "Coritiba", 2, 2, "Série A", "2017-06-11", "Nilton Santos", "Jair Ventura", ["Roger","Joel Carli"], ["Kléber","Henrique Almeida"]];
jogos.push(jogo20170611);
var jogo20170621 = ["Botafogo", "Vasco", 3, 1, "Série A", "2017-06-21", "Nilton Santos", "Jair Ventura", ["Roger (2x)","Victor Luís"], ["Caio Monteiro"]];
jogos.push(jogo20170621);
var jogo20170626 = ["Botafogo", "Avaí", 0, 2, "Série A", "2017-06-26", "Nilton Santos", "Jair Ventura", [""], ["Joel (2x)"]];
jogos.push(jogo20170626);
var jogo20170709 = ["Botafogo", "Atlético-MG", 1, 1, "Série A", "2017-07-09", "Nilton Santos", "Jair Ventura", ["Roger"], ["Marlone"]];
jogos.push(jogo20170709);
var jogo20170712 = ["Fluminense", "Botafogo", 0, 1, "Série A", "2017-07-12", "Maracanã", "Jair Ventura", ["Roger"], [""]];
jogos.push(jogo20170712);
var jogo20170717 = ["Botafogo", "Sport", 2, 1, "Série A", "2017-07-17", "Nilton Santos", "Jair Ventura", ["Rodrigo Lindoso","Guilherme"], ["Rithely"]];
jogos.push(jogo20170717);
var jogo20170726 = ["Botafogo", "Atlético-MG", 3, 0, "Copa do Brasil", "2017-07-26", "Nilton Santos", "Jair Ventura", ["Joel Carli","Roger","Gilson"], [""]];
jogos.push(jogo20170726);
var jogo20170729 = ["Botafogo", "São Paulo", 3, 4, "Série A", "2017-07-29", "Nilton Santos", "Jair Ventura", ["Marcos Vinícius (2x)","Guilherme"], ["Cueva ","Marcos Guilherme (2x)","Hernanes"]];
jogos.push(jogo20170729);
var jogo20170802 = ["Botafogo", "Palmeiras", 1, 2, "Série A", "2017-08-02", "Nilton Santos", "Jair Ventura", ["Rodrigo Pimpão"], ["Igor Rabello (GC)","Deyverson"]];
jogos.push(jogo20170802);
var jogo20170810 = ["Botafogo", "Nacional-URU", 2, 0, "Copa Libertadores", "2017-08-10", "Nilton Santos", "Jair Ventura", ["Bruno Silva ","Rodrigo Pimpão"], [""]];
jogos.push(jogo20170810);
var jogo20170813 = ["Botafogo", "Grêmio", 1, 0, "Série A", "2017-08-13", "Nilton Santos", "Jair Ventura", ["Leandrinho"], [""]];
jogos.push(jogo20170813);
var jogo20170816 = ["Botafogo", "Flamengo", 0, 0, "Copa do Brasil", "2017-08-16", "Nilton Santos", "Jair Ventura", [""], [""]];
jogos.push(jogo20170816);
var jogo20170823 = ["Flamengo", "Botafogo", 1, 0, "Copa do Brasil", "2017-08-23", "Maracanã", "Jair Ventura", [""], ["Diego"]];
jogos.push(jogo20170823);
var jogo20170910 = ["Botafogo", "Flamengo", 2, 0, "Série A", "2017-09-10", "Nilton Santos", "Jair Ventura", ["Roger (2x)"], [""]];
jogos.push(jogo20170910);
var jogo20170913 = ["Botafogo", "Grêmio", 0, 0, "Copa Libertadores", "2017-09-13", "Nilton Santos", "Jair Ventura", [""], [""]];
jogos.push(jogo20170913);
var jogo20170916 = ["Botafogo", "Santos", 2, 0, "Série A", "2017-09-16", "Nilton Santos", "Jair Ventura", ["Rodrigo Lindoso ","Guilherme"], [""]];
jogos.push(jogo20170916);
var jogo20171001 = ["Botafogo", "Vitória", 2, 3, "Série A", "2017-10-01", "Nilton Santos", "Jair Ventura", ["Brenner (2x)"], ["David ","André Lima ","Danilinho"]];
jogos.push(jogo20171001);
var jogo20171011 = ["Botafogo", "Chapecoense", 2, 1, "Série A", "2017-10-11", "Nilton Santos", "Jair Ventura", ["Brenner ","Vinicius Tanque"], ["Apodi"]];
jogos.push(jogo20171011);
var jogo20171014 = ["Vasco", "Botafogo", 1, 0, "Série A", "2017-10-14", "Maracanã", "Jair Ventura", [""], ["Nenê"]];
jogos.push(jogo20171014);
var jogo20171023 = ["Botafogo", "Corinthians", 2, 1, "Série A", "2017-10-23", "Nilton Santos", "Jair Ventura", ["Brenner ","Igor Rabello"], ["Jô"]];
jogos.push(jogo20171023);
var jogo20171104 = ["Botafogo", "Fluminense", 1, 2, "Série A", "2017-11-04", "Nilton Santos", "Jair Ventura", ["Marcos Vinícius"], ["Marcos Júnior ","Matheus Alessandro"]];
jogos.push(jogo20171104);
var jogo20171111 = ["Botafogo", "Atlético-PR", 0, 1, "Série A", "2017-11-11", "Nilton Santos", "Jair Ventura", [""], ["Guilherme"]];
jogos.push(jogo20171111);
var jogo20171116 = ["Botafogo", "Atlético-GO", 1, 2, "Série A", "2017-11-16", "Nilton Santos", "Jair Ventura", ["João Paulo"], ["Jorginho ","Luiz Fernando"]];
jogos.push(jogo20171116);
var jogo20171203 = ["Botafogo", "Cruzeiro", 2, 2, "Série A", "2017-12-03", "Nilton Santos", "Jair Ventura", ["Brenner ","Ezequiel"], ["Thiago Neves ","Arrascaeta"]];
jogos.push(jogo20171203);
var jogo20180116 = ["Botafogo", "Portuguesa-RJ", 2, 2, "Carioca", "2018-01-16", "Nilton Santos", "Felipe Conceição (Tigrão)", ["Brenner ","Marcos Vinícius"], ["Jefferson Oliveira (2x)"]];
jogos.push(jogo20180116);
var jogo20180120 = ["Fluminense", "Botafogo", 0, 0, "Carioca", "2018-01-20", "Maracanã", "Felipe Conceição (Tigrão)", [""], [""]];
jogos.push(jogo20180120);
var jogo20180128 = ["Botafogo", "Boavista", 1, 0, "Carioca", "2018-01-28", "Nilton Santos", "Felipe Conceição (Tigrão)", ["Brenner"], [""]];
jogos.push(jogo20180128);
var jogo20180203 = ["Botafogo", "Madureira", 0, 0, "Carioca", "2018-02-03", "Nilton Santos", "Felipe Conceição (Tigrão)", [""], [""]];
jogos.push(jogo20180203);
var jogo20180306 = ["Botafogo", "Bangu", 1, 0, "Carioca", "2018-03-06", "Nilton Santos", "Alberto Valentim", ["Rodrigo Pimpão"], [""]];
jogos.push(jogo20180306);
var jogo20180318 = ["Botafogo", "Vasco", 2, 3, "Carioca", "2018-03-18", "Nilton Santos", "Alberto Valentim", ["Rodrigo Lindoso ","Brenner"], ["Riascos ","Andrés Ríos ","Paulinho"]];
jogos.push(jogo20180318);
var jogo20180321 = ["Botafogo", "Vasco", 3, 2, "Carioca", "2018-03-21", "Nilton Santos", "Alberto Valentim", ["Brenner ","Luiz Fernando ","Igor Rabello"], ["Erazo ","Riascos"]];
jogos.push(jogo20180321);
var jogo20180325 = ["Fluminense", "Botafogo", 3, 0, "Carioca", "2018-03-25", "Maracanã", "Alberto Valentim", [""], ["Pedro","Marcos Júnior ","Jadson"]];
jogos.push(jogo20180325);
var jogo20180328 = ["Flamengo", "Botafogo", 0, 1, "Carioca", "2018-03-28", "Maracanã", "Alberto Valentim", ["Luiz Fernando"], [""]];
jogos.push(jogo20180328);
var jogo20180401 = ["Botafogo", "Vasco", 2, 3, "Carioca", "2018-04-01", "Nilton Santos", "Alberto Valentim", ["Renatinho ","Brenner"], ["Yago Pikachu (2x) ","Andrés Ríos"]];
jogos.push(jogo20180401);
var jogo20180408 = ["Vasco", "Botafogo", 0, 1, "Carioca", "2018-04-08", "Maracanã", "Alberto Valentim", ["Joel Carli",[""],"Pênaltis: (4)","Brenner","Gilson","Marcinho","Renatinho"], [[""],[""],"Pênaltis: (3)","Wagner","Andrés Ríos","Yago Pikachu"]];
jogos.push(jogo20180408);
var jogo20180428 = ["Botafogo", "Grêmio", 2, 1, "Série A", "2018-04-28", "Nilton Santos", "Alberto Valentim", ["Brenner ","Gilson"], ["Igor Rabello (GC)"]];
jogos.push(jogo20180428);
var jogo20180509 = ["Botafogo", "Audax Italiano-CHI", 1, 1, "Copa Sul-Americana", "2018-05-09", "Nilton Santos", "Alberto Valentim", ["Matheus Fernandes"], ["Luis Cabrera"]];
jogos.push(jogo20180509);
var jogo20180514 = ["Botafogo", "Fluminense", 2, 1, "Série A", "2018-05-14", "Nilton Santos", "Alberto Valentim", ["Rodrigo Lindoso ","Kieza"], ["Pedro"]];
jogos.push(jogo20180514);
var jogo20180527 = ["Botafogo", "Vitória", 1, 1, "Série A", "2018-05-27", "Nilton Santos", "Alberto Valentim", ["Kieza"], ["Denílson"]];
jogos.push(jogo20180527);
var jogo20180602 = ["Vasco", "Botafogo",  1, 2, "Série A", "2018-06-02", "São Januário", "Alberto Valentim", ["Kieza ","Igor Rabello"], ["Andrey"]];
jogos.push(jogo20180602);
var jogo20180606 = ["Botafogo", "Ceará", 0, 0, "Série A", "2018-06-06", "Nilton Santos", "Alberto Valentim", [""], [""]];
jogos.push(jogo20180606);
var jogo20180726 = ["Botafogo", "Chapecoense", 1, 0, "Série A", "2018-07-26", "Nilton Santos", "Marcos Paquetá", ["Marcinho"], [""]];
jogos.push(jogo20180726);
var jogo20180804 = ["Botafogo", "Santos", 0, 0, "Série A", "2018-08-04", "Nilton Santos", "Bruno Lazaroni", [""], [""]];
jogos.push(jogo20180804);
var jogo20180816 = ["Botafogo", "Nacional-PAR", 2, 0, "Copa Sul-Americana", "2018-08-16", "Nilton Santos", "Zé Ricardo", ["Rodrigo Lindoso","Léo Valencia"], [""]];
jogos.push(jogo20180816);
var jogo20180819 = ["Botafogo", "Atlético-MG", 0, 3, "Série A", "2018-08-19", "Nilton Santos", "Zé Ricardo", [""], ["Luan ","Cazares","Tomás Andrade"]];
jogos.push(jogo20180819);
var jogo20180825 = ["Botafogo", "Sport", 2, 0, "Série A", "2018-08-25", "Nilton Santos", "Zé Ricardo", ["Joel Carli ","Rodrigo Aguirre"], [""]];
jogos.push(jogo20180825);
var jogo20180905 = ["Botafogo", "Cruzeiro", 1, 1, "Série A", "2018-09-05", "Nilton Santos", "Zé Ricardo", ["Luiz Fernando"], ["Edílson"]];
jogos.push(jogo20180905);
var jogo20180909 = ["Fluminense", "Botafogo",  1, 0, "Série A", "2018-09-09", "Maracanã", "Zé Ricardo", [""], ["Digão"]];
jogos.push(jogo20180909);
var jogo20180916 = ["Botafogo", "América-MG", 1, 0, "Série A", "2018-09-16", "Nilton Santos", "Zé Ricardo", ["Rodrigo Lindoso"], [""]];
jogos.push(jogo20180916);
var jogo20180930 = ["Botafogo", "São Paulo", 2, 2, "Série A", "2018-09-30", "Nilton Santos", "Zé Ricardo", ["Jean ","Kieza"], ["Diego Souza","Gonzalo Carneiro"]];
jogos.push(jogo20180930);
var jogo20181003 = ["Botafogo", "Bahia", 2, 1, "Copa Sul-Americana", "2018-10-03", "Nilton Santos", "Zé Ricardo", ["Rodrigo Pimpão","Luiz Fernando",[""],"Pênaltis: (4)","Rodrigo Lindoso","Aguirre","Kieza","Renatinho"], ["Edigar Junio",[""],[""],"Pênaltis: (5)","Gilberto","Zé Rafael","Allione","Nilton","Flávio"]];
jogos.push(jogo20181003);
var jogo20181009 = ["Botafogo", "Vasco", 1, 1, "Série A", "2018-10-09", "Nilton Santos", "Zé Ricardo", ["Luiz Fernando"], ["Maxi López"]];
jogos.push(jogo20181009);
var jogo20181020 = ["Botafogo", "Bahia", 0, 1, "Série A", "2018-10-20", "Nilton Santos", "Zé Ricardo", [""], ["Edigar Junio"]];
jogos.push(jogo20181020);
var jogo20181104 = ["Botafogo", "Corinthians", 1, 0, "Série A", "2018-11-04", "Nilton Santos", "Zé Ricardo", ["Jean"], [""], "https://www.youtube.com/embed/lnuF_LUnwa4"];
jogos.push(jogo20181104);
var jogo20181110 = ["Botafogo", "Flamengo", 2, 1, "Série A", "2018-11-10", "Nilton Santos", "Zé Ricardo", ["Erik ","Léo Valencia"], ["Vitinho"]];
jogos.push(jogo20181110);
var jogo20181118 = ["Botafogo", "Internacional", 1, 0, "Série A", "2018-11-18", "Nilton Santos", "Zé Ricardo", ["Erik"], [""]];
jogos.push(jogo20181118);
var jogo20181128 = ["Botafogo", "Paraná", 2, 1, "Série A", "2018-11-28", "Nilton Santos", "Zé Ricardo", ["Erik (2x)"], ["Alex Santana"], "https://www.youtube.com/embed/NXP-pu04Dqs"];
jogos.push(jogo20181128);
var jogo20190123 = ["Botafogo", "Bangu", 0, 0, "Carioca", "2019-01-23", "Nilton Santos", "Zé Ricardo", [""], [""], "https://www.youtube.com/embed/-joL5USpTrw"];
jogos.push(jogo20190123);
var jogo20190131 = ["Botafogo", "Resende", 0, 1, "Carioca", "2019-01-31", "Nilton Santos", "Zé Ricardo", [""], ["Maxwell"], "https://www.youtube.com/embed/hV8iyoX5hSw"];
jogos.push(jogo20190131);
var jogo20190206 = ["Botafogo", "Defensa y Justicia-ARG", 1, 0, "Copa Sul-Americana", "2019-02-06", "Nilton Santos", "Zé Ricardo", ["Erik"], [""], "https://www.youtube.com/embed/Ggml0ng-Oxk"];
jogos.push(jogo20190206);
var jogo20190223 = ["Botafogo", "Vasco", 1, 1, "Carioca", "2019-02-23", "Nilton Santos", "Zé Ricardo", ["Marcelo Benevenuto"], ["Yago Pikachu"], "https://www.youtube.com/embed/rJf-YBhH2C0"];
jogos.push(jogo20190223);
var jogo20190227 = ["Botafogo", "Cuiabá", 3, 0, "Copa do Brasil", "2019-02-27", "Nilton Santos", "Zé Ricardo", ["Erik (2x)","Rodrigo Pimpão"], [""], "https://www.youtube.com/embed/oHdFbuF-HjA"];
jogos.push(jogo20190227);
var jogo20190311 = ["Botafogo", "Madureira", 2, 1, "Carioca", "2019-03-11", "Nilton Santos", "Zé Ricardo", ["Jonathan","Kieza"], ["Marcinho (GC)"], "https://www.youtube.com/embed/3vBVLa5h5qI"];
jogos.push(jogo20190311);
var jogo20190317 = ["Fluminense", "Botafogo",  1, 1, "Carioca", "2019-03-17", "Maracanã", "Zé Ricardo", ["Alex Santana"], ["Paulo Henrique Ganso"], "https://www.youtube.com/embed/_zXgPMNrj6w"];
jogos.push(jogo20190317);
var jogo20190404 = ["Botafogo", "Juventude", 1, 1, "Copa do Brasil", "2019-04-04", "Nilton Santos", "Zé Ricardo", ["Erik"], ["Paulo Sérgio"], "https://www.youtube.com/embed/MAkVonfMtBM"];
jogos.push(jogo20190404);
var jogo20190427 = ["São Paulo", "Botafogo",  2, 0, "Série A", "2019-04-27", "Morumbi (São Paulo-SP)", "Eduardo Barroca", [""], ["Éverton","Hudson"], "https://www.youtube.com/embed/2xx8oQmkgwA"];
jogos.push(jogo20190427);
var jogo20190505 = ["Botafogo", "Fortaleza", 1, 0, "Série A", "2019-05-05", "Nilton Santos", "Eduardo Barroca", ["Alex Santana"], [""], "https://www.youtube.com/embed/W20_qYR7ITw"];
jogos.push(jogo20190505);
var jogo20190511 = ["Fluminense", "Botafogo",  0, 1, "Série A", "2019-05-11", "Maracanã", "Eduardo Barroca", ["Alex Santana"], [""], "https://www.youtube.com/embed/cvfpVe4geTc"];
jogos.push(jogo20190511);
var jogo20190529 = ["Botafogo", "Sol de America-PAR", 4, 0, "Copa Sul-Americana", "2019-05-29", "Nilton Santos", "Eduardo Barroca", ["Cícero","Luiz Fernando","Gustavo Bochecha","Diego Souza"], [""], "https://www.youtube.com/embed/6zWV91YLnFQ"];
jogos.push(jogo20190529);
var jogo20190602 = ["Botafogo", "Vasco", 1, 0, "Série A", "2019-06-02", "Nilton Santos", "Eduardo Barroca", ["Diego Souza"], [""], "https://www.youtube.com/embed/qGa8vQqYd_k"];
jogos.push(jogo20190602);
var jogo20190721 = ["Botafogo", "Santos", 0, 1, "Série A", "2019-07-21", "Nilton Santos", "Eduardo Barroca", [""], ["Marinho"], "https://www.youtube.com/embed/9stKnIGwqco"];
jogos.push(jogo20190721);
var jogo20190724 = ["Botafogo", "Atlético-MG", 0, 1, "Copa Sul-Americana", "2019-07-24", "Nilton Santos", "Eduardo Barroca", [""], ["Vinicius"], "https://www.youtube.com/embed/wP-b-w7GpaM"];
jogos.push(jogo20190724);
var jogo20190728 = ["Flamengo", "Botafogo",  3, 2, "Série A", "2019-07-28", "Maracanã", "Eduardo Barroca", ["Cícero","Diego Souza"], ["Gerson","Gabriel","Bruno Henrique"], "https://www.youtube.com/embed/F-pP-zMCdwY"];
jogos.push(jogo20190728);
var jogo20190731 = ["Atlético-MG", "Botafogo",  2, 0, "Copa Sul-Americana", "2019-07-31", "Arena Independência (Belo Horizonte-MG)", "Eduardo Barroca", [""], ["Fábio Santos","Vinicius"], "https://www.youtube.com/embed/QfX2vKVXkf0"];
jogos.push(jogo20190731);
var jogo20190811 = ["Botafogo", "Athletico-PR", 2, 1, "Série A", "2019-08-11", "Nilton Santos", "Eduardo Barroca", ["Luiz Fernando","Diego Souza"], ["Thonny Anderson"], "https://www.youtube.com/embed/_0kEsihoFBk"];
jogos.push(jogo20190811);
var jogo20190817 = ["Corinthians", "Botafogo",  2, 0, "Série A", "2019-08-17", "Arena Corinthians (São Paulo-SP)", "Eduardo Barroca", [""], ["Mauro Boselli","Everaldo"], "https://www.youtube.com/embed/ZHKGm2vzBtE"];
jogos.push(jogo20190817);
var jogo20190826 = ["Botafogo", "Chapecoense", 0, 0, "Série A", "2019-08-26", "Nilton Santos", "Eduardo Barroca", [""], [""], "https://www.youtube.com/embed/Skh930Kz4XA"];
jogos.push(jogo20190826);
var jogo20190908 = ["Botafogo", "Atlético-MG", 2, 1, "Série A", "2019-09-08", "Nilton Santos", "Eduardo Barroca", ["Diego Souza","Alex Santana"], ["Di Santo"], "https://www.youtube.com/embed/FfufsWKx9Xw"];
jogos.push(jogo20190908);
var jogo20190921 = ["Botafogo", "São Paulo", 1, 2, "Série A", "2019-09-21", "Nilton Santos", "Eduardo Barroca", ["João Paulo"], ["Hernanes","Pablo"], "https://www.youtube.com/embed/AWQWfwLop9k"];
jogos.push(jogo20190921);
var jogo20191006 = ["Botafogo", "Fluminense", 0, 1, "Série A", "2019-10-06", "Nilton Santos", "Eduardo Barroca", [""], ["Yony González"], "https://www.youtube.com/embed/HIbXePVAK_U"];
jogos.push(jogo20191006);
var jogo20191009 = ["Botafogo", "Goiás", 3, 1, "Série A", "2019-10-09", "Nilton Santos", "Bruno Lazaroni", ["Gabriel","João Paulo","Leo Valencia"], ["Marcelo Benevenuto (GC)"], "https://www.youtube.com/embed/DAW5UGD3tXg"];
jogos.push(jogo20191009);
var jogo20191016 = ["Vasco", "Botafogo",  2, 1, "Série A", "2019-10-16", "São Januário", "Alberto Valentim", ["Marcelo Benevenuto"], ["Bruno Gomes","Ribamar"], "https://www.youtube.com/embed/V5flzW9tb_g"];
jogos.push(jogo20191016);
var jogo20191021 = ["Botafogo", "CSA", 2, 1, "Série A", "2019-10-21", "Nilton Santos", "Alberto Valentim", ["Luciano Castán (GC)","Igor Cássio"], ["Ricardo Bueno"], "https://www.youtube.com/embed/6pE1Eug0CaA"];
jogos.push(jogo20191021);
var jogo20191031 = ["Botafogo", "Cruzeiro", 0, 2, "Série A", "2019-10-31", "Nilton Santos", "Alberto Valentim", [""], ["Cacá","Éderson"], "https://www.youtube.com/embed/_bLGKgVu58A"];
jogos.push(jogo20191031);
var jogo20191103 = ["Santos", "Botafogo",  4, 1, "Série A", "2019-11-03", "Vila Belmiro (Santos-SP)", "Alberto Valentim", ["Igor Cássio"], ["Eduardo Sasha","Marinho","Soteldo (2x)"], "https://www.youtube.com/embed/iCaVvAAb3LE"];
jogos.push(jogo20191103);
var jogo20191111 = ["Botafogo", "Avaí", 2, 0, "Série A", "2019-11-11", "Nilton Santos", "Alberto Valentim", ["Ricardo Thalheimer (GC)","Diego Souza"], [""], "https://www.youtube.com/embed/ld_KEovTwoU"];
jogos.push(jogo20191111);
var jogo20191124 = ["Botafogo", "Corinthians", 1, 0, "Série A", "2019-11-24", "Nilton Santos", "Alberto Valentim", ["Diego Souza"], [""], "https://www.youtube.com/embed/Ij8V24n2JaM"];
jogos.push(jogo20191124);
var jogo20191130 = ["Botafogo", "Internacional", 0, 1, "Série A", "2019-11-30", "Nilton Santos", "Alberto Valentim", [""], ["Guerrero"], "https://www.youtube.com/embed/xCnRLq5Loq0"];
jogos.push(jogo20191130);
var jogo20191208 = ["Botafogo", "Ceará", 1, 1, "Série A", "2019-12-08", "Nilton Santos", "Alberto Valentim", ["Marcos Vinícius"], ["Thiago Galhardo"], "https://www.youtube.com/embed/O6oePjDHGIs"];
jogos.push(jogo20191208);
var jogo20200118 = ["Volta Redonda", "Botafogo",  1, 0, "Carioca", "2020-01-18", "Raulino de Oliveira (Volta Redonda-RJ)", "Bruno Lazaroni", [""], ["Saulo"], "https://www.youtube.com/embed/QSy9NJPPV4Q"];
jogos.push(jogo20200118);
var jogo20200121 = ["Madureira", "Botafogo",  2, 0, "Carioca", "2020-01-21", "Aniceto Moscoso (Conselheiro Galvão)", "Bruno Lazaroni", [""], ["Emerson Carioca","Ygor Catatau"], "https://www.youtube.com/embed/1uQvilYtyFc"];
jogos.push(jogo20200121);
var jogo20200126 = ["Botafogo", "Macaé", 3, 1, "Carioca", "2020-01-26", "Nilton Santos", "Alberto Valentim", ["Pedro Raúl","Luis Henrique","Bruno Nazário"], ["Matheus Babi"], "https://www.youtube.com/embed/A66Dynx7LPM"];
jogos.push(jogo20200126);
var jogo20200130 = ["Botafogo", "Resende", 2, 1, "Carioca", "2020-01-30", "Nilton Santos", "Alberto Valentim", ["Bruno Nazário","Pedro Raúl"], ["Geovani"], "https://www.youtube.com/embed/G9eA-o_hVxg"];
jogos.push(jogo20200130);
var jogo20200202 = ["Botafogo", "Vasco", 1, 0, "Carioca", "2020-02-02", "Nilton Santos", "Alberto Valentim", ["Igor Cássio"], [""], "https://www.youtube.com/embed/3UgQ3H58ilI"];
jogos.push(jogo20200202);
var jogo20200209 = ["Fluminense", "Botafogo",  3, 0, "Carioca", "2020-02-09", "Maracanã", "Alberto Valentim", [""], ["Nenê (2x)","Wellington Silva"], "https://www.youtube.com/embed/6k90jt51iSU"];
jogos.push(jogo20200209);
var jogo20200301 = ["Botafogo", "Boavista", 2, 1, "Carioca", "2020-03-01", "Nilton Santos", "Paulo Autuori", ["Alex Santana","Bruno Nazário"], ["Michel"], "https://www.youtube.com/embed/7VJJIFqI7o0"];
jogos.push(jogo20200301);
var jogo20200307 = ["Flamengo", "Botafogo",  3, 0, "Carioca", "2020-03-07", "Maracanã", "Paulo Autuori", [""], ["Éverton Ribeiro","Gabriel","Michael"], "https://www.youtube.com/embed/0BZMz2R7tmE"];
jogos.push(jogo20200307);
var jogo20210926 = ["Botafogo", "Sampaio Corrêa", 2, 0, "Série B", "2021-09-26", "Nilton Santos", "Enderson Moreira", ["Rafael Navarro","Luís Oyama"], [""], "https://www.youtube.com/embed/JacdF6x-VxY"];
jogos.push(jogo20210926);
var jogo20211002 = ["Botafogo", "Avaí", 1, 2, "Série B", "2021-10-02", "Nilton Santos", "Enderson Moreira", ["Diego Gonçalves"], ["Jean Cleber","Bruno Silva"], "https://www.youtube.com/embed/YKydTyB5Jjs"];
jogos.push(jogo20211002);
var jogo20211008 = ["Botafogo", "CRB", 2, 0, "Série B", "2021-10-08", "Nilton Santos", "Enderson Moreira", ["Marco Antônio","Carlinhos"], [""], "https://www.youtube.com/embed/FgCwni-h82k"];
jogos.push(jogo20211008);
var jogo20211020 = ["Botafogo", "Brusque", 3, 0, "Série B", "2021-10-20", "Nilton Santos", "Enderson Moreira", ["Rafael Navarro (2x)", "Marco Antônio"], [""], "https://www.youtube.com/embed/ZjqyO7fifT8"];
jogos.push(jogo20211020);
var jogo20211103 = ["Botafogo", "Confiança", 1, 0, "Série B", "2021-11-03", "Nilton Santos", "Enderson Moreira", ["Diego Gonçalves"], [""], "https://www.youtube.com/embed/lEwmd7IP1_g"];
jogos.push(jogo20211103);
var jogo20211107 = ["Vasco", "Botafogo", 0, 4, "Série B", "2021-11-07", "São Januário", "Enderson Moreira", ["Marco Antônio (2x)", "Rafael Navarro", "Diego Gonçalves"], [""], "https://www.youtube.com/embed/rOTCmzdwSk8"];
jogos.push(jogo20211107);
var jogo20211115 = ["Botafogo", "Operário", 2, 1, "Série B", "2021-11-15", "Nilton Santos", "Enderson Moreira", ["Pedro Castro", "Rafael Navarro"], ["Fabiano"], "https://www.youtube.com/embed/SWidPvsxm9I"];
jogos.push(jogo20211115);
var jogo20211128 = ["Botafogo", "Guarani", 2, 2, "Série B", "2021-11-28", "Nilton Santos", "Enderson Moreira", ["Marco Antônio", "Rafael Navarro"], ["Ronaldo Alves", "Lucão do Break"], "https://www.youtube.com/embed/QMByoXbcQUo"];
jogos.push(jogo20211128);

var outros = [];

var jogo20070715 = ["Brasil", "Honduras",  3, 0, "Jogos Pan-Americanos", "2007-07-15", "Estádio João Havelange (Engenhão)", "<br>Brasil: Luiz Nizzo<br>Honduras: Miguel Escalante", "Lulinha (3x)", [[""]]];
outros.push(jogo20070715);
var jogo20180901 = ["Vasco", "Santos",  0, 3, "Série A", "2018-09-01", "Maracanã", "<br>Vasco: Alberto Valentim<br>Santos: Cuca", [[""]], "Gabriel (3x)"];
outros.push(jogo20180901);
var jogo20190624 = ["Chile", "Uruguai",  0, 1, "Copa América", "2019-06-24", "Maracanã", "<br>Chile: Reinaldo Rueda<br>Uruguai: Oscar Tabárez", [[""]], "Cavani"];
outros.push(jogo20190624);
var jogo20190914 = ["Flamengo", "Santos",  1, 0, "Série A", "2019-09-14", "Maracanã", "<br>Flamengo: Jorge Jesus<br>Santos: Sampaoli", "Gabriel", [[""]]];
outros.push(jogo20190914);
var jogo20191005 = ["Vasco", "Santos",  0, 1, "Série A", "2019-10-05", "São Januário", "<br>Vasco: Vanderlei Luxemburgo<br>Santos: Sampaoli", [[""]], "Tailson"];
outros.push(jogo20191005);