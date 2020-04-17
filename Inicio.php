<!DOCTYPE html>
<html>
    <head>
        <title>
            Jogos do Botafogo que fui
        </title>
        <meta http-equiv="content-type" content="text/html;charset=utf-8" />
        <link rel="shortcut icon" href="Times/favicon.ico" type="image/x-icon">
        <link rel="icon" href="Times/favicon.ico" type="image/x-icon">
        <script src='jquery-3.3.1.min.js'></script>
        <script>
            $(document).ready(function(){
                $('#select').on('change',function(){
                    var selectValor = '#'+$(this).val();
                    $('#pai').children('div').hide();
                    $('#pai').children(selectValor).show();
                });
            });
        </script>
        <style>
            body{
                background-color: black;
                color: white;
            }
            table {
                border: 2px solid white;
                width: 100%;
                font-family: monospace;
                text-align: center;
                background-color: black;
            } 
            th{
                color: white;
                font-family: Quicksand;
                text-align: center;
                border: 1px solid white;
                column-span: 2;
            }
            h1, h4{
                color: white;
                font-family: Quicksand;
                text-align: center;
            }#pai div{
                display: none;
            }p{
                color: white;
                font-family: Quicksand;
                text-align: center;
            }
            div{
                text-align: center;
            }
        </style>
    </head>
    <body>
        <h1>Jogos Que Fui</h1>
        <h4>Por Henrique Filho</h4>
        <br>
        <?php
        $conn = mysqli_connect("localhost", "root", "", "jogos");
        // Checando conexão
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        } 
        $sql = "SELECT * FROM jogo ORDER BY dataJogo DESC";
        $result = $conn->query($sql);
        //pegando número de jogos
        $qtdJogos = $result->num_rows;
        $numero = $qtdJogos; //número de jogos + 1
        $golsBotafogo = 0; 
        $golsAdversario = 0;
        $vitorias = 0;
        $empates = 0;
        $derrotas = 0;
        // Mostrando as informações em cada linha
        while($row = $result->fetch_assoc()) {
            echo escreveLinha($qtdJogos, $numero, $row);
            $numero -= 1;

            $golsBotafogo += $row["golsBotafogo"];
            $golsAdversario += $row["golsAdversario"];

            if($row["golsBotafogo"] > $row["golsAdversario"]){
                $vitorias += 1;
            }else if($row["golsBotafogo"] < $row["golsAdversario"]){
                $derrotas += 1;
            }else{
                $empates += 1;
            }
            //quando chega no último, mostra o retrospecto
            if($numero == 0){
                //echo derrota vitoria empate gols...
                echo "Vitórias/Empates/Derrotas - " . $vitorias  
                    . "/" . $empates 
                    . "/" . $derrotas
                    . "<br>Gols do Botafogo/Adversário - " . $golsBotafogo . " x ". $golsAdversario;
            }
        }
        if($numero == $qtdJogos){
            echo "<p>Nenhum jogo encontrado</p>";
        }
        echo "</table>";
        function escreveLinha($qtdJogos, $numero, $row){
            //Cabeçalho
            //número de jogos
            if($numero == $qtdJogos){
                echo "<table>
                        <tr>
                            <th colspan='1' id='head'>Número</th>
                            <th colspan='1' id='head'>Mandante</th>
                            <th colspan='1' width=20% id='head'>Placar</th>
                            <th colspan='1' id='head'>Visitante</th>
                        </tr>";
            }
            //Tirando espaços do nome do adversário (para combinar com nomes dos escudos)
            $escudo = str_replace(' ', '', utf8_encode($row["adversario"]));
            if(utf8_encode($row["adversario"]) == "Goiás" && explode('-', $row["dataJogo"])[0] >= 2019){
               $escudo = "Goiás2019";
            } 
            else if(utf8_encode($row["adversario"]) == "Internacional" && explode('-', $row["dataJogo"])[0] < 2009){
               $escudo = "Internacional2009";
            } 
            else if(utf8_encode($row["adversario"]) == "Náutico" && explode('-', $row["dataJogo"])[0] <= 2008){
               $escudo = "Náutico2008";
            }
            else if(utf8_encode($row["adversario"]) == "Flamengo" && explode('-', $row["dataJogo"])[0] >= 2018){
               $escudo = "Flamengo2019";
            }
            else if(utf8_encode($row["adversario"]) == "Resende" && explode('-', $row["dataJogo"])[0] >= 2020){
               $escudo = "Resende2020";
            }
            else if(utf8_encode($row["adversario"]) == "Athletico-PR" && explode('-', $row["dataJogo"])[0] >= 2019){
               $escudo = "Athletico-PR2019";
            }
            //Colocando data dd-mm-yyyy
            $date = new DateTime($row["dataJogo"]);
            
            //Colocando cores no fundo e letras do time
            $corFundo = corFundoTime(utf8_encode($row["adversario"]), explode('-', $row["dataJogo"])[0], $escudo);
            $corLetra = corLetraTime(utf8_encode($row["adversario"]));
            
            $cor = "black";
            if($row["mandante"] == 1){
                return "<tr><th colspan=1 rowspan=3 style=width:50px;background-color:$cor>" . $numero . "</th>" . "<th colspan=3 rowspan=1 style='background-color:$cor; width:400px;'>". $date -> format( 'd-m-Y' ). " | ". "Estádio ". utf8_encode($row["estadio"]). " | ". utf8_encode($row["campeonato"]). "</th>"."<tr><th colspan=1 rowspan=1 style='background-color:black; text-align: center; color:white'><img src=index_files/Botafogo.png width=70 height=70 alt=Imagem/><br>Botafogo</th>"."<th colspan=1 rowspan=1 style=background-color:$cor>" . utf8_encode($row["golsBotafogo"]) ." x ". utf8_encode($row["golsAdversario"]) . "</th>" . "<th colspan=1 rowspan=1 style='color:$corLetra; background-color:$corFundo;'><img src=index_files/$escudo.png width=70 height=70 alt=Imagem /><br>". utf8_encode($row["adversario"])  . "</th>". "<tr><th colspan=1 style=background-color:$cor;>". utf8_encode($row["autorBotafogo"]) ."</th>"."<th colspan=1 style=background-color:$cor;>". "Técnico: ". utf8_encode($row["tecnico"]) . "</th>"."<th colspan=1 style=background-color:$cor;>". utf8_encode($row["autorAdversario"])."</th><tr>";
            } else {
                return "<tr><th colspan=1 rowspan=3 style=width:50px;background-color:$cor>" . $numero . "</th>" . "<th colspan=3 rowspan=1 style='background-color:$cor; width:400px;'>". $date -> format( 'd-m-Y' ). " | ". "Estádio ". utf8_encode($row["estadio"]). " | ". utf8_encode($row["campeonato"]). "</th>"."<tr><th colspan=1 style='color:$corLetra; background-color:$corFundo;'><img src=index_files/$escudo.png width=70 height=70 alt=Imagem /><br>". utf8_encode($row["adversario"]). "</th>" . "<th colspan=1 rowspan=1 style=background-color:$cor>" . utf8_encode($row["golsAdversario"]) ." x ". utf8_encode($row["golsBotafogo"]) . "</th>"."<th colspan=1 style='background-color:black;color:white'><img src=index_files/Botafogo.png width=70 height=70 alt=Imagem /><br>Botafogo</th>" . "</th>"."<tr><th colspan=1 style=background-color:$cor;>". utf8_encode($row["autorAdversario"]) ."</th>"."<th colspan=1 style=background-color:$cor;>". "Técnico: ". utf8_encode($row["tecnico"]) . "</th>"."<th colspan=1 style=background-color:$cor;>". utf8_encode($row["autorBotafogo"])."</th><tr>";
            }
        }
        function corFundoTime($time, $ano, $escudo){
            if($time == "América-MG"){
                return "#048439";
            }
            else if($time == "Americano"){
                return "white";
            }
            else if($time == "Athletico-PR"){
                return "#c8060f";
            }
            else if($time == "Atlético Nacional-COL"){
                return "#048439";
            }
            else if($time == "Atlético-GO"){
                return "#ff0e00";
            }
            else if($time == "Atlético-MG"){
                return "black";
            }
            else if($time == "Atlético-PR"){
                return "#ff0e00";
            }
            else if($time == "Audax Italiano-CHI"){
                return "green";
            }
            else if($time == "Avaí"){
                return "#00679a";
            }
            else if($time == "Bahia"){
                return "#0188d6";
            }
            else if($time == "Bangu"){
                return "#ff0e00";
            }
            else if($time == "Barcelona de Guayaquil-EQU"){
                return "#fde900";
            }
            else if($time == "Boa Esporte"){
                return "#ff0e00";
            }
            else if($time == "Boavista"){
                return "#00913c";
            }
            else if($time == "Bonsucesso"){
                return "#1c4196";
            }
            else if($time == "Bragantino"){
                return "white";
            }
            else if($time == "Cabofriense"){
                return "#0b9c54";
            }
            else if($time == "Ceará"){
                return "black";
            }
            else if($time == "Chapecoense"){
                return "#00913c";
            }
            else if($time == "Colo-Colo-CHI"){
                return "white";
            }
            else if($time == "Corinthians"){
                return "black";
            }
            else if($time == "Coritiba"){
                return "#00544d";
            }
            else if($time == "CRB"){
                return "#ff0e00";
            }
            else if($time == "Criciúma"){
                return "#fdd116";
            }
            else if($time == "Cruzeiro"){
                return "#0063af";
            }
            else if($time == "CSA"){
                return "#041e5c";
            }
            else if($time == "Cuiabá"){
                return "#fde900";
            }
            else if($time == "Defensa y Justicia-ARG"){
                return "#fde900";
            }
            else if($time == "Deportivo Quito-EQU"){
                return "#0d3264";
            }
            else if($time == "Figueirense"){
                return "black";
            }
            else if($time == "Flamengo"){
                return "#ff0e00";
            }
            else if($time == "Fluminense"){
                return "#9f022f";
            }
            else if($time == "Fortaleza"){
                return "#11519b";
            }
            else if($time == "Goiás" && $escudo == "Goiás"){
                return "#048439";
            }
            else if($time == "Goiás" && $escudo == "Goiás2019"){
                return "#006959";
            }
            else if($time == "Grêmio"){
                return "#0d80bf";
            }
            else if($time == "Guarani"){
                return "#048439";
            }
            else if($time == "Independiente Del Valle-EQU"){
                return "#0064b3";
            }
            else if($time == "Internacional"){
                return "#ff0e00";
            }
            else if($time == "Juventude"){
                return "#048439";
            }
            else if($time == "Macaé"){
                return "#41afeb";
            }
            else if($time == "Madureira"){
                return "#fde900";
            }
            else if($time == "Mogi Mirim"){
                return "#ff0e00";
            }
            else if($time == "Nacional-PAR"){
                return "#163fb3";
            }
            else if($time == "Nacional-URU"){
                return "#172b8c";
            }
            else if($time == "Náutico"){
                return "#ff0e00";
            }
            else if($time == "Nova Iguaçu"){
                return "#ea8415";
            }
            else if($time == "Olimpia-PAR"){
                return "white";
            }
            else if($time == "Palmeiras"){
                return "#048439";
            }
            else if($time == "Paraná"){
                return "#2939b4";
            }
            else if($time == "Paysandu"){
                return "#0091cf";
            }
            else if($time == "Ponte Preta"){
                return "white";
            }
            else if($time == "Portuguesa-RJ"){
                return "#048439";
            }
            else if($time == "Red Bull Bragantino"){
                return "#001c44";
            }
            else if($time == "Resende"){
                return "white";
            }
            else if($time == "Santa Cruz"){
                return "white";
            }
            else if($time == "Santos"){
                return "white";
            }
            else if($time == "São Caetano"){
                return "#212568";
            }
            else if($time == "São Paulo"){
                return "#ff0e00";
            }
            else if($time == "Sol de America-PAR"){
                return "#075798";
            }
            else if($time == "Sport"){
                return "#d30a11";
            }
            else if($time == "Vasco"){
                return "white";
            }
            else if($time == "Vitória"){
                return "#ff0e00";
            }
            else if($time == "Volta Redonda"){
                return "#fde900";
            }
        }
        function corLetraTime($time){
            if($time == "América-MG"){
                return "white";
            }
            else if($time == "Americano"){
                return "black";
            }
            else if($time == "Athletico-PR"){
                return "black";
            }
            else if($time == "Atlético Nacional-COL"){
                return "white";
            }
            else if($time == "Atlético-GO"){
                return "black";
            }
            else if($time == "Atlético-MG"){
                return "white";
            }
            else if($time == "Atlético-PR"){
                return "black";
            }
            else if($time == "Audax Italiano-CHI"){
                return "white";
            }
            else if($time == "Avaí"){
                return "white";
            }
            else if($time == "Bahia"){
                return "white";
            }
            else if($time == "Bangu"){
                return "white";
            }
            else if($time == "Barcelona de Guayaquil-EQU"){
                return "#055daa";
            }
            else if($time == "Boa Esporte"){
                return "white";
            }
            else if($time == "Boavista"){
                return "white";
            }
            else if($time == "Bonsucesso"){
                return "white";
            }
            else if($time == "Bragantino"){
                return "black";
            }
            else if($time == "Cabofriense"){
                return "white";
            }
            else if($time == "Ceará"){
                return "white";
            }
            else if($time == "Chapecoense"){
                return "white";
            }
            else if($time == "Colo-Colo-CHI"){
                return "black";
            }
            else if($time == "Corinthians"){
                return "white";
            }
            else if($time == "Coritiba"){
                return "white";
            }
            else if($time == "CRB"){
                return "#white";
            }
            else if($time == "Criciúma"){
                return "black";
            }
            else if($time == "Cruzeiro"){
                return "white";
            }
            else if($time == "CSA"){
                return "white";
            }
            else if($time == "Cuiabá"){
                return "#018036";
            }
            else if($time == "Defensa y Justicia-ARG"){
                return "#018036";
            }
            else if($time == "Deportivo Quito-EQU"){
                return "white";
            }
            else if($time == "Figueirense"){
                return "white";
            }
            else if($time == "Flamengo"){
                return "black";
            }
            else if($time == "Fluminense"){
                return "white";
            }
            else if($time == "Fortaleza"){
                return "white";
            }
            else if($time == "Goiás"){
                return "white";
            }
            else if($time == "Grêmio"){
                return "white";
            }
            else if($time == "Guarani"){
                return "white";
            }
            else if($time == "Independiente Del Valle-EQU"){
                return "white";
            }
            else if($time == "Internacional"){
                return "white";
            }
            else if($time == "Juventude"){
                return "white";
            }
            else if($time == "Macaé"){
                return "white";
            }
            else if($time == "Madureira"){
                return "#13007c";
            }
            else if($time == "Mogi Mirim"){
                return "white";
            }
            else if($time == "Nacional-PAR"){
                return "white";
            }
            else if($time == "Nacional-URU"){
                return "white";
            }
            else if($time == "Náutico"){
                return "white";
            }
            else if($time == "Nova Iguaçu"){
                return "black";
            }
            else if($time == "Olimpia-PAR"){
                return "black";
            }
            else if($time == "Palmeiras"){
                return "white";
            }
            else if($time == "Paraná"){
                return "white";
            }       
            else if($time == "Paysandu"){
                return "white";
            }
            else if($time == "Ponte Preta"){
                return "black";
            }
            else if($time == "Portuguesa-RJ"){
                return "white";
            }
            else if($time == "Red Bull Bragantino"){
                return "white";
            }
            else if($time == "Resende"){
                return "black";
            }
            else if($time == "Santa Cruz"){
                return "red";
            }
            else if($time == "Santos"){
                return "black";
            }
            else if($time == "São Caetano"){
                return "white";
            }
            else if($time == "São Paulo"){
                return "white";
            }
            else if($time == "Sol de America-PAR"){
                return "white";
            }
            else if($time == "Sport"){
                return "black";
            }
            else if($time == "Vasco"){
                return "black";
            }
            else if($time == "Vitória"){
                return "black";
            }
            else if($time == "Volta Redonda"){
                return "black";
            }
        }
        $conn->close();   
        ?>
    </body>
</html>