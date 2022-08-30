
function agradecimento(){
    var nome= document.getElementById("nome").value;
    if(nome){
        alert("Olá (" +nome +') seja bem vindo e obrigado pelo feedback!')
    }else{
        alert("Você não colocou seu nome mas seja bem vindo ")
    }
}