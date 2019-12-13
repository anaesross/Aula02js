//Exercício 1
let h1 = document.getElementById("cabecalho");
    h1.style.display = "none";

//Exercício 2
let coruja = document.getElementById("lechuza");
    coruja.style.filter =  'grayscale(100%)';

//Exercício 3 -- ERRO - backgroundColor undefined
let campo = document.querySelectorAll("input")
    campo.style.backgroundColor = "red";

//DOM SELETORES E ATRIBUTOS

//Exercício 1 -- ERRO nao reconhece attributes
var copyrigth = document.getElementById('copyright');
    copyrigth.attributes;

//Exercício 2
let twitter = document.getElementsByTagName("li");
    twitter[6]; //retorna array 

//Exercício 3 
let fb = document.getElementsByTagName("li");
    fb[7]; //retorna array 

//Exercício 4
let fb = document.getElementsByTagName("li");
    fb[7] = fb;
    fb.setAttribute("a", "https://www.youtube.com/channel/UCRQdwmWMhTcqDFjPT4UPZYA")

//Exercício 5


//Exercício 6

//Exercício 7

//Exercício 8  -- - ERRO NAO LOCALIZA O COLOR
let h2 = document.getElementsByTagName("h2");
    h2.style.color = "red";

//ELEMENTOS

//Exercício 1
