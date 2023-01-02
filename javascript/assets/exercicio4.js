let x = 40;
let y = 10;


function calc(x,y) {

    fPrc = (y / x) * 100;

    return fPrc;


}


let calcPct = calc(x,y);

console.log(`${calcPct}% de ${x} é ${y}`);
