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
10 - escudo novo (se tiver)
*/

var jogos = [];

var jogo20021026 = ["Botafogo", "Fluminense", 2, 3, "Série A", "2002-10-26", "Maracanã", "Ivo Wortmann", "-Galeano <br />-Léo Inácio", "-César <br />-Magno Alves <br />-Romário"];
jogos.push(jogo20021026);
var jogo20040229 =  ["Botafogo", "Fluminense", 0, 0, "Carioca", "2004-02-29", "Maracanã", "Levir Culpi", "", ""];
jogos.push(jogo20040229);
var jogo20040314 =  ["Botafogo", "Flamengo", 1, 0, "Carioca", "2004-03-14", "Maracanã", "Levir Culpi", "-Alex Alves", ""];
jogos.push(jogo20040314);
var jogo20040812 = ["Botafogo", "Atlético-PR", 1, 1, "Série A", "2004-08-12", "Caio Martins", "Mauro Galvão", "-Schwenck", "-Washington"];
jogos.push(jogo20040812);
var jogo20040828 = ["Botafogo", "Criciúma", 1, 1, "Série A", "2004-08-28", "Caio Martins", "Paulo Bonamigo", "-Schwenck", "-Fernandinho"];
jogos.push(jogo20040828);
var jogo20041002 = ["Fluminense", "Botafogo", 1, 4, "Série A", "2004-10-02", "Maracanã", "Paulo Bonamigo", "-Almir <br />-Ruy <br />-Ricardinho <br />-Têti", "-Edmundo"];
jogos.push(jogo20041002);
var jogo20041113 = ["Botafogo", "Coritiba", 4, 1, "Série A", "2004-11-13", "Caio Martins", "Paulo Bonamigo", "-Caio Ribeiro (2x)  <br />-Schwenck <br />-Ricardinho", "-Jorginho Paulista"];
jogos.push(jogo20041113);
var jogo20041127 = ["Botafogo", "Guarani", 1, 0, "Série A", "2004-11-27", "Caio Martins", "Paulo Bonamigo", "-Alex Alves", ""];
jogos.push(jogo20041127);
var jogo20041212 = ["Botafogo", "Corinthians", 1, 2, "Série A", "2004-12-12", "Caio Martins", "Paulo Bonamigo", "-Alex Alves", "-Fábio Baiano <br />-Wendel"];
jogos.push(jogo20041212);
var jogo20050213 = ["Botafogo", "Americano", 1, 2, "Carioca", "2005-02-13", "Maracanã", "Paulo Bonamigo", "-Alex Alves", "-Marcos Antônio <br />-Washington"];
jogos.push(jogo20050213);
var jogo20050313 = ["Fluminense", "Botafogo", 4, 0, "Carioca", "2005-03-13", "Maracanã", "Paulo Bonamigo", "", "-Fabiano Eller <br />-Gabriel <br />-Juninho <br />-Alex"];
jogos.push(jogo20050313);
var jogo20050529 = ["Botafogo", "Atlético-PR", 2, 0, "Série A", "2005-05-29", "Luso Brasileiro", "Paulo César Gusmão", "-Rafael Marques <br />-Almir", ""];
jogos.push(jogo20050529);
var jogo20050918 = ["Botafogo", "Goiás", 3, 1, "Série A", "2005-09-18", "Luso Brasileiro", "Celso Roth", "-Ramón <br />-Zé Roberto (2x)", "-Souza"];
jogos.push(jogo20050918);
var jogo20051008 = ["Botafogo", "Palmeiras", 1, 2, "Série A", "2005-10-08", "Luso Brasileiro", "Celso Roth", "-Alex Alves", "-Marcinho Guerreiro <br />-Marcinho"];
jogos.push(jogo20051008);
var jogo20051112 = ["Botafogo", "Paraná", 2, 0, "Série A", "2005-11-12", "Luso Brasileiro", "Celso Roth", "-Ramón <br/>-Juca", ""];
jogos.push(jogo20051112);
var jogo20060122 = ["Botafogo", "Vasco", 5, 3, "Carioca", "2006-01-22", "Maracanã", "Carlos Roberto", "-Zé Roberto<br/>-Lúcio Flávio<br/>-Reinaldo<br/>-Ruy<br/>-Felipe Adão", "-Romário (3x)"];
jogos.push(jogo20060122);
var jogo20060219 = ["Botafogo", "Nova Iguaçu", 1, 1, "Carioca", "2006-02-19", "Maracanã", "Carlos Roberto", "-Dodô", "-Marcos Denner"];
jogos.push(jogo20060219);
var jogo20060409 = ["Botafogo", "Madureira", 3, 1, "Carioca", "2006-04-09", "Maracanã", "Carlos Roberto", "-Dodô (2x)<br/>-Reinaldo", "-Fábio Júnior"];
jogos.push(jogo20060409);
var jogo20061014 = ["Botafogo", "Santos", 4, 3, "Série A", "2006-10-14", "Maracanã", "Cuca", "-Asprilla<br/>-Reinaldo<br/>-Zé Roberto<br/>-Juca", "-Kléber<br/>-Welligton Paulista<br/>-Reinaldo"];
jogos.push(jogo20061014);
var jogo20061022 = ["Botafogo", "São Caetano", 2, 1, "Série A", "2006-10-22", "Maracanã", "Cuca", "-Juninho<br/>-Reinaldo", "-Marabá"];
jogos.push(jogo20061022);
var jogo20061102 = ["Botafogo", "Internacional", 0, 1, "Série A", "2006-11-02", "Maracanã", "Cuca", "", "-Alex Meschini"];
jogos.push(jogo20061102);
var jogo20061119 = ["Botafogo", "Goiás", 2, 2, "Série A", "2006-11-19", "Maracanã", "Cuca", "-Wando<br/>-Lúcio Flávio", "-Robson Luiz<br/>-Rogério Corrêa"];
jogos.push(jogo20061119);
var jogo20070523 = ["Botafogo", "Figueirense", 3, 1, "Copa do Brasil", "2007-05-23", "Maracanã", "Cuca", "-Zé Roberto<br/>-André Lima<br/>-Vinícius (Gol Contra)", "-Cleiton Xavier"];
jogos.push(jogo20070523);
var jogo20070602 = ["Botafogo", "Grêmio", 3, 0, "Série A", "2007-06-02", "Maracanã", "Cuca", "-Juninho<br/>-Luciano Almeida<br/>-Dodô", ""];
jogos.push(jogo20070602);
var jogo20070617 = ["Botafogo", "Náutico", 3, 1, "Série A", "2007-06-17", "Maracanã", "Cuca", "-Juninho<br/>-André Lima<br/>-Jorge Henrique", "-Alex (Gol Contra)"];
jogos.push(jogo20070617);
var jogo20070819 = ["Botafogo", "Internacional", 1, 1, "Série A", "2007-08-19", "Maracanã", "Cuca", "-André Lima", "-Ceará"];
jogos.push(jogo20070819);
var jogo20070923 = ["Botafogo", "Fluminense", 0, 2, "Série A", "2007-09-23", "Maracanã", "Cuca", "", "-Thiago Neves<br/>-David"];
jogos.push(jogo20070923);
var jogo20080330 = ["Botafogo", "Fluminense", 3, 1, "Carioca", "2008-03-30", "Maracanã", "Cuca", "-Welligton Paulista<br/>-Lúcio Flávio<br/>-Jorge Henrique", "-Alan"];
jogos.push(jogo20080330);
var jogo20080514 = ["Botafogo", "Atlético-MG", 2, 0, "Copa do Brasil", "2008-05-14", "Nilton Santos", "Cuca", "-Zé Carlos<br/>-Alessandro", ""];
jogos.push(jogo20080514);
var jogo20080525 = ["Botafogo", "Vasco", 1, 1, "Série A", "2008-05-25", "Nilton Santos", "Cuca", "-Lúcio Flávio", "-Eduardo Luiz"];
jogos.push(jogo20080525);
var jogo20080830 = ["Botafogo", "Náutico", 1, 1, "Série A", "2008-08-30", "Nilton Santos", "Ney Franco", "-Carlos Alberto", "-Adriano"];
jogos.push(jogo20080830);
var jogo20090328 = ["Fluminense", "Botafogo", 2, 1, "Carioca", "2009-03-28", "Maracanã", "Ney Franco", "-Maicosuel", "-Maicon<br/>-Conca"];
jogos.push(jogo20090328);
var jogo20100329 = ["Botafogo", "Boavista", 4, 1, "Carioca", "2010-03-29", "São Januário", "Joel Santana", "-Loco Abreu (3x)<br/>-Marcelo Cordeiro", ""];
jogos.push(jogo20100329);
var jogo20100807 = ["Botafogo", "Atlético-MG", 3, 0, "Série A", "2010-08-07", "Nilton Santos", "Joel Santana", "-Maicosuel<br/>-Somália<br/>-Herrera", ""];
jogos.push(jogo20100807);
var jogo20101023 = ["Botafogo", "Vitória", 1, 0, "Série A", "2010-10-23", "Nilton Santos", "Joel Santana", "-Marcelo Cordeiro", ""];
jogos.push(jogo20101023);
var jogo20110305 = ["Botafogo", "Volta Redonda", 4, 2, "Carioca", "2011-03-05", "Nilton Santos", "Joel Santana", "-Caio<br/>-Herrera<br/>-Alex<br/>-Rodrigo Mancha", "-Gláuber<br/>-Cristiano Ávalos"];
jogos.push(jogo20110305);
var jogo20110320 = ["Botafogo", "Vasco", 0, 2, "Carioca", "2011-03-20", "Nilton Santos", "Joel Santana", "", "-Éder Luís<br/>-Diego Souza"];
jogos.push(jogo20110320);
var jogo20110907 = ["Botafogo", "Ceará", 4, 0, "Série A", "2011-09-07", "Nilton Santos", "Caio Júnior", "-Herrera (2x)<br/>-Loco Abreu<br/>-Cidinho", ""];
jogos.push(jogo20110907);
var jogo20111008 = ["Botafogo", "Bahia", 2, 2, "Série A", "2011-10-08", "São Januário", "Caio Júnior", "-Alex<br/>-Caio", "-Souza (2x)"];
jogos.push(jogo20111008);
var jogo20120429 = ["Botafogo", "Vasco", 3, 1, "Carioca", "2012-04-29", "Nilton Santos", "Oswaldo de Oliveira", "-Loco Abreu (2x)<br/>-Maicosuel", "-Carlos Alberto"];
jogos.push(jogo20120429);
var jogo20130217 = ["Flamengo", "Botafogo", 1, 0, "Carioca", "2013-02-17", "Nilton Santos", "Oswaldo de Oliveira", "", "-Hernane"];
jogos.push(jogo20130217);
var jogo20130505 = ["Botafogo", "Fluminense", 1, 0, "Carioca", "2013-05-05", "Raulino de Oliveira (Volta Redonda-RJ)", "Oswaldo de Oliveira", "-Rafael Marques", ""];
jogos.push(jogo20130505);
var jogo20131005 = ["Botafogo", "Grêmio", 0, 1, "Série A", "2013-10-05", "Maracanã", "Oswaldo de Oliveira", "", "-Alex Telles"];
jogos.push(jogo20131005);
var jogo20131208 = ["Botafogo", "Criciúma", 3, 0, "Série A", "2013-12-08", "Maracanã", "Oswaldo de Oliveira", "-Lodeiro<br/>-Elias<br/>-Seedorf", ""];
jogos.push(jogo20131208);
var jogo20140205 = ["Botafogo", "Deportivo Quito-EQU", 4, 0, "Copa Libertadores", "2014-02-05", "Maracanã", "Eduardo Húngaro", "-Wallyson (3x)<br/>-Henrique Almeida", ""];
jogos.push(jogo20140205);
var jogo20140318 = ["Botafogo", "Independiente Del Valle-EQU", 1, 0, "Copa Libertadores", "2014-03-18", "Maracanã", "Eduardo Húngaro", "-\"El Tanque\" Ferreyra", ""];
jogos.push(jogo20140318);
var jogo20140727 = ["Flamengo", "Botafogo", 1, 0, "Série A", "2014-07-27", "Maracanã", "Vagner Mancini", "", "-Alecsandro"];
jogos.push(jogo20140727);
var jogo48 = ["Botafogo", "Chapecoense", 1, 0, "Série A", "2014-08-23", "Maracanã", "Vagner Mancini", "-Cachito Ramírez", ""];
jogos.push(jogo48);
var jogo49 = ["Botafogo", "Santos", 1, 0, "Série A", "2014-08-31", "Maracanã", "Vagner Mancini", "-Daniel", ""];
jogos.push(jogo49);
var jogo50 = ["Botafogo", "Bahia", 2, 3, "Série A", "2014-09-17", "Maracanã", "Vagner Mancini", "-Emerson Sheik (2x)", "-Dankler (Gol Contra)<br/>-Maxi Biancucchi<br/>-Branquinho"];
jogos.push(jogo50);
var jogo51 = ["Botafogo", "Palmeiras", 0, 1, "Série A", "2014-10-08", "Maracanã", "Vagner Mancini", "", "-Henrique Dourado"];
jogos.push(jogo51);
var jogo52 = ["Botafogo", "Boavista", 1, 0, "Carioca", "2015-01-31", "São Januário", "Renê Simões", "-Roger Carvalho", ""];
jogos.push(jogo52);
var jogo53 = ["Botafogo", "Bonsucesso", 4, 0, "Carioca", "2015-02-07", "Nilton Santos", "Renê Simões", "-Diego Jardel<br/>-Bill<br/>-Thiago Carleto<br/>-Fernandes", ""];
jogos.push(jogo53);
var jogo54 = ["Botafogo", "Nova Iguaçu", 2, 1, "Carioca", "2015-02-21", "Nilton Santos", "Renê Simões", "-Paulo Henrique (Gol Contra)<br/>-Jóbson", "-Marlon"];
jogos.push(jogo54);
var jogo55 = ["Botafogo", "Flamengo", 1, 0, "Carioca", "2015-03-01", "Maracanã", "Renê Simões", "-Tomás Bastos", ""];
jogos.push(jogo55);
var jogo56 = ["Fluminense", "Botafogo", 3, 1, "Carioca", "2015-03-08", "Maracanã", "Renê Simões", "-Jóbson", "-Kenedy<br/>-Gerson<br/>-Fred"];
jogos.push(jogo56);
var jogo57 = ["Botafogo", "Resende", 3, 0, "Carioca", "2015-03-15", "Nilton Santos", "Renê Simões", "-Tássio<br/>-Jóbson<br/>-Rodrigo Pimpão", ""];
jogos.push(jogo57);
var jogo58 = ["Vasco", "Botafogo", 1, 1, "Carioca", "2015-03-29", "Maracanã", "Renê Simões", "-Roger Carvalho", "-Gilberto"];
jogos.push(jogo58);
var jogo59 = ["Botafogo", "Madureira", 4, 1, "Carioca", "2015-04-05", "Nilton Santos", "Renê Simões", "-Thiago Carleto<br/>-Renan Fonseca<br/>-Fernandes<br/>-Bill", "-Rodrigo Lindoso"];
jogos.push(jogo59);
var jogo60 = ["Botafogo", "Vasco", 1, 2, "Carioca", "2015-05-03", "Maracanã", "Renê Simões", "-Diego Jardel", "-Rafael Silva<br/>-Gilberto"];
jogos.push(jogo60);
var jogo61 = ["Botafogo", "CRB", 4, 1, "Série B", "2015-05-16", "Nilton Santos", "Renê Simões", "-Bill<br/>-Lulinha<br/>-William Arão<br/>-Élvis", "-Fernando"];
jogos.push(jogo61);
var jogo62 = ["Botafogo", "Vitória", 2, 0, "Série B", "2015-05-30", "Nilton Santos", "Renê Simões", "-Diego Giaretta<br/>-William Arão", ""];
jogos.push(jogo62);
var jogo63 = ["Botafogo", "Mogi Mirim", 3, 0, "Série B", "2015-06-05", "Nilton Santos", "Renê Simões", "-Rodrigo Pimpão<br/>-Bill<br/>-Lulinha", ""];
jogos.push(jogo63);
var jogo64 = ["Botafogo", "Boa Esporte", 1, 1, "Série B", "2015-06-19", "Nilton Santos", "Renê Simões", "-Rodrigo Pimpão", "-Bruninho"];
jogos.push(jogo64);
var jogo65 = ["Botafogo", "Figueirense", 0, 1, "Copa do Brasil", "2015-07-14", "Nilton Santos", "Renê Simões", "", "-Marcão"];
jogos.push(jogo65);
var jogo66 = ["Botafogo", "Criciúma", 0, 0, "Série B", "2015-07-28", "Nilton Santos", "Ricardo Gomes", "", ""];
jogos.push(jogo66);
var jogo67 = ["Botafogo", "Paysandu", 2, 3, "Série B", "2015-08-23", "Nilton Santos", "Ricardo Gomes", "-Daniel Carvalho<br/>-Sassá", "-Yago Pikachu<br/>-Thiago Martins<br/>-Jhonnatan"];
jogos.push(jogo67);
var jogo68 = ["Botafogo", "Bragantino", 4, 0, "Série B", "2015-10-17", "Nilton Santos", "Ricardo Gomes", "-Navarro (2x)<br/>-William Arão<br/>-Neílton", ""];
jogos.push(jogo68);
var jogo69 = ["Botafogo", "Santa Cruz", 0, 3, "Série B", "2015-11-14", "Nilton Santos", "Ricardo Gomes", "", "-Lelê<br/>-Grafite<br/>-Bruno Moraes"];
jogos.push(jogo69);
var jogo70 = ["Botafogo", "América-MG", 0, 0, "Série B", "2015-11-28", "Nilton Santos", "Ricardo Gomes", "", ""];
jogos.push(jogo70);
var jogo71 = ["Botafogo", "Portuguesa-RJ", 2, 1, "Carioca", "2016-02-02", "São Januário", "Ricardo Gomes", "-Gegê<br/>-Damián Lizio", "-Rafael Paty"];
jogos.push(jogo71);
var jogo72 = ["Botafogo", "Boavista", 1, 0, "Carioca", "2016-03-06", "São Januário", "Ricardo Gomes", "-Fernandes", ""];
jogos.push(jogo72);
var jogo73 = ["Botafogo", "Vasco", 0, 1, "Carioca", "2016-05-01", "Maracanã", "Ricardo Gomes", "", "-Jorge Henrique"];
jogos.push(jogo73);
var jogo74 = ["Vasco", "Botafogo", 1, 1, "Carioca", "2016-05-08", "Maracanã", "Ricardo Gomes", "-Leandrinho", "-Rafael Vaz"];
jogos.push(jogo74);
var jogo75 = ["Botafogo", "São Paulo", 0, 1, "Série A", "2016-05-15", "Raulino de Oliveira (Volta Redonda-RJ)", "Ricardo Gomes", "", "-Lucas Fernandes"];
jogos.push(jogo75);
var jogo76 = ["Botafogo", "Santa Cruz", 2, 1, "Série A", "2016-07-03", "Mário Helênio (Juiz de Fora-MG)", "Ricardo Gomes", "-Sassá<br/>-Neílton", "-João Paulo"];
jogos.push(jogo76);
var jogo77 = ["Botafogo", "Palmeiras", 3, 1, "Série A", "2016-07-31", "Arena Botafogo", "Ricardo Gomes", "-Neílton (2x)<br/>-Camilo", "-Erik"];
jogos.push(jogo77);
var jogo78 = ["Botafogo", "Grêmio", 2, 1, "Série A", "2016-09-04", "Arena Botafogo", "Jair Ventura", "-Camilo<br/>-Sassá", "-Batista"];
jogos.push(jogo78);
var jogo79 = ["Botafogo", "Fluminense", 1, 0, "Série A", "2016-09-07", "Arena Botafogo", "Jair Ventura", "-Neílton", ""];
jogos.push(jogo79);
var jogo80 = ["Botafogo", "Internacional", 1, 0, "Série A", "2016-10-12", "Arena Botafogo", "Jair Ventura", "-Sassá", ""];
jogos.push(jogo80);
var jogo81 = ["Botafogo", "Atlético-MG", 3, 2, "Série A", "2016-10-16", "Arena Botafogo", "Jair Ventura", "-Bruno Silva<br/>-Rodrigo Pimpão<br/>-Dudu Cearense", "-Fred<br/>-Leonardo Silva"];
jogos.push(jogo81);
var jogo82 = ["Botafogo", "Coritiba", 0, 0, "Série A", "2016-10-29", "Arena Botafogo", "Jair Ventura", "", ""];
jogos.push(jogo82);
var jogo83 = ["Botafogo", "Chapecoense", 0, 2, "Série A", "2016-11-16", "Arena Botafogo", "Jair Ventura", "", "-Kempes<br/>-Sérgio Manoel"];
jogos.push(jogo83);
var jogo84 = ["Botafogo", "Ponte Preta", 1, 1, "Série A", "2016-11-26", "Arena Botafogo", "Jair Ventura", "-Sassá", "-William Potker"];
jogos.push(jogo84);
var jogo85 = ["Botafogo", "Nova Iguaçu", 1, 1, "Carioca", "2017-01-28", "Nilton Santos", "Jair Ventura", "-Marcelo Benevenuto", "-Murilo Henrique"];
jogos.push(jogo85);
var jogo86 = ["Botafogo", "Colo-Colo-CHI", 2, 1, "Copa Libertadores", "2017-02-01", "Nilton Santos", "Jair Ventura", "-Airton<br/>-Esteban Pavez (Gol Contra)", "-Paredes"];
jogos.push(jogo86);
var jogo87 = ["Botafogo", "Macaé", 2, 1, "Carioca", "2017-02-04", "Nilton Santos", "Jair Ventura", "-Rodrigo Lindoso<br/>-Vinicius Tanque", "-Guilherme Xavier"];
jogos.push(jogo87);
var jogo88 = ["Botafogo", "Olimpia-PAR", 1, 0, "Copa Libertadores", "2017-02-15", "Nilton Santos", "Jair Ventura", "-Rodrigo Pimpão", ""];
jogos.push(jogo88);
var jogo89 = ["Botafogo", "Volta Redonda", 1, 0, "Carioca", "2017-03-09", "Nilton Santos", "Jair Ventura", "-Victor Luís", ""];
jogos.push(jogo89);
var jogo90 = ["Botafogo", "Vasco", 0, 0, "Carioca", "2017-03-19", "Nilton Santos", "Jair Ventura", "", ""];
jogos.push(jogo90);
var jogo91 = ["Botafogo", "Fluminense", 2, 3, "Carioca", "2017-03-23", "Nilton Santos", "Jair Ventura", "-Roger (2x)", "-Richarlison (2x)<br/>-Renato Chaves"];
jogos.push(jogo91);
var jogo92 = ["Botafogo", "Fluminense", 3, 1, "Carioca", "2017-04-09", "Nilton Santos", "Jair Ventura", "-Igor Rabello<br/>-Dudu Cearense<br/>-Sassá", "-Richarlison"];
jogos.push(jogo92);
var jogo93 = ["Botafogo", "Vasco", 0, 2, "Carioca", "2017-04-16", "Nilton Santos", "Jair Ventura", "", "-Douglas Luiz<br/>-Luís Fabiano"];
jogos.push(jogo93);
var jogo94 = ["Botafogo", "Sport", 2, 1, "Copa do Brasil", "2017-04-26", "Nilton Santos", "Jair Ventura", "-Guilherme (2x)", "-Samuel Xavier"];
jogos.push(jogo94);
var jogo95 = ["Botafogo", "Barcelona de Guayaquil-EQU", 0, 2, "Copa Libertadores", "2017-05-02", "Nilton Santos", "Jair Ventura", "", "-Ayoví<br/>-Jonatan Álvez"];
jogos.push(jogo95);
var jogo96 = ["Botafogo", "Atlético Nacional-COL", 1, 0, "Copa Libertadores", "2017-05-18", "Nilton Santos", "Jair Ventura", "-Rodrigo Pimpão", ""];
jogos.push(jogo96);
var jogo97 = ["Botafogo", "Ponte Preta", 2, 0, "Série A", "2017-05-21", "Nilton Santos", "Jair Ventura", "-Bruno Silva <br />-Rodrigo Lindoso", ""];
jogos.push(jogo97);
var jogo98 = ["Botafogo", "Bahia", 1, 0, "Série A", "2017-05-28", "Nilton Santos", "Jair Ventura", "-Bruno Silva", ""];
jogos.push(jogo98);
var jogo99 = ["Botafogo", "Coritiba", 2, 2, "Série A", "2017-06-11", "Nilton Santos", "Jair Ventura", "-Roger<br/>-Joel Carli", "-Kléber<br/>-Henrique Almeida"];
jogos.push(jogo99);
var jogo100 = ["Botafogo", "Vasco", 3, 1, "Série A", "2017-06-21", "Nilton Santos", "Jair Ventura", "-Roger (2x)<br/>-Victor Luís", "-Caio Monteiro"];
jogos.push(jogo100);
var jogo101 = ["Botafogo", "Avaí", 0, 2, "Série A", "2017-06-26", "Nilton Santos", "Jair Ventura", "", "-Joel (2x)"];
jogos.push(jogo101);
var jogo102 = ["Botafogo", "Atlético-MG", 1, 1, "Série A", "2017-07-09", "Nilton Santos", "Jair Ventura", "-Roger", "-Marlone"];
jogos.push(jogo102);
var jogo103 = ["Fluminense", "Botafogo", 0, 1, "Série A", "2017-07-12", "Maracanã", "Jair Ventura", "-Roger", ""];
jogos.push(jogo103);
var jogo104 = ["Botafogo", "Sport", 2, 1, "Série A", "2017-07-17", "Nilton Santos", "Jair Ventura", "-Rodrigo Lindoso<br/>-Guilherme", "-Rithely"];
jogos.push(jogo104);
var jogo105 = ["Botafogo", "Atlético-MG", 3, 0, "Copa do Brasil", "2017-07-26", "Nilton Santos", "Jair Ventura", "-Joel Carli<br/>-Roger<br/>-Gilson", ""];
jogos.push(jogo105);
var jogo106 = ["Botafogo", "São Paulo", 3, 4, "Série A", "2017-07-29", "Nilton Santos", "Jair Ventura", "-Marcos Vinícius (2x) <br/>-Guilherme", "-Cueva <br/>-Marcos Guilherme (2x)<br/>-Hernanes"];
jogos.push(jogo106);
var jogo107 = ["Botafogo", "Palmeiras", 1, 2, "Série A", "2017-08-02", "Nilton Santos", "Jair Ventura", "-Rodrigo Pimpão", "-Igor Rabello (Gol Contra) <br/>-Deyverson"];
jogos.push(jogo107);
var jogo108 = ["Botafogo", "Nacional-URU", 2, 0, "Copa Libertadores", "2017-08-10", "Nilton Santos", "Jair Ventura", "-Bruno Silva <br/>-Rodrigo Pimpão", ""];
jogos.push(jogo108);
var jogo109 = ["Botafogo", "Grêmio", 1, 0, "Série A", "2017-08-13", "Nilton Santos", "Jair Ventura", "-Leandrinho", ""];
jogos.push(jogo109);
var jogo110 = ["Botafogo", "Flamengo", 0, 0, "Copa do Brasil", "2017-08-16", "Nilton Santos", "Jair Ventura", "", ""];
jogos.push(jogo110);
var jogo111 = ["Flamengo", "Botafogo", 1, 0, "Copa do Brasil", "2017-08-23", "Maracanã", "Jair Ventura", "", "-Diego"];
jogos.push(jogo111);
var jogo112 = ["Botafogo", "Flamengo", 2, 0, "Série A", "2017-09-10", "Nilton Santos", "Jair Ventura", "-Roger (2x)", ""];
jogos.push(jogo112);
var jogo113 = ["Botafogo", "Grêmio", 0, 0, "Copa Libertadores", "2017-09-13", "Nilton Santos", "Jair Ventura", "", ""];
jogos.push(jogo113);
var jogo114 = ["Botafogo", "Santos", 2, 0, "Série A", "2017-09-16", "Nilton Santos", "Jair Ventura", "-Rodrigo Lindoso <br/>-Guilherme", ""];
jogos.push(jogo114);
var jogo115 = ["Botafogo", "Vitória", 2, 3, "Série A", "2017-10-01", "Nilton Santos", "Jair Ventura", "-Brenner (2x)", "-David <br/>-André Lima <br/>-Danilinho"];
jogos.push(jogo115);
var jogo116 = ["Botafogo", "Chapecoense", 2, 1, "Série A", "2017-10-11", "Nilton Santos", "Jair Ventura", "-Brenner <br/>-Vinicius Tanque", "-Apodi"];
jogos.push(jogo116);
var jogo117 = ["Vasco", "Botafogo", 1, 0, "Série A", "2017-10-14", "Maracanã", "Jair Ventura", "", "-Nenê"];
jogos.push(jogo117);
var jogo118 = ["Botafogo", "Corinthians", 2, 1, "Série A", "2017-10-23", "Nilton Santos", "Jair Ventura", "-Brenner <br/>-Igor Rabello", "-Jô"];
jogos.push(jogo118);
var jogo119 = ["Botafogo", "Fluminense", 1, 2, "Série A", "2017-11-04", "Nilton Santos", "Jair Ventura", "-Marcos Vinícius", "-Marcos Júnior <br/>-Matheus Alessandro"];
jogos.push(jogo119);
var jogo120 = ["Botafogo", "Atlético-PR", 0, 1, "Série A", "2017-11-11", "Nilton Santos", "Jair Ventura", "", "-Guilherme"];
jogos.push(jogo120);
var jogo121 = ["Botafogo", "Atlético-GO", 1, 2, "Série A", "2017-11-16", "Nilton Santos", "Jair Ventura", "-João Paulo", "-Jorginho <br/>-Luiz Fernando"];
jogos.push(jogo121);
var jogo122 = ["Botafogo", "Cruzeiro", 2, 2, "Série A", "2017-12-03", "Nilton Santos", "Jair Ventura", "-Brenner <br/>-Ezequiel", "-Thiago Neves <br/>-Arrascaeta"];
jogos.push(jogo122);
var jogo123 = ["Botafogo", "Portuguesa-RJ", 2, 2, "Carioca", "2018-01-16", "Nilton Santos", "Felipe Conceição (Tigrão)", "-Brenner <br/>-Marcos Vinícius", "-Jefferson Oliveira (2x)"];
jogos.push(jogo123);
var jogo124 = ["Fluminense", "Botafogo", 0, 0, "Carioca", "2018-01-20", "Maracanã", "Felipe Conceição (Tigrão)", "", ""];
jogos.push(jogo124);
var jogo125 = ["Botafogo", "Boavista", 1, 0, "Carioca", "2018-01-28", "Nilton Santos", "Felipe Conceição (Tigrão)", "-Brenner", ""];
jogos.push(jogo125);
var jogo126 = ["Botafogo", "Madureira", 0, 0, "Carioca", "2018-02-03", "Nilton Santos", "Felipe Conceição (Tigrão)", "", ""];
jogos.push(jogo126);
var jogo127 = ["Botafogo", "Bangu", 1, 0, "Carioca", "2018-03-06", "Nilton Santos", "Alberto Valentim", "-Rodrigo Pimpão", ""];
jogos.push(jogo127);
var jogo128 = ["Botafogo", "Vasco", 2, 3, "Carioca", "2018-03-18", "Nilton Santos", "Alberto Valentim", "-Rodrigo Lindoso <br/>-Brenner", "-Riascos <br/>-Andrés Ríos <br/>-Paulinho"];
jogos.push(jogo128);
var jogo129 = ["Botafogo", "Vasco", 3, 2, "Carioca", "2018-03-21", "Nilton Santos", "Alberto Valentim", "-Brenner <br/>-Luiz Fernando <br/>-Igor Rabello", "-Erazo <br/>-Riascos"];
jogos.push(jogo129);
var jogo130 = ["Fluminense", "Botafogo", 3, 0, "Carioca", "2018-03-25", "Maracanã", "Alberto Valentim", "", "-Pedro <br/>-Marcos Júnior <br/>-Jadson"];
jogos.push(jogo130);
var jogo131 = ["Flamengo", "Botafogo", 0, 1, "Carioca", "2018-03-28", "Maracanã", "Alberto Valentim", "-Luiz Fernando", ""];
jogos.push(jogo131);
var jogo132 = ["Botafogo", "Vasco", 2, 3, "Carioca", "2018-04-01", "Nilton Santos", "Alberto Valentim", "-Renatinho <br/>-Brenner", "-Yago Pikachu (2x) <br/>-Andrés Ríos"];
jogos.push(jogo132);
var jogo133 = ["Vasco", "Botafogo", 0, 1, "Carioca", "2018-04-08", "Maracanã", "Alberto Valentim", "-Joel Carli<br>\r\n<br>Pênaltis: (4)<br>\r\n-Brenner<br>\r\n-Gilson<br>\r\n-Marcinho<br>\r\n-Renatinho", "<br><br>Pênaltis: (3)<br>\r\n-Wagner<br>\r\n-Andrés Ríos<br>\r\n-Yago Pikachu"];
jogos.push(jogo133);
var jogo134 = ["Botafogo", "Grêmio", 2, 1, "Série A", "2018-04-28", "Nilton Santos", "Alberto Valentim", "-Brenner <br/>-Gilson", "-Igor Rabello (Gol Contra)"];
jogos.push(jogo134);
var jogo135 = ["Botafogo", "Audax Italiano-CHI", 1, 1, "Copa Sul-Americana", "2018-05-09", "Nilton Santos", "Alberto Valentim", "-Matheus Fernandes", "-Luis Cabrera"];
jogos.push(jogo135);
var jogo136 = ["Botafogo", "Fluminense", 2, 1, "Série A", "2018-05-14", "Nilton Santos", "Alberto Valentim", "-Rodrigo Lindoso <br/>-Kieza", "-Pedro"];
jogos.push(jogo136);
var jogo137 = ["Botafogo", "Vitória", 1, 1, "Série A", "2018-05-27", "Nilton Santos", "Alberto Valentim", "-Kieza", "-Denílson"];
jogos.push(jogo137);
var jogo138 = ["Vasco", "Botafogo",  1, 2, "Série A", "2018-06-02", "São Januário", "Alberto Valentim", "-Kieza <br/>-Igor Rabello", "-Andrey"];
jogos.push(jogo138);
var jogo139 = ["Botafogo", "Ceará", 0, 0, "Série A", "2018-06-06", "Nilton Santos", "Alberto Valentim", "", ""];
jogos.push(jogo139);
var jogo140 = ["Botafogo", "Chapecoense", 1, 0, "Série A", "2018-07-26", "Nilton Santos", "Marcos Paquetá", "-Marcinho", ""];
jogos.push(jogo140);
var jogo141 = ["Botafogo", "Santos", 0, 0, "Série A", "2018-08-04", "Nilton Santos", "Bruno Lazaroni", "", ""];
jogos.push(jogo141);
var jogo142 = ["Botafogo", "Nacional-PAR", 2, 0, "Copa Sul-Americana", "2018-08-16", "Nilton Santos", "Zé Ricardo", "-Rodrigo Lindoso <br/>-Léo Valencia", ""];
jogos.push(jogo142);
var jogo143 = ["Botafogo", "Atlético-MG", 0, 3, "Série A", "2018-08-19", "Nilton Santos", "Zé Ricardo", "", "-Luan <br/>-Cazares <br/>-Tomás Andrade"];
jogos.push(jogo143);
var jogo144 = ["Botafogo", "Sport", 2, 0, "Série A", "2018-08-25", "Nilton Santos", "Zé Ricardo", "-Joel Carli <br/>-Rodrigo Aguirre", ""];
jogos.push(jogo144);
var jogo145 = ["Botafogo", "Cruzeiro", 1, 1, "Série A", "2018-09-05", "Nilton Santos", "Zé Ricardo", "-Luiz Fernando", "-Edílson"];
jogos.push(jogo145);
var jogo146 = ["Fluminense", "Botafogo",  1, 0, "Série A", "2018-09-09", "Maracanã", "Zé Ricardo", "", "-Digão"];
jogos.push(jogo146);
var jogo147 = ["Botafogo", "América-MG", 1, 0, "Série A", "2018-09-16", "Nilton Santos", "Zé Ricardo", "-Rodrigo Lindoso", ""];
jogos.push(jogo147);
var jogo148 = ["Botafogo", "São Paulo", 2, 2, "Série A", "2018-09-30", "Nilton Santos", "Zé Ricardo", "-Jean <br/>-Kieza", "-Diego Souza <br/>-Gonzalo Carneiro"];
jogos.push(jogo148);
var jogo149 = ["Botafogo", "Bahia", 2, 1, "Copa Sul-Americana", "2018-10-03", "Nilton Santos", "Zé Ricardo", "-Rodrigo Pimpão <br/>-Luiz Fernando\r\n<br><br>Pênaltis: (4)<br>\r\n-Rodrigo Lindoso<br>\r\n-Aguirre<br>\r\n-Kieza<br>\r\n-Renatinho<br>", "-Edigar Junio\r\n<br><br>Pênaltis: (5)<br>\r\n-Gilberto<br>\r\n-Zé Rafael<br>\r\n-Allione<br>\r\n-Nilton<br>\r\n-Flávio"];
jogos.push(jogo149);
var jogo150 = ["Botafogo", "Vasco", 1, 1, "Série A", "2018-10-09", "Nilton Santos", "Zé Ricardo", "-Luiz Fernando", "-Maxi López"];
jogos.push(jogo150);
var jogo151 = ["Botafogo", "Bahia", 0, 1, "Série A", "2018-10-20", "Nilton Santos", "Zé Ricardo", "", "-Edigar Junio"];
jogos.push(jogo151);
var jogo152 = ["Botafogo", "Corinthians", 1, 0, "Série A", "2018-11-04", "Nilton Santos", "Zé Ricardo", "-Jean", ""];
jogos.push(jogo152);
var jogo153 = ["Botafogo", "Flamengo", 2, 1, "Série A", "2018-11-10", "Nilton Santos", "Zé Ricardo", "-Erik <br />-Léo Valencia", "-Vitinho"];
jogos.push(jogo153);
var jogo154 = ["Botafogo", "Internacional", 1, 0, "Série A", "2018-11-18", "Nilton Santos", "Zé Ricardo", "-Erik", ""];
jogos.push(jogo154);
var jogo155 = ["Botafogo", "Paraná", 2, 1, "Série A", "2018-11-28", "Nilton Santos", "Zé Ricardo", "-Erik (2x)", "-Alex Santana"];
jogos.push(jogo155);
var jogo156 = ["Botafogo", "Bangu", 0, 0, "Carioca", "2019-01-23", "Nilton Santos", "Zé Ricardo", "", ""];
jogos.push(jogo156);
var jogo157 = ["Botafogo", "Resende", 0, 1, "Carioca", "2019-01-31", "Nilton Santos", "Zé Ricardo", "", "-Maxwell"];
jogos.push(jogo157);
var jogo158 = ["Botafogo", "Defensa y Justicia-ARG", 1, 0, "Copa Sul-Americana", "2019-02-06", "Nilton Santos", "Zé Ricardo", "-Erik", ""];
jogos.push(jogo158);
var jogo159 = ["Botafogo", "Vasco", 1, 1, "Carioca", "2019-02-23", "Nilton Santos", "Zé Ricardo", "-Marcelo Benevenuto", "-Yago Pikachu"];
jogos.push(jogo159);
var jogo160 = ["Botafogo", "Cuiabá", 3, 0, "Copa do Brasil", "2019-02-27", "Nilton Santos", "Zé Ricardo", "-Erik (2x)<br>-Rodrigo Pimpão", ""];
jogos.push(jogo160);
var jogo161 = ["Botafogo", "Madureira", 2, 1, "Carioca", "2019-03-11", "Nilton Santos", "Zé Ricardo", "-Jonathan<br>-Kieza", "-Marcinho (Gol contra)"];
jogos.push(jogo161);
var jogo162 = ["Fluminense", "Botafogo",  1, 1, "Carioca", "2019-03-17", "Maracanã", "Zé Ricardo", "-Alex Santana", "-Paulo Henrique Ganso"];
jogos.push(jogo162);
var jogo163 = ["Botafogo", "Juventude", 1, 1, "Copa do Brasil", "2019-04-04", "Nilton Santos", "Zé Ricardo", "-Erik", "-Paulo Sérgio"];
jogos.push(jogo163);
var jogo164 = ["São Paulo", "Botafogo",  2, 0, "Série A", "2019-04-27", "Morumbi (São Paulo-SP)", "Eduardo Barroca", "", "-Éverton<br>-Hudson"];
jogos.push(jogo164);
var jogo165 = ["Botafogo", "Fortaleza", 1, 0, "Série A", "2019-05-05", "Nilton Santos", "Eduardo Barroca", "-Alex Santana", ""];
jogos.push(jogo165);
var jogo166 = ["Fluminense", "Botafogo",  0, 1, "Série A", "2019-05-11", "Maracanã", "Eduardo Barroca", "-Alex Santana", ""];
jogos.push(jogo166);
var jogo167 = ["Botafogo", "Sol de America-PAR", 4, 0, "Copa Sul-Americana", "2019-05-29", "Nilton Santos", "Eduardo Barroca", "-Cícero<br>-Luiz Fernando<br>-Gustavo Bochecha<br>-Diego Souza", ""];
jogos.push(jogo167);
var jogo168 = ["Botafogo", "Vasco", 1, 0, "Série A", "2019-06-02", "Nilton Santos", "Eduardo Barroca", "-Diego Souza", ""];
jogos.push(jogo168);
var jogo169 = ["Botafogo", "Santos", 0, 1, "Série A", "2019-07-21", "Nilton Santos", "Eduardo Barroca", "", "-Marinho"];
jogos.push(jogo169);
var jogo170 = ["Botafogo", "Atlético-MG", 0, 1, "Copa Sul-Americana", "2019-07-24", "Nilton Santos", "Eduardo Barroca", "", "-Vinicius"];
jogos.push(jogo170);
var jogo171 = ["Flamengo", "Botafogo",  3, 2, "Série A", "2019-07-28", "Maracanã", "Eduardo Barroca", "-Cícero<br>-Diego Souza", "-Gerson<br>-Gabriel<br>-Bruno Henrique"];
jogos.push(jogo171);
var jogo172 = ["Atlético-MG", "Botafogo",  2, 0, "Copa Sul-Americana", "2019-07-31", "Arena Independência (Belo Horizonte-MG)", "Eduardo Barroca", "", "-Fábio Santos<br>-Vinicius"];
jogos.push(jogo172);
var jogo174 = ["Botafogo", "Athletico-PR", 2, 1, "Série A", "2019-08-11", "Nilton Santos", "Eduardo Barroca", "-Luiz Fernando<br>-Diego Souza", "-Thonny Anderson"];
jogos.push(jogo174);
var jogo175 = ["Corinthians", "Botafogo",  2, 0, "Série A", "2019-08-17", "Arena Corinthians (São Paulo-SP)", "Eduardo Barroca", "", "-Mauro Boselli<br>-Everaldo"];
jogos.push(jogo175);
var jogo176 = ["Botafogo", "Chapecoense", 0, 0, "Série A", "2019-08-26", "Nilton Santos", "Eduardo Barroca", "", ""];
jogos.push(jogo176);
var jogo177 = ["Botafogo", "Atlético-MG", 2, 1, "Série A", "2019-09-08", "Nilton Santos", "Eduardo Barroca", "-Diego Souza<br>-Alex Santana", "-Di Santo"];
jogos.push(jogo177);
var jogo178 = ["Botafogo", "São Paulo", 1, 2, "Série A", "2019-09-21", "Nilton Santos", "Eduardo Barroca", "-João Paulo", "-Hernanes<br>-Pablo"];
jogos.push(jogo178);
var jogo179 = ["Botafogo", "Fluminense", 0, 1, "Série A", "2019-10-06", "Nilton Santos", "Eduardo Barroca", "", "-Yony González"];
jogos.push(jogo179);
var jogo181 = ["Botafogo", "Goiás", 3, 1, "Série A", "2019-10-09", "Nilton Santos", "Bruno Lazaroni", "-Gabriel<br>-João Paulo<br>-Leo Valencia", "-Marcelo Benevenuto (Gol contra)"];
jogos.push(jogo181);
var jogo182 = ["Vasco", "Botafogo",  2, 1, "Série A", "2019-10-16", "São Januário", "Alberto Valentim", "-Marcelo Benevenuto", "-Bruno Gomes<br>-Ribamar"];
jogos.push(jogo182);
var jogo183 = ["Botafogo", "CSA", 2, 1, "Série A", "2019-10-21", "Nilton Santos", "Alberto Valentim", "-Luciano Castán (Gol Contra)<br>-Igor Cássio", "-Ricardo Bueno"];
jogos.push(jogo183);
var jogo184 = ["Botafogo", "Cruzeiro", 0, 2, "Série A", "2019-10-31", "Nilton Santos", "Alberto Valentim", "", "-Cacá<br>-Éderson"];
jogos.push(jogo184);
var jogo185 = ["Santos", "Botafogo",  4, 1, "Série A", "2019-11-03", "Vila Belmiro (Santos-SP)", "Alberto Valentim", "-Igor Cássio", "-Eduardo Sasha<br>-Marinho<br>-Soteldo (2x)"];
jogos.push(jogo185);
var jogo186 = ["Botafogo", "Avaí", 2, 0, "Série A", "2019-11-11", "Nilton Santos", "Alberto Valentim", "-Ricardo Thalheimer (Gol Contra)<br>-Diego Souza", ""];
jogos.push(jogo186);
var jogo187 = ["Botafogo", "Corinthians", 1, 0, "Série A", "2019-11-24", "Nilton Santos", "Alberto Valentim", "-Diego Souza", ""];
jogos.push(jogo187);
var jogo188 = ["Botafogo", "Internacional", 0, 1, "Série A", "2019-11-30", "Nilton Santos", "Alberto Valentim", "", "-Guerrero"];
jogos.push(jogo188);
var jogo189 = ["Botafogo", "Ceará", 1, 1, "Série A", "2019-12-08", "Nilton Santos", "Alberto Valentim", "-Marcos Vinícius", "-Thiago Galhardo"];
jogos.push(jogo189);
var jogo190 = ["Volta Redonda", "Botafogo",  1, 0, "Carioca", "2020-01-18", "Raulino de Oliveira (Volta Redonda-RJ)", "Bruno Lazaroni", "", "-Saulo"];
jogos.push(jogo190);
var jogo191 = ["Madureira", "Botafogo",  2, 0, "Carioca", "2020-01-21", "Aniceto Moscoso (Conselheiro Galvão)", "Bruno Lazaroni", "", "-Emerson Carioca<br>-Ygor Catatau"];
jogos.push(jogo191);
var jogo192 = ["Botafogo", "Macaé", 3, 1, "Carioca", "2020-01-26", "Nilton Santos", "Alberto Valentim", "-Pedro Raúl<br>-Luis Henrique<br>-Bruno Nazário", "-Matheus Babi"];
jogos.push(jogo192);
var jogo194 = ["Botafogo", "Resende", 2, 1, "Carioca", "2020-01-30", "Nilton Santos", "Alberto Valentim", "-Bruno Nazário<br>-Pedro Raúl", "-Geovani"];
jogos.push(jogo194);
var jogo195 = ["Botafogo", "Vasco", 1, 0, "Carioca", "2020-02-02", "Nilton Santos", "Alberto Valentim", "-Igor Cássio", ""];
jogos.push(jogo195);
var jogo20200209 = ["Fluminense", "Botafogo",  3, 0, "Carioca", "2020-02-09", "Maracanã", "Alberto Valentim", "", "-Nenê (2x)<br>-Wellington Silva"];
jogos.push(jogo20200209);
var jogo20200301 = ["Botafogo", "Boavista", 2, 1, "Carioca", "2020-03-01", "Nilton Santos", "Paulo Autuori", "-Alex Santana<br>-Bruno Nazário", "-Michel"];
jogos.push(jogo20200301);
var jogo20200307 = ["Flamengo", "Botafogo",  3, 0, "Carioca", "2020-03-07", "Maracanã", "Paulo Autuori", "", "-Éverton Ribeiro<br>-Gabriel<br>-Michael"];
jogos.push(jogo20200307);
var jogo20210926 = ["Botafogo", "Sampaio Corrêa", 2, 0, "Série B", "2021-09-26", "Nilton Santos", "Enderson Moreira", "-Rafael Navarro<br>-Luís Oyama", ""];
jogos.push(jogo20210926);

var outros = [];

var jogo20070715 = ["Brasil", "Honduras",  3, 0, "Jogos Pan-Americanos", "2007-07-15", "Estádio João Havelange (Engenhão)", "<br>Brasil: Luiz Nizzo<br>Honduras: Miguel Escalante", "-Lulinha (3x)", ""];
outros.push(jogo20070715);
var jogo20180901 = ["Vasco", "Santos",  0, 3, "Série A", "2018-09-01", "Maracanã", "<br>Vasco: Alberto Valentim<br>Santos: Cuca", "", "-Gabriel (3x)"];
outros.push(jogo20180901);
var jogo20190624 = ["Chile", "Uruguai",  0, 1, "Copa América", "2019-06-24", "Maracanã", "<br>Chile: Reinaldo Rueda<br>Uruguai: Oscar Tabárez", "", "-Cavani"];
outros.push(jogo20190624);
var jogo20190914 = ["Flamengo", "Santos",  1, 0, "Série A", "2019-09-14", "Maracanã", "<br>Flamengo: Jorge Jesus<br>Santos: Sampaoli", "-Gabriel", ""];
outros.push(jogo20190914);
var jogo20191005 = ["Vasco", "Santos",  0, 1, "Série A", "2019-10-05", "São Januário", "<br>Vasco: Vanderlei Luxemburgo<br>Santos: Sampaoli", "", "-Tailson"];
outros.push(jogo20191005);