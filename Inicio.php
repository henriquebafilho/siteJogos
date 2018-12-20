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
                <th>Número</th>
                <th>Escudo</th>
                <th>Adversário</th>
                <th>Gols do Botafogo</th>
                <th>Gols do Adversário</th>
                <th>VDE</th>
                <th>Campeonato</th>
                <th>Data</th>
                <th>Estádio</th>
                <th>Técnico</th>
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
                    echo "<tr><td>" . $row["id"]. "</td><td>" . $row["escudo"] . "</td><td>"
                        . $row["adversario"]. "</td><td>" . $row["golsBotafogo"] . "</td><td>"
                        ."</td><td>" . $row["golsAdversario"] . "</td><td>"
                        ."</td><td>" . $row["VDE"] . "</td><td>"
                        ."</td><td>" . $row["campeonato"] . "</td><td>"
                        ."</td><td>" . $row["dataJogo"] . "</td><td>"
                        ."</td><td>" . $row["estadio"] . "</td><td>"
                        ."</td><td>" . $row["tecnico"] . "</td><td>"
                        ."</td></tr>";
                }
                echo "</table>";
            } else { echo "0 results"; }
            $conn->close();
            ?>
        </table>
    </body>
</html>