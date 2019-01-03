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
                <th colspan="1" id="head">Número</th>
                <th colspan="2" id="head">Botafogo</th>
                <th colspan="1" id="head">Placar</th>
                <th colspan="2" id="head">Adversário</th>
                <th colspan="1" id="head">Campeonato</th>
                <th colspan="1" id="head">Data</th>
                <th colspan="1" id="head">Estádio</th>
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
                    //Tirando espaços do nome do adversário (para combinar com nomes dos escudos)
                    $escudo = str_replace(' ', '', utf8_encode($row["adversario"]));
                    //Colocando data dd-mm-yyyy
                    $date = new DateTime($row["dataJogo"]);
                    //Desenhando linhas
                    echo "<tr><th colspan=1 rowspan=2>" . utf8_encode($row["id"]). "</th>" ."<th colspan=1 style='background-color: white; border-bottom:  1px solid black'><img src=index_files/Botafogo.png width=70 height=70 alt=Imagem /></th>"."<th colspan=1>Botafogo</th>"."<th colspan=1>" . utf8_encode($row["golsBotafogo"]) ." x ". utf8_encode($row["golsAdversario"]) . "</th>". "<th colspan=1 style='background-color: white; border-bottom:  1px solid black'><img src=index_files/$escudo.png width=70 height=70 alt=Imagem /></th>" ."<th colspan=1>"
                        . utf8_encode($row["adversario"]). "</th>"
                        ."<th colspan=1>" . utf8_encode($row["campeonato"]) . "</th>"
                        ."<th colspan=1>" . $date -> format( 'd-m-Y' ) . "</th>"
                        ."<th colspan=1>" . utf8_encode($row["estadio"]) . "</th>"."</tr>";
                    //Mostrando jogadores que fizeram gol de acordo com o número de gols
                    echo "<tr><th colspan=2 style='text-align:left; vertical-align: text-top;'>". utf8_encode($row["autorBotafogo"]) ."</th><th colspan=1></th><th colspan=2 style='text-align:left; vertical-align: text-top;'>". utf8_encode($row["autorAdversario"]) ."</th>";
                    //Nome do técnico
                    echo "<th colspan=3>Técnico: " . utf8_encode($row["tecnico"]) . "</th></tr>";
                }
                echo "</table>";
            } else { echo "0 results"; }
            $conn->close();
            ?>
        </table>
    </body>
</html>