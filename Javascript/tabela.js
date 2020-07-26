var jogos = [];

var jogo1 = [true, "Flamengo", 5, 0, "2020-08-31", "Nilton Santos", "Carioca", "Paulo Autuori", "Honda (5x)", "um otário aí"];
var jogo2 = [false, "Santos", 3, 4, "2019-08-31", "Vila Belmiro", "Série A", "Paulo Autuori", "Kalou", "um otário aí"];
var jogo3 = [true, "Flamengo", 2, 2, "2050-08-31", "Nilton Santos", "Carioca", "Paulo Autuori", "Bruno Nazário", "um otário aí"];
var jogo4 = [false, "Flamengo", 2, 1, "2050-08-31", "Maracanã", "Série A", "Paulo Autuori", "Luis Henrique", "um otário aí"];

jogos.push(jogo1);
jogos.push(jogo2);
jogos.push(jogo3);
jogos.push(jogo4);

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
	var tabela = document.getElementById('jogos');
	var qtdLinhas = tabela.rows.length;

	// Célula com autores dos gols e técnico no meio 
	var linha3 = tabela.insertRow(qtdLinhas);
	linha3.id = "koe";

	var cellAutorBotafogo = linha3.insertCell(0);
	cellAutorBotafogo.innerHTML = jogo[8];

	var cellTecnico = linha3.insertCell(1);
	cellTecnico.innerHTML = jogo[7];

	var cellAutorAdversario = linha3.insertCell(2);
	cellAutorAdversario.innerHTML = jogo[9];

	// Célula com times e placar
	var linha2 = tabela.insertRow(qtdLinhas);
	linha2.id = "koe";

	var cellBotafogo = linha2.insertCell(0);
	cellBotafogo.innerHTML = "Botafogo"; // Adicionar escudo aqui

	var cellPlacar = linha2.insertCell(1);
	cellPlacar.innerHTML = jogo[2] + " x " + jogo[3];

	var cellAdversario = linha2.insertCell(2);
	cellAdversario.innerHTML = jogo[1]; // Adicionar escudo aqui

	// Célula com o número e informações
	var linha1 = tabela.insertRow(qtdLinhas);
	linha1.id = "koe";

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

function limpaTabela(){
	$("tr").remove(); 
}