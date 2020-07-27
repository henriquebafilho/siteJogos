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
	if(jogo[0] == true){
		cellAutorMandante.innerHTML = jogo[8];
	} else {
		cellAutorMandante.innerHTML = jogo[9];
	}

	var cellTecnico = linha3.insertCell(1);
	cellTecnico.innerHTML = "Técnico: " + jogo[7];

	var cellAutorVisitante = linha3.insertCell(2);
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
	var img = document.createElement("img");
	img.src = "index_files/" + mandante + ".png";
	img.width = 70;
	img.height = 70;
	document.getElementById("mandante" + numero).appendChild(img);

	var cellPlacar = linha2.insertCell(1);
	cellPlacar.id = "placar";
	if(jogo[0] == true){
		cellPlacar.innerHTML = jogo[2] + " x " + jogo[3];
	} else {
		cellPlacar.innerHTML = jogo[3] + " x " + jogo[2];
	}

	var cellVisitante = linha2.insertCell(2);
	cellVisitante.id = "visitante" + numero;
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
	cellNumero.innerHTML = numero; // Número do jogo

	var cellCabecalho = linha1.insertCell(1);
	cellCabecalho.colSpan = 3;
	cellCabecalho.innerHTML = converteData(jogo[4]) + " | " + "Estádio " + jogo[5] + " | " + jogo[6]; // Cabeçalho

	console.log(jogo);
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