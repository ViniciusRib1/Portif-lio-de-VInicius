function abrir() {
    let menu = document.getElementById("menulat");
    let menua = document.getElementById("menua")
    let logo = document.getElementById("logo")
    logo.style.margin = "25%"
    menu.style.display = "block"
    menua.style.display = "none"
 
}
function fechar() {
    let menu = document.getElementById("menulat");
    let menua = document.getElementById("menua")
    let logo = document.getElementById("logo")
    logo.style.margin = "10%"
    menu.style.display = "none"
    menua.style.display = "block"
}

function toggleSwitch() {
    const light = document.getElementById("lightmode");
    const dark = document.getElementById("darkmode");

    StyleSheet = light;
    
}