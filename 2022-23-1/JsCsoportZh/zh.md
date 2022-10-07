# Csoport zarthelyi

Egy titkos kormanyzati szerv veszelyes bunozokre vadaszik. Teged kertek meg hogy segits kesziteni nekik egy programot ahol szamon tudjak tartani hogy kiket keresnek, es kiket kaptak mar el.

## Leiras

A bunozoket egy rendezetlen listaban jelenitjuk meg, es egy objektumtomben tarlojuk, 3 dolgot tarolunk roluk Nev - Kodnev - Szam. A bunozok egy resze alapbol tarolva van, a tobbit szeretnenk kesobb hozzadni, ezert legyen 3 beviteli mezonk es egy gombunk ami hozzadja emberunket a listahoz.

## Pontozas

1, A tomben levo bunozok megjelennek a html listaban. [2 pont]

2, A gomb megnyomasakor a bemeneti mezok tartalma megjelenik a listaban. [4 pont]

3, A gomb megnyomasara a bementei mezok tartalma keruljon be az objektumtommbe. (Ehhez a tombben logoljuk a consolra) [4 tomb]

## Bonusz pontok

a, Delegalassal a lista elemei legyenek kattinthatok, amikor rakattintunk az adott egyen keruljon kihuzasra. [3 pont]

b, Ha nincs mind a 3 mezo kitoltve, akkor a bemeneti gomb megnyomasakor ne tortenjen semmi. [2 pont]

## Kezdeti kodok

```js
const data = [
    {
    "Name": "Elizabeth Keen",
    "Nick": "Masha",
    "No": 1
    },
    {
    "Name": "Nasim Bakhash",
    "Nick": "The Djin",
    "No": 43
    },
    {
    "Name": "Edgar Grant",
    "Nick": "The Debt Collector",
    "No": 46
    },
    {
    "Name": "Agathe Tyche",
    "Nick": "Lady Luck",
    "No": 69
    },
    {
    "Name": "Chris Farnsworth",
    "Nick": "The Forecaster",
    "No": 163
    }
]
 ```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <ul></ul>
    <input type="text"><input type="text"><input type="text"><button>Submit</button>
</body>
<script src="script.js"></script>
</html>
```

```js
function delegal(szulo, gyerek, mikor, mit){
    function esemenyKezelo(esemeny){
        let esemenyCelja    = esemeny.target;
        let esemenyKezeloje = this;
        let legkozelebbiKeresettElem = esemenyCelja.closest(gyerek);

        if(esemenyKezeloje.contains(legkozelebbiKeresettElem)){
            mit(esemeny, legkozelebbiKeresettElem);
        }
    }


    szulo.addEventListener(mikor, esemenyKezelo);
}
```