<?php

session_start();

$bag = $_GET['bag'];
$bagAmmount = intval($_SESSION[$_GET['bag']]);
$ammount = intval($_GET['ammount']);
$tranzaction = $_GET['tranzaction'];

$hiba = '';

if($tranzaction == 'remove'){
    if(($bagAmmount - $ammount) < 0){
        $hiba = 'Nincs a Zsákban ennyi elem';
    }else{
         $_SESSION[$bag] = intval($_SESSION[$bag]) - $ammount;
         $_SESSION['used']  = intval($_SESSION['used']) + $ammount;
    }
}else{
    if((intval($_SESSION['used']) - $ammount) < 0){
        $hiba = 'A beépített elemek száma nem mehet nulla alá';
    }else{
         $_SESSION[$bag] = intval($_SESSION[$bag]) + $ammount;
         $_SESSION['used']  = intval($_SESSION['used']) - $ammount;
    }
}

$response = [
    'bag1' => $_SESSION['bag1'],
    'bag2' => $_SESSION['bag2'],
    'bag3' => $_SESSION['bag3'],
    'used' => $_SESSION['used'],
    'hiba' => $hiba
];

echo json_encode($response);