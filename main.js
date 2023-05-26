"use strict";
//-----------------------------Eventlisten---------------------------------
function abfrage(){
    let text = "";
    let ausgabeZahl = 0;
    let wort = document.querySelector('#wort');
    let zahl = document.querySelector('#zahl');
    wort.addEventListener('blur', function() {
        text = wort.value;
        schlussel(text,0);
        zahl.value = 0;

    })
    zahl.addEventListener('change', function(){
        let nr = zahl.value;
        nr % 26 === 0 ? (nr = 26) : (nr = nr % 26)
        schlussel(text, +nr);
    })
    
}
//------------------------------Main-----------------------------------------
function schlussel(text, nr) {
    let ausgabe = document.querySelector('#ausgabe');
    let mySplit = text.split("");
    let neu = umwandeln(mySplit);

    let code = grossKlein(neu, nr);
    let ergebnis = ruckwandeln(code);
    ergebnis = ergebnis.join("");
    console.log(ergebnis);
    ausgabe.innerHTML = ergebnis;

}
//-----------------------------Splitten---------------------------------------
function umwandeln(mySplit){
    let neu = [];
    for(let i = 0; i < mySplit.length; i++){
        neu.push(parseInt(mySplit[i].charCodeAt()));
    }
    return neu;
}
//-----------------------------Groß/Klein Abfrage---------------------------------------
function grossKlein(liste, nr){
    let checked = []
    for(let j = 0; j < liste.length; j++){
        if(liste[j] >= 97 && liste[j] <= 122){
            let zahl = liste[j] + nr;
            checked.push(rangeKlein(zahl));

        } else if(liste[j] >= 65 && liste[j] <= 90){
            let zahl = liste[j] + nr;
            checked.push(rangeGross(zahl));

        }
    }
    return checked;
}
//-----------------------------Range Abfrage---------------------------------------
function rangeKlein(zahl){   
    if(zahl < 97){
        zahl += 26;
    } else if(zahl > 122){
        zahl -= 26;
    }
    return zahl;

}
function rangeGross(zahl){   
    if(zahl < 65){
        zahl += 26;
    } else if(zahl > 90){
        zahl = zahl - 26;
        }

    return zahl;
}

function ruckwandeln(code) {
    let ergebnis = [];
    for( let i = 0; i < code.length; i++) {
        ergebnis.push(String.fromCharCode(code[i]))
    }
    return ergebnis;
}



abfrage()