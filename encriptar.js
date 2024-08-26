const textArea = document.querySelector(".formulario_input");
const imagen = document.querySelector(".lado_lupa");
const Rtitulo= document.querySelector(".lado_Titulo");
const Rtexto= document.querySelector(".lado_texto");
const BtnEncriptar = document.querySelector(".btn");
const BtnDesencriptar = document.querySelectorAll(".btn");
const BtnCopiar = document.querySelector(".copiarBtn");

const llaves =[
    ["e","enter"],
    ["i","imes"],
    ["a","ai"],
    ["o","ober"],
    ["u","ufat"]
    ];
    

function encriptarmensaje(mensaje){
    let mensajeEncriptado = "";
  
  for( let i = 0; i < mensaje.length; i++ ){
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
  

  function desencriptarmensaje(mensaje){
    let mensajeDesencriptar = mensaje;
    for(let i = 0; i < llaves.length; i++){

        let regex = new RegExp(llaves [i][1],'g');
        mensajeDesencriptar = mensajeDesencriptar.replace(regex, llaves[i][0]);

    }
    return mensajeDesencriptar;
  }

  textArea.addEventListener("input",(e)=>{
    imagen.style.display = "none";
    console.log(e.target.value);
    Rtitulo.textContent = "Capturando Mensaje";
    Rtexto.textContent = "";
  });

  
  BtnEncriptar.addEventListener("click", (e) => {
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeEncriptado = encriptarmensaje(mensaje);  
    Rtexto.textContent = mensajeEncriptado;
    BtnCopiar.classList.remove("hidden");
    Rtitulo.textContent = "El resultado es:";
});

 BtnDesencriptar[1].addEventListener("click", (e) =>{
    e.preventDefault();
    let mensaje= textArea.value.toLowerCase();
    let mensajeDesencriptado = desencriptarmensaje(mensaje);
    Rtexto.textContent = mensajeDesencriptado;
    BtnCopiar.classList.remove("hidden");
    Rtitulo.textContent = "El resultado es:";

  });


  BtnCopiar.addEventListener("click",()=>{
    let copiarTexto = Rtexto.textContent;
    navigator.clipboard.writeText(copiarTexto).then(()=>{
      imagen.style.display ="block";
      Rtexto.textContent = "";
      Rtitulo.textContent = "se copio el texto";
      BtnCopiar.classList.add("hidden");
    })
  })