<!DOCTYPE html>
<html>
    <head>
        <title>
            Jogos do Botafogo que fui
        </title>
        <meta charset="UTF-8">
        <style>
            body{
                background-color: black;
                color: white;
            }
            table {
                border: 2px solid white;
                width: 100%;
                color: white;
                font-family: monospace;
                text-align: center;
            } 
            th {
                background-color: black;
                color: white;
                text-align: center;
                border: 1px solid white;
            }
            tr{
                border: 1px solid white;
            }
        </style>

    </head>
    <body>
        <table>
            <tr>
                <th colspan="2">Número</th>
                <th colspan="2">Adversário</th>
                <th colspan="2">Gols do Botafogo</th>
                <th colspan="2">Gols do Adversário</th>
                <th colspan="2">VDE</th>
                <th colspan="2">Campeonato</th>
                <th colspan="2">Data</th>
                <th colspan="2">Estádio</th>
                <th colspan="2">Técnico</th>
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
                    echo "<tr><th colspan=2>" . $row["id"]. "</th>" ."<th colspan=2>"
                        . $row["adversario"]. "</th><th colspan=2>" . $row["golsBotafogo"] . "</th>"
                        ."<th colspan=2>" . $row["golsAdversario"] . "</th>"
                        ."<th colspan=2>" . $row["VDE"] . "</th>"
                        ."<th colspan=2>" . $row["campeonato"] . "</th>"
                        ."<th colspan=2>" . $row["dataJogo"] . "</th>"
                        ."<th colspan=2>" . $row["estadio"] . "</th>"
                        ."<th colspan=2>" . $row["tecnico"] . "</th>"
                        ."</tr>";
                }
                echo "</table>";
            } else { echo "0 results"; }
            $conn->close();
            ?>
        </table>
    </body>
</html>