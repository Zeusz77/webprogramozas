<?php
    session_start();
    if(!isset($_SESSION['1'])){
        $_SESSION['bag1'] = 150;
        $_SESSION['bag2'] = 150;
        $_SESSION['bag3'] = 150;
        $_SESSION['used'] = 0;
    }

?>

<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="index.css">
    <title>Építőelemek</title>
</head>
<body>
    <h1>Építőelemek</h1>
    1. zacskó: <span id="bag1"><?=$_SESSION['bag1']?></span> <br>
    2. zacskó: <span id="bag2"><?=$_SESSION['bag2']?></span> <br>
    3. zacskó: <span id="bag3"><?=$_SESSION['bag3']?></span> <br>
    Beépítve: <span id="used"><?=$_SESSION['used']?></span> <br>

    <h2>Áthelyezés</h2>
    <label for="bag">Melyik zacskó?</label> <select id="bag">
        <option value="1">1. zacskó</option>
        <option value="2">2. zacskó</option>
        <option value="3">3. zacskó</option>
    </select> <br>
    <label for="count">Hány darab?</label> <input type="number" id="count" min="1" value="1" step="1" max="999"> <br>
    <button id="remove">Kivesz</button> 
    <button id="place">Visszahelyez</button> <br>
    <span id="error"></span>

    <script src="ajax.js"></script>
</body>
</html>