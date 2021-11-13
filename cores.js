function coresTimes(time, jogo = null) {
	if (jogo != null) {
		var dataCortada = jogo[5].split("-");
		var ano = parseInt(dataCortada[0]);
	}

	switch (time) {
		case "América":
			return ["red", "white"];
		case "América-MG":
			return ["#048439", "white"];
		case "Americano":
			return ["white", "black"];
		case "Athletico-PR":
			return ["#c8060f", "white"];
		case "Atlético Nacional-COL":
			return ["#048439", "white"];
		case "Atlético-GO":
			return ["#ff0e00", "white"];
		case "Atlético-MG":
			return ["black", "white"];
		case "Atlético-PR":
			return ["#ff0e00", "white"];
		case "Audax Italiano-CHI":
			return ["green", "white"];
		case "Avaí":
			return ["#00468e", "white"];
		case "Bahia":
			return ["#0188d6", "white"];
		case "Bangu":
			return ["#ff0e00", "white"];
		case "Barcelona de Guayaquil-EQU":
			return ["#fde900", "#055daa"];
		case "Boa Esporte":
			return ["#ff0e00", "white"];
		case "Boavista":
			return ["#00913c", "white"];
		case "Boca Juniors-ARG":
			return ["#00458a", "#fcb000"];
		case "Bonsucesso":
			return ["#1c4196", "white"];
		case "Botafogo":
			return ["black", "white"];
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
		case "Chapecoense":
			return ["#00913c", "white"];
		case "Chile":
			return ["#ff0e00", "white"];
		case "Colo-Colo-CHI":
			return ["white", "black"];
		case "Confiança":
			return ["#003a94", "white"];
		case "Corinthians":
			return ["white", "black"];
		case "Coritiba":
			return ["#00544d", "white"];
		case "CRB":
			return ["#ff0e00", "white"];
		case "Criciúma":
			return ["#fdd116", "black"];
		case "Cruzeiro":
			return ["#003a94", "white"];
		case "CSA":
			return ["#003a94", "white"];
		case "Cuiabá":
			return ["#fde900", "#018036"];
		case "Defensa y Justicia-ARG":
			return ["#fde900", "#018036"];
		case "Deportivo Quito-EQU":
			return ["#073756", "white"];
		case "Figueirense":
			return ["black", "white"];
		case "Flamengo":
			return ["#ff0e00", "white"];
		case "Fluminense":
			return ["#9f022f", "white"];
		case "Fortaleza":
			return ["#11519b", "white"];
		case "Goiás":
			if (jogo != null) {
				if (ano < 2019) {
					return ["#048439", "white"];
				} else if (ano >= 2019) {
					return ["#006959", "white"];
				}
			} else {
				return ["#048439", "white"];
			}
		case "Grêmio":
			return ["#0d80bf", "white"];
		case "Guarani":
			return ["#048439", "white"];
		case "Honduras":
			return ["#075798", "white"];
		case "Independiente Del Valle-EQU":
			return ["#fb37b9", "white"];
		case "Internacional":
			return ["#ff0e00", "white"];
		case "Juventude":
			return ["#048439", "white"];
		case "Macaé":
			return ["#41afeb", "white"];
		case "Madureira":
			return ["#fde900", "#13007c"];
		case "Mogi Mirim":
			return ["#ff0e00", "white"];
		case "Nacional-PAR":
			return ["#163fb3", "white"];
		case "Nacional-URU":
			return ["#172b8c", "white"];
		case "Náutico":
			return ["#ff0e00", "white"];
		case "Nova Iguaçu":
			return ["#ea8415", "black"];
		case "Olimpia-PAR":
			return ["white", "black"];
		case "Operário":
			return ["black", "white"];
		case "Palmeiras":
			return ["#048439", "white"];
		case "Paraná":
			return ["#003a94", "white"];
		case "Paysandu":
			return ["#0091cf", "white"];
		case "Ponte Preta":
			return ["white", "black"];
		case "Portuguesa-RJ":
			return ["#048439", "white"];
		case "Red Bull Bragantino":
			return ["#001c44", "white"];
		case "Resende":
			return ["white", "black"];
		case "Santa Cruz":
			return ["red", "white"];
		case "Santos":
			return ["white", "black"];
		case "Sampaio Corrêa":
			return ["#fde900", "#048439"];
		case "São Caetano":
			return ["#212568", "white"];
		case "São Paulo":
			return ["#ff0e00", "white"];
		case "Sol de America-PAR":
			return ["#075798", "white"];
		case "Sport":
			return ["#d30a11", "#ffda00"];
		case "Uruguai":
			return ["#0d80bf", "white"];
		case "Vasco":
			return ["white", "black"];
		case "Vila Nova":
			return ["#ff0e00", "white"];
		case "Vitória":
			return ["#ff0e00", "black"];
		case "Volta Redonda":
			return ["#fde900", "black"];
	}
}