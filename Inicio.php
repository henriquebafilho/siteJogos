<!DOCTYPE html>
<html>
    <head>
        <title>
            Jogos do Botafogo que fui
        </title>
        <meta http-equiv="content-type" content="text/html;charset=utf-8" />
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
                border-left: 1px solid white;
                border-bottom: 1px solid white;
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
                <th colspan="2" id="head">Gols do Botafogo</th>
                <th colspan="2" id="head">Gols do Adversário</th>
                <th colspan="2" id="head">VDE</th>
                <th colspan="2" id="head">Campeonato</th>
                <th colspan="2" id="head">Data</th>
                <th colspan="2" id="head">Estádio</th>
                <th colspan="2" id="head">Técnico</th>
            </tr>
            <?php
            header('Content-Type: text/html; charset=utf-8');
            $conn = mysqli_connect("localhost", "root", "", "jogos");
            // Check connection
            if ($conn->connect_error) {
                die("Connection failed: " . $conn->connect_error);
            } 
            $sql = "SELECT * FROM jogo";
            $result = $conn->query($sql);
            if ($result->num_rows > 0) {
                // output data of each row
                while($row = $result->fetch_assoc()) {
                    switch(utf8_encode($row["adversario"])){
                        case "Grêmio":
                            echo "<tr><th colspan=2>" . utf8_encode($row["id"]). "</th>" . "<th colspan=2 style='background-color: white'>" . "<img src=Times/Grêmio.png width=70 height=70 alt=Imagem />" . "</th>" ."<th colspan=2>"
                                . utf8_encode($row["adversario"]). "</th><th colspan=2>" . utf8_encode($row["golsBotafogo"]) . "</th>"
                                ."<th colspan=2>" . utf8_encode($row["golsAdversario"]) . "</th>"
                                ."<th colspan=2>" . utf8_encode($row["VDE"]) . "</th>"
                                ."<th colspan=2>" . utf8_encode($row["campeonato"]) . "</th>"
                                ."<th colspan=2>" . utf8_encode($row["dataJogo"]) . "</th>"
                                ."<th colspan=2>" . utf8_encode($row["estadio"]) . "</th>"
                                ."<th colspan=2>" . utf8_encode($row["tecnico"]) . "</th>"
                                ."</tr>";
                            break;
                        case "Atlético-PR":
                            echo "<tr><th colspan=2>" . utf8_encode($row["id"]). "</th>" . "<th colspan=2 style='background-color: white'>" . "<img src=Times/Atlético-PR.png width=70 height=70 alt=Imagem />" . "</th>" ."<th colspan=2>"
                                . utf8_encode($row["adversario"]). "</th><th colspan=2>" . utf8_encode($row["golsBotafogo"]) . "</th>"
                                ."<th colspan=2>" . utf8_encode($row["golsAdversario"]) . "</th>"
                                ."<th colspan=2>" . utf8_encode($row["VDE"]) . "</th>"
                                ."<th colspan=2>" . utf8_encode($row["campeonato"]) . "</th>"
                                ."<th colspan=2>" . utf8_encode($row["dataJogo"]) . "</th>"
                                ."<th colspan=2>" . utf8_encode($row["estadio"]) . "</th>"
                                ."<th colspan=2>" . utf8_encode($row["tecnico"]) . "</th>"
                                ."</tr>";
                            break;
                        case "Criciúma":
                            echo "<tr><th colspan=2>" . utf8_encode($row["id"]). "</th>" . "<th colspan=2 style='background-color: white'>" . "<img src=Times/Criciúma.png width=70 height=70 alt=Imagem />" . "</th>" ."<th colspan=2>"
                                . utf8_encode($row["adversario"]). "</th><th colspan=2>" . utf8_encode($row["golsBotafogo"]) . "</th>"
                                ."<th colspan=2>" . utf8_encode($row["golsAdversario"]) . "</th>"
                                ."<th colspan=2>" . utf8_encode($row["VDE"]) . "</th>"
                                ."<th colspan=2>" . utf8_encode($row["campeonato"]) . "</th>"
                                ."<th colspan=2>" . utf8_encode($row["dataJogo"]) . "</th>"
                                ."<th colspan=2>" . utf8_encode($row["estadio"]) . "</th>"
                                ."<th colspan=2>" . utf8_encode($row["tecnico"]) . "</th>"
                                ."</tr>";
                            break;
                        case "Goiás":
                            echo "<tr><th colspan=2>" . utf8_encode($row["id"]). "</th>" . "<th colspan=2 style='background-color: white'>" . "<img src=Times/Goiás.png width=70 height=70 alt=Imagem />" . "</th>" ."<th colspan=2>"
                                . utf8_encode($row["adversario"]). "</th><th colspan=2>" . utf8_encode($row["golsBotafogo"]) . "</th>"
                                ."<th colspan=2>" . utf8_encode($row["golsAdversario"]) . "</th>"
                                ."<th colspan=2>" . utf8_encode($row["VDE"]) . "</th>"
                                ."<th colspan=2>" . utf8_encode($row["campeonato"]) . "</th>"
                                ."<th colspan=2>" . utf8_encode($row["dataJogo"]) . "</th>"
                                ."<th colspan=2>" . utf8_encode($row["estadio"]) . "</th>"
                                ."<th colspan=2>" . utf8_encode($row["tecnico"]) . "</th>"
                                ."</tr>";
                            break;
                        case "Paraná":
                            echo "<tr><th colspan=2>" . utf8_encode($row["id"]). "</th>" . "<th colspan=2 style='background-color: white'>" . "<img src=Times/Paraná.png width=70 height=70 alt=Imagem />" . "</th>" ."<th colspan=2>"
                                . utf8_encode($row["adversario"]). "</th><th colspan=2>" . utf8_encode($row["golsBotafogo"]) . "</th>"
                                ."<th colspan=2>" . utf8_encode($row["golsAdversario"]) . "</th>"
                                ."<th colspan=2>" . utf8_encode($row["VDE"]) . "</th>"
                                ."<th colspan=2>" . utf8_encode($row["campeonato"]) . "</th>"
                                ."<th colspan=2>" . utf8_encode($row["dataJogo"]) . "</th>"
                                ."<th colspan=2>" . utf8_encode($row["estadio"]) . "</th>"
                                ."<th colspan=2>" . utf8_encode($row["tecnico"]) . "</th>"
                                ."</tr>";
                            break;
                        case "Náutico":
                            echo "<tr><th colspan=2>" . utf8_encode($row["id"]). "</th>" . "<th colspan=2 style='background-color: white'>" . "<img src=Times/Náutico.png width=70 height=70 alt=Imagem />" . "</th>" ."<th colspan=2>"
                                . utf8_encode($row["adversario"]). "</th><th colspan=2>" . utf8_encode($row["golsBotafogo"]) . "</th>"
                                ."<th colspan=2>" . utf8_encode($row["golsAdversario"]) . "</th>"
                                ."<th colspan=2>" . utf8_encode($row["VDE"]) . "</th>"
                                ."<th colspan=2>" . utf8_encode($row["campeonato"]) . "</th>"
                                ."<th colspan=2>" . utf8_encode($row["dataJogo"]) . "</th>"
                                ."<th colspan=2>" . utf8_encode($row["estadio"]) . "</th>"
                                ."<th colspan=2>" . utf8_encode($row["tecnico"]) . "</th>"
                                ."</tr>";
                            break;
                        case "Atlético-MG":
                            echo "<tr><th colspan=2>" . utf8_encode($row["id"]). "</th>" . "<th colspan=2 style='background-color: white'>" . "<img src=Times/Atlético-MG.png width=70 height=70 alt=Imagem />" . "</th>" ."<th colspan=2>"
                                . utf8_encode($row["adversario"]). "</th><th colspan=2>" . utf8_encode($row["golsBotafogo"]) . "</th>"
                                ."<th colspan=2>" . utf8_encode($row["golsAdversario"]) . "</th>"
                                ."<th colspan=2>" . utf8_encode($row["VDE"]) . "</th>"
                                ."<th colspan=2>" . utf8_encode($row["campeonato"]) . "</th>"
                                ."<th colspan=2>" . utf8_encode($row["dataJogo"]) . "</th>"
                                ."<th colspan=2>" . utf8_encode($row["estadio"]) . "</th>"
                                ."<th colspan=2>" . utf8_encode($row["tecnico"]) . "</th>"
                                ."</tr>";
                            break;
                        case "Vitória":
                            echo "<tr><th colspan=2>" . utf8_encode($row["id"]). "</th>" . "<th colspan=2 style='background-color: white'>" . "<img src=Times/Vitória.png width=70 height=70 alt=Imagem />" . "</th>" ."<th colspan=2>"
                                . utf8_encode($row["adversario"]). "</th><th colspan=2>" . utf8_encode($row["golsBotafogo"]) . "</th>"
                                ."<th colspan=2>" . utf8_encode($row["golsAdversario"]) . "</th>"
                                ."<th colspan=2>" . utf8_encode($row["VDE"]) . "</th>"
                                ."<th colspan=2>" . utf8_encode($row["campeonato"]) . "</th>"
                                ."<th colspan=2>" . utf8_encode($row["dataJogo"]) . "</th>"
                                ."<th colspan=2>" . utf8_encode($row["estadio"]) . "</th>"
                                ."<th colspan=2>" . utf8_encode($row["tecnico"]) . "</th>"
                                ."</tr>";
                            break;
                        case "Ceará":
                            echo "<tr><th colspan=2>" . utf8_encode($row["id"]). "</th>" . "<th colspan=2 style='background-color: white'>" . "<img src=Times/Ceará.png width=70 height=70 alt=Imagem />" . "</th>" ."<th colspan=2>"
                                . utf8_encode($row["adversario"]). "</th><th colspan=2>" . utf8_encode($row["golsBotafogo"]) . "</th>"
                                ."<th colspan=2>" . utf8_encode($row["golsAdversario"]) . "</th>"
                                ."<th colspan=2>" . utf8_encode($row["VDE"]) . "</th>"
                                ."<th colspan=2>" . utf8_encode($row["campeonato"]) . "</th>"
                                ."<th colspan=2>" . utf8_encode($row["dataJogo"]) . "</th>"
                                ."<th colspan=2>" . utf8_encode($row["estadio"]) . "</th>"
                                ."<th colspan=2>" . utf8_encode($row["tecnico"]) . "</th>"
                                ."</tr>";
                            break;
                        case "América-MG":
                            echo "<tr><th colspan=2>" . utf8_encode($row["id"]). "</th>" . "<th colspan=2 style='background-color: white'>" . "<img src=Times/América-MG.png width=70 height=70 alt=Imagem />" . "</th>" ."<th colspan=2>"
                                . utf8_encode($row["adversario"]). "</th><th colspan=2>" . utf8_encode($row["golsBotafogo"]) . "</th>"
                                ."<th colspan=2>" . utf8_encode($row["golsAdversario"]) . "</th>"
                                ."<th colspan=2>" . utf8_encode($row["VDE"]) . "</th>"
                                ."<th colspan=2>" . utf8_encode($row["campeonato"]) . "</th>"
                                ."<th colspan=2>" . utf8_encode($row["dataJogo"]) . "</th>"
                                ."<th colspan=2>" . utf8_encode($row["estadio"]) . "</th>"
                                ."<th colspan=2>" . utf8_encode($row["tecnico"]) . "</th>"
                                ."</tr>";
                            break;
                        case "Macaé":
                            echo "<tr><th colspan=2>" . utf8_encode($row["id"]). "</th>" . "<th colspan=2 style='background-color: white'>" . "<img src=Times/Macaé.png width=70 height=70 alt=Imagem />" . "</th>" ."<th colspan=2>"
                                . utf8_encode($row["adversario"]). "</th><th colspan=2>" . utf8_encode($row["golsBotafogo"]) . "</th>"
                                ."<th colspan=2>" . utf8_encode($row["golsAdversario"]) . "</th>"
                                ."<th colspan=2>" . utf8_encode($row["VDE"]) . "</th>"
                                ."<th colspan=2>" . utf8_encode($row["campeonato"]) . "</th>"
                                ."<th colspan=2>" . utf8_encode($row["dataJogo"]) . "</th>"
                                ."<th colspan=2>" . utf8_encode($row["estadio"]) . "</th>"
                                ."<th colspan=2>" . utf8_encode($row["tecnico"]) . "</th>"
                                ."</tr>";
                            break;
                        case "Avaí":
                            echo "<tr><th colspan=2>" . utf8_encode($row["id"]). "</th>" . "<th colspan=2 style='background-color: white'>" . "<img src=Times/Avaí.png width=70 height=70 alt=Imagem />" . "</th>" ."<th colspan=2>"
                                . utf8_encode($row["adversario"]). "</th><th colspan=2>" . utf8_encode($row["golsBotafogo"]) . "</th>"
                                ."<th colspan=2>" . utf8_encode($row["golsAdversario"]) . "</th>"
                                ."<th colspan=2>" . utf8_encode($row["VDE"]) . "</th>"
                                ."<th colspan=2>" . utf8_encode($row["campeonato"]) . "</th>"
                                ."<th colspan=2>" . utf8_encode($row["dataJogo"]) . "</th>"
                                ."<th colspan=2>" . utf8_encode($row["estadio"]) . "</th>"
                                ."<th colspan=2>" . utf8_encode($row["tecnico"]) . "</th>"
                                ."</tr>";
                            break;
                        case "Atlético-GO":
                            echo "<tr><th colspan=2>" . utf8_encode($row["id"]). "</th>" . "<th colspan=2 style='background-color: white'>" . "<img src=Times/Atlético-GO.png width=70 height=70 alt=Imagem />" . "</th>" ."<th colspan=2>"
                                . utf8_encode($row["adversario"]). "</th><th colspan=2>" . utf8_encode($row["golsBotafogo"]) . "</th>"
                                ."<th colspan=2>" . utf8_encode($row["golsAdversario"]) . "</th>"
                                ."<th colspan=2>" . utf8_encode($row["VDE"]) . "</th>"
                                ."<th colspan=2>" . utf8_encode($row["campeonato"]) . "</th>"
                                ."<th colspan=2>" . utf8_encode($row["dataJogo"]) . "</th>"
                                ."<th colspan=2>" . utf8_encode($row["estadio"]) . "</th>"
                                ."<th colspan=2>" . utf8_encode($row["tecnico"]) . "</th>"
                                ."</tr>";
                            break;
                        default: echo "<tr><th colspan=2>" . utf8_encode($row["id"]). "</th>" . "<th colspan=2 style='background-color: white'>" . "<img src=Times/$row[adversario] width=70 height=70 alt=Imagem />" . "</th>" ."<th colspan=2>"
                            . utf8_encode($row["adversario"]). "</th><th colspan=2>" . utf8_encode($row["golsBotafogo"]) . "</th>"
                            ."<th colspan=2>" . utf8_encode($row["golsAdversario"]) . "</th>"
                            ."<th colspan=2>" . utf8_encode($row["VDE"]) . "</th>"
                            ."<th colspan=2>" . utf8_encode($row["campeonato"]) . "</th>"
                            ."<th colspan=2>" . utf8_encode($row["dataJogo"]) . "</th>"
                            ."<th colspan=2>" . utf8_encode($row["estadio"]) . "</th>"
                            ."<th colspan=2>" . utf8_encode($row["tecnico"]) . "</th>"
                            ."</tr>";
                            break;
                    }
                }
                echo "</table>";
            } else { echo "0 results"; }
            $conn->close();
            ?>
        </table>
    </body>
</html>