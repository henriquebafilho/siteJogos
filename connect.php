<?php
DEFINE ('USER','root');
DEFINE ('PASS','');
DEFINE ('HOST','localhost');
DEFINE ('DSBA','project');

$dbcon = mysqli_connect(HOST, USER, PASS) or die ('Error connection<strong>'.mysql_error().'</strong>');

?>

