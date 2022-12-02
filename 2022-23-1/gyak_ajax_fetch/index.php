<?php
    session_start();

    $user = "Béla";
    $pass = "1234";

    if(isset($_POST['user']) && isset($_POST['pass'])){
        var_dump($_POST['user'], $_POST['pass']) ;
        if($_POST['user'] == $user && $_POST['pass'] == $pass){
            $_SESSION['user'] = $user;
        }
    }

    if(isset($_POST)){
        if(isset($_POST['title']) && isset($_POST['director']) && isset($_POST['year'])){
            $title = $_POST['title'];
            $director = $_POST['director'];
            $year = $_POST['year'];
            $data = [];
            $data = file_get_contents("data.json");
            $data = json_decode($data, true);
            $data[] = [
                'Title' => $title,
                'Director' => $director,
                'Year' => $year
            ];
            $data = json_encode($data);
            file_put_contents("data.json", $data);
        }
    }


?>

<!DOCTYPE html>
<html>
<head>
<title>Ajax - fetch</title>
</head>
<body>
    <table>
        <tr><th>Title</th><th>Director</th><th>Year of release</th></tr>
        


        <!---
        <?php foreach($data as $movie): ?>
            <tr>
                <td><?=$movie["Title"]?></td>
                <td><?=$movie["Director"]?></td>
                <td><?=$movie["Year"]?></td>
            </tr>
        <?php endforeach; ?>
        -->
    </table>

    <?php if(isset($_SESSION['user'])): ?>
        <form method="post">
            <input type="text" name="title">
            <input type="text" name="director">
            <input type="number" name="year">
            <input type="submit" value="Add">
        </from>
        <form action="logout.php">
            <input type="submit" value="Logout">
        </form>
    <?php else: ?>
        <form method="post">
            <input type="text" name="user">
            <input type="password" name="pass">
            <input type="submit" value="Login">
        </form>
    <?php endif; ?>
</body>
<script>

    function fetchke(celnev, fugveny, json = true){
        if(json) fetch(celnev).then(v => v.json()).then(e => fugveny(e))
        else     fetch(celnev).then(v => v.text()).then(e => fugveny(e))
    }

    fetchke("fetch.php", (data)=>{
        let table = document.querySelector("table")
        data.forEach(movie => {
            let tr = document.createElement("tr")
            let td = document.createElement("td")
            td.innerText = movie.Title
            tr.appendChild(td)
            td = document.createElement("td")
            td.innerText = movie.Director
            tr.appendChild(td)
            td = document.createElement("td")
            td.innerText = movie.Year
            tr.appendChild(td)
            table.appendChild(tr)
        });
    })
</script>
</html> 