// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    let nombre = document.querySelector("#amigo").value;
    if (nombre === ""){
        alert("Debe ingresar un nombre");
    }
    else{
        amigos.push(nombre);
        document.querySelector("#amigo").value = "";
        console.log(amigos);
    }
}

function mostrarAmigos(){
    let lista = document.querySelector("#listaAmigos");
    lista.innerHTML = "";
   
    for (let i = amigos.length-1; i >= 0; i--){
        lista.innerHTML += `<li> ${i+1} .${amigos[i]}</li>`;
        
    }
}

function sortearAmigo(){

    if (amigos.length === 0){
        alert("No hay amigos para sortear");
        return;
    }
    else {
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    document.querySelector("#resultado").innerHTML = amigoSorteado;
    }
}