
const TexArea = document.querySelector(".tex_area");
const Mensaje = document.querySelector(".mensaje");


// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"


function btnEncriptar(){
  const textoEncriptado = Encriptar(TexArea.value)
  Mensaje.value = textoEncriptado
  TexArea.value = "";
  Mensaje.style.backgroundImage = "none"

}


function Encriptar(StringEncriptada){
  
  let MatrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  StringEncriptada = StringEncriptada.toLowerCase()

  for(let i = 0; i < MatrizCodigo.length; i ++ ){

    if(StringEncriptada.includes(MatrizCodigo[i][0])){
      StringEncriptada = StringEncriptada.replaceAll(MatrizCodigo[i][0], MatrizCodigo[i][1])
    }

  }
  return StringEncriptada

}


function btnDesencriptar(){
  const textoEncriptado = desencriptar(TexArea.value)
  Mensaje.value = textoEncriptado
  TexArea.value = "";
}

function desencriptar(StringDesencriptada){
  
  let MatrizCodigo = [["e,", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  StringDesencriptada = StringDesencriptada.toLowerCase()

  for(let i = 0; i < MatrizCodigo.length; i ++ ){

    if(StringDesencriptada.includes(MatrizCodigo[i][1])){
      StringDesencriptada = StringDesencriptada.replaceAll(MatrizCodigo[i][1], MatrizCodigo[i][0])
    }

  }
  return StringDesencriptada

}



