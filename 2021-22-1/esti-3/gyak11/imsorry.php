<?php
//Γsszesen mennyit keresnek azok az emberek, akiknek van kutyΓ‘juk?
function πβ($π§){
    foreach($π§->ππ as $π¦){
        if($π¦ == 'π') return true;
    }
    return false;
}

$π₯° = [
    (object)[
        'π·οΈ' => 'SzΕ±ts JΓ³zsi',
        'ππ' => ['π'],
        'π²' => 213000
    ],
    (object)[
        'π·οΈ' => 'SzΕrmΓ³k Andris',
        'ππ' => [],
        'π²' => 540000
    ],
    (object)[
        'π·οΈ' => 'SzΕrmΓ³k Misi',
        'ππ' => ['π'],
        'π²' => 213000
    ],
    (object)[
        'π·οΈ' => 'DekΓ‘s DiΓ‘na',
        'ππ' => ['π', 'π'],
        'π²' => 760000
    ],
    (object)[
        'π·οΈ' => 'Lakatos Mirella',
        'ππ' => ['π'],
        'π²' => 213000
    ]
];

$βπ² = 0;

foreach($π₯° as $π©){
    if(πβ($π©)) $βπ² += $π©->π²;
}

echo $βπ²;

?>