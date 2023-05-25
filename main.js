

function abfrage(){
    let text = "";
    let nr = 0;
    
    let wort = document.querySelector('#wort');
    wort.addEventListener('blur', function() {
        text = wort.value; 
        schlussel(text,0)  
    });

    let zahl = document.querySelector('#zahl');
    zahl.addEventListener('blur', function(){
        nr = zahl.value;
        schlussel(text, +nr);
    });
}
function schlussel(text, nr) {
    let ausgabe = document.querySelector('#ausgabe');
    code = text.charCodeAt();
    console.log(code);
    ausgabe.innerHTML = text;
    ergebnis = code + nr;
    neu = String.fromCharCode(ergebnis)
    ausgabe.innerHTML = neu;
}

abfrage()