<?php

session_start();

/*echo file_get_contents('test.txt');

file_put_contents('test.txt', 'Szöveg2');

echo '<br><br>';
echo file_get_contents('test.txt');

$adatok = json_decode(file_get_contents('lista.json'));

var_dump($adatok);

$adatok[0] = [
    'nev'=>"asd",
    "targykod"=>"2"
];

file_put_contents('lista.json', json_encode($adatok, JSON_PRETTY_PRINT));*/

$muzsika = json_decode(file_get_contents('lista.json'));



?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lejátszási Lista</title>
</head>
<body>
    <h1>Lejátszási Lista</h1>
    <table id='table'>
    </table>
    <?php if(isset($_SESSION['user'])): ?>
        <button onclick="window.location.href='addmusic.php'">Adj Hozzá zenét!</button>
    <?php endif ?>
    <button id="refresh">Frissít!</button> <br>
    <?php if(!isset($_SESSION['user'])): ?>
        <button onclick="window.location.href='login.php'">Login</button>
    <?php else: ?>
        <button onclick="window.location.href='logut.php'">Logout</button>
    <?php endif ?>
    <script src="script.js"></script>
</body>
</html>