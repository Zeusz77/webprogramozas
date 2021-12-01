<?php


$uj_cim = $_POST["cim"];
$uj_eload = $_POST["eloado"];
$uj_ev = intval($_POST["ev"]);
$uj_link = $_POST["link"];

$uj_zene = [
    "cim" => $uj_cim,
    "eloado" => $uj_eload,
    "ev" => $uj_ev,
    "link" => $uj_link,
];

if(file_exists('lista.json')){
    $muzsika = json_decode(file_get_contents('lista.json'));

    array_push($muzsika, $uj_zene);


    file_put_contents('lista.json', json_encode($muzsika, JSON_PRETTY_PRINT));
}

header ("location: index.php");