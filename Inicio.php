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
            } 
            th{
                color: white;
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
        <div>
            <p>Filtrar jogos por: </p>
            <select id="select" name="select">
                <option value="todos">Todos</option>
                <option value="adversario">Adversário</option>
                <option value="campeonato">Campeonato</option>
                <option value="data">Data Específica</option>
                <option value="ano">Ano</option>
                <option value="estadio">Estádio</option>
                <option value="tecnico">Técnico</option>
                <option value="numero">Número</option>
            </select>
            <div id='pai'>
                <div id='adversario'>
                    <p>Insira o nome do adversário: </p>
                    <input type='text' name='inserido' placeholder='Nome do time'><br><br>
                    <input type='submit' name='pesquisar' value='Pesquisar'><br><br>
                </div>
                <div id='campeonato'>
                    <p>Insira o nome do campeonato: </p>
                    <input type='text' name='inserido' placeholder='Nome do campeonato'><br><br>
                    <input type='submit' name='pesquisar' value='Pesquisar'><br><br>
                </div>
                <div id='data'>
                    <p>Insira a data do jogo: </p>
                    <input type='date' name='inserido'><br><br>
                    <input type='submit' name='pesquisar' value='Pesquisar'><br><br>
                </div>
                <div id='ano'>
                    <p>Insira o ano do jogo: </p>
                    <input type='number' name='inserido' placeholder='Ano' min='2002' max='2019'><br><br>
                    <input type='submit' name='pesquisar' value='Pesquisar'><br><br>
                </div>
                <div id='estadio'>
                    <p>Insira o nome do estádio: </p>
                    <input type='text' name='inserido' placeholder='Nome do estádio'><br><br>
                    <input type='submit' name='pesquisar' value='Pesquisar'><br><br>
                </div>
                <div id='tecnico'>
                    <p>Insira o nome do técnico: </p>
                    <input type='text' name='inserido' placeholder='Nome do técnico'><br><br>
                    <input type='submit' name='pesquisar' value='Pesquisar'><br><br>
                </div>
                <div id='numero'>
                    <p>Insira o número do jogo: </p>
                    <input type='number' name='inserido' placeholder='Número' min='0'><br><br>
                    <input type='submit' name='pesquisar' value='Pesquisar'><br><br>
                </div>
            </div>
        </div>
        <br><br>
        <table>
            <tr>
                <th colspan='1' id='head'>Número</th>
                <th colspan='2' id='head'>Botafogo</th>
                <th colspan='1' id='head'>Placar</th>
                <th colspan='2' id='head'>Adversário</th>
                <th colspan='1' id='head'>Campeonato</th>
                <th colspan='1' id='head'>Data</th>
                <th colspan='1' id='head'>Estádio</th>
            </tr>
            <?php
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
                    $numero = $numero + 1;
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