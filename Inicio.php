<!DOCTYPE html>
<html>
    <head>
        <title>
            Jogos do Botafogo que fui
        </title>
        <meta http-equiv="content-type" content="text/html;charset=utf-8" />
        <link rel="shortcut icon" href="Times/favicon.ico" type="image/x-icon">
        <link rel="icon" href="Times/favicon.ico" type="image/x-icon">
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
            } 
            th{
                color: white;
                text-align: center;
                border: 1px solid white;
                column-span: 2;
            }
        </style>
    </head>
    <body>
        <h1 style="color: white; text-align: center; font-family: Quicksand;">Jogos Que Fui</h1>
        <h4 style="color: white; text-align: center; font-family: Quicksand;">Por Henrique Filho</h4>
        <table>
            <tr>
                <th colspan="1" id="head">Número</th>
                <th colspan="2" id="head">Botafogo</th>
                <th colspan="1" id="head">Placar</th>
                <th colspan="2" id="head">Adversário</th>
                <th colspan="1" id="head">Campeonato</th>
                <th colspan="1" id="head">Data</th>
                <th colspan="1" id="head">Estádio</th>
            </tr>
            <button type="submit" onclick="<?php getTime('nheeeeee'); ?>">Clicaeee</button>
            <?php
            function getTime($time){
                echo $time;
                return $time;
            }
            header('Content-Type: text/html; charset=utf-8');
            $conn = mysqli_connect("localhost", "root", "", "jogos");
            // Checando conexão
            if ($conn->connect_error) {
                die("Connection failed: " . $conn->connect_error);
            } 
            $sql = "SELECT * FROM jogo";
            $result = $conn->query($sql);
            if ($result->num_rows > 0) {
                $numero = 0; //número de jogos
                // Mostrando as informações em cada linha
                while($row = $result->fetch_assoc()) {
                    $numero = $numero + 1;
                    //Tirando espaços do nome do adversário (para combinar com nomes dos escudos)
                    $escudo = str_replace(' ', '', utf8_encode($row["adversario"]));
                    //Colocando data dd-mm-yyyy
                    $date = new DateTime($row["dataJogo"]);
                    //Checando se o id é par ou ímpar pra trocar as cores
                    $cor;
                    if($numero%2==0){
                        $cor = "#232830";
                    }else{
                        $cor = "black";
                    }
                    echo "<tr><th colspan=1 rowspan=2 style=background-color:$cor>" . $numero . "</th>" ."<th colspan=1 style='background-color: white; border-bottom:  1px solid'><img src=index_files/Botafogo.png width=70 height=70 alt=Imagem /></th>"."<th colspan=1 style=background-color:$cor>Botafogo</th>"."<th colspan=1 rowspan=2 style=background-color:$cor>" . utf8_encode($row["golsBotafogo"]) ." x ". utf8_encode($row["golsAdversario"]) . "</th>". "<th colspan=1 style='background-color: white; border-bottom:  1px solid'><img src=index_files/$escudo.png width=70 height=70 alt=Imagem /></th>" ."<th colspan=1 style=background-color:$cor>"
                        . utf8_encode($row["adversario"]). "</th>"
                        ."<th colspan=1 style=background-color:$cor>" . utf8_encode($row["campeonato"]) . "</th>"
                        ."<th colspan=1 style=background-color:$cor>" . $date -> format( 'd-m-Y' ) . "</th>"
                        ."<th colspan=1 style=background-color:$cor>" . "Estádio ". utf8_encode($row["estadio"]) . "</th>"."</tr>";
                    //Mostrando jogadores que fizeram gol de acordo com o número de gols
                    echo "<tr><th colspan=2 style='text-align:left; vertical-align: text-top;background-color:$cor'>". utf8_encode($row["autorBotafogo"]) ."</th><th colspan=2 style='text-align:left; vertical-align: text-top;background-color:$cor'>". utf8_encode($row["autorAdversario"]) ."</th>";
                    //Nome do técnico
                    echo "<th colspan=3 style=background-color:$cor>Técnico: " . utf8_encode($row["tecnico"]) . "</th></tr>";
                }
                echo "</table>";
            } else { echo "0 results"; }
            $conn->close();
            ?>
        </table>
    </body>
</html>