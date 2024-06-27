let sayi1 = document.getElementById("sayi1");
let sayi2 = document.getElementById("sayi2");
let sonuc = document.getElementById("sonuc");

function topla (){
    let num1 = parseFloat(sayi1.value);
    let num2 = parseFloat(sayi2.value);
    num1+=num2;
    sonuc.innerHTML="Sonuç: "+num1;
}

function cikar (){
    let num1 = parseFloat(sayi1.value);
    let num2 = parseFloat(sayi2.value);
    num1-=num2;
    sonuc.innerHTML="Sonuç: "+num1;
}

function bol (){
    let num1 = parseFloat(sayi1.value);
    let num2 = parseFloat(sayi2.value);
    num1/=num2;
    sonuc.innerHTML="Sonuç: "+num1;
}

function carp (){
    let num1 = parseFloat(sayi1.value);
    let num2 = parseFloat(sayi2.value);
    num1*=num2;
    sonuc.innerHTML="Sonuç: "+num1;
}
