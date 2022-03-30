function desenhaBolinha(tipoBola){
	let bolinhaGol = document.createElement("img");
	bolinhaGol.src = tipoBola == "(GC)" ? "index_files/bolaVermelha.png" : "index_files/bola.png";
	bolinhaGol.width = 15;
	bolinhaGol.height = 15;
	bolinhaGol.style.display = 'inline';
	bolinhaGol.style.paddingRight = '5px';
	return bolinhaGol;
}

function escreveLinha(meuTime, jogo, numero, ano){
	// setando o mandante e o visitante
	var mandante = jogo[0];
	var visitante = jogo[1];

	// Pegando a tabela
	var tabela = document.getElementById("jogos");
	tabela.width = "100%";

	if(ano != jogo[5].split('-')[0]){
		var pAno = document.createElement("p");
		pAno.style.fontWeight = "bold";
		pAno.style.fontSize = '2em';
		pAno.style.display = "nowrap";
		pAno.className = "pAno";
		var textoAno = document.createTextNode(jogo[5].split('-')[0]);
		pAno.appendChild(textoAno);
		tabela.appendChild(pAno);
	}

	
	// INTERFACE DO DETAILS
	var details = document.createElement("details");
	details.style.background = "linear-gradient(90deg, " + coresTimes(mandante, jogo)[0] + " 49%, " + coresTimes(visitante, jogo)[0] + " 52%)";
	details.style.cursor = "pointer";
	details.style.color = "white";
	details.style.border = "2px solid " + coresTimes(meuTime, jogo)[1];
	//details.style.fontSize = '125%';
	if(coresTimes(mandante, jogo)[0] == "white" && coresTimes(visitante, jogo)[0] == "white"){
		details.style.color = "black";
		details.style.fontWeight = "bold";
	}

	var summary = document.createElement("summary");
	summary.style.textAlign = "center";
	summary.style.fontWeight = "bold";
	//summary.style.fontSize = '175%';
	summary.style.textShadow = coresTimes(mandante, jogo)[0] == "white" && coresTimes(visitante, jogo)[0] == "white" ? "" : "0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000";

	var pCabecalho = document.createElement("p");
	pCabecalho.style.fontWeight = "normal";
	pCabecalho.style.fontSize = '1em';
	pCabecalho.style.display = "nowrap";
	var data = new Date(jogo[5]);
	var textCabecalho = document.createTextNode(converteDia(data.getDay()) + ", " + converteData(jogo[5]) + " | " + "Estádio " + jogo[6] + " | " + jogo[4]);
	pCabecalho.appendChild(textCabecalho);

	var divPlacar = document.createElement("div");
	divPlacar.style.clear = "both";
	divPlacar.style.whiteSpace = "nowrap";
	var divMandante = document.createElement("div");
	var divResultado = document.createElement("div");
	var divVisitante = document.createElement("div");
	
	var escudoMandante = document.createElement("img");
	escudoMandante.src = "index_files/" + getEscudoName(mandante, jogo) + ".png";
	escudoMandante.style.width = '3em';
	escudoMandante.style.height = '3em';
	escudoMandante.style.float = 'right';
	
	var pNomeMandante = document.createElement("p");
	pNomeMandante.className = "nomeTime";
	pNomeMandante.style.textAlign = "right";
	pNomeMandante.title = jogo[0];
	pNomeMandante.style.overflow = jogo[1].split(" ").size > 1 && jogo[1].length() >= 13 ? 'none' : 'hidden';
	pNomeMandante.style.textOverflow = jogo[1].split(" ").size > 1 && jogo[1].length() >= 13 ? 'none' : 'ellipsis';
	pNomeMandante.style.whiteSpace = jogo[1].split(" ").size > 1 && jogo[1].length() >= 13 ? "nowrap" : "pre-wrap";
	pNomeMandante.style.paddingRight = '5px';
	pNomeMandante.appendChild(document.createTextNode(jogo[0].toUpperCase()));
	
	var escudoVisitante = document.createElement("img");
	escudoVisitante.src = "index_files/" + getEscudoName(visitante, jogo) + ".png";
	escudoVisitante.style.width = '3em';
	escudoVisitante.style.height = '3em';
	escudoVisitante.style.float = 'left';
	
	var pNomeVisitante = document.createElement("p");
	pNomeVisitante.className = "nomeTime";
	pNomeVisitante.style.textAlign = "left";
	pNomeVisitante.title = jogo[1];
	pNomeVisitante.style.overflow = jogo[1].split(" ").size > 1 && jogo[1].length() >= 13 ? 'none' : 'hidden';
	pNomeVisitante.style.textOverflow = jogo[1].split(" ").size > 1 && jogo[1].length() >= 13 ? 'none' : 'ellipsis';
	pNomeVisitante.style.whiteSpace = jogo[1].split(" ").size > 1 && jogo[1].length() >= 13 ? "nowrap" : "pre-wrap";
	pNomeVisitante.style.paddingLeft = '5px';
	pNomeVisitante.appendChild(document.createTextNode(jogo[1].toUpperCase()));

	// Mandante
	divMandante.style.width = "40%";
	divMandante.style.float = "left";
	divMandante.style.textAlign = "right";
	divMandante.style.verticalAlign = "middle";
	divMandante.style.fontSize = "clamp(0.5em, 0.8em + 0.8vw, 1vw);";
	divMandante.style.color = coresTimes(mandante)[1];
	divMandante.style.textShadow = coresTimes(mandante, jogo)[1] == "white" ? "0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000" : "none";
	divMandante.appendChild(escudoMandante);
	divMandante.appendChild(pNomeMandante);
	// Placar
	divResultado.style.width = "15%";
	divResultado.style.height = "1.5em";
	divResultado.style.display = "inline-block";
	divResultado.style.fontSize = "2.4em";
	var placarMandante = document.createElement("p");
	placarMandante.style.color = coresTimes(jogo[0])[0] == "white" ? coresTimes(jogo[0])[1] : "white";
	placarMandante.style.display = "inline";
	placarMandante.style.textShadow = coresTimes(jogo[0])[0] != "white" ? "0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000" : "none";
	placarMandante.appendChild(document.createTextNode(jogo[2].toString()));
	var placarVisitante = document.createElement("p");
	placarVisitante.style.color = coresTimes(jogo[1])[0] == "white" ? coresTimes(jogo[1])[1] : "white";
	placarVisitante.style.display = "inline";
	placarVisitante.style.textShadow = coresTimes(jogo[1])[0] != "white" ? "0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000" : "none";
	placarVisitante.appendChild(document.createTextNode(jogo[3].toString()));
	divResultado.appendChild(placarMandante);
	divResultado.appendChild(document.createTextNode(" - "));
	divResultado.appendChild(placarVisitante);
	// Visitante
	divVisitante.style.width = "40%";
	divVisitante.style.float = "right";
	divVisitante.style.textAlign = "left";
	divVisitante.style.verticalAlign = "middle";
	divVisitante.style.fontSize = "clamp(0.5em, 0.8em + 0.8vw, 1vw);";
	divVisitante.style.color = coresTimes(visitante)[1];
	divVisitante.style.textShadow = coresTimes(visitante, jogo)[1] == "white" ? "0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000" : "none";
	divVisitante.appendChild(escudoVisitante);
	divVisitante.appendChild(pNomeVisitante);

	divPlacar.appendChild(divMandante);
	divPlacar.appendChild(divResultado);
	divPlacar.appendChild(divVisitante);
	
	summary.appendChild(pCabecalho);
	summary.appendChild(divPlacar);
	if(jogo[11]){
		var divTitulo = document.createElement("div");
		var pTitulo = document.createElement("p");
		pTitulo.style.color = "yellow";
		var campeao = jogo[0] == meuTime || jogo[1] == meuTime ? meuTime : jogo[jogo[12]];
		var textTitulo = document.createTextNode(campeao.toUpperCase() + " CAMPEÃO " + jogo[4].toUpperCase() + " " + jogo[5].split("-")[0]);

		pTitulo.appendChild(textTitulo);
		divTitulo.appendChild(pTitulo);
		summary.appendChild(divTitulo);
	}

	// INFORMAÇÕES ADICIONAIS

	var pTecnico = document.createElement("p");
	pTecnico.id = 'pTecnico';
	var textTecnico = document.createTextNode("Técnico: " + jogo[7]);
	pTecnico.style.textAlign = "center";
	pTecnico.style.textShadow = coresTimes(mandante, jogo)[0] == "white" && coresTimes(visitante, jogo)[0] == "white" ? "" : "0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000";
	pTecnico.appendChild(textTecnico);

	var divGols = document.createElement("div"); 
	divGols.style.display = "grid";
	divGols.style.gridTemplateColumns = 'auto auto';
	divGols.style.gridColumn = 1;
	divGols.style.fontSize = '1em';

	var divMandante = document.createElement("div"); 
	divMandante.className = "mandante";
	divMandante.style.gridRow = 1;
	divMandante.style.gridColumn = 0.5;
	divMandante.style.boxSizing = '200px';
	divMandante.style.color = coresTimes(jogo[0], jogo)[1];
	divMandante.style.fontWeight = 'bold';

	var listaGolsMandante = document.createElement("ul");
	var golsMandante = jogo[8];
	for(var i = 0; i < golsMandante.length; i++){
		var autorGolMandante = golsMandante[i];
		if(golsMandante[i] != "" && golsMandante[i] != " " && golsMandante[i].indexOf("Pênaltis:")){
			if(autorGolMandante[autorGolMandante.length - 1] == ")"
			&& autorGolMandante[autorGolMandante.length - 2] == "x"){
				var qtdGols = parseInt(autorGolMandante[autorGolMandante.length - 3]);
				for(var j = 0; j < qtdGols; j++){
					let tipoBola = autorGolMandante.includes("(GC)") ? "(GC)" : "";
					listaGolsMandante.appendChild(desenhaBolinha(tipoBola));		
				}
				autorGolMandante = autorGolMandante.replace("("+qtdGols+"x)", "");
				autorGolMandante = autorGolMandante.trim();
			} else {
				let tipoBola = autorGolMandante.includes("(GC)") ? "(GC)" : "";
				listaGolsMandante.appendChild(desenhaBolinha(tipoBola));	
			}
		}
		var autorGol = document.createElement("li");
		autorGol.style.display = 'inline';
		autorGol.appendChild(document.createTextNode(autorGolMandante));
		autorGol.appendChild(document.createElement("br"));
		listaGolsMandante.appendChild(autorGol); 
	}

	var divVisitante = document.createElement("div"); 
	divVisitante.className = "visitante";
	divVisitante.style.gridColumn = 0.5;
	divVisitante.style.gridRow = 1;
	divVisitante.style.boxSizing = '50%';
	divVisitante.style.color = coresTimes(jogo[1], jogo)[1];
	divVisitante.style.fontWeight = 'bold';

	var listaGolsVisitante = document.createElement("ul");
	listaGolsVisitante.style.textAlign = golsMandante == "" ? 'center' : '';
	var golsVisitante = jogo[9];
	for(var i = 0; i < golsVisitante.length; i++){
		var autorGolVisitante = golsVisitante[i];
		if(golsVisitante[i] != "" && golsVisitante[i] != " " && golsVisitante[i].indexOf("Pênaltis:")){
			if(autorGolVisitante[autorGolVisitante.length - 1] == ")"
			&& autorGolVisitante[autorGolVisitante.length - 2] == "x"){
				var qtdGols = parseInt(autorGolVisitante[autorGolVisitante.length - 3]);
				for(var j = 0; j < qtdGols; j++){
					let tipoBola = autorGolVisitante.includes("(GC)") ? "(GC)" : "";
					listaGolsVisitante.appendChild(desenhaBolinha(tipoBola));		
				}
				autorGolVisitante = autorGolVisitante.replace("("+qtdGols+"x)", "");
				autorGolVisitante = autorGolVisitante.trim();
			} else {
				let tipoBola = autorGolVisitante.includes("(GC)") ? "(GC)" : "";
				listaGolsVisitante.appendChild(desenhaBolinha(tipoBola));	
			}
		}
		var autorGol = document.createElement("li");
		autorGol.style.display = 'inline';
		autorGol.appendChild(document.createTextNode(autorGolVisitante));
		autorGol.appendChild(document.createElement("br"));
		listaGolsVisitante.appendChild(autorGol); 
	}
	
	var divVideo = document.createElement("div"); 
	divVideo.className = "divVideo";
	if(jogo[10] != "") {
		var embedVideo = document.createElement("object"); 
		embedVideo.data = jogo[10];
		embedVideo.width = '70%';
		embedVideo.height = '300px';
		divVideo.appendChild(embedVideo);
	} else {
		var p = document.createElement("p");
		var pText = document.createTextNode("Vídeo não disponível"); 
		p.style.textShadow = coresTimes(mandante, jogo)[0] == "white" && coresTimes(visitante, jogo)[0] == "white" ? "" : "0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000";
		p.style.fontFamily = "Arial";
		p.style.fontSize = "12px";
		p.appendChild(pText);
		divVideo.appendChild(p);
	}
	
	divMandante.append(listaGolsMandante);
	divVisitante.append(listaGolsVisitante);
	divGols.appendChild(divMandante);
	divGols.appendChild(divVisitante);
	details.appendChild(summary);
	details.appendChild(pTecnico);
	details.appendChild(divGols);
	details.appendChild(divVideo);
	tabela.appendChild(details);
}