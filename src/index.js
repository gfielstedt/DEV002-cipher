import cipher from './cipher.js';

//cipher.encode()

//Primera función , es implementada a traves de **toUpperCase** con el objetivo de impedir que se puedan
//introducir letras minusculas en el espacio de texto//
const mensaje1 = document.getElementById("mensaje1")
mensaje1.addEventListener("keyup",function(){
    this.value = this.value.toUpperCase();
}, true);

//Segunda función, cuando haga click en el boton **cifrar** llamo a un metodo **gEbI** que saca el exto que tiene ese mensaje
//y le quiero sacar el valor en concreto a ese mensaje con **value**//
//de igual mamnera el elemneto offset//
document.getElementById("cifrar").addEventListener("click", function(){
    let string = document.getElementById("mensaje1").value;
    let offset = document.getElementById("offset").value;
    document.getElementById("mensaje2").value = cipher.encode(offset,string);
}, true);

//Tercera función, quiero hacer exactamente lo mismo, cuando haga click en el boton **descifrar** llamo a un metodo **gEbI** que saca el exto que tiene ese mensaje
//y le quiero sacar el valor en concreto a ese mensaje con **value**//
//de igual mamnera el elemneto offset//

document.getElementById("descifrar").addEventListener("click", function(){
    let string = document.getElementById("mensaje1").value;
    let offset =document.getElementById("offset").value;
    document.getElementById("mensaje2").value = cipher.decode(offset,string);
})
        
