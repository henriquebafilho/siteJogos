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
        <!--comenta daqui
        <div>
            <form action='Inicio.php' method='post'>
                <p>Filtrar jogos por: </p>
                <select id="select" name="selectopcao">
                    <option>--selecione uma opção--</option>
                    <option value="todos">Todos</option>
                    <option value="adversario">Adversário</option>
                    <option value="campeonato">Campeonato</option>
                    <option value="data">Data Específica</option>
                    <option value="ano">Ano</option>
                    <option value="estadio">Estádio</option>
                    <option value="tecnico">Técnico</option>
                    <option value="numero">Número</option>
                    <option value="vitorias">Vitórias</option>
                    <option value="empates">Empates</option>
                    <option value="derrotas">Derrotas</option>
                </select>
                <div id='pai'>
                    <div id='todos'>
                        <br><input type='submit' name='pesquisar' value='Pesquisar'>
                    </div>
                    <div id='adversario'>
                        <p>Insira o nome do adversário: </p>
                        <input type='text' name='adv' placeholder='Nome do time'><br><br>
                        <input type='submit' name='pesquisar' value='Pesquisar'>
                    </div>
                    <div id='campeonato'>
                        <p>Insira o nome do campeonato: </p>
                        <input type='text' name='camp' placeholder='Nome do campeonato'><br><br>
                        <input type='submit' name='pesquisar' value='Pesquisar'>
                    </div>
                    <div id='data'>
                        <p>Insira a data do jogo: </p>
                        <input type='date' name='data'><br><br>
                        <input type='submit' name='pesquisar' value='Pesquisar'>
                    </div>
                    <div id='ano'>
                        <p>Insira o ano do jogo: </p>
                        <input type='number' name='ano' placeholder='Ano' min='2002' max='2019'><br><br>
                        <input type='submit' name='pesquisar' value='Pesquisar'>
                    </div>
                    <div id='estadio'>
                        <p>Insira o nome do estádio: </p>
                        <input type='text' name='est' placeholder='Nome do estádio'><br><br>
                        <input type='submit' name='pesquisar' value='Pesquisar'>
                    </div>
                    <div id='tecnico'>
                        <p>Insira o nome do técnico: </p>
                        <input type='text' name='tec' placeholder='Nome do técnico'><br><br>
                        <input type='submit' name='pesquisar' value='Pesquisar'>
                    </div>
                    <div id='numero'>
                        <p>Insira o número do jogo: </p>
                        <input type='number' name='num' placeholder='Número' min='0'><br><br>
                        <input type='submit' name='pesquisar' value='Pesquisar'>
                    </div>
                    <div id='vitorias'>
                        <br>
                        <input type='submit' name='vit' value='Pesquisar'>
                    </div>
                    <div id='empates'>
                        <br>
                        <input type='submit' name='emp' value='Pesquisar'>
                    </div>
                    <div id='derrotas'>
                        <br>
                        <input type='submit' name='der' value='Pesquisar'>
                    </div>
                </div>
            </form>  
        </div>
        até aqui-->
        <br>
        <?php
        $select = $_POST['selectopcao'];
        function escreveLinha($qtdJogos, $numero, $row){
            //Cabeçalho
            //número de jogos
            if($numero == $qtdJogos){
                echo "<table>
		<tr>
			<th colspan='1' id='head'>Número</th>
			<th colspan='2' id='head'>Botafogo</th>
			<th colspan='1' id='head'>Placar</th>
			<th colspan='2' id='head'>Adversário</th>
			<th colspan='1' id='head'>Campeonato</th>
			<th colspan='1' id='head'>Data</th>
			<th colspan='1' id='head'>Estádio</th>
		</tr>";
            }
            //Tirando espaços do nome do adversário (para combinar com nomes dos escudos)
            $escudo = str_replace(' ', '', utf8_encode($row["adversario"]));
            //Colocando data dd-mm-yyyy
            $date = new DateTime($row["dataJogo"]);
            //Checando se o id é par ou ímpar pra trocar as cores
            if($numero%2==0){
                $cor = "#232830";
            }else{
                $cor = "black";
            }
            return "<tr><th colspan=1 rowspan=2 style=background-color:$cor>" . $numero . "</th>" ."<th colspan=1 style='background-color: white; border-bottom:  1px solid'><img src=index_files/Botafogo.png width=70 height=70 alt=Imagem /></th>"."<th colspan=1 style=background-color:$cor>Botafogo</th>"."<th colspan=1 rowspan=2 style=background-color:$cor>" . utf8_encode($row["golsBotafogo"]) ." x ". utf8_encode($row["golsAdversario"]) . "</th>". "<th colspan=1 style='background-color: white; border-bottom:  1px solid'><img src=index_files/$escudo.png width=70 height=70 alt=Imagem /></th>" ."<th colspan=1 style=background-color:$cor>"
                . utf8_encode($row["adversario"]). "</th>"
                ."<th colspan=1 style=background-color:$cor>" . utf8_encode($row["campeonato"]) . "</th>"
                ."<th colspan=1 style=background-color:$cor>" . $date -> format( 'd-m-Y' ) . "</th>"
                ."<th colspan=1 style=background-color:$cor>" . "Estádio ". utf8_encode($row["estadio"]) . "</th>"."</tr>"."<tr><th colspan=2 style='text-align:left; vertical-align: text-top;background-color:$cor'>". utf8_encode($row["autorBotafogo"]) ."</th><th colspan=2 style='text-align:left; vertical-align: text-top;background-color:$cor'>". utf8_encode($row["autorAdversario"]) ."</th>"."<th colspan=3 style=background-color:$cor>Técnico: " . utf8_encode($row["tecnico"]) . "</th></tr>";
        }
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
        // Mostrando as informações em cada linha
        while($row = $result->fetch_assoc()) {
            switch($select){
                case "todos":
                    echo escreveLinha($qtdJogos, $numero, $row);
                    $numero = $numero - 1;
                    break;
                case "adversario":
                    $inserido = $_POST['adv'];
                    if($inserido == utf8_encode($row["adversario"])){
                        echo escreveLinha($qtdJogos, $numero, $row);
                        $numero = $numero - 1;
                    }
                    break;
                case "campeonato":
                    $inserido = $_POST['camp'];
                    if($inserido == utf8_encode($row["campeonato"])){
                        echo escreveLinha($qtdJogos, $numero, $row);
                        $numero = $numero - 1;
                    }
                    break;
                case "data":
                    $inserido = $_POST['data']; //2014-08-31
                    if($inserido == utf8_encode($row["dataJogo"])){
                        echo escreveLinha($qtdJogos, $numero, $row);
                        $numero = $numero - 1;
                    }
                    break;
                case "ano":
                    $inserido = $_POST['ano'];
                    //pegando ano da data inserida
                    $dataInserido = explode('-', $inserido);
                    $anoInserido = $dataInserido[0];
                    //pegando ano do jogo
                    $dataJogo = explode('-', $row["dataJogo"]);
                    $anoJogo = $dataJogo[0];
                    if($anoInserido == $anoJogo){
                        echo escreveLinha($qtdJogos, $numero, $row);
                        $numero = $numero - 1;
                    }
                    break;
                case "estadio":
                    $inserido = $_POST['est'];
                    if($inserido == utf8_encode($row["estadio"])){
                        echo escreveLinha($qtdJogos, $numero, $row);
                        $numero = $numero - 1;
                    }
                    break;
                case "tecnico":
                    $inserido = $_POST['tec'];
                    if($inserido == utf8_encode($row["tecnico"])){
                        echo escreveLinha($qtdJogos, $numero, $row);
                        $numero = $numero - 1;
                    }
                    break;
                case "numero":
                    $inserido = $_POST['num'];
                    if($numero == $inserido){
                        echo "<table>
								<tr>
									<th colspan='1' id='head'>Número</th>
									<th colspan='2' id='head'>Botafogo</th>
									<th colspan='1' id='head'>Placar</th>
									<th colspan='2' id='head'>Adversário</th>
									<th colspan='1' id='head'>Campeonato</th>
									<th colspan='1' id='head'>Data</th>
									<th colspan='1' id='head'>Estádio</th>
								</tr>";
                        echo escreveLinha($qtdJogos, $numero, $row);
                        $numero = $numero - 1;
                    }
                    break;
                case "vitorias":
                    $inserido = $_POST['vit'];
                    if($row["golsBotafogo"] > $row["golsAdversario"]){
                        echo escreveLinha($qtdJogos, $numero, $row);
                        $numero = $numero - 1;
                    }
                    break;
                case "empates":
                    $inserido = $_POST['emp'];
                    if($row["golsBotafogo"] == $row["golsAdversario"]){
                        echo escreveLinha($qtdJogos, $numero, $row);
                        $numero = $numero - 1;
                    }
                    break;
                case "derrotas":
                    $inserido = $_POST['der'];
                    if($row["golsBotafogo"] < $row["golsAdversario"]){
                        echo escreveLinha($qtdJogos, $numero, $row);
                        $numero = $numero - 1;
                    }
                    break;
            }
        }
        if($numero == $qtdJogos){
            echo "<p>Nenhum jogo encontrado</p>";
        }
        echo "</table>";
        $conn->close();   
        ?>
    </body>
</html>