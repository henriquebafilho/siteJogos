var jogos = [];

var jogo1 = [true, "Flamengo", 5, 0, "2020-08-31", "Nilton Santos", "Série A", "Paulo Autuori", "Honda (5x)", "um otário aí"];
var jogo2 = [false, "Santos", 3, 4, "2019-08-31", "Nilton Santos", "Série A", "Paulo Autuori", "Honda (5x)", ""];
var jogo3 = [true, "Flamengo", 2, 2, "2050-08-31", "Nilton Santos", "Série A", "Paulo Autuori", "Honda (5x)", ""];
var jogo4 = [false, "Flamengo", 2, 1, "2050-08-31", "Nilton Santos", "Série A", "Paulo Autuori", "Honda (5x)", ""];

jogos.push(jogo1);
jogos.push(jogo2);
jogos.push(jogo3);
jogos.push(jogo4);

function crescente(){
	for(var i = 0; i < jogos.length; i++){
		escreveLinha(jogos[i]);
	}
}

function decrescente(){
	for(var i = jogos.length - 1; i >= 0; i--){
		escreveLinha(jogos[i]);
	}
}

function mandante(){
	for(var i = jogos.length - 1; i >= 0; i--){
		if(jogos[i][0] == true){
			escreveLinha(jogos[i]);
		}
	}	
}

function visitante(){
	for(var i = jogos.length - 1; i >= 0; i--){
		if(jogos[i][0] == false){
			escreveLinha(jogos[i]);
		}
	}
}

function adversario(){
	var adversario = document.getElementById('selectAdversario').value;

	console.log(adversario);

	for(var i = 0; i < jogos.length; i++){
		if(adversario == jogos[i][1]){
			escreveLinha(jogos[i]);
		}
	}
}

function campeonato(){
	var campeonato = document.getElementById('selectCampeonato').value;

	console.log(campeonato);

	for(var i = 0; i < jogos.length; i++){
		if(campeonato == jogos[i][6]){
			escreveLinha(jogos[i]);
		}
	}
}

function estadio(){
	var estadio = document.getElementById('selectEstadio').value;

	console.log(estadio);

	for(var i = 0; i < jogos.length; i++){
		if(estadio == jogos[i][5]){
			escreveLinha(jogos[i]);
		}
	}
}

function tecnico(){
	var tecnico = document.getElementById('selectTecnico').value;

	console.log(tecnico);

	for(var i = 0; i < jogos.length; i++){
		if(tecnico == jogos[i][7]){
			escreveLinha(jogos[i]);
		}
	}
}

function escolheData(){
	var data = document.getElementById('dataJogo').value;

	for(var i = 0; i < jogos.length; i++){
		if(data == jogos[i][4]){
			escreveLinha(jogos[i]);
		}
	}
}

function ano(){
	var ano = document.getElementById('anoJogo').value;

	for(var i = 0; i < jogos.length; i++){
		var dataCortada = jogos[i][4].split("-")

		if(dataCortada[0] == ano.toString()){
			escreveLinha(jogos[i]);
		}
	}
}

function numero(){
	var numero = document.getElementById('numeroJogo').value;
	
	escreveLinha(jogos[numero - 1]);
}

function vitorias(){
	for(var i = 0; i < jogos.length; i++){
		if(jogos[i][2] > jogos[i][3]){
			escreveLinha(jogos[i]);
		}
	}
}

function empates(){
	for(var i = 0; i < jogos.length; i++){
		if(jogos[i][2] == jogos[i][3]){
			escreveLinha(jogos[i]);
		}
	}
}

function derrotas(){
	for(var i = 0; i < jogos.length; i++){
		if(jogos[i][2] < jogos[i][3]){
			escreveLinha(jogos[i]);
		}
	}
}

function escreveLinha(jogo){
	var tabela = document.getElementById('jogos');
	var qtdLinhas = tabela.rows.length;

	// Célula com autores dos gols e técnico no meio 
	var linha3 = tabela.insertRow(qtdLinhas);

	var cellAutorBotafogo = linha3.insertCell(0);
	cellAutorBotafogo.innerHTML = jogo[8];

	var cellTecnico = linha3.insertCell(1);
	cellTecnico.innerHTML = jogo[7];

	var cellAutorAdversario = linha3.insertCell(2);
	cellAutorBotafogo.innerHTML = jogo[8];

	// Célula com times e placar
	var linha2 = tabela.insertRow(qtdLinhas);

	var cellBotafogo = linha2.insertCell(0);
	cellBotafogo.innerHTML = "Botafogo"; // Adicionar escudo aqui

	var cellPlacar = linha2.insertCell(1);
	cellPlacar.innerHTML = jogo[2] + " x " + jogo[3];

	var cellAdversario = linha2.insertCell(2);
	cellAdversario.innerHTML = jogo[1]; // Adicionar escudo aqui

	// Célula com o número e informações
	var linha1 = tabela.insertRow(qtdLinhas);

	var cellNumero = linha1.insertCell(0);
	cellNumero.rowSpan = 3;
	cellNumero.innerHTML = 1; // Número do jogo

	var cellCabecalho = linha1.insertCell(1);
	cellCabecalho.colSpan = 3;
	cellCabecalho.innerHTML = jogo[4] + " | " + jogo[5] + " | " + jogo[6]; // Cabeçalho

	/*
	// checa se o time é mandante ou não
	if(jogo[0] == true){
		// ESCREVE LINHA MANDANTE
	} else {
		// ESCREVE LINHA VISITANTE
	}
	*/
	console.log(jogo);
}
