function botão(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar<b>";
    //console.log(getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://www.linkedin.com/in/luis-davi-vieira-silva-b8b331214/")
    //window.location.href = "https://www.linkedin.com/in/luis-davi-vieira-silva-b8b331214/";
}

function trocar(){
    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(){
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
}

// function validaIdade(idade){
//     var validar;
//     if(idade >= 18){
//         validar = true;
//     } else {
//         validar = false;
//     }
//     return validar;
// }
// var idade = prompt("Qual é a sua idade");
// console.log(validaIdade(idade));
// alert(validaIdade(idade));

// function soma(n1, n2){
//     return n1 + n2;
// }
// function menos(n1, n2){
//     return n1 - n2;
// }
// function setReplace(frase, nome, novo_nome){
//     return frase.replace(nome, novo_nome);
// }

// console.log(soma(5, 20));
// console.log(menos(10, 5));
// console.log(setReplace("Vai Japão", "Japão", "Brasil"));