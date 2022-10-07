function formulario(){
    var formulario = []

    let nome = document.getElementById("nome").value 
    let email = document.getElementById("email").value
    let telefone = document.getElementById("telefone").value
    let Senha = document.getElementById("senha").value
    
    let formulario = {
        1: nome,
        2: email,
        3: telefone,
        4: Senha,
    }
    formulario.push(formulario)
    console.log(formulario)
}