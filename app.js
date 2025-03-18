// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombre = document.getElementById('amigo');

let listaAmigos = [];

function agregarAmigo(){

    if(nombre.value == null || nombre.value == '' ){
        nombre.placeholder = "Por favor, inserte un nombre";
        alert('Por favor, inserte un nombre')
    }else{
        listaAmigos.push(nombre.value);
    }

    agregarLista();
    nombre.value = "";
    return;
    
}

function agregarLista(){
    let lista = document.getElementById('resultado');
    listaAmigos.forEach(p => {
        lista.innerHTML= "<ul><li>"+ listaAmigos +"</li></br></ul>";
    });

}