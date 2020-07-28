var jogos = [];

var jogo1 = [true, "Fluminense", 2, 3, "Série A", "2002-10-26", "Maracanã", "Ivo Wortmann", "-Galeano <br />-Léo Inácio", "-César <br />-Magno Alves <br />-Romário"];
var jogo2 =  [true, "Flamengo", 1, 0, "Carioca", "2004-03-14", "Maracanã", "Levir Culpi", "-Alex Alves", ""];
var jogo3 = [true, "Atlético-PR", 1, 1, "Série A", "2004-08-12", "Caio Martins", "Mauro Galvão", "-Schwenck", "-Washington"];
var jogo4 = [true, "Criciúma", 1, 1, "Série A", "2004-08-28", "Caio Martins", "Paulo Bonamigo", "-Schwenck", "-Fernandinho"];
var jogo5 = [false, "Fluminense", 4, 1, "Série A", "2004-10-02", "Maracanã", "Paulo Bonamigo", "-Almir <br />-Ruy <br />-Ricardinho <br />-Têti", "-Edmundo"];
var jogo6 = [true, "Coritiba", 4, 1, "Série A", "2004-11-13", "Caio Martins", "Paulo Bonamigo", "-Caio Ribeiro (2x)  <br />-Schwenck <br />-Ricardinho", "-Jorginho Paulista"];
var jogo7 = [true, "Guarani", 1, 0, "Série A", "2004-11-27", "Caio Martins", "Paulo Bonamigo", "-Alex Alves", ""];
var jogo8 = [true, "Corinthians", 1, 2, "Série A", "2004-12-12", "Caio Martins", "Paulo Bonamigo", "-Alex Alves", "-Fábio Baiano <br />-Wendel"];
var jogo9 = [true, "Americano", 1, 2, "Carioca", "2005-02-13", "Maracanã", "Paulo Bonamigo", "-Alex Alves", "-Marcos Antônio <br />-Washington"];
var jogo10 = [false, "Fluminense", 0, 4, "Carioca", "2005-03-13", "Maracanã", "Paulo Bonamigo", "", "-Fabiano Eller <br />-Gabriel <br />-Juninho <br />-Alex"];
var jogo11 = [true, "Atlético-PR", 2, 0, "Série A", "2005-05-29", "Luso Brasileiro", "Paulo César Gusmão", "-Rafael Marques <br />-Almir", ""];
var jogo12 = [true, "Goiás", 3, 1, "Série A", "2005-09-18", "Luso Brasileiro", "Celso Roth", "-Ramón <br />-Zé Roberto (2x)", "-Souza"];
var jogo13 = [true, "Palmeiras", 1, 2, "Série A", "2005-10-08", "Luso Brasileiro", "Celso Roth", "-Alex Alves", "-Marcinho Guerreiro <br />-Marcinho"];
var jogo14 = [true, "Paraná", 2, 0, "Série A", "2005-11-12", "Luso Brasileiro", "Celso Roth", "-Ramón <br/>-Juca", ""];
var jogo15 = [true, "Vasco", 5, 3, "Carioca", "2006-01-22", "Maracanã", "Carlos Roberto", "-Zé Roberto<br/>-Lúcio Flávio<br/>-Reinaldo<br/>-Ruy<br/>-Felipe Adão", "-Romário (3x)"];
var jogo16 = [true, "Nova Iguaçu", 1, 1, "Carioca", "2006-02-19", "Maracanã", "Carlos Roberto", "-Dodô", "-Marcos Denner"];
var jogo17 = [true, "Madureira", 3, 1, "Carioca", "2006-04-09", "Maracanã", "Carlos Roberto", "-Dodô (2x)<br/>-Reinaldo", "-Fábio Júnior"];
var jogo19 = [true, "Santos", 4, 3, "Série A", "2006-10-14", "Maracanã", "Cuca", "-Asprilla<br/>-Reinaldo<br/>-Zé Roberto<br/>-Juca", "-Kléber<br/>-Welligton Paulista<br/>-Reinaldo"];
var jogo20 = [true, "São Caetano", 2, 1, "Série A", "2006-10-22", "Maracanã", "Cuca", "-Juninho<br/>-Reinaldo", "-Marabá"];
var jogo21 = [true, "Internacional", 0, 1, "Série A", "2006-11-02", "Maracanã", "Cuca", "", "-Alex Meschini"];
var jogo22 = [true, "Goiás", 2, 2, "Série A", "2006-11-19", "Maracanã", "Cuca", "-Wando<br/>-Lúcio Flávio", "-Robson Luiz<br/>-Rogério Corrêa"];
var jogo23 = [true, "Figueirense", 3, 1, "Copa do Brasil", "2007-05-23", "Maracanã", "Cuca", "-Zé Roberto<br/>-André Lima<br/>-Vinícius (Gol Contra)", "-Cleiton Xavier"];
var jogo24 = [true, "Grêmio", 3, 0, "Série A", "2007-06-02", "Maracanã", "Cuca", "-Juninho<br/>-Luciano Almeida<br/>-Dodô", ""];
var jogo25 = [true, "Náutico", 3, 1, "Série A", "2007-06-17", "Maracanã", "Cuca", "-Juninho<br/>-André Lima<br/>-Jorge Henrique", "-Alex (Gol Contra)"];
var jogo26 = [true, "Internacional", 1, 1, "Série A", "2007-08-19", "Maracanã", "Cuca", "-André Lima", "-Ceará"];
var jogo27 = [true, "Fluminense", 0, 2, "Série A", "2007-09-23", "Maracanã", "Cuca", "", "-Thiago Neves<br/>-David"];
var jogo28 = [true, "Fluminense", 3, 1, "Carioca", "2008-03-30", "Maracanã", "Cuca", "-Welligton Paulista<br/>-Lúcio Flávio<br/>-Jorge Henrique", "-Alan"];
var jogo29 = [true, "Atlético-MG", 2, 0, "Copa do Brasil", "2008-05-14", "Nilton Santos", "Cuca", "-Zé Carlos<br/>-Alessandro", ""];
var jogo30 = [true, "Vasco", 1, 1, "Série A", "2008-05-25", "Nilton Santos", "Cuca", "-Lúcio Flávio", "-Eduardo Luiz"];
var jogo31 = [true, "Náutico", 1, 1, "Série A", "2008-08-30", "Nilton Santos", "Ney Franco", "-Carlos Alberto", "-Adriano"];
var jogo32 = [false, "Fluminense", 1, 2, "Carioca", "2009-03-28", "Maracanã", "Ney Franco", "-Maicosuel", "-Maicon<br/>-Conca"];
var jogo33 = [true, "Boavista", 4, 1, "Carioca", "2010-03-29", "São Januário", "Joel Santana", "-Loco Abreu (3x)<br/>-Marcelo Cordeiro", ""];
var jogo34 = [true, "Atlético-MG", 3, 0, "Série A", "2010-08-07", "Nilton Santos", "Joel Santana", "-Maicosuel<br/>-Somália<br/>-Herrera", ""];
var jogo35 = [true, "Vitória", 1, 0, "Série A", "2010-10-23", "Nilton Santos", "Joel Santana", "-Marcelo Cordeiro", ""];
var jogo36 = [true, "Volta Redonda", 4, 2, "Carioca", "2011-03-05", "Nilton Santos", "Joel Santana", "-Caio<br/>-Herrera<br/>-Alex<br/>-Rodrigo Mancha", "-Gláuber<br/>-Cristiano Ávalos"];
var jogo37 = [true, "Vasco", 0, 2, "Carioca", "2011-03-20", "Nilton Santos", "Joel Santana", "", "-Éder Luís<br/>-Diego Souza"];
var jogo38 = [true, "Ceará", 4, 0, "Série A", "2011-09-07", "Nilton Santos", "Caio Júnior", "-Herrera (2x)<br/>-Loco Abreu<br/>-Cidinho", ""];
var jogo39 = [true, "Bahia", 2, 2, "Série A", "2011-10-08", "São Januário", "Caio Júnior", "-Alex<br/>-Caio", "-Souza (2x)"];
var jogo40 = [true, "Vasco", 3, 1, "Carioca", "2012-04-29", "Nilton Santos", "Oswaldo de Oliveira", "-Loco Abreu (2x)<br/>-Maicosuel", "-Carlos Alberto"];
var jogo41 = [false, "Flamengo", 0, 1, "Carioca", "2013-02-17", "Nilton Santos", "Oswaldo de Oliveira", "", "-Hernane"];
var jogo42 = [true, "Fluminense", 1, 0, "Carioca", "2013-05-05", "Raulino de Oliveira (Volta Redonda-RJ)", "Oswaldo de Oliveira", "-Rafael Marques", ""];
var jogo43 = [true, "Grêmio", 0, 1, "Série A", "2013-10-05", "Maracanã", "Oswaldo de Oliveira", "", "-Alex Telles"];
var jogo44 = [true, "Criciúma", 3, 0, "Série A", "2013-12-08", "Maracanã", "Oswaldo de Oliveira", "-Lodeiro<br/>-Elias<br/>-Seedorf", ""];
var jogo45 = [true, "Deportivo Quito-EQU", 4, 0, "Copa Libertadores", "2014-02-05", "Maracanã", "Eduardo Húngaro", "-Wallyson (3x)<br/>-Henrique Almeida", ""];
var jogo46 = [true, "Independiente Del Valle-EQU", 1, 0, "Copa Libertadores", "2014-03-18", "Maracanã", "Eduardo Húngaro", "-\"El Tanque\" Ferreyra", ""];
var jogo47 = [false, "Flamengo", 0, 1, "Série A", "2014-07-27", "Maracanã", "Vagner Mancini", "", "-Alecsandro"];
var jogo48 = [true, "Chapecoense", 1, 0, "Série A", "2014-08-23", "Maracanã", "Vagner Mancini", "-Cachito Ramírez", ""];
var jogo49 = [true, "Santos", 1, 0, "Série A", "2014-08-31", "Maracanã", "Vagner Mancini", "-Daniel", ""];
var jogo50 = [true, "Bahia", 2, 3, "Série A", "2014-09-17", "Maracanã", "Vagner Mancini", "-Emerson Sheik (2x)", "-Dankler (Gol Contra)<br/>-Maxi Biancucchi<br/>-Branquinho"];
var jogo51 = [true, "Palmeiras", 0, 1, "Série A", "2014-10-08", "Maracanã", "Vagner Mancini", "", "-Henrique Dourado"];
var jogo52 = [true, "Boavista", 1, 0, "Carioca", "2015-01-31", "São Januário", "Renê Simões", "-Roger Carvalho", ""];
var jogo53 = [true, "Bonsucesso", 4, 0, "Carioca", "2015-02-07", "Nilton Santos", "Renê Simões", "-Diego Jardel<br/>-Bill<br/>-Thiago Carleto<br/>-Fernandes", ""];
var jogo54 = [true, "Nova Iguaçu", 2, 1, "Carioca", "2015-02-21", "Nilton Santos", "Renê Simões", "-Paulo Henrique (Gol Contra)<br/>-Jóbson", "-Marlon"];
var jogo55 = [true, "Flamengo", 1, 0, "Carioca", "2015-03-01", "Maracanã", "Renê Simões", "-Tomás Bastos", ""];
var jogo56 = [false, "Fluminense", 1, 3, "Carioca", "2015-03-08", "Maracanã", "Renê Simões", "-Jóbson", "-Kenedy<br/>-Gerson<br/>-Fred"];
var jogo57 = [true, "Resende", 3, 0, "Carioca", "2015-03-15", "Nilton Santos", "Renê Simões", "-Tássio<br/>-Jóbson<br/>-Rodrigo Pimpão", ""];
var jogo58 = [false, "Vasco", 1, 1, "Carioca", "2015-03-29", "Maracanã", "Renê Simões", "-Roger Carvalho", "-Gilberto"];
var jogo59 = [true, "Madureira", 4, 1, "Carioca", "2015-04-05", "Nilton Santos", "Renê Simões", "-Thiago Carleto<br/>-Renan Fonseca<br/>-Fernandes<br/>-Bill", "-Rodrigo Lindoso"];
var jogo60 = [true, "Vasco", 1, 2, "Carioca", "2015-05-03", "Maracanã", "Renê Simões", "-Diego Jardel", "-Rafael Silva<br/>-Gilberto"];
var jogo61 = [true, "CRB", 4, 1, "Série B", "2015-05-16", "Nilton Santos", "Renê Simões", "-Bill<br/>-Lulinha<br/>-William Arão<br/>-Élvis", "-Fernando"];
var jogo62 = [true, "Vitória", 2, 0, "Série B", "2015-05-30", "Nilton Santos", "Renê Simões", "-Diego Giaretta<br/>-William Arão", ""];
var jogo63 = [true, "Mogi Mirim", 3, 0, "Série B", "2015-06-05", "Nilton Santos", "Renê Simões", "-Rodrigo Pimpão<br/>-Bill<br/>-Lulinha", ""];
var jogo64 = [true, "Boa Esporte", 1, 1, "Série B", "2015-06-19", "Nilton Santos", "Renê Simões", "-Rodrigo Pimpão", "-Bruninho"];
var jogo65 = [true, "Figueirense", 0, 1, "Copa do Brasil", "2015-07-14", "Nilton Santos", "Renê Simões", "", "-Marcão"];
var jogo66 = [true, "Criciúma", 0, 0, "Série B", "2015-07-28", "Nilton Santos", "Ricardo Gomes", "", ""];
var jogo67 = [true, "Paysandu", 2, 3, "Série B", "2015-08-23", "Nilton Santos", "Ricardo Gomes", "-Daniel Carvalho<br/>-Sassá", "-Yago Pikachu<br/>-Thiago Martins<br/>-Jhonnatan"];
var jogo68 = [true, "Bragantino", 4, 0, "Série B", "2015-10-17", "Nilton Santos", "Ricardo Gomes", "-Navarro (2x)<br/>-William Arão<br/>-Neílton", ""];
var jogo69 = [true, "Santa Cruz", 0, 3, "Série B", "2015-11-14", "Nilton Santos", "Ricardo Gomes", "", "-Lelê<br/>-Grafite<br/>-Bruno Moraes"];
var jogo70 = [true, "América-MG", 0, 0, "Série B", "2015-11-28", "Nilton Santos", "Ricardo Gomes", "", ""];
var jogo71 = [true, "Portuguesa-RJ", 2, 1, "Carioca", "2016-02-02", "São Januário", "Ricardo Gomes", "-Gegê<br/>-Damián Lizio", "-Rafael Paty"];
var jogo72 = [true, "Boavista", 1, 0, "Carioca", "2016-03-06", "São Januário", "Ricardo Gomes", "-Fernandes", ""];
var jogo73 = [true, "Vasco", 0, 1, "Carioca", "2016-05-01", "Maracanã", "Ricardo Gomes", "", "-Jorge Henrique"];
var jogo74 = [false, "Vasco", 1, 1, "Carioca", "2016-05-08", "Maracanã", "Ricardo Gomes", "-Leandrinho", "-Rafael Vaz"];
var jogo75 = [true, "São Paulo", 0, 1, "Série A", "2016-05-15", "Raulino de Oliveira (Volta Redonda-RJ)", "Ricardo Gomes", "", "-Lucas Fernandes"];
var jogo76 = [true, "Santa Cruz", 2, 1, "Série A", "2016-07-03", "Mário Helênio (Juiz de Fora-MG)", "Ricardo Gomes", "-Sassá<br/>-Neílton", "-João Paulo"];
var jogo77 = [true, "Palmeiras", 3, 1, "Série A", "2016-07-31", "Arena Botafogo", "Ricardo Gomes", "-Neílton (2x)<br/>-Camilo", "-Erik"];
var jogo78 = [true, "Grêmio", 2, 1, "Série A", "2016-09-04", "Arena Botafogo", "Jair Ventura", "-Camilo<br/>-Sassá", "-Batista"];
var jogo79 = [true, "Fluminense", 1, 0, "Série A", "2016-09-07", "Arena Botafogo", "Jair Ventura", "-Neílton", ""];
var jogo80 = [true, "Internacional", 1, 0, "Série A", "2016-10-12", "Arena Botafogo", "Jair Ventura", "-Sassá", ""];
var jogo81 = [true, "Atlético-MG", 3, 2, "Série A", "2016-10-16", "Arena Botafogo", "Jair Ventura", "-Bruno Silva<br/>-Rodrigo Pimpão<br/>-Dudu Cearense", "-Fred<br/>-Leonardo Silva"];
var jogo82 = [true, "Coritiba", 0, 0, "Série A", "2016-10-29", "Arena Botafogo", "Jair Ventura", "", ""];
var jogo83 = [true, "Chapecoense", 0, 2, "Série A", "2016-11-16", "Arena Botafogo", "Jair Ventura", "", "-Kempes<br/>-Sérgio Manoel"];
var jogo84 = [true, "Ponte Preta", 1, 1, "Série A", "2016-11-26", "Arena Botafogo", "Jair Ventura", "-Sassá", "-William Potker"];
var jogo85 = [true, "Nova Iguaçu", 1, 1, "Carioca", "2017-01-28", "Nilton Santos", "Jair Ventura", "-Marcelo Benevenuto", "-Murilo Henrique"];
var jogo86 = [true, "Colo-Colo-CHI", 2, 1, "Copa Libertadores", "2017-02-01", "Nilton Santos", "Jair Ventura", "-Airton<br/>-Esteban Pavez (Gol Contra)", "-Paredes"];
var jogo87 = [true, "Macaé", 2, 1, "Carioca", "2017-02-04", "Nilton Santos", "Jair Ventura", "-Rodrigo Lindoso<br/>-Vinicius Tanque", "-Guilherme Xavier"];
var jogo88 = [true, "Olimpia-PAR", 1, 0, "Copa Libertadores", "2017-02-15", "Nilton Santos", "Jair Ventura", "-Rodrigo Pimpão", ""];
var jogo89 = [true, "Volta Redonda", 1, 0, "Carioca", "2017-03-09", "Nilton Santos", "Jair Ventura", "-Victor Luís", ""];
var jogo90 = [true, "Vasco", 0, 0, "Carioca", "2017-03-19", "Nilton Santos", "Jair Ventura", "", ""];
var jogo91 = [true, "Fluminense", 2, 3, "Carioca", "2017-03-23", "Nilton Santos", "Jair Ventura", "-Roger (2x)", "-Richarlison (2x)<br/>-Renato Chaves"];
var jogo92 = [true, "Fluminense", 3, 1, "Carioca", "2017-04-09", "Nilton Santos", "Jair Ventura", "-Igor Rabello<br/>-Dudu Cearense<br/>-Sassá", "-Richarlison"];
var jogo93 = [true, "Vasco", 0, 2, "Carioca", "2017-04-16", "Nilton Santos", "Jair Ventura", "", "-Douglas Luiz<br/>-Luís Fabiano"];
var jogo94 = [true, "Sport", 2, 1, "Copa do Brasil", "2017-04-26", "Nilton Santos", "Jair Ventura", "-Guilherme (2x)", "-Samuel Xavier"];
var jogo95 = [true, "Barcelona de Guayaquil-EQU", 0, 2, "Copa Libertadores", "2017-05-02", "Nilton Santos", "Jair Ventura", "", "-Ayoví<br/>-Jonatan Álvez"];
var jogo96 = [true, "Atlético Nacional-COL", 1, 0, "Copa Libertadores", "2017-05-18", "Nilton Santos", "Jair Ventura", "-Rodrigo Pimpão", ""];
var jogo97 = [true, "Ponte Preta", 2, 0, "Série A", "2017-05-21", "Nilton Santos", "Jair Ventura", "-Bruno Silva <br />-Rodrigo Lindoso", ""];
var jogo98 = [true, "Bahia", 1, 0, "Série A", "2017-05-28", "Nilton Santos", "Jair Ventura", "-Bruno Silva", ""];
var jogo99 = [true, "Coritiba", 2, 2, "Série A", "2017-06-11", "Nilton Santos", "Jair Ventura", "-Roger<br/>-Joel Carli", "-Kléber<br/>-Henrique Almeida"];
var jogo100 = [true, "Vasco", 3, 1, "Série A", "2017-06-21", "Nilton Santos", "Jair Ventura", "-Roger (2x)<br/>-Victor Luís", "-Caio Monteiro"];
var jogo101 = [true, "Avaí", 0, 2, "Série A", "2017-06-26", "Nilton Santos", "Jair Ventura", "", "-Joel (2x)"];
var jogo102 = [true, "Atlético-MG", 1, 1, "Série A", "2017-07-09", "Nilton Santos", "Jair Ventura", "-Roger", "-Marlone"];
var jogo103 = [false, "Fluminense", 1, 0, "Série A", "2017-07-12", "Maracanã", "Jair Ventura", "-Roger", ""];
var jogo104 = [true, "Sport", 2, 1, "Série A", "2017-07-17", "Nilton Santos", "Jair Ventura", "-Rodrigo Lindoso<br/>-Guilherme", "-Rithely"];
var jogo105 = [true, "Atlético-MG", 3, 0, "Copa do Brasil", "2017-07-26", "Nilton Santos", "Jair Ventura", "-Joel Carli<br/>-Roger<br/>-Gilson", ""];
var jogo106 = [true, "São Paulo", 3, 4, "Série A", "2017-07-29", "Nilton Santos", "Jair Ventura", "-Marcos Vinícius (2x) <br/>-Guilherme", "-Cueva <br/>-Marcos Guilherme (2x)<br/>-Hernanes"];
var jogo107 = [true, "Palmeiras", 1, 2, "Série A", "2017-08-02", "Nilton Santos", "Jair Ventura", "-Rodrigo Pimpão", "-Igor Rabello (Gol Contra) <br/>-Deyverson"];
var jogo108 = [true, "Nacional-URU", 2, 0, "Copa Libertadores", "2017-08-10", "Nilton Santos", "Jair Ventura", "-Bruno Silva <br/>-Rodrigo Pimpão", ""];
var jogo109 = [true, "Grêmio", 1, 0, "Série A", "2017-08-13", "Nilton Santos", "Jair Ventura", "-Leandrinho", ""];
var jogo110 = [true, "Flamengo", 0, 0, "Copa do Brasil", "2017-08-16", "Nilton Santos", "Jair Ventura", "", ""];
var jogo111 = [false, "Flamengo", 0, 1, "Copa do Brasil", "2017-08-23", "Maracanã", "Jair Ventura", "", "-Diego"];
var jogo112 = [true, "Flamengo", 2, 0, "Série A", "2017-09-10", "Nilton Santos", "Jair Ventura", "-Roger (2x)", ""];
var jogo113 = [true, "Grêmio", 0, 0, "Copa Libertadores", "2017-09-13", "Nilton Santos", "Jair Ventura", "", ""];
var jogo114 = [true, "Santos", 2, 0, "Série A", "2017-09-16", "Nilton Santos", "Jair Ventura", "-Rodrigo Lindoso <br/>-Guilherme", ""];
var jogo115 = [true, "Vitória", 2, 3, "Série A", "2017-10-01", "Nilton Santos", "Jair Ventura", "-Brenner (2x)", "-David <br/>-André Lima <br/>-Danilinho"];
var jogo116 = [true, "Chapecoense", 2, 1, "Série A", "2017-10-11", "Nilton Santos", "Jair Ventura", "-Brenner <br/>-Vinicius Tanque", "-Apodi"];
var jogo117 = [false, "Vasco", 0, 1, "Série A", "2017-10-14", "Maracanã", "Jair Ventura", "", "-Nenê"];
var jogo118 = [true, "Corinthians", 2, 1, "Série A", "2017-10-23", "Nilton Santos", "Jair Ventura", "-Brenner <br/>-Igor Rabello", "-Jô"];
var jogo119 = [true, "Fluminense", 1, 2, "Série A", "2017-11-04", "Nilton Santos", "Jair Ventura", "-Marcos Vinícius", "-Marcos Júnior <br/>-Matheus Alessandro"];
var jogo120 = [true, "Atlético-PR", 0, 1, "Série A", "2017-11-11", "Nilton Santos", "Jair Ventura", "", "-Guilherme"];
var jogo121 = [true, "Atlético-GO", 1, 2, "Série A", "2017-11-16", "Nilton Santos", "Jair Ventura", "-João Paulo", "-Jorginho <br/>-Luiz Fernando"];
var jogo122 = [true, "Cruzeiro", 2, 2, "Série A", "2017-12-03", "Nilton Santos", "Jair Ventura", "-Brenner <br/>-Ezequiel", "-Thiago Neves <br/>-Arrascaeta"];
var jogo123 = [true, "Portuguesa-RJ", 2, 2, "Carioca", "2018-01-16", "Nilton Santos", "Felipe Conceição (Tigrão)", "-Brenner <br/>-Marcos Vinícius", "-Jefferson Oliveira (2x)"];
var jogo124 = [false, "Fluminense", 0, 0, "Carioca", "2018-01-20", "Maracanã", "Felipe Conceição (Tigrão)", "", ""];
var jogo125 = [true, "Boavista", 1, 0, "Carioca", "2018-01-28", "Nilton Santos", "Felipe Conceição (Tigrão)", "-Brenner", ""];
var jogo126 = [true, "Madureira", 0, 0, "Carioca", "2018-02-03", "Nilton Santos", "Felipe Conceição (Tigrão)", "", ""];
var jogo127 = [true, "Bangu", 1, 0, "Carioca", "2018-03-06", "Nilton Santos", "Alberto Valentim", "-Rodrigo Pimpão", ""];
var jogo128 = [true, "Vasco", 2, 3, "Carioca", "2018-03-18", "Nilton Santos", "Alberto Valentim", "-Rodrigo Lindoso <br/>-Brenner", "-Riascos <br/>-Andrés Ríos <br/>-Paulinho"];
var jogo129 = [true, "Vasco", 3, 2, "Carioca", "2018-03-21", "Nilton Santos", "Alberto Valentim", "-Brenner <br/>-Luiz Fernando <br/>-Igor Rabello", "-Erazo <br/>-Riascos"];
var jogo130 = [false, "Fluminense", 0, 3, "Carioca", "2018-03-25", "Maracanã", "Alberto Valentim", "", "-Pedro <br/>-Marcos Júnior <br/>-Jadson"];
var jogo131 = [false, "Flamengo", 1, 0, "Carioca", "2018-03-28", "Maracanã", "Alberto Valentim", "-Luiz Fernando", ""];
var jogo132 = [true, "Vasco", 2, 3, "Carioca", "2018-04-01", "Nilton Santos", "Alberto Valentim", "-Renatinho <br/>-Brenner", "-Yago Pikachu (2x) <br/>-Andrés Ríos"];
var jogo133 = [false, "Vasco", 1, 0, "Carioca", "2018-04-08", "Maracanã", "Alberto Valentim", "-Joel Carli<br>\r\n<br>Pênaltis: (4)<br>\r\n-Brenner<br>\r\n-Gilson<br>\r\n-Marcinho<br>\r\n-Renatinho", "<br><br>Pênaltis: (3)<br>\r\n-Wagner<br>\r\n-Andrés Ríos<br>\r\n-Yago Pikachu"];
var jogo134 = [true, "Grêmio", 2, 1, "Série A", "2018-04-28", "Nilton Santos", "Alberto Valentim", "-Brenner <br/>-Gilson", "-Igor Rabello (Gol Contra)"];
var jogo135 = [true, "Audax Italiano-CHI", 1, 1, "Copa Sul-Americana", "2018-05-09", "Nilton Santos", "Alberto Valentim", "-Matheus Fernandes", "-Luis Cabrera"];
var jogo136 = [true, "Fluminense", 2, 1, "Série A", "2018-05-14", "Nilton Santos", "Alberto Valentim", "-Rodrigo Lindoso <br/>-Kieza", "-Pedro"];
var jogo137 = [true, "Vitória", 1, 1, "Série A", "2018-05-27", "Nilton Santos", "Alberto Valentim", "-Kieza", "-Denílson"];
var jogo138 = [false, "Vasco", 2, 1, "Série A", "2018-06-02", "São Januário", "Alberto Valentim", "-Kieza <br/>-Igor Rabello", "-Andrey"];
var jogo139 = [true, "Ceará", 0, 0, "Série A", "2018-06-06", "Nilton Santos", "Alberto Valentim", "", ""];
var jogo140 = [true, "Chapecoense", 1, 0, "Série A", "2018-07-26", "Nilton Santos", "Marcos Paquetá", "-Marcinho", ""];
var jogo141 = [true, "Santos", 0, 0, "Série A", "2018-08-04", "Nilton Santos", "Bruno Lazaroni", "", ""];
var jogo142 = [true, "Nacional-PAR", 2, 0, "Copa Sul-Americana", "2018-08-16", "Nilton Santos", "Zé Ricardo", "-Rodrigo Lindoso <br/>-Léo Valencia", ""];
var jogo143 = [true, "Atlético-MG", 0, 3, "Série A", "2018-08-19", "Nilton Santos", "Zé Ricardo", "", "-Luan <br/>-Cazares <br/>-Tomás Andrade"];
var jogo144 = [true, "Sport", 2, 0, "Série A", "2018-08-25", "Nilton Santos", "Zé Ricardo", "-Joel Carli <br/>-Rodrigo Aguirre", ""];
var jogo145 = [true, "Cruzeiro", 1, 1, "Série A", "2018-09-05", "Nilton Santos", "Zé Ricardo", "-Luiz Fernando", "-Edílson"];
var jogo146 = [false, "Fluminense", 0, 1, "Série A", "2018-09-09", "Maracanã", "Zé Ricardo", "", "-Digão"];
var jogo147 = [true, "América-MG", 1, 0, "Série A", "2018-09-16", "Nilton Santos", "Zé Ricardo", "-Rodrigo Lindoso", ""];
var jogo148 = [true, "São Paulo", 2, 2, "Série A", "2018-09-30", "Nilton Santos", "Zé Ricardo", "-Jean <br/>-Kieza", "-Diego Souza <br/>-Gonzalo Carneiro"];
var jogo149 = [true, "Bahia", 2, 1, "Copa Sul-Americana", "2018-10-03", "Nilton Santos", "Zé Ricardo", "-Rodrigo Pimpão <br/>-Luiz Fernando\r\n<br><br>Pênaltis: (4)<br>\r\n-Rodrigo Lindoso<br>\r\n-Aguirre<br>\r\n-Kieza<br>\r\n-Renatinho<br>", "-Edigar Junio\r\n<br><br>Pênaltis: (5)<br>\r\n-Gilberto<br>\r\n-Zé Rafael<br>\r\n-Allione<br>\r\n-Nilton<br>\r\n-Flávio"];
var jogo150 = [true, "Vasco", 1, 1, "Série A", "2018-10-09", "Nilton Santos", "Zé Ricardo", "-Luiz Fernando", "-Maxi López"];
var jogo151 = [true, "Bahia", 0, 1, "Série A", "2018-10-20", "Nilton Santos", "Zé Ricardo", "", "-Edigar Junio"];
var jogo152 = [true, "Corinthians", 1, 0, "Série A", "2018-11-04", "Nilton Santos", "Zé Ricardo", "-Jean", ""];
var jogo153 = [true, "Flamengo", 2, 1, "Série A", "2018-11-10", "Nilton Santos", "Zé Ricardo", "-Erik <br />-Léo Valencia", "-Vitinho"];
var jogo154 = [true, "Internacional", 1, 0, "Série A", "2018-11-18", "Nilton Santos", "Zé Ricardo", "-Erik", ""];
var jogo155 = [true, "Paraná", 2, 1, "Série A", "2018-11-28", "Nilton Santos", "Zé Ricardo", "-Erik (2x)", "-Alex Santana"];
var jogo156 = [true, "Bangu", 0, 0, "Carioca", "2019-01-23", "Nilton Santos", "Zé Ricardo", "", ""];
var jogo157 = [true, "Resende", 0, 1, "Carioca", "2019-01-31", "Nilton Santos", "Zé Ricardo", "", "-Maxwell"];
var jogo158 = [true, "Defensa y Justicia-ARG", 1, 0, "Copa Sul-Americana", "2019-02-06", "Nilton Santos", "Zé Ricardo", "-Erik", ""];
var jogo159 = [true, "Vasco", 1, 1, "Carioca", "2019-02-23", "Nilton Santos", "Zé Ricardo", "-Marcelo Benevenuto", "-Yago Pikachu"];
var jogo160 = [true, "Cuiabá", 3, 0, "Copa do Brasil", "2019-02-27", "Nilton Santos", "Zé Ricardo", "-Erik (2x)<br>-Rodrigo Pimpão", ""];
var jogo161 = [true, "Madureira", 2, 1, "Carioca", "2019-03-11", "Nilton Santos", "Zé Ricardo", "-Jonathan<br>-Kieza", "-Marcinho (Gol contra)"];
var jogo162 = [false, "Fluminense", 1, 1, "Carioca", "2019-03-17", "Maracanã", "Zé Ricardo", "-Alex Santana", "-Paulo Henrique Ganso"];
var jogo163 = [true, "Juventude", 1, 1, "Copa do Brasil", "2019-04-04", "Nilton Santos", "Zé Ricardo", "-Erik", "-Paulo Sérgio"];
var jogo164 = [false, "São Paulo", 0, 2, "Série A", "2019-04-27", "Morumbi (São Paulo-SP)", "Eduardo Barroca", "", "-Éverton<br>-Hudson"];
var jogo165 = [true, "Fortaleza", 1, 0, "Série A", "2019-05-05", "Nilton Santos", "Eduardo Barroca", "-Alex Santana", ""];
var jogo166 = [false, "Fluminense", 1, 0, "Série A", "2019-05-11", "Maracanã", "Eduardo Barroca", "-Alex Santana", ""];
var jogo167 = [true, "Sol de America-PAR", 4, 0, "Copa Sul-Americana", "2019-05-29", "Nilton Santos", "Eduardo Barroca", "-Cícero<br>-Luiz Fernando<br>-Gustavo Bochecha<br>-Diego Souza", ""];
var jogo168 = [true, "Vasco", 1, 0, "Série A", "2019-06-02", "Nilton Santos", "Eduardo Barroca", "-Diego Souza", ""];
var jogo169 = [true, "Santos", 0, 1, "Série A", "2019-07-21", "Nilton Santos", "Eduardo Barroca", "", "-Marinho"];
var jogo170 = [true, "Atlético-MG", 0, 1, "Copa Sul-Americana", "2019-07-24", "Nilton Santos", "Eduardo Barroca", "", "-Vinicius"];
var jogo171 = [false, "Flamengo", 2, 3, "Série A", "2019-07-28", "Maracanã", "Eduardo Barroca", "-Cícero<br>-Diego Souza", "-Gerson<br>-Gabriel<br>-Bruno Henrique"];
var jogo172 = [false, "Atlético-MG", 0, 2, "Copa Sul-Americana", "2019-07-31", "Arena Independência (Belo Horizonte-MG)", "Eduardo Barroca", "", "-Fábio Santos<br>-Vinicius"];
var jogo174 = [true, "Athletico-PR", 2, 1, "Série A", "2019-08-11", "Nilton Santos", "Eduardo Barroca", "-Luiz Fernando<br>-Diego Souza", "-Thonny Anderson"];
var jogo175 = [false, "Corinthians", 0, 2, "Série A", "2019-08-17", "Arena Corinthians (São Paulo-SP)", "Eduardo Barroca", "", "-Mauro Boselli<br>-Everaldo"];
var jogo176 = [true, "Chapecoense", 0, 0, "Série A", "2019-08-26", "Nilton Santos", "Eduardo Barroca", "", ""];
var jogo177 = [true, "Atlético-MG", 2, 1, "Série A", "2019-09-08", "Nilton Santos", "Eduardo Barroca", "-Diego Souza<br>-Alex Santana", "-Di Santo"];
var jogo178 = [true, "São Paulo", 1, 2, "Série A", "2019-09-21", "Nilton Santos", "Eduardo Barroca", "-João Paulo", "-Hernanes<br>-Pablo"];
var jogo179 = [true, "Fluminense", 0, 1, "Série A", "2019-10-06", "Nilton Santos", "Eduardo Barroca", "", "-Yony González"];
var jogo181 = [true, "Goiás", 3, 1, "Série A", "2019-10-09", "Nilton Santos", "Bruno Lazaroni", "-Gabriel<br>-João Paulo<br>-Leo Valencia", "-Marcelo Benevenuto (Gol contra)"];
var jogo182 = [false, "Vasco", 1, 2, "Série A", "2019-10-16", "São Januário", "Alberto Valentim", "-Marcelo Benevenuto", "-Bruno Gomes<br>-Ribamar"];
var jogo183 = [true, "CSA", 2, 1, "Série A", "2019-10-21", "Nilton Santos", "Alberto Valentim", "-Luciano Castán (Gol Contra)<br>-Igor Cássio", "-Ricardo Bueno"];
var jogo184 = [true, "Cruzeiro", 0, 2, "Série A", "2019-10-31", "Nilton Santos", "Alberto Valentim", "", "-Cacá<br>-Éderson"];
var jogo185 = [false, "Santos", 1, 4, "Série A", "2019-11-03", "Vila Belmiro (Santos-SP)", "Alberto Valentim", "-Igor Cássio", "-Eduardo Sasha<br>-Marinho<br>-Soteldo(2x)"];
var jogo186 = [true, "Avaí", 2, 0, "Série A", "2019-11-11", "Nilton Santos", "Alberto Valentim", "-Ricardo Thalheimer (Gol Contra)<br>-Diego Souza", ""];
var jogo187 = [true, "Corinthians", 1, 0, "Série A", "2019-11-24", "Nilton Santos", "Alberto Valentim", "-Diego Souza", ""];
var jogo188 = [true, "Internacional", 0, 1, "Série A", "2019-11-30", "Nilton Santos", "Alberto Valentim", "", "-Guerrero"];
var jogo189 = [true, "Ceará", 1, 1, "Série A", "2019-12-08", "Nilton Santos", "Alberto Valentim", "-Marcos Vinícius", "-Thiago Galhardo"];
var jogo190 = [false, "Volta Redonda", 0, 1, "Carioca", "2020-01-18", "Raulino de Oliveira (Volta Redonda-RJ)", "Bruno Lazaroni", "", "-Saulo"];
var jogo191 = [false, "Madureira", 0, 2, "Carioca", "2020-01-21", "Aniceto Moscoso (Conselheiro Galvão)", "Bruno Lazaroni", "", "-Emerson Carioca<br>-Ygor Catatau"];
var jogo192 = [true, "Macaé", 3, 1, "Carioca", "2020-01-26", "Nilton Santos", "Alberto Valentim", "-Pedro Raúl<br>-Luis Henrique<br>-Bruno Nazário", "-Matheus Babi"];
var jogo194 = [true, "Resende", 2, 1, "Carioca", "2020-01-30", "Nilton Santos", "Alberto Valentim", "-Bruno Nazário<br>-Pedro Raúl", "-Geovani"];
var jogo195 = [true, "Vasco", 1, 0, "Carioca", "2020-02-02", "Nilton Santos", "Alberto Valentim", "-Igor Cássio", ""];
var jogo196 = [false, "Fluminense", 0, 3, "Carioca", "2020-02-09", "Maracanã", "Alberto Valentim", "", "-Nenê (2x)<br>-Wellington Silva"];
var jogo197 = [true, "Boavista", 2, 1, "Carioca", "2020-03-01", "Nilton Santos", "Paulo Autuori", "-Alex Santana<br>-Bruno Nazário", "-Michel"];
var jogo202 = [false, "Flamengo", 0, 3, "Carioca", "2020-03-07", "Maracanã", "Paulo Autuori", "", "-Éverton Ribeiro<br>-Gabriel<br>-Michael"];

jogos.push(jogo1);
jogos.push(jogo2);
jogos.push(jogo3);
jogos.push(jogo4);
jogos.push(jogo5);
jogos.push(jogo6);
jogos.push(jogo7);
jogos.push(jogo8);
jogos.push(jogo9);
jogos.push(jogo10);
jogos.push(jogo11);
jogos.push(jogo12);
jogos.push(jogo13);
jogos.push(jogo14);
jogos.push(jogo15);
jogos.push(jogo16);
jogos.push(jogo17);
jogos.push(jogo19);
jogos.push(jogo20);
jogos.push(jogo21);
jogos.push(jogo22);
jogos.push(jogo23);
jogos.push(jogo24);
jogos.push(jogo25);
jogos.push(jogo26);
jogos.push(jogo27);
jogos.push(jogo28);
jogos.push(jogo29);
jogos.push(jogo30);
jogos.push(jogo31);
jogos.push(jogo32);
jogos.push(jogo33);
jogos.push(jogo34);
jogos.push(jogo35);
jogos.push(jogo36);
jogos.push(jogo37);
jogos.push(jogo38);
jogos.push(jogo39);
jogos.push(jogo40);
jogos.push(jogo41);
jogos.push(jogo42);
jogos.push(jogo43);
jogos.push(jogo44);
jogos.push(jogo45);
jogos.push(jogo46);
jogos.push(jogo47);
jogos.push(jogo48);
jogos.push(jogo49);
jogos.push(jogo50);
jogos.push(jogo51);
jogos.push(jogo52);
jogos.push(jogo53);
jogos.push(jogo54);
jogos.push(jogo55);
jogos.push(jogo56);
jogos.push(jogo57);
jogos.push(jogo58);
jogos.push(jogo59);
jogos.push(jogo60);
jogos.push(jogo61);
jogos.push(jogo62);
jogos.push(jogo63);
jogos.push(jogo64);
jogos.push(jogo65);
jogos.push(jogo66);
jogos.push(jogo67);
jogos.push(jogo68);
jogos.push(jogo69);
jogos.push(jogo70);
jogos.push(jogo71);
jogos.push(jogo72);
jogos.push(jogo73);
jogos.push(jogo74);
jogos.push(jogo75);
jogos.push(jogo76);
jogos.push(jogo77);
jogos.push(jogo78);
jogos.push(jogo79);
jogos.push(jogo80);
jogos.push(jogo81);
jogos.push(jogo82);
jogos.push(jogo83);
jogos.push(jogo84);
jogos.push(jogo85);
jogos.push(jogo86);
jogos.push(jogo87);
jogos.push(jogo88);
jogos.push(jogo89);
jogos.push(jogo90);
jogos.push(jogo91);
jogos.push(jogo92);
jogos.push(jogo93);
jogos.push(jogo94);
jogos.push(jogo95);
jogos.push(jogo96);
jogos.push(jogo97);
jogos.push(jogo98);
jogos.push(jogo99);
jogos.push(jogo100);
jogos.push(jogo101);
jogos.push(jogo102);
jogos.push(jogo103);
jogos.push(jogo104);
jogos.push(jogo105);
jogos.push(jogo106);
jogos.push(jogo107);
jogos.push(jogo108);
jogos.push(jogo109);
jogos.push(jogo110);
jogos.push(jogo111);
jogos.push(jogo112);
jogos.push(jogo113);
jogos.push(jogo114);
jogos.push(jogo115);
jogos.push(jogo116);
jogos.push(jogo117);
jogos.push(jogo118);
jogos.push(jogo119);
jogos.push(jogo120);
jogos.push(jogo121);
jogos.push(jogo122);
jogos.push(jogo123);
jogos.push(jogo124);
jogos.push(jogo125);
jogos.push(jogo126);
jogos.push(jogo127);
jogos.push(jogo128);
jogos.push(jogo129);
jogos.push(jogo130);
jogos.push(jogo131);
jogos.push(jogo132);
jogos.push(jogo133);
jogos.push(jogo134);
jogos.push(jogo135);
jogos.push(jogo136);
jogos.push(jogo137);
jogos.push(jogo138);
jogos.push(jogo139);
jogos.push(jogo140);
jogos.push(jogo141);
jogos.push(jogo142);
jogos.push(jogo143);
jogos.push(jogo144);
jogos.push(jogo145);
jogos.push(jogo146);
jogos.push(jogo147);
jogos.push(jogo148);
jogos.push(jogo149);
jogos.push(jogo150);
jogos.push(jogo151);
jogos.push(jogo152);
jogos.push(jogo153);
jogos.push(jogo154);
jogos.push(jogo155);
jogos.push(jogo156);
jogos.push(jogo157);
jogos.push(jogo158);
jogos.push(jogo159);
jogos.push(jogo160);
jogos.push(jogo161);
jogos.push(jogo162);
jogos.push(jogo163);
jogos.push(jogo164);
jogos.push(jogo165);
jogos.push(jogo166);
jogos.push(jogo167);
jogos.push(jogo168);
jogos.push(jogo169);
jogos.push(jogo170);
jogos.push(jogo171);
jogos.push(jogo172);
jogos.push(jogo174);
jogos.push(jogo175);
jogos.push(jogo176);
jogos.push(jogo177);
jogos.push(jogo178);
jogos.push(jogo179);
jogos.push(jogo181);
jogos.push(jogo182);
jogos.push(jogo183);
jogos.push(jogo184);
jogos.push(jogo185);
jogos.push(jogo186);
jogos.push(jogo187);
jogos.push(jogo188);
jogos.push(jogo189);
jogos.push(jogo190);
jogos.push(jogo191);
jogos.push(jogo192);
jogos.push(jogo194);
jogos.push(jogo195);
jogos.push(jogo196);
jogos.push(jogo197);
jogos.push(jogo202);

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
10 - coresFundo (0 - principal/ 1 - uniformePrimária)
11 - coresLetra (0 - principal/ 1 - uniformeSecundária)
*/

function decrescente(){
	limpaTabela();

	for(var i = jogos.length - 1; i >= 0; i--){
		escreveLinha(jogos[i], i + 1);
	}
}

function crescente(){
	limpaTabela();

	for(var i = 0; i < jogos.length; i++){
		escreveLinha(jogos[i], i + 1);
	}
}

function mandante(){
	limpaTabela();

	var contador = 0;

	for(var i = 0; i < jogos.length; i++){
		if(jogos[i][0] == true){
			contador += 1;
			escreveLinha(jogos[i], contador);
		}
	}
}

function visitante(){
	limpaTabela();

	var contador = 0;

	for(var i = 0; i < jogos.length; i++){
		if(jogos[i][0] == false){
			contador += 1;
			escreveLinha(jogos[i], contador);
		}
	}
}

function adversario(){
	var adversario = document.getElementById("selectAdversario").value;
	
	if(adversario != ""){
		limpaTabela();

		var contador = 0;

		for(var i = 0; i < jogos.length; i++){
			if(adversario == jogos[i][1]){
				contador += 1;
				escreveLinha(jogos[i], contador);
			}
		}
	}
}

function campeonato(){
	var campeonato = document.getElementById("selectCampeonato").value;

	if(campeonato != ""){
		limpaTabela();
		var contador = 0;

		for(var i = 0; i < jogos.length; i++){
			if(campeonato == jogos[i][4]){
				contador += 1;
				escreveLinha(jogos[i], contador);
			}
		}
	}
}

function estadio(){
	var estadio = document.getElementById("selectEstadio").value;

	if(estadio != ""){
		limpaTabela();

		var contador = 0;

		for(var i = 0; i < jogos.length; i++){
			if(estadio == jogos[i][6]){
				contador += 1;
				escreveLinha(jogos[i], contador);
			}
		}
	}
}

function tecnico(){
	var tecnico = document.getElementById("selectTecnico").value;

	if(tecnico != ""){
		limpaTabela();

		var contador = 0;

		for(var i = 0; i < jogos.length; i++){
			if(tecnico == jogos[i][7]){
				contador += 1;
				escreveLinha(jogos[i], contador);
			}
		}
	}
}

function escolheData(){
	limpaTabela();

	var data = document.getElementById("dataJogo").value;
	var contador = 0;

	for(var i = 0; i < jogos.length; i++){
		if(data == jogos[i][5]){
			contador += 1;
			escreveLinha(jogos[i], contador);
		}
	}
}

function ano(){
	limpaTabela();

	var ano = document.getElementById("anoJogo").value;
	var contador = 0;

	for(var i = 0; i < jogos.length; i++){
		var dataCortada = jogos[i][5].split("-")

		if(dataCortada[0] == ano.toString()){
			contador += 1;
			escreveLinha(jogos[i], contador);
		}
	}
}

function numero(){
	limpaTabela();

	var numero = document.getElementById("numeroJogo").value;
	
	escreveLinha(jogos[numero - 1], numero);
}

function vitorias(){
	limpaTabela();

	var contador = 0;
	
	for(var i = 0; i < jogos.length; i++){
		if(jogos[i][2] > jogos[i][3]){
			contador += 1;
			escreveLinha(jogos[i], contador);
		}
	}
}

function empates(){
	limpaTabela();

	var contador = 0;
	
	for(var i = 0; i < jogos.length; i++){
		if(jogos[i][2] == jogos[i][3]){
			contador += 1;
			escreveLinha(jogos[i], contador);
		}
	}
}

function derrotas(){
	limpaTabela();

	var contador = 0;

	for(var i = 0; i < jogos.length; i++){
		if(jogos[i][2] < jogos[i][3]){
			contador += 1;
			escreveLinha(jogos[i], contador);
		}
	}
}

function escreveLinha(jogo, numero){
	// setando o mandante e o visitante
	var mandante;
	var visitante;

	if(jogo[0] == true){
		mandante = "Botafogo";
		visitante = jogo[1];
	} else {
		mandante = jogo[1];
		visitante = "Botafogo";
	}

	// Pegando a tabela
	var tabela = document.getElementById("jogos");
	var qtdLinhas = tabela.rows.length;

	// Célula com autores dos gols e técnico no meio 
	var linha3 = tabela.insertRow(qtdLinhas);
	linha3.id = "linha3";

	var cellAutorMandante = linha3.insertCell(0);
	cellAutorMandante.style.fontFamily = "Arial";
	cellAutorMandante.style.fontWeight = "bold";
	cellAutorMandante.style.backgroundColor = getColorFundo(mandante);
	cellAutorMandante.style.color = getColorLetra(mandante);
	cellAutorMandante.style.border = "1px solid white";
	if(jogo[0] == true){
		cellAutorMandante.innerHTML = jogo[8];
	} else {
		cellAutorMandante.innerHTML = jogo[9];
	}

	var cellTecnico = linha3.insertCell(1);
	cellTecnico.style.fontFamily = "Arial";
	cellTecnico.style.fontWeight = "bold";
	cellTecnico.style.background = "linear-gradient(90deg, " + getColorFundo(mandante) + " 49%, " + getColorFundo(visitante) + " 52%)";
	cellTecnico.style.textShadow = "0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000";
	cellTecnico.style.border = "1px solid white";
	cellTecnico.innerHTML = "Técnico: " + jogo[7];

	var cellAutorVisitante = linha3.insertCell(2);
	cellAutorVisitante.style.fontFamily = "Arial";
	cellAutorVisitante.style.fontWeight = "bold";
	cellAutorVisitante.style.backgroundColor = getColorFundo(visitante);
	cellAutorVisitante.style.color = getColorLetra(visitante);
	cellAutorVisitante.style.border = "1px solid white";
	if(jogo[0] == true){
		cellAutorVisitante.innerHTML = jogo[9];
	} else {
		cellAutorVisitante.innerHTML = jogo[8];
	}

	// Célula com times, escudos e placar
	var linha2 = tabela.insertRow(qtdLinhas);
	linha2.id = "linha2";

	var cellMandante = linha2.insertCell(0);
	cellMandante.id = "mandante" + numero;
	cellMandante.style.fontFamily = "Arial";
	cellMandante.style.fontWeight = "bold";
	cellMandante.style.backgroundColor = getColorFundo(mandante);
	cellMandante.style.color = getColorLetra(mandante);
	cellMandante.style.border = "1px solid white";
	cellMandante.innerHTML = "<img src=index_files/" + getEscudoName(mandante) + ".png width=70 height=70 alt=Imagem><br>" + mandante;

	var cellPlacar = linha2.insertCell(1);
	cellPlacar.id = "placar";
	cellPlacar.style.fontFamily = "Arial";
	cellPlacar.style.fontWeight = "bold";
	cellPlacar.style.fontSize = "300%";
	cellPlacar.style.whiteSpace = "nowrap";
	cellPlacar.style.background = "linear-gradient(90deg, " + getColorFundo(mandante) + " 49%, " + getColorFundo(visitante) + " 52%)";
	cellPlacar.style.textShadow = "0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000";
	cellPlacar.style.border = "1px solid white";
	if(jogo[0] == true){
		cellPlacar.innerHTML = jogo[2] + " x " + jogo[3];
	} else {
		cellPlacar.innerHTML = jogo[3] + " x " + jogo[2];
	}

	var cellVisitante = linha2.insertCell(2);
	cellVisitante.id = "visitante" + numero;
	cellVisitante.style.fontFamily = "Arial";
	cellVisitante.style.fontWeight = "bold";
	cellVisitante.style.backgroundColor = getColorFundo(visitante);
	cellVisitante.style.color = getColorLetra(visitante);
	cellVisitante.style.border = "1px solid white";
	cellVisitante.innerHTML = "<img src=index_files/" + getEscudoName(visitante) + ".png width=70 height=70 alt=Imagem><br>" + visitante;

	// Célula com o número e informações
	var linha1 = tabela.insertRow(qtdLinhas);
	linha1.id = "linha1";

	var cellNumero = linha1.insertCell(0);
	cellNumero.rowSpan = 3;
	cellNumero.style.fontFamily = "Arial";
	cellNumero.style.fontWeight = "bold";
	cellNumero.style.backgroundColor = getColorFundo(mandante);
	cellNumero.style.color = getColorLetra(mandante);
	cellNumero.style.border = "1px solid white";
	cellNumero.innerHTML = numero; // Número do jogo

	var cellCabecalho = linha1.insertCell(1);
	cellCabecalho.colSpan = 3;
	cellCabecalho.style.fontFamily = "Arial";
	cellCabecalho.style.fontWeight = "bold";
	cellCabecalho.style.background = "linear-gradient(90deg, " + getColorFundo(mandante) + " 49%, " + getColorFundo(visitante) + " 50%)";
	cellCabecalho.style.textShadow = "0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000";
	cellCabecalho.style.border = "1px solid white";
	cellCabecalho.innerHTML = converteData(jogo[5]) + " | " + "Estádio " + jogo[6] + " | " + jogo[4]; // Cabeçalho
}

function getColorFundo(time){
	switch (time) {
		case "América-MG":
		return "#048439";
		break;
		case "Americano":
		return "white";
		break;
		case "Athletico-PR":
		return "#c8060f";
		break;
		case "Atlético Nacional-COL":
		return "#048439";
		break;
		case "Atlético-GO":
		return "#ff0e00";
		break
		case "Atlético-MG":
		return "black";
		break;
		case "Atlético-PR":
		return "#ff0e00";
		break;
		case "Audax Italiano-CHI":
		return "green";
		break;
		case "Avaí":
		return "#00679a";
		break;
		case "Bahia":
		return "#0188d6";
		break;
		case "Bangu":
		return "#ff0e00";
		break;
		case "Barcelona de Guayaquil-EQU":
		return "#fde900";
		break;
		case "Boa Esporte":
		return "#ff0e00";
		break;
		case "Boavista":
		return "#00913c";
		break;
		case "Boca Juniors":
		return "#00458a";
		break;
		case "Bonsucesso":
		return "#1c4196";
		break;
		case "Botafogo":
		return "black";
		break;
		case "Bragantino":
		return "white";
		break;
		case "Cabofriense":
		return "#0b9c54";
		break;
		case "Ceará":
		return "black";
		break;
		case "Chapecoense":
		return "#00913c";
		break;
		case "Colo-Colo-CHI":
		return "white";
		break;
		case "Corinthians":
		return "black";
		break;
		case "Coritiba":
		return "#00544d";
		break;
		case "CRB":
		return "#ff0e00";
		break;
		case "Criciúma":
		return "#fdd116";
		break;
		case "Cruzeiro":
		return "#075798";
		break;
		case "CSA":
		return "#075798";
		break;
		case "Cuiabá":
		return "#fde900";
		break;
		case "Defensa y Justicia-ARG":
		return "#fde900";
		break;
		case "Deportivo Quito-EQU":
		return "#073756";
		break;
		case "Figueirense":
		return "black";
		break;
		case "Flamengo":
		return "#ff0e00";
		break;
		case "Fluminense":
		return "#9f022f";
		break;
		case "Fortaleza":
		return "#11519b";
		break;
		case "Goiás":
		return "#048439";
		break;
		case "Goiás2019":
		return "#006959";
		break;
		case "Grêmio":
		return "#0d80bf";
		break;
		case "Guarani":
		return "#048439";
		break;
		case "Independiente":
		return "#e2001a";
		break;
		case "Independiente Del Valle-EQU":
		return "#fb37b9";
		break;
		case "Internacional":
		return "#ff0e00";
		break;
		case "Juventude":
		return "#048439";
		break;
		case "Juventus":
		return "#6a023c";
		break;
		case "Macaé":
		return "#41afeb";
		break;
		case "Madureira":
		return "#fde900";
		break;
		case "Mogi Mirim":
		return "#ff0e00";
		break;
		case "Nacional-PAR":
		return "#163fb3";
		break;
		case "Nacional-URU":
		return "#172b8c";
		break;
		case "Náutico":
		return "#ff0e00";
		break;
		case "Nova Iguaçu":
		return "#ea8415";
		break;
		case "Olimpia-PAR":
		return "white";
		break;
		case "Palmeiras":
		return "#048439";
		break;
		case "Paraná":
		return "#2939b4";
		break;
		case "Paysandu":
		return "#0091cf";
		break;
		case "Ponte Preta":
		return "white";
		break;
		case "Portuguesa":
		return "red";
		break;
		case "Portuguesa-RJ":
		return "#048439";
		break;
		case "Red Bull Bragantino":
		return "#001c44";
		break;
		case "Resende":
		return "white";
		break;
		case "River Plate":
		return "white";
		break;
		case "Santa Cruz":
		return "white";
		break;
		case "Santos":
		return "white";
		break;
		case "São Bernardo":
		return "#ffdd00";
		break;
		case "São Caetano":
		return "#212568";
		break;
		case "São Paulo":
		return "#ff0e00";
		break;
		case "Sol de America-PAR":
		return "#075798";
		break;
		case "Sport":
		return "#d30a11";
		break;
		case "Vasco":
		return "white";
		break;
		case "Vitória":
		return "#ff0e00";
		break;
		case "Volta Redonda":
		return "#fde900";
		break;
	}
}

function getColorLetra(time){
	switch(time){
		case "América-MG":
		return "white";
		break;
		case "Americano":
		return "black";
		break;
		case "Athletico-PR":
		return "black";
		break;
		case "Atlético Nacional-COL":
		return "white";
		break;
		case "Atlético-GO":
		return "black";
		break;
		case "Atlético-MG":
		return "white";
		break;
		case "Atlético-PR":
		return "black";
		break;
		case "Audax Italiano-CHI":
		return "white";
		break;
		case "Avaí":
		return "white";
		break;
		case "Bahia":
		return "white";
		break;
		case "Bangu":
		return "white";
		break;
		case "Barcelona de Guayaquil-EQU":
		return "#055daa";
		break;
		case "Boa Esporte":
		return "white";
		break;
		case "Boavista":
		return "white";
		break;
		case "Boca Juniors":
		return "#fcb000";
		break;
		case "Bonsucesso":
		return "white";
		break;
		case "Bragantino":
		return "black";
		break;
		case "Cabofriense":
		return "white";
		break;
		case "Ceará":
		return "white";
		break;
		case "Chapecoense":
		return "white";
		break;
		case "Colo-Colo-CHI":
		return "black";
		break;
		case "Corinthians":
		return "white";
		break;
		case "Coritiba":
		return "white";
		break;
		case "CRB":
		return "#white";
		break;
		case "Criciúma":
		return "black";
		break;
		case "Cruzeiro":
		return "white";
		break;
		case "CSA":
		return "white";
		break;
		case "Cuiabá":
		return "#018036";
		break;
		case "Defensa y Justicia-ARG":
		return "#018036";
		break;
		case "Deportivo Quito-EQU":
		return "white";
		break;
		case "Figueirense":
		return "white";
		break;
		case "Flamengo":
		return "black";
		break;
		case "Fluminense":
		return "white";
		break;
		case "Fortaleza":
		return "white";
		break;
		case "Goiás":
		return "white";
		break;
		case "Grêmio":
		return "white";
		break;
		case "Guarani":
		return "white";
		break;
		case "Independiente":
		return "white";
		break;
		case "Independiente Del Valle-EQU":
		return "white";
		break;
		case "Internacional":
		return "white";
		break;
		case "Juventude":
		return "white";
		break;
		case "Juventus":
		return "white";
		break;
		case "Macaé":
		return "white";
		break;
		case "Madureira":
		return "#13007c";
		break;
		case "Mogi Mirim":
		return "white";
		break;
		case "Nacional-PAR":
		return "white";
		break;
		case "Nacional-URU":
		return "white";
		break;
		case "Náutico":
		return "white";
		break;
		case "Nova Iguaçu":
		return "black";
		break;
		case "Olimpia-PAR":
		return "black";
		break;
		case "Palmeiras":
		return "white";
		break;
		case "Paraná":
		return "white";
		break;       
		case "Paysandu":
		return "white";
		break;
		case "Ponte Preta":
		return "black";
		break;
		case "Portuguesa":
		return "white";
		break;
		case "Portuguesa-RJ":
		return "white";
		break;
		case "Red Bull Bragantino":
		return "white";
		break;
		case "Resende":
		return "black";
		break;
		case "River Plate":
		return "red";
		break;
		case "Santa Cruz":
		return "red";
		break;
		case "Santos":
		return "black";
		break;
		case "São Caetano":
		return "white";
		break;
		case "São Paulo":
		return "white";
		break;
		case "Sol de America-PAR":
		return "white";
		break;
		case "Sport":
		return "black";
		break;
		case "Vasco":
		return "red";
		break;
		case "Vitória":
		return "black";
		break;
		case "Volta Redonda":
		return "black";
		break;
	}
}

function converteData(data){
	var array = data.split("-");
	var novaData = array[2] + "/" + array[1] + "/" + array[0];

	return novaData;
}

function getEscudoName(nome){
	var cortaNome = nome.split(" ");
	var juntaNome = "";

	for(var i = 0; i < cortaNome.length; i++){
		juntaNome += cortaNome[i];
	}
	return juntaNome;
}

function getFuncaoSelect(valor){

	if(valor == "decrescente"){
		decrescente();
	}
	else if(valor == "crescente"){
		crescente();
	}
	else if(valor == "mandante"){
		mandante();
	}
	else if(valor == "visitante"){
		visitante();
	}
	else if(valor == "vitorias"){
		vitorias();
	}
	else if(valor == "empates"){
		empates();
	}
	else if(valor == "derrotas"){
		derrotas();
	}
}

// Limpa a tabela e reescreve o cabeçalho
function limpaTabela(){
	$("tr").remove(); 

	var tabela = document.getElementById("jogos");
	var linha = tabela.insertRow(0);
	tabela.width = "100%";
	linha.width = "100%";
	tabela.style.fontWeight = "bold";

	// Célula número
	var cellNumero = linha.insertCell(0);
	cellNumero.innerHTML = "Número";
	cellNumero.style.border = "1px solid white";

	// Célula mandante
	var cellMandante = linha.insertCell(1);
	cellMandante.width = "40%";
	cellMandante.innerHTML = "Mandante";
	cellMandante.style.border = "1px solid white";

	// Célula placar
	var cellPlacar = linha.insertCell(2);
	cellPlacar.width = "20%";
	cellPlacar.innerHTML = "Placar";
	cellPlacar.style.border = "1px solid white";

	// Célula visitante
	var cellVisitante = linha.insertCell(3);
	cellVisitante.width = "40%%";
	cellVisitante.innerHTML = "Visitante";
	cellVisitante.style.border = "1px solid white";
}