var jogos = [];

var jogo1 = [true, "Fluminense", 2, 3, "2002-10-26", "Maracanã", "Série A", "Ivo Wortmann", ["Galeano", "Léo Inácio"], ["César", "Magno Alves", "Romário"]];
var jogo2 = [true, "Flamengo", 1, 0, "2004-03-14", "Maracanã", "Carioca", "Levir Culpi", ["Alex Alves"], []];
var jogo3 = [true, "Atlético-PR", 1, 1, "2004-08-12", "Caio Martins", "Série A", "Mauro Galvão", ["Schwenck"], ["Washington"]];
var jogo4 = [true, "Criciúma", 1, 1, "2004-08-28", "Caio Martins", "Série A", "Paulo Bonamigo", ["Schwenck"], ["Fernandinho"]];
var jogo5 = [false, "Fluminense", 4, 1, "2004-10-02", "Maracanã", "Série A", "Paulo Bonamigo", ["Almir","Ruy","Ricardinho","Têti"], ["Edmundo"]];

jogos.push(jogo1);
jogos.push(jogo2);
jogos.push(jogo3);
jogos.push(jogo4);
jogos.push(jogo5);

function crescente(){
	limpaTabela();

	for(var i = 0; i < jogos.length; i++){
		escreveLinha(jogos[i], i + 1);
	}
}

function decrescente(){
	limpaTabela();

	for(var i = jogos.length - 1; i >= 0; i--){
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
	limpaTabela();

	var adversario = document.getElementById('selectAdversario').value;
	var contador = 0;

	for(var i = 0; i < jogos.length; i++){
		if(adversario == jogos[i][1]){
			contador += 1;
			escreveLinha(jogos[i], contador);
		}
	}
}

function campeonato(){
	limpaTabela();

	var campeonato = document.getElementById('selectCampeonato').value;
	var contador = 0;

	for(var i = 0; i < jogos.length; i++){
		if(campeonato == jogos[i][6]){
			contador += 1;
			escreveLinha(jogos[i], contador);
		}
	}
}

function estadio(){
	limpaTabela();

	var estadio = document.getElementById('selectEstadio').value;
	var contador = 0;

	for(var i = 0; i < jogos.length; i++){
		if(estadio == jogos[i][5]){
			contador += 1;
			escreveLinha(jogos[i], contador);
		}
	}
}

function tecnico(){
	limpaTabela();

	var tecnico = document.getElementById('selectTecnico').value;
	var contador = 0;

	for(var i = 0; i < jogos.length; i++){
		if(tecnico == jogos[i][7]){
			contador += 1;
			escreveLinha(jogos[i], contador);
		}
	}
}

function escolheData(){
	limpaTabela();

	var data = document.getElementById('dataJogo').value;
	var contador = 0;

	for(var i = 0; i < jogos.length; i++){
		if(data == jogos[i][4]){
			contador += 1;
			escreveLinha(jogos[i], contador);
		}
	}
}

function ano(){
	limpaTabela();

	var ano = document.getElementById('anoJogo').value;
	var contador = 0;

	for(var i = 0; i < jogos.length; i++){
		var dataCortada = jogos[i][4].split("-")

		if(dataCortada[0] == ano.toString()){
			contador += 1;
			escreveLinha(jogos[i], contador);
		}
	}
}

function numero(){
	limpaTabela();

	var numero = document.getElementById('numeroJogo').value;
	
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
	var tabela = document.getElementById('jogos');
	var qtdLinhas = tabela.rows.length;

	// Célula com autores dos gols e técnico no meio 
	var linha3 = tabela.insertRow(qtdLinhas);
	linha3.id = "linha3";

	var cellAutorMandante = linha3.insertCell(0);
	cellAutorMandante.style.backgroundColor = getColor(mandante);
	if(jogo[0] == true){
		cellAutorMandante.innerHTML = jogo[8];
	} else {
		cellAutorMandante.innerHTML = jogo[9];
	}

	var cellTecnico = linha3.insertCell(1);
	cellTecnico.style.background = "linear-gradient(90deg, " + getColor(mandante) + " 49%, " + getColor(visitante) + " 52%)";
	cellTecnico.innerHTML = "Técnico: " + jogo[7];

	var cellAutorVisitante = linha3.insertCell(2);
	cellAutorVisitante.style.backgroundColor = getColor(visitante);
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
	cellMandante.style.backgroundColor = getColor(mandante);
	var img = document.createElement("img");
	img.src = "index_files/" + mandante + ".png";
	img.width = 70;
	img.height = 70;
	document.getElementById("mandante" + numero).appendChild(img);

	var cellPlacar = linha2.insertCell(1);
	cellPlacar.id = "placar";
	cellPlacar.style.background = "linear-gradient(90deg, " + getColor(mandante) + " 49%, " + getColor(visitante) + " 52%)";
	if(jogo[0] == true){
		cellPlacar.innerHTML = jogo[2] + " x " + jogo[3];
	} else {
		cellPlacar.innerHTML = jogo[3] + " x " + jogo[2];
	}

	var cellVisitante = linha2.insertCell(2);
	cellVisitante.id = "visitante" + numero;
	cellVisitante.style.backgroundColor = getColor(visitante);
	var img = document.createElement("img");
	img.src = "index_files/" + visitante + ".png";
	img.width = 70;
	img.height = 70;
	document.getElementById("visitante" + numero).appendChild(img);

	// Célula com o número e informações
	var linha1 = tabela.insertRow(qtdLinhas);
	linha1.id = "linha1";

	var cellNumero = linha1.insertCell(0);
	cellNumero.rowSpan = 3;
	cellNumero.style.backgroundColor = getColor(mandante);
	cellNumero.innerHTML = numero; // Número do jogo

	var cellCabecalho = linha1.insertCell(1);
	cellCabecalho.colSpan = 3;
	cellCabecalho.style.background = "linear-gradient(90deg, " + getColor(mandante) + " 49%, " + getColor(visitante) + " 52%)";
	cellCabecalho.innerHTML = converteData(jogo[4]) + " | " + "Estádio " + jogo[5] + " | " + jogo[6]; // Cabeçalho

	console.log(jogo);
}

function getColor(time){
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

function converteData(data){
	var array = data.split("-");
	var novaData = array[2] + "/" + array[1] + "/" + array[0];

	return novaData;
}

// Limpa a tabela e reescreve o cabeçalho
function limpaTabela(){
	$("tr").remove(); 

	var tabela = document.getElementById('jogos');
	var linha = tabela.insertRow(0);

	// Célula número
	var cellNumero = linha.insertCell(0);
	cellNumero.innerHTML = "Número";

	// Célula mandante
	var cellMandante = linha.insertCell(1);
	cellMandante.width = "40%";
	cellMandante.innerHTML = "Mandante";

	// Célula placar
	var cellPlacar = linha.insertCell(2);
	cellPlacar.width = "20%";
	cellPlacar.innerHTML = "Placar";

	// Célula visitante
	var cellVisitante = linha.insertCell(3);
	cellVisitante.width = "40%";
	cellVisitante.innerHTML = "Visitante";
}