import cipher from './cipher.js';

cipher.encode()


const mensaje1 = document.getElementById("mensaje1")
mensaje1.addEventListener("keyup",function(){
    this.value = this.value.toUpperCase();
}, true);

document.getElementById("cifrar").addEventListener("click", function(){
    let string = document.getElementById("mensaje1").value;
    let offset = document.getElementById("offset").value;
    document.getElementById("mensaje2").value = cipher.encode(offset,string);
}, true);

document.getElementById("descifrar").addEventListener("click", function(){
    let string = document.getElementById("mensaje1").value;
    let offset =document.getElementById("offset").value;
    document.getElementById("mensaje2").value = cipher.decode(offset,string);
})
        
