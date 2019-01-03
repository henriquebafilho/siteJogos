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
            th {
                background-color: black;
                color: white;
                text-align: center;
                border: 1px solid white;
                column-span: 2;
            }
            tr:nth-child(even) {background-color: #f2f2f2; color: black}
        </style>
    </head>
    <body>
        <table>
            <tr>
                <th colspan="2" id="head">Número</th>
                <th colspan="2" id="head">Escudo</th>
                <th colspan="2" id="head">Adversário</th>
                <th colspan="2" id="head">VDE</th>
                <th colspan="2" id="head">Placar</th>
                <th colspan="2" id="head">Campeonato</th>
                <th colspan="2" id="head">Data</th>
                <th colspan="2" id="head">Estádio</th>
                <th colspan="2" id="head">Técnico</th>
            </tr>
            <?php
            header('Content-Type: text/html; charset=utf-8');
            $conn = mysqli_connect("localhost", "root", "", "jogos");
            // Checando conexão
            if ($conn->connect_error) {
                die("Connection failed: " . $conn->connect_error);
            } 
            $sql = "SELECT * FROM jogo";
            $result = $conn->query($sql);
            if ($result->num_rows > 0) {
                // Mostrando as informações em cada linha
                while($row = $result->fetch_assoc()) {
                    $escudo = str_replace(' ', '', utf8_encode($row["adversario"]));
                    echo "<tr><th colspan=2>" . utf8_encode($row["id"]). "</th>" . "<th colspan=2 style='background-color: white; border-bottom:  1px solid black'>" . "<img src=index_files/$escudo.png width=70 height=70 alt=Imagem />" . "</th>" ."<th colspan=2>"
                        . utf8_encode($row["adversario"]). "</th>"."<th colspan=2>" . utf8_encode($row["VDE"]) . "</th>"
                        ."<th colspan=2>" . utf8_encode($row["golsBotafogo"]) ." x ". utf8_encode($row["golsAdversario"]) . "</th>"
                        ."<th colspan=2>" . utf8_encode($row["campeonato"]) . "</th>"
                        ."<th colspan=2>" . utf8_encode($row["dataJogo"]) . "</th>"
                        ."<th colspan=2>" . utf8_encode($row["estadio"]) . "</th>"
                        ."<th colspan=2>" . utf8_encode($row["tecnico"]) . "</th>"
                        ."</tr>";
                    //Mostrando jogadores que fizeram gol de acordo com o número de gols
                    $golsBotafogo;
                    $golsAdversario;
                    if($row["golsBotafogo"]>0 && $row["golsAdversario"]>0){
                        if($row["golsBotafogo"]==1){
                            $golsBotafogo = "Gol do Botafogo"; 
                        }else{
                            $golsBotafogo = "Gols do Botafogo"; 
                        }
                        if($row["golsAdversario"]==1){
                            $golsAdversario = "Gol do ".utf8_encode($row["adversario"]);
                        }else{
                            $golsAdversario = "Gols do ".utf8_encode($row["adversario"]);
                        }
                        echo "<tr><th colspan=5 style='text-align:left'>$golsBotafogo<p style='border: 1px solid white'>pipipkopsdfaopkfdaskop</p></th><th colspan=5 style='text-align:left'>$golsAdversario<p style='border: 1px solid white'>pipipi</p></th></tr>";
                    }else if($row["golsBotafogo"]==0 && $row["golsAdversario"]>0){
                        if($row["golsAdversario"]==1){
                            $golsAdversario = "Gol do ".utf8_encode($row["adversario"]);
                        }else{
                            $golsAdversario = "Gols do ".utf8_encode($row["adversario"]);
                        }
                        echo "<tr><th colspan=5 style='text-align:left'>$golsAdversario<p style='border: 1px solid white'>pipipi</p></th></tr>";
                    }else if($row["golsBotafogo"]>0 && $row["golsAdversario"]==0){
                        if($row["golsBotafogo"]==1){
                            $golsBotafogo = "Gol do Botafogo";
                        }else{
                            $golsBotafogo = "Gols do Botafogo";
                        }
                        echo "<tr><th colspan=5 style='text-align:left'>$golsBotafogo<p style='border: 1px solid white'>pipipi</p></th></tr>";
                    }
                }
                echo "</table>";
            } else { echo "0 results"; }
            $conn->close();
            ?>
        </table>
    </body>
</html>