var inputNumber = document.getElementById('number');
var convertedNumber = document.getElementById("convertedNumber");
var base = document.getElementById("numberBase");
var toBase = document.getElementById("toBase");


for(let i = 2; i <= 36; i++){
    const option = document.createElement("option");
    const text = document.createTextNode(i);
    option.appendChild(text); 
    toBase.appendChild(option);
    const option1 = document.createElement("option");
    const text1 = document.createTextNode(i);
    option1.appendChild(text1);
    base.appendChild(option1);
}


function convert(){
    var currentBase = base.options[base.selectedIndex].value;
    var currentToBase = toBase.options[toBase.selectedIndex].value;
    var currentInputNumber = inputNumber.value;
    var convertedNumberValue = convertedNumber.value;
    var saida = "";
    var digito;
    var o = 0;
    var b = 1;
    var r;
    var count = 0;
    var i = 0;
    for(i = currentInputNumber.length - 1; i >= 0; i--){
        if(currentInputNumber.charAt(i).charCodeAt(0) >= 'A'.charCodeAt(0) && s[i] <= 'Z'.charCodeAt(0)){
            digito = currentInputNumber.charAt(i).charCodeAt(0)-'0'.charCodeAt(0)- 7;
        }else{
            digito = currentInputNumber.charAt(i).charCodeAt(0) - '0'.charCodeAt(0);
        }
        o = digito * b + o;
        b = b * currentBase;
    }

    while(parseInt(o,10) != 0 ){
        r = o % currentToBase;
        digito = '0'.charCodeAt(0) + r;
        if(digito > '9'.charCodeAt(0))
        {
            digito += 7;
        }
        saida = (String.fromCharCode(digito)) + saida;
        console.log(String.fromCharCode(digito));

        o = o/currentToBase;

    }
    convertedNumber.value = saida;
}