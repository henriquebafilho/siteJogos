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
                            <th colspan='1' width=400 id='head'>Placar</th>
                            <th colspan='1' id='head'>Visitante</th>
                        </tr>";
            }
            //Tirando espaços do nome do adversário (para combinar com nomes dos escudos)
            $escudo = str_replace(' ', '', utf8_encode($row["adversario"]));
            if(utf8_encode($row["adversario"]) == "Goiás" && explode('-', $row["dataJogo"])[0] >= 2019){
               $escudo = "Goiás2019";
            } else if(utf8_encode($row["adversario"]) == "Internacional" && explode('-', $row["dataJogo"])[0] < 2009){
               $escudo = "Internacional2009";
            } else if(utf8_encode($row["adversario"]) == "Náutico" && explode('-', $row["dataJogo"])[0] <= 2008){
               $escudo = "Náutico2008";
            }
            else if(utf8_encode($row["adversario"]) == "Flamengo" && explode('-', $row["dataJogo"])[0] >= 2018){
               $escudo = "Flamengo2018";
            }
            else if(utf8_encode($row["adversario"]) == "Resende" && explode('-', $row["dataJogo"])[0] >= 2020){
               $escudo = "Resende2020";
            }
            //Colocando data dd-mm-yyyy
            $date = new DateTime($row["dataJogo"]);
            
            //Colocando cores no fundo e letras do time
            $corFundo = corFundoTime(utf8_encode($row["adversario"]));
            $corLetra = corLetraTime(utf8_encode($row["adversario"]));
            
            //Checando se o id é par ou ímpar pra trocar as cores
            if($numero%2==0){
                $cor = "#232830";
            }else{
                $cor = "black";
            }
            if($row["mandante"] == 1){
                return "<tr><th colspan=1 rowspan=3 style=width:50px;background-color:$cor>" . $numero . "</th>" . "<th colspan=3 rowspan=1 style='background-color:$cor; width:400px;'>". $date -> format( 'd-m-Y' ). " | ". "Estádio ". utf8_encode($row["estadio"]). " | ". utf8_encode($row["campeonato"]). "</th>"."<tr><th colspan=1 rowspan=1 style='background-color:black; text-align: center;'><img src=index_files/Botafogo.png width=70 height=70 alt=Imagem/><br>Botafogo</th>"."<th colspan=1 rowspan=1 style=background-color:$cor>" . utf8_encode($row["golsBotafogo"]) ." x ". utf8_encode($row["golsAdversario"]) . "</th>" . "<th colspan=1 rowspan=1 style='color:$corLetra; background-color:$corFundo;'><img src=index_files/$escudo.png width=70 height=70 alt=Imagem /><br>". utf8_encode($row["adversario"])  . "</th>". "<tr><th colspan=1 style=background-color:$cor;>". utf8_encode($row["autorBotafogo"]) ."</th>"."<th colspan=1 style=background-color:$cor;>". "Técnico: ". utf8_encode($row["tecnico"]) . "</th>"."<th colspan=1 style=background-color:$cor;>". utf8_encode($row["autorAdversario"])."</th><tr>";
            } else {
                return "<tr><th colspan=1 rowspan=3 style=width:50px;background-color:$cor>" . $numero . "</th>" . "<th colspan=3 rowspan=1 style='background-color:$cor; width:400px;'>". $date -> format( 'd-m-Y' ). " | ". "Estádio ". utf8_encode($row["estadio"]). " | ". utf8_encode($row["campeonato"]). "</th>"."<tr><th colspan=1 style='color:$corLetra; background-color:$corFundo;'><img src=index_files/$escudo.png width=70 height=70 alt=Imagem /><br>". utf8_encode($row["adversario"]). "</th>" . "<th colspan=1 rowspan=1 style=background-color:$cor>" . utf8_encode($row["golsAdversario"]) ." x ". utf8_encode($row["golsBotafogo"]) . "</th>"."<th colspan=1 style=background-color:black><img src=index_files/Botafogo.png width=70 height=70 alt=Imagem /><br>Botafogo</th>" . "</th>"."<tr><th colspan=1 style=background-color:$cor;>". utf8_encode($row["autorAdversario"]) ."</th>"."<th colspan=1 style=background-color:$cor;>". "Técnico: ". utf8_encode($row["tecnico"]) . "</th>"."<th colspan=1 style=background-color:$cor;>". utf8_encode($row["autorBotafogo"])."</th><tr>";
            }
        }
        function corFundoTime($time){
            return "red";
        }
        function corLetraTime($time){
            return "white";
        }
        $conn->close();   
        ?>
    </body>
</html>