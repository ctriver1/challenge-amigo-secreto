let amigos = [];

function agregarAmigo() {
    nombreIngresado = document.getElementById('amigo').value;
    if(nombreIngresado){
        amigos.push(nombreIngresado);
        document.getElementById('amigo').value = ""; 
        recorrerAmigos();
    }
    else {
        alert("Por favor, inserte un nombre.");
    }
}

function recorrerAmigos(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let nuevoLi = document.createElement('li');
        nuevoLi.textContent = amigos[i];
        lista.appendChild(nuevoLi);
    }
}

function sortearAmigo(){
    if (amigos.length === 0) {
        alert("No existen amigos para realizar el sorteo.");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    let resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerHTML = "";
    let nuevoLi = document.createElement('li');
    nuevoLi.textContent = "El ganador es: " + amigoSorteado;
    resultadoElemento.appendChild(nuevoLi);
}