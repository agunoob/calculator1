"use strict";
document.addEventListener('DOMContentLoaded', function() { 
    console.log('wyswietla');

    let sum= document.querySelector('.sum-op');
    sum.addEventListener('click', function() {
        let varA= parseInt(document.querySelector('.wpisz-a').value);
        let varB= parseInt(document.querySelector('.wpisz-b').value);
        console.log(varA + varB);
        var equals= document.querySelector('.value').innerHTML= varA + varB;
        console.log(equals);
    });

    let sub= document.querySelector('.sub-op');
    sub.addEventListener('click', function() {
        let varA= parseInt(document.querySelector('.wpisz-a').value);
        let varB= parseInt(document.querySelector('.wpisz-b').value);
        console.log(varA - varB);
        var equals= document.querySelector('.value').innerHTML= varA - varB;
        console.log(equals);
    });

    let multi= document.querySelector('.multi-op');
    multi.addEventListener('click', function() {
        let varA= parseInt(document.querySelector('.wpisz-a').value);
        let varB= parseInt(document.querySelector('.wpisz-b').value);
        console.log(varA * varB);
        var equals= document.querySelector('.value').innerHTML= varA * varB;
        console.log(equals);
    });

    let div= document.querySelector('.div-op');
    div.addEventListener('click', function() {
        let varA= parseInt(document.querySelector('.wpisz-a').value);
        let varB= parseInt(document.querySelector('.wpisz-b').value);
        console.log(varA / varB);
        var equals= document.querySelector('.value').innerHTML= varA / varB;
        console.log(equals);
    });

    let erase= document.querySelector('.erase');
    erase.addEventListener('click', function() {
        console.log('zniknij');
        document.querySelector('.wpisz-a').value= "";
        document.querySelector('.wpisz-b').value= "";
        document.querySelector('.value').innerHTML= "=";
    });

});