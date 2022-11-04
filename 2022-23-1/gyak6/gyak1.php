<?php

$logikai = true;

$valtozo = '';

if($logikai){
    $valtozo = 'almafa';
}else{
    $valtozo = 'szilvafa';
}

/*echo '<h style="font-size:46px;">Hello World!<h>';

for($i = 0; $i < 10; $i++){
    echo '<p style="font-size:' . ($i*10) . '"px;>Erdo</p>';
}*/

$tomb1 = ['alma', 1, 2, [1, 2]];
$tomb1[] = 'ujelem';

//var_dump($tomb1);

$elte = [
    'nev' => 'Eötvös Loránd Tudományegyetem',
    'oktatas' => true,
    'hallgatokszama' => 42000,
    'karok' => [
        'ÁJK', 'BgGyk', 'BTK', 'IK', 'GTK', 'PPK', 'TTK', 'TáTK'
    ]
];
$elte['karok'][] = 'TÓK';
$elte['cim'] = 'Szerb Utca 5.';

//echo $elte['nev'];
//var_dump($elte);

$elteObj = (object)$elte;

//echo $elteObj->nev;

function matekol($p1, $p2){
    return $p1*$p2;
}
//echo matekol(2, 3);

function matekolCsakCimSzerint(&$p1, $p2){
    $p1 = $p1*$p2;
    $p2 = $p1*$p2;
    return $p1;
}

/*$v1 = 2;
$v2 = 3;
echo matekol($v1, $v2) . '<br>';
echo matekolCsakCimSzerint($v1, $v2) . '<br>';
echo $v1 . '<br>';
echo $v2 . '<br>';*/

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gyak1</title>
</head>
<body>
    <br><br> Szerveroldal UwU! <br><br>
    <?=$valtozo?>
    <br><br>
    <?php if($elteObj->oktatas): ?>
        Karok:
        <ul>
            <?php foreach($elteObj->karok as $kar): ?>
                <li><b><?=$kar?></b></li>
            <?php endforeach ?>
        </ul>
    <?php endif ?>
</body>
</html>