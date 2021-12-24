window.onload = function () {
	time = "Botafogo";
	var nomeUsuario = "Henrique Filho";
	nomeUsuario = nomeUsuario.toUpperCase();

	ordemDecrescente = true;
	document.getElementById("ordemBotao").value = "↓ Ordem Decrescente";
	selecionados = [];

	// Title da página
	document.title = "Jogos do " + time + " que fui";

	// Ícone da página
	var linkIcon = document.createElement("link");
	linkIcon.rel = "shortcut icon";
	linkIcon.href = "index_files/" + time.replace(/ /g, '') + ".png";
	linkIcon.type = "image/x-icon";
	document.head.appendChild(linkIcon);

	// Cabeçalho com nome
	var h1Cabecalho = document.createElement("h1");
	h1Cabecalho.style.whiteSpace = "nowrap";
	h1Cabecalho.style.width = "100%";
	h1Cabecalho.style.color = coresTimes(time)[1];
	h1Cabecalho.id = "titulo";
	var escudoTime1 = document.createElement("img");
	escudoTime1.src = "index_files/" + time.replace(/ /g, '') + ".png";
	escudoTime1.width = 60;
	escudoTime1.height = 60;
	escudoTime1.alt = "Escudo do Time";
	var nomeUsuarioP = document.createTextNode(" " + nomeUsuario + " ");
	var escudoTime2 = document.createElement("img");
	escudoTime2.src = "index_files/" + time.replace(/ /g, '') + ".png";
	escudoTime2.width = 60;
	escudoTime2.height = 60;
	escudoTime2.alt = "Escudo do Time";
	h1Cabecalho.appendChild(escudoTime1);
	h1Cabecalho.appendChild(nomeUsuarioP);
	h1Cabecalho.appendChild(escudoTime2);
	document.getElementById("idTitulo").appendChild(h1Cabecalho);
	document.getElementById("titulo").addEventListener("click", todos);
	document.getElementById("titulo").addEventListener("click", function () {
		document.getElementById("cabecalho").value = 'todos';
		$('#pai').children('div').hide();
		todos();
	});

	// Trocando cores do fundo e das letras
	document.body.style.backgroundColor = coresTimes(time)[0];
	document.body.style.color = coresTimes(time)[1];
	document.getElementById("jogos").style.backgroundColor = coresTimes(time)[0];

	todos();
};

function escolheOrdem(valor) {
	valor = valor == "" ? "todos" : valor;
	if (ordemDecrescente) {
		ordemDecrescente = false;
		document.getElementById("ordemBotao").value = "↑ Ordem Crescente";
	} else {
		ordemDecrescente = true;
		document.getElementById("ordemBotao").value = "↓ Ordem Decrescente";
	}
	if (valor.includes("mandante")) {
		mandante();
	} else if (valor.includes("visitante")) {
		visitante();
	} else if (valor.includes("vitorias")) {
		vitorias();
	} else if (valor.includes("empates")) {
		empates();
	} else if (valor.includes("derrotas")) {
		derrotas();
	} else if (valor.includes("outros")) {
		outrosJogos();
	} else if (valor.includes("todos")) {
		todos();
	} else if (valor.includes("campeao")) {
		campeao();
	} else if (valor.includes("adversario")) {
		adversario();
	} else if (valor.includes("campeonato")) {
		campeonato();
	} else if (valor.includes("ano")) {
		ano();
	} else if (valor.includes("estadio")) {
		estadio();
	} else if (valor.includes("tecnico")) {
		tecnico();
	} else if (valor.includes("data")) {
		escolheData();
	}else {
		todos();
	}
}

function todos() {
	limpaTabela();

	var contador = jogos.length;
	selecionados = [];

	for (var i = 0; i < contador; i++) {
		selecionados.push(jogos[i]);
	}

	escreveLinhaOrdem(selecionados, ordemDecrescente, 'todos');
}

function mandante() {
	limpaTabela();

	var contador = jogos.length;
	selecionados = [];

	for (var i = 0; i < contador; i++) {
		if (jogos[i][0] == time) {
			selecionados.push(jogos[i]);
		}
	}

	escreveLinhaOrdem(selecionados, ordemDecrescente, 'mandante');
}

function visitante() {
	limpaTabela();

	var contador = jogos.length;
	selecionados = [];

	for (var i = 0; i < contador; i++) {
		if (jogos[i][0] != time) {
			selecionados.push(jogos[i]);
		}
	}

	escreveLinhaOrdem(selecionados, ordemDecrescente, 'visitante');
}

function campeao() {
	limpaTabela();

	var contador = jogos.length;
	selecionados = [];

	for (var i = 0; i < contador; i++) {
		if (jogos[i][11]) {
			selecionados.push(jogos[i]);
		}
	}

	escreveLinhaOrdem(selecionados, ordemDecrescente, 'campeao');
}

function adversario() {
	var adversario = document.getElementById("selectadversario").value;

	if (adversario != "") {
		limpaTabela();

		var contador = jogos.length;
		selecionados = [];

		for (var i = 0; i < contador; i++) {
			if (adversario == "Atlético-PR" || adversario == "Athletico-PR") {
				if (jogos[i][0] == "Atlético-PR"
					|| jogos[i][0] == "Athletico-PR"
					|| jogos[i][1] == "Atlético-PR"
					|| jogos[i][1] == "Athletico-PR") {
					selecionados.push(jogos[i]);
				}
			} else if (adversario == "Bragantino" || adversario == "Red Bull Bragantino") {
				if (jogos[i][0] == "Bragantino"
					|| jogos[i][0] == "Red Bull Bragantino"
					|| jogos[i][1] == "Bragantino"
					|| jogos[i][1] == "Red Bull Bragantino") {
					selecionados.push(jogos[i]);
				}
			} else if (adversario == jogos[i][0] || adversario == jogos[i][1]) {
				selecionados.push(jogos[i]);
			}
		}

		escreveLinhaOrdem(selecionados, ordemDecrescente, 'adversario');
	}
}

function campeonato() {
	var campeonato = document.getElementById("selectcampeonato").value;

	if (campeonato != "") {
		limpaTabela();

		var contador = jogos.length;
		selecionados = [];

		for (var i = 0; i < contador; i++) {
			if (campeonato == "Carioca") {
				if (jogos[i][4].includes("Taça Rio")
					|| jogos[i][4].includes("Taça Guanabara")
					|| jogos[i][4].includes("Carioca")) {
					selecionados.push(jogos[i]);
				}
			} else if (campeonato == jogos[i][4]) {
				selecionados.push(jogos[i]);
			}
		}

		escreveLinhaOrdem(selecionados, ordemDecrescente, 'campeonato');
	}
}


function estadio() {
	var estadio = document.getElementById("selectestadio").value;

	if (estadio != "") {
		limpaTabela();

		var contador = jogos.length;
		selecionados = [];

		for (var i = 0; i < contador; i++) {
			if (estadio == jogos[i][6]) {
				selecionados.push(jogos[i]);
			}
		}

		escreveLinhaOrdem(selecionados, ordemDecrescente, 'estadio');
	}
}

function tecnico() {
	var tecnico = document.getElementById("selecttecnico").value;

	if (tecnico != "") {
		limpaTabela();

		var contador = jogos.length;
		selecionados = [];

		for (var i = 0; i < contador; i++) {
			if (tecnico == jogos[i][7]) {
				selecionados.push(jogos[i]);
			}
		}

		escreveLinhaOrdem(selecionados, ordemDecrescente, 'tecnico');
	}
}

function escolheData() {
	limpaTabela();

	var data = document.getElementById("dataJogo").value;
	var achou = false;
	selecionados = [];

	for (var i = 0; i < jogos.length; i++) {
		if (data == jogos[i][5]) {
			achou = true;
			selecionados.push(jogos[i]);
		}
	}
	
	if (achou == false) {
		fail();
	} else {
		escreveLinhaOrdem(selecionados, ordemDecrescente, 'data');
	}
}

function ano() {
	var ano = document.getElementById("selectano").value;

	limpaTabela();
	if (ano != "") {
		selecionados = [];
		var ano;

		for (var i = 0; i < jogos.length; i++) {
			var dataCortada = jogos[i][5].split("-");

			if (dataCortada[0] == ano.toString()) {
				selecionados.push(jogos[i]);
			}
		}

		escreveLinhaOrdem(selecionados, ordemDecrescente, 'ano');
	}
}

function vitorias() {
	limpaTabela();

	var quantidade = 0;
	var selecionados = [];

	for (var i = 0; i < jogos.length; i++) {
		if (((jogos[i][0] == time) && (jogos[i][2] > jogos[i][3])) ||
			((jogos[i][1] == time) && (jogos[i][2] < jogos[i][3]))) {
			quantidade += 1;
			selecionados.push(jogos[i]);
		}
	}

	escreveLinhaOrdem(selecionados, ordemDecrescente, 'vitorias');
}

function empates() {
	limpaTabela();

	var quantidade = 0;
	var selecionados = [];

	for (var i = 0; i < jogos.length; i++) {
		if (jogos[i][2] == jogos[i][3]) {
			quantidade += 1;
			selecionados.push(jogos[i]);
		}
	}

	escreveLinhaOrdem(selecionados, ordemDecrescente, 'empates');
}

function derrotas() {
	limpaTabela();

	var quantidade = 0;
	var selecionados = [];

	for (var i = 0; i < jogos.length; i++) {
		if (((jogos[i][0] == time) && (jogos[i][2] < jogos[i][3])) ||
			((jogos[i][1] == time) && (jogos[i][2] > jogos[i][3]))) {
			quantidade += 1;
			selecionados.push(jogos[i]);
		}
	}

	escreveLinhaOrdem(selecionados, ordemDecrescente, 'derrotas');
}

function outrosJogos() {
	limpaTabela();

	var contador = outros.length;
	selecionados = [];

	for (var i = 0; i < contador; i++) {
		selecionados.push(outros[i]);
	}

	escreveLinhaOrdem(selecionados, ordemDecrescente, 'outros');
}

function escreveLinhaOrdem(selecionados, ordem, opcao) {
	var quantidade = selecionados.length;
	var vitorias = 0;
	var empates = 0;
	var derrotas = 0;
	var ano;

	if (ordem) {
		for (var i = quantidade - 1; i >= 0; i--) {
			try {
				ano = selecionados[i + 1][5].split("-")[0];
			} catch (error) {
				ano = 0;
			}
			escreveLinha(time, selecionados[i], i + 1, ano);
			if (!opcao.includes('outros')) {
				// Contabiliza vitória, empate ou derrota
				if (selecionados[i][2] == selecionados[i][3]) {
					empates += 1;
				} else if (selecionados[i][0] == time) {
					if (selecionados[i][2] > selecionados[i][3]) {
						vitorias += 1;
					} else {
						derrotas += 1;
					}
				} else if (selecionados[i][0] != time) {
					if (selecionados[i][2] > selecionados[i][3]) {
						derrotas += 1;
					} else {
						vitorias += 1;
					}
				}
			}
		}
	} else {
		for (var i = 0; i < quantidade; i++) {
			try {
				ano = selecionados[i - 1][5].split("-")[0];
			} catch (error) {
				ano = 0;
			}
			escreveLinha(time, selecionados[i], i + 1, ano);
			if (selecionados[i][0] == time || selecionados[i][1] == time) {
				// Contabiliza vitória, empate ou derrota
				if (selecionados[i][2] == selecionados[i][3]) {
					empates += 1;
				} else if (selecionados[i][0] == time) {
					if (selecionados[i][2] > selecionados[i][3]) {
						vitorias += 1;
					} else {
						derrotas += 1;
					}
				} else if (selecionados[i][0] != time) {
					if (selecionados[i][2] > selecionados[i][3]) {
						derrotas += 1;
					} else {
						vitorias += 1;
					}
				}
			}
		}
	}
	if (opcao.includes('vitorias')) {
		getVitorias(quantidade);
	} else if ((opcao.includes('empates'))) {
		getEmpates(quantidade);
	} else if ((opcao.includes('derrotas'))) {
		getDerrotas(quantidade);
	} else {
		!opcao.includes('outros') && estatisticas(quantidade, vitorias, empates, derrotas);
	}
}

function converteData(data) {
	var array = data.split("-");
	var novaData = array[2] + "/" + array[1] + "/" + array[0];

	return novaData;
}

function converteDia(data) {
	switch (data) {
		case 0: return "Seg";
		case 1: return "Ter";
		case 2: return "Qua";
		case 3: return "Qui";
		case 4: return "Sex";
		case 5: return "Sáb";
		case 6: return "Dom";
	}
}

function getEscudoName(time, jogo) {
	var dataCortada = jogo[5].split("-");
	var ano = parseInt(dataCortada[0]);

	if (time == "Goiás" && ano >= 2019) {
		return "Goiás2019";
	} else if (time == "Internacional" && ano < 2009) {
		return "Internacional2009";
	} else if (time == "Náutico" && ano >= 2008) {
		return "Náutico2008";
	} else if (time == "Flamengo" && ano >= 2018) {
		return "Flamengo2018";
	} else if (time == "Resende" && ano >= 2020) {
		return "Resende2020";
	} else if (time == "Vasco" && ano >= 2021) {
		return "Vasco2021";
	}

	var cortaNome = time.split(" ");
	var juntaNome = "";

	for (var i = 0; i < cortaNome.length; i++) {
		juntaNome += cortaNome[i];
	}
	return juntaNome;
}

function getFuncaoSelect(valor) {
	if (valor.includes("mandante")) {
		mandante();
	} else if (valor.includes("visitante")) {
		visitante();
	} else if (valor.includes("vitorias")) {
		vitorias();
	} else if (valor.includes("empates")) {
		empates();
	} else if (valor.includes("derrotas")) {
		derrotas();
	} else if (valor.includes("campeao")) {
		campeao();
	} else if (valor.includes("outros")) {
		outrosJogos();
	} else if (valor.includes("todos")) {
		todos();
	} else {
		todos();
	}
}

// Limpa a tabela e reescreve o cabeçalho
function limpaTabela() {
	$("details").remove();
	$("#fail").remove();
	$("#pEstatisticas").remove();
	$(".pAno").remove();
}

function estatisticas(numero, vitorias, empates, derrotas) {
	var div = document.getElementById("estatisticas");
	var titulo = document.createElement('p');
	titulo.id = "pEstatisticas";
	var texto = document.createTextNode(numero + " jogos: " + vitorias + " vitórias/ " + empates + " empates/ " + derrotas + " derrotas");

	div.appendChild(titulo);
	titulo.append(texto);
}

function getVitorias(numero) {
	var div = document.getElementById("estatisticas");
	var titulo = document.createElement('p');
	titulo.id = "pEstatisticas";
	if (numero > 1) {
		var texto = document.createTextNode(numero + " vitórias");
	} else {
		var texto = document.createTextNode("1 vitória");
	}

	div.appendChild(titulo);
	titulo.append(texto);
}

function getEmpates(numero) {
	var div = document.getElementById("estatisticas");
	var titulo = document.createElement('p');
	titulo.id = "pEstatisticas";
	if (numero > 1) {
		var texto = document.createTextNode(numero + " empates");
	} else {
		var texto = document.createTextNode("1 empate");
	}

	div.appendChild(titulo);
	titulo.append(texto);
}

function getDerrotas(numero) {
	var div = document.getElementById("estatisticas");
	var titulo = document.createElement('p');
	titulo.id = "pEstatisticas";
	if (numero > 1) {
		var texto = document.createTextNode(numero + " derrotas");
	} else {
		var texto = document.createTextNode("1 derrota");
	}

	div.appendChild(titulo);
	titulo.append(texto);
}

function fail() {
	limpaTabela();
	var corpo = document.body;
	var titulo = document.createElement('p');
	titulo.id = "fail";
	var texto = document.createTextNode("Nenhum jogo encontrado");

	titulo.appendChild(texto);
	corpo.append(titulo);
}

function backToTop() {
	document.documentElement.scrollTop = 0;
}

//Botão de voltar ao topo
/*
window.onscroll = function(){
	scroll();
}

function scroll(){
	var botao = document.getElementById("btnTop");

	if(document.documentElement.scrollTop > 50){
		botao.style.display = "block";
	} else{
		botao.style.display = "none";
	}
}

function backToTop(){
	document.documentElement.scrollTop = 0;
}

*/
