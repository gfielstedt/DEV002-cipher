
const cipher = {

  encode: function (offset, string) {
    if (offset === 0 || string === typeof 0) {
      throw new TypeError("lo siento valor invalido")
    } else if (offset === undefined || string === undefined) {
      throw new TypeError("lo siento valor invalido")
    } else if (offset === null || string === null) {
      throw new TypeError("lo siento valor invalido")
    }

    let resultado = "";
  const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  offset = (offset % 26 + 26) % 26;

  if (string) {
    for (let i = 0; i<string.length; i++) {
      if(letras.indexOf(string[i]) != -1) {
        let posicion = ((letras.indexOf(string[i]) + offset) %26);
        resultado += letras[posicion];
      } 
      else
      {
        resultado += string[i];
      }
    }
    return resultado;
  }
},

  decode: function (offset,string){
    if (offset===0|| string===0) {
      throw new TypeError("lo siento valor invalido")
    } else if (offset === undefined || string === undefined) {
      throw new TypeError("lo siento valor invalido")
    } else if (offset === null || string === null) {
      throw new TypeError("lo siento valor invalido")
    }

    let resultado = "";
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    offset = (offset % 26 - 26) % 26;

    if (string) {
      for (let i = 0; i < string.length; i++) {
        if (letras.indexOf(string[i]) != -1) {
          let posicion = ((letras.indexOf(string[i]) - offset) % 26);
          resultado += letras[posicion];
        } 
        else {
        resultado += string[i];
        }
      }
      return resultado;
    }
  }
  }

  
export default cipher
