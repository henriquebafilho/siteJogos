function coresTimes(time, jogo){
	var dataCortada = jogo[5].split("-");
	var ano = parseInt(dataCortada[0]);

	switch (time) {
		case "América-MG":
		return ["#048439", "white"];
		break;
		case "Americano":
		return ["white", "black"];
		break;
		case "Athletico-PR":
		return ["#c8060f", "black"];
		break;
		case "Atlético Nacional-COL":
		return ["#048439", "white"];
		break;
		case "Atlético-GO":
		return ["#ff0e00", "black"];
		break
		case "Atlético-MG":
		return ["black", "white"];
		break;
		case "Atlético-PR":
		return ["#ff0e00", "black"];
		break;
		case "Audax Italiano-CHI":
		return ["green", "white"];
		break;
		case "Avaí":
		return ["#00679a", "white"];
		break;
		case "Bahia":
		return ["#0188d6", "white"];
		break;
		case "Bangu":
		return ["#ff0e00", "white"];
		break;
		case "Barcelona de Guayaquil-EQU":
		return ["#fde900", "#055daa"];
		break;
		case "Boa Esporte":
		return ["#ff0e00", "white"];
		break;
		case "Boavista":
		return ["#00913c", "white"];
		break;
		case "Bonsucesso":
		return ["#1c4196", "white"];
		break;
		case "Botafogo":
		return ["black", "white"];
		break;
		case "Bragantino":
		return ["white", "black"];
		break;
		case "Brasil":
		return ["#fde900", "#018036"];
		break;
		case "Brusque":
		return ["#fde900", "red"];
		break;
		case "Cabofriense":
		return ["#0b9c54", "white"];
		break;
		case "Ceará":
		return ["black", "white"];
		break;
		case "Chapecoense":
		return ["#00913c", "white"];
		break;
		case "Chile":
		return ["#ff0e00", "white"];
		break;
		case "Colo-Colo-CHI":
		return ["white", "black"];
		break;
		case "Corinthians":
		return ["white", "black"];
		break;
		case "Coritiba":
		return ["#00544d", "white"];
		break;
		case "CRB":
		return ["#ff0e00", "white"];
		break;
		case "Criciúma":
		return ["#fdd116", "black"];
		break;
		case "Cruzeiro":
		return ["#003a94", "white"];
		break;
		case "CSA":
		return ["#075798", "white"];
		break;
		case "Cuiabá":
		return ["#fde900", "#018036"];
		break;
		case "Defensa y Justicia-ARG":
		return ["#fde900", "#018036"];
		break;
		case "Deportivo Quito-EQU":
		return ["#073756", "white"];
		break;
		case "Figueirense":
		return ["black", "white"];
		break;
		case "Flamengo":
		return ["#ff0e00", "black"];
		break;
		case "Fluminense":
		return ["#9f022f", "white"];
		break;
		case "Fortaleza":
		return ["#11519b", "white"];
		break;
		case "Goiás":
		if(ano < 2019){
			return ["#048439", "white"];
			break;
		} else if (ano >= 2019){
			return ["#006959", "white"];
			break;
		}
		case "Grêmio":
		return ["#0d80bf", "white"];;
		break;
		case "Guarani":
		return ["#048439", "white"];
		break;
		case "Honduras":
		return ["#075798", "white"];
		break;
		case "Independiente Del Valle-EQU":
		return ["#fb37b9", "white"];
		break;
		case "Internacional":
		return ["#ff0e00", "white"];
		break;
		case "Juventude":
		return ["#048439", "white"];
		break;
		case "Macaé":
		return ["#41afeb", "white"];
		break;
		case "Madureira":
		return ["#fde900", "#13007c"];
		break;
		case "Mogi Mirim":
		return ["#ff0e00", "white"];
		break;
		case "Nacional-PAR":
		return ["#163fb3", "white"];
		break;
		case "Nacional-URU":
		return ["#172b8c", "white"];
		break;
		case "Náutico":
		return ["#ff0e00", "white"];
		break;
		case "Nova Iguaçu":
		return ["#ea8415", "black"];
		break;
		case "Olimpia-PAR":
		return ["white", "black"];
		break;
		case "Palmeiras":
		return ["#048439", "white"];
		break;
		case "Paraná":
		return ["#2939b4", "white"];
		break;
		case "Paysandu":
		return ["#0091cf", "white"];
		break;
		case "Ponte Preta":
		return ["white", "black"];
		break;
		case "Portuguesa-RJ":
		return ["#048439", "white"];
		break;
		case "Red Bull Bragantino":
		return ["#001c44", "white"];
		break;
		case "Resende":
		return ["white", "black"];
		break;
		case "Santa Cruz":
		return ["red", "white"];
		break;
		case "Santos":
		return ["white", "black"];
		break;
		case "Sampaio Corrêa":
		return ["#fde900", "#048439"];
		break;
		case "São Caetano":
		return ["#212568", "white"];
		break;
		case "São Paulo":
		return ["#ff0e00", "white"];
		break;
		case "Sol de America-PAR":
		return ["#075798", "white"];
		break;
		case "Sport":
		return ["#d30a11", "black"];
		break;
		case "Uruguai":
		return ["#0d80bf", "white"];;
		break;
		case "Vasco":
		return ["white", "black"];
		break;
		case "Vila Nova":
		return ["#ff0e00", "white"];
		break;
		case "Vitória":
		return ["#ff0e00", "black"];
		break;
		case "Volta Redonda":
		return ["#fde900", "black"];
		break;
	}
}