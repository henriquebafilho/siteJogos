function coresTimes(time, jogo = null) {
	if (jogo != null) {
		var dataCortada = jogo[5].split("-");
		var ano = parseInt(dataCortada[0]);
	}

	switch (time) {
		case "Água Santa":
			return ["#153160", "white"];
		case "Alecrim-RN":
			return ["#01904e", "white"];
		case "Altos-PI":
			return ["#01904e", "white"];
		case "América-MG":
			return ["#048439", "white"];
		case "América-RJ":
			return ["#d30a11", "white"];
		case "América-RN":
			return ["#d30a11", "white"];
		case "Americano":
			return ["white", "black"];
		case "Argentina":
			return ["#43a1d5", "white"];
		case "Athletico-PR":
			return ["#d30a11", "black"];
		case "Atlético Nacional":
			return ["#048439", "white"];
		case "Atlético-GO":
			return ["#d30a11", "black"];
		case "Atlético-MG":
			return ["black", "white"];
		case "Atlético-PR":
			return ["#d30a11", "black"];
		case "Aparecidense":
			return ["#00005e", "#c8ad51"];
		case "Audax Rio":
			return ["#003a94", "#f48221"];
		case "Audax-SP":
			return ["#d30a11", "white"];
		case "Audax Italiano":
			return ["green", "white"];
		case "Aurora":
			return ["#4ebde5", "white"];
		case "Avaí":
			return ["#00468e", "white"];
		case "Bahia":
			return ["#0188d6", "white"];
		case "Banfield":
			return ["#03953f", "white"];
		case "Bangu":
			return ["#d30a11", "white"];
		case "Barcelona de Guayaquil":
			return ["#fde900", "#055daa"];
		case "Benfica":
			return ["#d30a11", "white"];
		case "Boa Esporte":
			return ["#d30a11", "white"];
		case "Boavista":
			return ["#00913c", "white"];
		case "Boca Juniors":
			return ["#003a94", "#fcb000"];
		case "Bonsucesso":
			return ["#1c4196", "white"];
		case "Boston River":
			return ["#d30a11", "white"];
		case "Botafogo":
			return ["black", "white"];
		case "Botafogo-SP":
			return ["#d30a11", "white"];
		case "Bragantino":
			return ["white", "black"];
		case "Brasil":
			return ["#fde900", "#018036"];
		case "Brasil de Pelotas":
			return ["#d30a11", "black"];
		case "Brusque":
			return ["#fde900", "red"];
		case "Cabofriense":
			return ["#0b9c54", "white"];
		case "Capital":
			return ["#30a7eb", "black"];
		case "Carabobo":
			return ["#52100f", "#fdc300"];
		case "Ceará":
			return ["black", "white"];
		case "Ceilândia":
			return ["black", "white"];
		case "Cerro Porteño":
			return ["#c40215", "white"];
		case "César Vallejo":
			return ["#d77000", "#0B254A"];
		case "Chapecoense":
			return ["#00913c", "white"];
		case "Chile":
			return ["#d30a11", "white"];
		case "Colo-Colo":
			return ["white", "black"];
		case "Colón":
			return ["#d30a11", "black"];
		case "Confiança":
			return ["#003a94", "white"];
		case "Corinthians":
			return ["black", "white"];
		case "Coritiba":
			return ["#006437", "white"];
		case "CRB":
			return ["#d30a11", "white"];
		case "Criciúma":
			return ["#fdd116", "black"];
		case "Cruzeiro":
			return ["#003a94", "white"];
		case "CSA":
			return ["#003a94", "white"];
		case "Cuiabá":
			return ["#048439", "white"];
		case "Defensa y Justicia":
			return ["#fde900", "#018036"];
		case "Defensor":
			return ["#784684", "white"];
		case "Deportivo Lara":
			return ["#e30613", "black"];
		case "Deportivo Quito":
			return ["#073756", "white"];
		case "Deportivo Tachira":
			return ["#f2d902", "black"];
		case "Estudiantes":
			return ["#d30a11", "white"];
		case "Falcon":
			return ["#3b137b", "white"];
		case "Ferroviária":
			return ["#511a1d", "white"];
		case "Figueirense":
			return ["black", "white"];
		case "Flamengo":
			return ["#d30a11", "black"];
		case "Flamengo de Guarulhos":
			return ["#d30a11", "black"];
		case "Floresta-CE":
			return ["#87c53f", "#036c3c"];
		case "Fluminense":
			return ["#9f022f", "white"];
		case "Fortaleza":
			return ["#11519b", "white"];
		case "Friburguense":
			return ["#003a94", "white"];
		case "Goiás":
			return ["#006437", "white"];
		case "Grêmio":
			return ["#0d80bf", "white"];
		case "Grêmio Barueri":
			return ["#f6e815", "#003c6e"];
		case "Guarani":
			return ["#048439", "white"];
		case "Guaraní-PAR":
			return ["#fde900", "black"];
		case "Honduras":
			return ["#075798", "white"];
		case "Independiente":
			return ["#d30a11", "white"];
		case "Independiente Del Valle":
			return ["#fb37b9", "white"];
		case "Independiente Santa Fé":
			return ["#d30a11", "white"];
		case "Internacional":
			return ["#d30a11", "white"];
		case "Ituano":
			return ["#d30a11", "black"];
		case "Junior Barranquilla":
			return ["#d30a11", "white"];	
		case "Juventude":
			return ["#048439", "white"];
		case "Juventus":
			return ["#6a023c", "white"];
		case "Kenitra":
			return ["#038b5d", "white"];
		case "LDU":
			return ["white", "#003a94"];
		case "Linense":
			return ["#d30a11", "white"];
		case "Luverdense":
			return ["#8bc23d", "#426d33"];
		case "Macaé":
			return ["#41afeb", "white"];
		case "Madureira":
			return ["#fde900", "#13007c"];
		case "Magallanes":
			return ["#43a1d5", "white"];
		case "Maricá":
			return ["#d30a11", "white"];
		case "Mirassol":
			return ["#ffec00", "#00722c"];
		case "Mogi Mirim":
			return ["#d30a11", "white"];
		case "Montevideo Wanderers":
			return ["white", "black"];
		case "Nacional-PAR":
			return ["#163fb3", "white"];
		case "Nacional-SP":
			return ["#003a94", "white"];
		case "Nacional-URU":
			return ["#172b8c", "white"];
		case "Náutico":
			return ["#d30a11", "white"];
		case "Nova Iguaçu":
			return ["#ea8415", "black"];
		case "Novorizontino":
			return ["#fff500", "black"];
		case "Oeste":
			return ["#d30a11", "white"];
		case "Olimpia":
			return ["white", "black"];
		case "Once Caldas":
			return ["black", "white"];
		case "Operário":
			return ["black", "white"];
		case "Palmeiras":
			return ["#048439", "white"];
		case "Paraná":
			return ["#003a94", "white"];
		case "Patronato":
			return ["#d30a11", "black"];
		case "Paulista":
			return ["#d30a11", "white"];
		case "Paysandu":
			return ["#0091cf", "white"];
		case "Peñarol":
			return ["#fdca01", "black"];
		case "Petrolina":
			return ["#f5182e", "white"];
		case "Petrópolis":
			return ["#fde900", "#003a94"];
		case "Plaza Colonia":
			return ["#048439", "white"];
		case "Ponte Preta":
			return ["white", "black"];
		case "Portuguesa":
			return ["#d30a11", "white"];
		case "Portuguesa-RJ":
			return ["#048439", "white"];
		case "Progreso":
			return ["#d30a11", "#fdd120"];
		case "Racing":
			return ["#029cdc", "white"];
		case "Real Garcilaso":
			return ["#0197ee", "#fdf21c"];
		case "Red Bull Bragantino":
			return ["#d30a11", "white"];
		case "Red Bull Brasil":
			return ["#d30a11", "white"];
		case "Resende":
			return ["white", "black"];
		case "Rio Preto":
			return ["#00923f", "white"];
		case "River Plate":
			return ["white", "#d30a11"];
		case "River Plate-URU":
			return ["#d30a11", "white"];
		case "Rosario Central":
			return ["#003a94", "#ffcc00"];
		case "Sampaio Corrêa":
			return ["#fde900", "#048439"];
		case "Sampaio Corrêa-RJ":
			return ["#00479c", "#ffc413"];
		case "Santa Cruz":
			return ["#d30a11", "white"];
		case "Santos":
			return ["white", "black"];
		case "Santo André":
			return ["#003a94", "white"];
		case "São Bernardo":
			return ["#ffdd00", "black"];
		case "São Bento":
			return ["#0067ab", "white"];
		case "São Caetano":
			return ["#212568", "white"];
		case "São José":
			return ["#2A3794", "white"];
		case "São Paulo":
			return ["#d30a11", "white"];
		case "São Raimundo-RR":
			return ["#013fae", "white"];
		case "Sol de America":
			return ["#075798", "white"];
		case "Sport":
			return ["#d30a11", "#ffda00"];
		case "Sporting Cristal":
			return ["#54c6ed", "white"];
		case "Taubaté":
			return ["#003a94", "white"];
		case "The Strongest":
			return ["#ffcc00", "black"];
		case "Universitario":
			return ["#8c1619", "#fefcf3"];
		case "Universidad de Chile":
			return ["#1f3c94", "white"];
		case "Uruguai":
			return ["#0d80bf", "white"];
		case "Vasco":
			return ["white", "black"];
		case "Vila Nova":
			return ["#d30a11", "white"];
		case "Vitória":
			return ["#d30a11", "black"];
		case "Volta Redonda":
			return ["#fde900", "black"];
		case "Votuporanguense":
			return ["black", "white"];
		case "XV de Piracicaba":
			return ["black", "white"];
		case "Ypiranga":
			return ["#fff100", "#00923e"];
		default:
			console.log(time + " sem cores!");
			return ["grey", "white"];
	}
}
