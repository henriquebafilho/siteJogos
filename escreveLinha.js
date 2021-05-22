function escreveLinha(jogo, numero){
	// setando o mandante e o visitante
	var mandante = jogo[0];
	var visitante = jogo[1];

	// Pegando a tabela
	var tabela = document.getElementById("jogos");
	var qtdLinhas = tabela.rows.length;

	// Célula com autores dos gols e técnico no meio 
	var linha3 = tabela.insertRow(qtdLinhas);
	linha3.id = "linha3";

	var cellAutorMandante = linha3.insertCell(0);
	cellAutorMandante.style.fontFamily = "Arial";
	cellAutorMandante.style.fontWeight = "bold";
	cellAutorMandante.style.backgroundColor = coresTimes(mandante, jogo)[0];
	cellAutorMandante.style.color = coresTimes(mandante, jogo)[1];
	cellAutorMandante.style.border = "1px solid white";
	if(jogo[0] == "Botafogo" || (jogo[0] != "Botafogo" && jogo[1] != "Botafogo")){
		cellAutorMandante.innerHTML = jogo[8];
	} else {
		cellAutorMandante.innerHTML = jogo[9];
	}

	var cellTecnico = linha3.insertCell(1);
	cellTecnico.style.fontFamily = "Arial";
	cellTecnico.style.fontWeight = "bold";
	cellTecnico.style.background = "linear-gradient(90deg, " + coresTimes(mandante, jogo)[0] + " 49%, " + coresTimes(visitante, jogo)[0] + " 52%)";
	cellTecnico.style.textShadow = "0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000";
	cellTecnico.style.border = "1px solid white";
	cellTecnico.innerHTML = "Técnico: " + jogo[7];

	var cellAutorVisitante = linha3.insertCell(2);
	cellAutorVisitante.style.fontFamily = "Arial";
	cellAutorVisitante.style.fontWeight = "bold";
	cellAutorVisitante.style.backgroundColor = coresTimes(visitante, jogo)[0];
	cellAutorVisitante.style.color = coresTimes(visitante, jogo)[1];
	cellAutorVisitante.style.border = "1px solid white";
	if(jogo[1] == "Botafogo"){
		cellAutorVisitante.innerHTML = jogo[8];
	} else {
		cellAutorVisitante.innerHTML = jogo[9];
	}

	// Célula com times, escudos e placar
	var linha2 = tabela.insertRow(qtdLinhas);
	linha2.id = "linha2";

	var cellMandante = linha2.insertCell(0);
	cellMandante.id = "mandante" + numero;
	cellMandante.style.fontFamily = "Arial";
	cellMandante.style.fontWeight = "bold";
	cellMandante.style.backgroundColor = coresTimes(mandante, jogo)[0];
	cellMandante.style.color = coresTimes(mandante, jogo)[1];
	cellMandante.style.border = "1px solid white";
	cellMandante.innerHTML = "<img src=index_files/" + getEscudoName(mandante, jogo) + ".png width=70 height=70 alt=Imagem><br>" + mandante;

	var cellPlacar = linha2.insertCell(1);
	cellPlacar.id = "placar";
	cellPlacar.style.fontFamily = "Arial";
	cellPlacar.style.fontWeight = "bold";
	cellPlacar.style.fontSize = "250%";
	cellPlacar.style.whiteSpace = "nowrap";
	cellPlacar.style.background = "linear-gradient(90deg, " + coresTimes(mandante, jogo)[0] + " 49%, " + coresTimes(visitante, jogo)[0] + " 52%)";
	cellPlacar.style.textShadow = "0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000";
	cellPlacar.style.border = "1px solid white";
	cellPlacar.innerHTML = jogo[2] + " x " + jogo[3];

	var cellVisitante = linha2.insertCell(2);
	cellVisitante.id = "visitante" + numero;
	cellVisitante.style.fontFamily = "Arial";
	cellVisitante.style.fontWeight = "bold";
	cellVisitante.style.backgroundColor = coresTimes(visitante, jogo)[0];
	cellVisitante.style.color = coresTimes(visitante, jogo)[1];
	cellVisitante.style.border = "1px solid white";
	cellVisitante.innerHTML = "<img src=index_files/" + getEscudoName(visitante, jogo) + ".png width=70 height=70 alt=Imagem><br>" + visitante;

	// Célula com o número e informações
	var linha1 = tabela.insertRow(qtdLinhas);
	linha1.id = "linha1";

	var cellNumero = linha1.insertCell(0);
	cellNumero.rowSpan = 3;
	cellNumero.style.fontFamily = "Arial";
	cellNumero.style.fontWeight = "bold";
	cellNumero.style.fontSize = "150%";
	cellNumero.style.backgroundColor = coresTimes(mandante, jogo)[0];
	cellNumero.style.color = coresTimes(mandante, jogo)[1];
	cellNumero.style.border = "1px solid white";
	cellNumero.innerHTML = numero; // Número do jogo

	var cellCabecalho = linha1.insertCell(1);
	cellCabecalho.colSpan = 3;
	cellCabecalho.style.fontFamily = "Arial";
	cellCabecalho.style.fontWeight = "bold";
	cellCabecalho.style.background = "linear-gradient(90deg, " + coresTimes(mandante, jogo)[0] + " 49%, " + coresTimes(visitante, jogo)[0] + " 50%)";
	cellCabecalho.style.textShadow = "0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000";
	cellCabecalho.style.border = "1px solid white";
	cellCabecalho.innerHTML = converteData(jogo[5]) + " | " + "Estádio " + jogo[6] + " | " + jogo[4]; // Cabeçalho
}