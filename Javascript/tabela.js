var jogos = [];

var jogo1 = [true, "Flamengo", 5, 0, "2020-08-31", "nilton santos", "série a", "paulo autuori", "Honda (5x)", ""];
var jogo2 = [false, "Santos", 3, 4, "2019-08-31", "nilton santos", "série a", "paulo autuori", "Honda (5x)", ""];
var jogo3 = [true, "Flamengo", 2, 2, "2050-08-31", "nilton santos", "série a", "paulo autuori", "Honda (5x)", ""];
var jogo4 = [false, "Flamengo", 2, 1, "2050-08-31", "nilton santos", "série a", "paulo autuori", "Honda (5x)", ""];

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
	// checa se o time é mandante ou não
	if(jogo[0] == true){
		// ESCREVE LINHA MANDANTE
	} else {
		// ESCREVE LINHA VISITANTE
	}
	console.log(jogo);
}
