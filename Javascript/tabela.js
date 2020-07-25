var jogos = [];

var jogo1 = [true, "Flamengo", 5, 0, "2020-08-31", "nilton santos", "série a", "paulo autuori", "Honda (5x)", ""];
var jogo2 = [false, "Santos", 5, 0, "2019-08-31", "nilton santos", "série a", "paulo autuori", "Honda (5x)", ""];
var jogo3 = [true, "Flamengo", 5, 0, "2050-08-31", "nilton santos", "série a", "paulo autuori", "Honda (5x)", ""];
var jogo4 = [false, "Flamengo", 5, 0, "2050-08-31", "nilton santos", "série a", "paulo autuori", "Honda (5x)", ""];

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

function adversario(){
	var adversario = document.getElementById('adversarioJogo').value;

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

function escreveLinha(jogo){
	// checa se o time é mandante ou não
	if(jogo[0] == true){
		console.log("escreve linha MANDANTE");
	} else {
		console.log("escreve linha VISITANTE");
	}
}
