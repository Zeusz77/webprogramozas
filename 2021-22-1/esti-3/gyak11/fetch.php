<?php

$data = json_decode(file_get_contents('lista.json'));

echo json_encode($data, JSON_PRETTY_PRINT);