# Szorgalmi 1

ELTÓ nemzetének szüksége van egy új adminisztrációs programra, hogy kimutatásokat tudjanak készíteni az állampolgárokról.


Az állampolgárok adatait az alábbi objektumokból álló tömb tartalmazza:

```js
[
    {
        id: 1001,
        nev: 'Lanyesz',
        szuletett: 1997,
        kereset: 2000000
    },
    {
        id: 1002,
        nev: 'Laurka',
        szuletett: 1995,
        kereset: 223003
    },
    {
        id: 1212,
        nev: 'Suwu',
        szuletett: 2019,
        kereset: 0
    },
    {
        id: 69420,
        nev: 'Manyesz',
        szuletett: 2001,
        kereset: 43202
    },
    {
        id: 191114,
        nev: 'Thoca', 
        szuletett: 2069,
        kereset: 2300000
    },
    {
        id: 1111,
        nev: 'Mészi',
        szuletett: 1999,
        kereset: 65000
    },
]
```

A feladatokat lehetőleg tömbfügvények használatával old meg.
___

## A feladat

Egy hatósági kimutatáshoz az ELTÓ népének szüksége van minden 2000 előtt született állampolárnak a személyes azonosítójára.

Készíts JS programot ami kilistázza a 2000 előtt született állampolgárok ID-ját.

___

## B feladat

Az állampolgárok közül kinek a legnagyobb a keresete?

Készíts JS programot ami kiírja a legnagyobb keresetű állampolgár nevét és születési évét.
___
## C feladat

Melyik 2000 után született állampolgár keresete a legalacsonyabb?

Készíts JS programot ami kírja a legkisebb keresetű 2000 után született állampolgár nevét, ID-ját és keresetét.