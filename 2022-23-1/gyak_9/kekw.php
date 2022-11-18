<?php

$hibak = [];

if(!(isset($_POST["name"]) && isset($_POST["email"]) && isset($_POST["age"]))){
    $hibak[] = "Nem teljes a kitoltes";
}else{
    if(count(explode(" ", $_POST["name"])) < 2){
        $hibak[] = "nev nem megfelelo";
    }
    if(!filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)){
        $hibak[] = "email nem megfelelo";
    }
    if(intval($_POST["age"]) < 18){
        $hibak[] = "tul fiatal";
    }
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gyak9</title>
</head>
<body>
    <form method="post">
        <input type="text" name="name" value="<?=isset($_POST["name"]) ? $_POST["name"] : ""?>"> 
        <input type="text" name="email" value="<?=isset($_POST["email"]) ? $_POST["email"] : ""?>">
        <input type="number" name="age" value="<?=isset($_POST["age"]) ? $_POST["age"] : ""?>">
        <button type="submit">Zsa</button>
    </form>
    <ul>
        <?php if(count($hibak) == 0): ?>
            <li style="color:green;">Zsamo</li>
        <?php else: ?>
            <?php foreach($hibak as $hiba): ?>
                <li style="color:red;"><?=$hiba?></li>
            <?php endforeach ?>
        <?php endif ?>
    </ul>
</body>
</html>