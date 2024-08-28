const d = document;
const textArea = d.querySelector(".caja__texto");
const imagenP = d.querySelector(".imagen__personaje");
const loader = d.querySelector(".loader");
const resultadoT = d.querySelector(".resultado__titulo");
const resultadoE = d.querySelector(".resultado__texto");
const botonEncriptar = d.querySelector(".b__encriptado");
const botonDesencriptar = d.querySelector(".b__desencriptado");
const botonCopiar = d.querySelector(".b__copiar");

const llaves = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai" ],
    ["o", "ober"],
    ["u","ufat"]

];

function encriptarmensaje(mensaje){
    let mensajeEncriptado = "";
    for(let i =0; i < mensaje.length; i++){
        let letra = mensaje[i];
        let encriptada = letra;
        for(let j = 0; j < llaves.length; j++){
            if(letra === llaves[j][0]){
                encriptada = llaves[j][1];
                break;
            }
        }
        mensajeEncriptado += encriptada;
    }
    
    return mensajeEncriptado;
}

function desencriptarMensaje(mensaje){
    let mensajeDesencriptado = mensaje;
    for(let i = 0; i < llaves.length; i++){
        let regex = new RegExp(llaves[i][1], 'g');
        mensajeDesencriptado = mensajeDesencriptado.replace(regex, llaves[i][0]);
    }
    return mensajeDesencriptado;
}

textArea.addEventListener("input", (e) => {
    imagenP.style.display = "none";
    loader.classList.remove("ocultar");
    resultadoT.textContent = "Capturando mensaje";
    resultadoE.textContent = " ";

})

botonEncriptar.addEventListener("click", (e)=> {
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeEncriptado = encriptarmensaje(mensaje);
    resultadoE.textContent = mensajeEncriptado;
    botonCopiar.classList.remove("ocultar");
    resultadoT.textContent = "El resultado es: ";

})

