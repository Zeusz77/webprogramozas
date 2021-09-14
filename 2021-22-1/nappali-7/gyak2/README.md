# Szorgalmi 2

ELTÓ Háborúban áll, a honvédelemnek szüksége van egy adminisztrációs programra hogy rendszerezzék a raktárukat, és tudjanak a fegyvereik állapotáról.

A raktár tartalmát az alábbi tömb tartalmazza:

```js
[
    {
        weapon: 'Mosin',
        type: 'Sniper rifle',
        durability: 92
    },
    {
        weapon: 'Vepr KM/VPO-136',
        type: 'Assault Rifle',
        durability: 69
    },
    {
        weapon: 'AKM',
        type: 'Assault Rifle',
        durability: 98
    },
    {
        weapon: 'M4A1',
        type: 'Assault Rifle',
        durability: 100
    },
    {
        weapon: 'SKS',
        type: 'Assault carbine',
        durability: 55
    },
    {
        weapon: 'Kel-Tec RFB 7.62x51',
        type: 'Assault carbine',
        durability: 100
    },
    {
        weapon: 'SV-98',
        type: 'Sniper rifle',
        durability: 87
    }
]
```

___

## Feladat

Az ELTÓ honvédelme szeretné látni a fegyverek típusát és állapotát ránézésből, és szeretné hogy hogyha a háttérben is tartalmazva lennének.

Készíts egy JS programot ami az *Assault Rifle* typusú fegyvereket dőlt betűvel, az **Assault carbine** típusú fegyvereket félkövéren a ***Sniper rifle*** típusú fegyvereket pedig dőlt betűvel félkövéren jeleníti meg.

Ha a fegyver durability-je 70% alatt van akkor a betűszín legyen piros, ha felette akkor legyen zöld.

A honlapon csak a fegyver neve jelenjen meg, viszont egy egy dataset tartalmazza a másik két attribútumot.