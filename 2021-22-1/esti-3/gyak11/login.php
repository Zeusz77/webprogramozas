<?php 

session_start();

$user = json_decode(file_get_contents('users.json'));

$hiba = "";

if(isset($_POST["user"]) && isset($_POST["pwd"])){
    if($user->user == $_POST["user"] && $user->pwd == $_POST["pwd"]){
        $_SESSION['user'] = $_POST["user"];
        header('Location: index.php?alma=alma');
    }else{
        $hiba = "false";
    }
}


?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=0, initial-scale=1.0">
    <title>Login</title>
</head>
<body>
    <form method="post">
        <input name="user"> <br>
        <input name="pwd"> <br>
        <button type="submit">Bejelentkezés</button>
    </form>
    <?php if($hiba): ?>
        <p>Hibás felhasználónév vagy jelszó</p>
    <?php endif ?>
</body>
</html>