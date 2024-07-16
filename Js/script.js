function abrir() {
    let menu = document.getElementById("menulat");
    let menua = document.getElementById("menua")
    let logo = document.getElementById("logo")
    let fecharitem = document.getElementById("closeinmenuitens");
    logo.style.margin = "25%"
    menu.style.display = "block"
    menua.style.display = "none"
    fecharitem.style.display = "block"
 
}
function fechar() {
    let menu = document.getElementById("menulat");
    let menua = document.getElementById("menua")
    let logo = document.getElementById("logo")
    logo.style.margin = "10%"
    menu.style.display = "none"
    let fecharitem = document.getElementById("closeinmenuitens");
    menua.style.display = "block"
    fecharitem.style.display = "none"
}

function toggleSwitch() {
    const light = document.getElementById("lightmode");
    const dark = document.getElementById("darkmode");

    StyleSheet = light;
}

function calcIdade() {
    let sobre = document.getElementById("sobre");
    let dataAtual = new Date();
    let nascimento = new Date(2005, 7, 9); 

    let mesAtual = dataAtual.getMonth();
    let mesNascimento = nascimento.getMonth();
    let anoAtual = dataAtual.getFullYear();
    let anoNascimento = nascimento.getFullYear();
    let idade;
    
    if (mesAtual < mesNascimento) {
        idade = anoAtual - anoNascimento - 1;
        sobre.innerHTML = `Olá! Me chamo Vinicius Ribeiro, atualmente eu tenho ${idade} anos, eu sou um programador que adora estudar novas tecnologias`;
    } else {
        idade = anoAtual - anoNascimento;
        sobre.innerHTML = `Olá! Me chamo Vinicius Ribeiro, atualmente eu tenho ${idade} anos, eu sou um programador que adora estudar novas tecnologias`;
    }
    
}
calcIdade();