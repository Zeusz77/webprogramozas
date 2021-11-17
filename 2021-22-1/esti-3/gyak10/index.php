<?php

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
    <table>
        <tr><th>Cím</th><th>Előadó</th><th>Év</th><th>Link</th></tr>
        <?php foreach($muzsika as $szam): ?>
            <tr><td><?=$szam->cim?></td><td><?=$szam->eloado?></td><td><?=$szam->ev?></td><td><a href="<?=$szam->link?>">▶</a></td></tr>
        <?php endforeach ?>
    </table>
    <button onclick="window.location.href='addmusic.php'">Adj Hozzá zenét!</button>
</body>
</html>