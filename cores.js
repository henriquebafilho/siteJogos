function coresTimes(time, jogo = null) {
	if (jogo != null) {
		var dataCortada = jogo[5].split("-");
		var ano = parseInt(dataCortada[0]);
	}

	switch (time) {
		case "Água Santa":
			return ["#153160", "white"];
		case "América-MG":
			return ["#048439", "white"];
		case "América-RJ":
			return ["#d30a11", "white"];
		case "América-RN":
			return ["#d30a11", "white"];
		case "Americano":
			return ["white", "black"];
		case "Athletico-PR":
			return ["#d30a11", "white"];
		case "Atlético Nacional":
			return ["#048439", "white"];
		case "Atlético-GO":
			return ["#d30a11", "white"];
		case "Atlético-MG":
			return ["black", "white"];
		case "Atlético-PR":
			return ["#d30a11", "white"];
		case "Aparecidense":
			return ["#00005e", "#c8ad51"];
		case "Audax Rio":
			return ["#003a94", "#f48221"];
		case "Audax-SP":
			return ["#d30a11", "white"];
		case "Audax Italiano":
			return ["green", "white"];
		case "Avaí":
			return ["#00468e", "white"];
		case "Bahia":
			return ["#0188d6", "white"];
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
			return ["#00458a", "#fcb000"];
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
		case "Brusque":
			return ["#fde900", "red"];
		case "Cabofriense":
			return ["#0b9c54", "white"];
		case "Ceará":
			return ["black", "white"];
		case "Cerro Porteño":
			return ["#c40215", "white"];
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
			return ["#00544d", "white"];
		case "CRB":
			return ["#d30a11", "white"];
		case "Criciúma":
			return ["#fdd116", "black"];
		case "Cruzeiro":
			return ["#003a94", "white"];
		case "CSA":
			return ["#003a94", "white"];
		case "Cuiabá":
			return ["#fde900", "#018036"];
		case "Defensa y Justicia":
			return ["#fde900", "#018036"];
		case "Defensor":
			return ["#784684", "white"];
		case "Deportivo Quito":
			return ["#073756", "white"];
		case "Deportivo Tachira":
			return ["#f2d902", "black"];
		case "Estudiantes":
			return ["#d30a11", "white"];
		case "Ferroviária":
			return ["#511a1d", "white"];
		case "Figueirense":
			return ["black", "white"];
		case "Flamengo":
			return ["#d30a11", "white"];
		case "Floresta-CE":
			return ["#87c53f", "#036c3c"];
		case "Fluminense":
			return ["#9f022f", "white"];
		case "Fortaleza":
			return ["#11519b", "white"];
		case "Goiás":
			return ["#006437", "white"];
		case "Grêmio":
			return ["#0d80bf", "white"];
		case "Grêmio Barueri":
			return ["#f6e815", "#003c6e"];
		case "Guarani":
			return ["#048439", "white"];
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
		case "Juventude":
			return ["#048439", "white"];
		case "Juventus":
			return ["#6a023c", "white"];
		case "Kenitra":
			return ["#038b5d", "white"];
		case "Linense":
			return ["#d30a11", "white"];
		case "Luverdense":
			return ["#8bc23d", "#426d33"];
		case "Macaé":
			return ["#41afeb", "white"];
		case "Madureira":
			return ["#fde900", "#13007c"];
		case "Mirassol":
			return ["#ffec00", "#00722c"];
		case "Mogi Mirim":
			return ["#d30a11", "white"];
		case "Montevideo Wanderers":
			return ["white", "black"];
		case "Nacional-PAR":
			return ["#163fb3", "white"];
		case "Nacional-URU":
			return ["#172b8c", "white"];
		case "Náutico":
			return ["#d30a11", "white"];
		case "Nova Iguaçu":
			return ["#ea8415", "black"];
		case "Novorizontino":
			return ["#fff500", "black"];
		case "Oeste":
			return ["#d30a11", "black"];
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
		case "Paulista":
			return ["#d30a11", "black"];
		case "Paysandu":
			return ["#0091cf", "white"];
		case "Peñarol":
			return ["#fdca01", "black"];
		case "Petrolina":
			return ["#f5182e", "white"];
		case "Ponte Preta":
			return ["white", "black"];
		case "Portuguesa":
			return ["#d30a11", "white"];
		case "Portuguesa-RJ":
			return ["#048439", "white"];
		case "Progreso":
			return ["#d30a11", "#fdd120"];
		case "Real Garcilaso":
			return ["#0197ee", "#fdf21c"];
		case "Red Bull Bragantino":
			return ["#001c44", "white"];
		case "Red Bull Brasil":
			return ["#d30a11", "white"];
		case "Resende":
			return ["white", "black"];
		case "Rio Preto":
			return ["#00923f", "white"];
		case "River Plate-URU":
			return ["#d30a11", "white"];
		case "Sampaio Corrêa":
			return ["#fde900", "#048439"];
		case "Santa Cruz":
			return ["#d30a11", "white"];
		case "Santos":
			return ["white", "black"];
		case "Santo André":
			return ["#2d3491", "white"];
		case "São Bernardo":
			return ["#ffdd00", "black"];
		case "São Bento":
			return ["#0067ab", "white"];
		case "São Caetano":
			return ["#212568", "white"];
		case "São Paulo":
			return ["#d30a11", "white"];
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
		case "Uruguai":
			return ["#0d80bf", "white"];
		case "Vasco":
			return ["white", "black"];
		case "Vila Nova":
			return ["#d30a11", "white"];
		case "Vitória":
			return ["#d30a11", "white"];
		case "Volta Redonda":
			return ["#fde900", "black"];
		case "Votuporanguense":
			return ["black", "white"];
	}
}