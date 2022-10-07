function Entrar() {
    let Nome = document.getElementById("Nome").value 
    let Senha = document.getElementById("Senha").value
    if( Nome == "adm" && Senha == "1999"){
         window.location.href= "index.html"
    }
    else {
        alert ("Senha ou Nome incorretos")
    }
}