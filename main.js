function abfrageWort(){
    let wort = document.querySelector('#wort');
    wort.addEventListener('change', function() {
        text = wort.value;
        test(text);        
    });
}


function abfrageZahl(){
    let zahl = document.querySelector('#zahl');
    zahl.addEventListener('change', function(){
        num = zahl.value;
        test(num);
    });
}

function test(hammer) {
    console.log(hammer);

}

abfrageWort()
abfrageZahl()