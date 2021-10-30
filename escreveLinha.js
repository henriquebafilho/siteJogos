function cabecalho(){
	var tabela = document.getElementById("jogos");
	var qtdLinhas = tabela.rows.length;
	var thead = document.createElement("thead");
	//tabela.appendChild(thead);
	var linha = thead.insertRow(qtdLinhas);
	tabela.width = "100%";
	linha.width = "100%";
	//tabela.style.fontWeight = "bold";

	
	// Célula número
	var cellNumero = document.createElement("th");
	cellNumero.innerHTML = "Número";
	linha.appendChild(cellNumero);

	// Célula mandante
	var cellMandante = document.createElement("th");
	cellMandante.width = "40%";
	cellMandante.innerHTML = "Mandante";
	linha.appendChild(cellMandante);

	// Célula placar
	var cellPlacar = document.createElement("th");
	cellPlacar.width = "20%";
	cellPlacar.innerHTML = "Placar";
	linha.appendChild(cellPlacar);

	// Célula visitante
	var cellVisitante = document.createElement("th");
	cellVisitante.width = "40%";
	cellVisitante.innerHTML = "Visitante";
	linha.appendChild(cellVisitante);

	var tbody = document.createElement("tbody");
	tbody.id = "corpoDaTabela";
	//tabela.appendChild(tbody);
}

function escreveLinha(jogo, numero){
	// setando o mandante e o visitante
	var mandante = jogo[0];
	var visitante = jogo[1];

	// Pegando a tabela
	var tabela = document.getElementById("jogos");
	tabela.width = "100%";
	var qtdLinhas = tabela.rows.length - 1;
	var tbody = document.getElementById("corpoDaTabela");
	//tbody.colSpan = 4;
	
	// INTERFACE DO DETAILS

	var details = document.createElement("details");
	details.style.background = "linear-gradient(90deg, " + coresTimes(mandante, jogo)[0] + " 49%, " + coresTimes(visitante, jogo)[0] + " 52%)";
	details.style.cursor = "pointer";

	var summary = document.createElement("summary");
	summary.style.textAlign = "center";
	summary.style.fontWeight = "bold";
	summary.style.fontSize = '200%';
	summary.style.textShadow = "0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000";

	var pCabecalho = document.createElement("p");
	pCabecalho.style.fontWeight = "normal";
	pCabecalho.style.fontSize = '1em';
	pCabecalho.style.display = "nowrap";
	var textCabecalho = document.createTextNode(converteData(jogo[5]) + " | " + "Estádio " + jogo[6] + " | " + jogo[4]);
	pCabecalho.appendChild(textCabecalho);

	var divPlacar = document.createElement("div");
	divPlacar.className = "placar";
	divPlacar.style.display = "nowrap";
	divPlacar.style.whiteSpace = "nowrap";
	divPlacar.style.fontSize = '1em';
	var escudoMandante = document.createElement("img");
	escudoMandante.src = "index_files/" + getEscudoName(mandante, jogo) + ".png";
	escudoMandante.style.width = '3em';
	escudoMandante.style.height = '3em';
	var summaryText = document.createTextNode(" " + jogo[0].toUpperCase() + " " + jogo[2] + " X " + jogo[3] + " " + jogo[1].toUpperCase() + " ");
	var escudoVisitante = document.createElement("img");
	escudoVisitante.src = "index_files/" + getEscudoName(visitante, jogo) + ".png";
	escudoVisitante.style.width = '3em';
	escudoVisitante.style.height = '3em';

	divPlacar.appendChild(escudoMandante);
	divPlacar.appendChild(summaryText);
	divPlacar.appendChild(escudoVisitante);
	
	summary.appendChild(pCabecalho);
	summary.appendChild(divPlacar);

	// INFORMAÇÕES ADICIONAIS

	var pTecnico = document.createElement("p");
	var textTecnico = document.createTextNode("Técnico: " + jogo[7]);
	pTecnico.style.fontSize = '1.5vw';
	pTecnico.style.textAlign = "center";
	pTecnico.style.textShadow = "0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000";
	pTecnico.appendChild(textTecnico);

	var divGols = document.createElement("div"); 
	divGols.style.display = "grid";
	divGols.style.gridColumn = 1;
	divGols.style.fontSize = '1.5vw';

	var divMandante = document.createElement("div"); 
	divMandante.className = "mandante";
	divMandante.style.gridRow = 1;
	divMandante.style.textShadow = "0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000";

	var listaGolsMandante = document.createElement("ul");
	var golsMandante = jogo[0] == 'Botafogo' ? jogo[8] : jogo[9];
	for(var i = 0; i < golsMandante.length; i++){
		if(golsMandante[i] != "" && golsMandante[i] != " " && golsMandante[i].indexOf("Pênaltis:")){
			var bolinhaGol = document.createElement("img");
			bolinhaGol.src = "index_files/bola.png";
			bolinhaGol.width = 15;
			bolinhaGol.height = 15;
			bolinhaGol.style.display = 'inline';
			bolinhaGol.style.paddingRight = '5px';
			listaGolsMandante.appendChild(bolinhaGol);
		}
		var autorGol = document.createElement("li");
		autorGol.style.display = 'inline';
		autorGol.appendChild(document.createTextNode(golsMandante[i]));
		autorGol.appendChild(document.createElement("br"));
		listaGolsMandante.appendChild(autorGol); 
	}

	var divVisitante = document.createElement("div"); 
	divVisitante.className = "visitante";
	divVisitante.style.gridColumn = 0.5;
	divVisitante.style.gridRow = 1;
	divVisitante.style.textShadow = "0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000";

	var listaGolsVisitante = document.createElement("ul");
	var golsVisitante = jogo[1] == 'Botafogo' ? jogo[8] : jogo[9];
	for(var i = 0; i < golsVisitante.length; i++){
		if(golsVisitante[i] != "" && golsVisitante[i] != " " && golsVisitante[i].indexOf("Pênaltis:")){
			var bolinhaGol = document.createElement("img");
			bolinhaGol.src = "index_files/bola.png";
			bolinhaGol.width = 15;
			bolinhaGol.height = 15;
			bolinhaGol.style.display = 'inline';
			bolinhaGol.style.paddingRight = '5px';
			listaGolsVisitante.appendChild(bolinhaGol);
		}
		var autorGol = document.createElement("li");
		autorGol.style.display = 'inline';
		autorGol.appendChild(document.createTextNode(golsVisitante[i]));
		autorGol.appendChild(document.createElement("br"));
		listaGolsVisitante.appendChild(autorGol); 
	}

	divMandante.append(listaGolsMandante);
	divVisitante.append(listaGolsVisitante);
	divGols.appendChild(divMandante);
	divGols.appendChild(divVisitante);
	details.appendChild(summary);
	details.appendChild(pTecnico);
	details.appendChild(divGols);
	tabela.appendChild(details);

	/*
	var cellAutorMandante = linha3.insertCell(0);
	cellAutorMandante.style.fontFamily = "Arial";
	//cellAutorMandante.style.fontWeight = "bold";
	cellAutorMandante.style.backgroundColor = coresTimes(mandante, jogo)[0];
	cellAutorMandante.style.color = coresTimes(mandante, jogo)[1];
	cellAutorMandante.style.border = "1px solid white";
	if(jogo[0] == "Botafogo" || (jogo[0] != "Botafogo" && jogo[1] != "Botafogo")){
		cellAutorMandante.innerHTML = jogo[8];
	} else {
		cellAutorMandante.innerHTML = jogo[9];
	}

	var cellNumero = linha1.insertCell(0);
	cellNumero.rowSpan = 3;
	cellNumero.width = "7%";
	cellNumero.style.fontFamily = "Arial";
	cellNumero.style.fontWeight = "bold";
	cellNumero.style.fontSize = "150%";
	cellNumero.style.backgroundColor = coresTimes(mandante, jogo)[0];
	cellNumero.style.color = coresTimes(mandante, jogo)[1];
	cellNumero.innerHTML = numero; // Número do jogo

	var cellAutorVisitante = linha3.insertCell(2);
	cellAutorVisitante.style.fontFamily = "Arial";
	//cellAutorVisitante.style.fontWeight = "bold";
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
	linha2.width = "100%";
	linhaGeral.appendChild(linha2);

	var cellMandante = linha2.insertCell(0);
	cellMandante.id = "mandante" + numero;
	//cellMandante.width = "40%";
	cellMandante.style.fontFamily = "Arial";
	cellMandante.style.fontWeight = "bold";
	cellMandante.style.backgroundColor = coresTimes(mandante, jogo)[0];
	cellMandante.style.color = coresTimes(mandante, jogo)[1];
	cellMandante.innerHTML = "<img src=index_files/" + getEscudoName(mandante, jogo) + ".png width=70 height=70 alt=Imagem><br>" + mandante;

	var cellPlacar = linha2.insertCell(1);
	cellPlacar.id = "placar";
	//cellPlacar.width = "20%";
	cellPlacar.style.fontFamily = "Arial";
	cellPlacar.style.fontWeight = "bold";
	cellPlacar.style.fontSize = "250%";
	cellPlacar.style.whiteSpace = "nowrap";
	cellPlacar.style.background = "linear-gradient(90deg, " + coresTimes(mandante, jogo)[0] + " 49%, " + coresTimes(visitante, jogo)[0] + " 52%)";
	cellPlacar.style.textShadow = "0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000";
	cellPlacar.innerHTML = jogo[2] + " x " + jogo[3];

	var cellVisitante = linha2.insertCell(2);
	cellVisitante.id = "visitante" + numero;
	//cellVisitante.width = "40%";
	cellVisitante.style.fontFamily = "Arial";
	cellVisitante.style.fontWeight = "bold";
	cellVisitante.style.backgroundColor = coresTimes(visitante, jogo)[0];
	cellVisitante.style.color = coresTimes(visitante, jogo)[1];
	cellVisitante.innerHTML = "<img src=index_files/" + getEscudoName(visitante, jogo) + ".png width=70 height=70 alt=Imagem><br>" + visitante;

	// Célula com autores dos gols e técnico no meio 
	var linha3 = tabela.insertRow(qtdLinhas);
	linha3.id = "linha3";
	linha3.width = "100%";
	linhaGeral.appendChild(linha3);

	var cellAutorMandante = linha3.insertCell(0);
	cellAutorMandante.style.fontFamily = "Arial";
	cellAutorMandante.style.fontWeight = "bold";
	cellAutorMandante.style.backgroundColor = coresTimes(mandante, jogo)[0];
	cellAutorMandante.style.color = coresTimes(mandante, jogo)[1];
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
	cellTecnico.innerHTML = "Técnico: " + jogo[7];

	var cellAutorVisitante = linha3.insertCell(2);
	cellAutorVisitante.style.fontFamily = "Arial";
	cellAutorVisitante.style.fontWeight = "bold";
	cellAutorVisitante.style.backgroundColor = coresTimes(visitante, jogo)[0];
	cellAutorVisitante.style.color = coresTimes(visitante, jogo)[1];
	if(jogo[1] == "Botafogo"){
		cellAutorVisitante.innerHTML = jogo[8];
	} else {
		cellAutorVisitante.innerHTML = jogo[9];
	}	
	
	var cellCabecalho = linha1.insertCell(1);
	cellCabecalho.colSpan = 3;
	cellCabecalho.style.fontFamily = "Arial";
	cellCabecalho.style.fontWeight = "bold";
	cellCabecalho.style.background = "linear-gradient(90deg, " + coresTimes(mandante, jogo)[0] + " 49%, " + coresTimes(visitante, jogo)[0] + " 50%)";
	cellCabecalho.style.textShadow = "0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000";
	cellCabecalho.style.border = "1px solid white";
	cellCabecalho.innerHTML = converteData(jogo[5]) + " | " + "Estádio " + jogo[6] + " | " + jogo[4]; // Cabeçalho
	*/
}