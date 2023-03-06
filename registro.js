function cargarDatos(){
    let nombre=prompt("Ingresa tu nombre");
    let apellido=prompt("Ingresa tu apellido");
    let edad = parseInt(prompt("Ingresa un numero"));
    let email=prompt("Ingresa tu email");
    let contraseña=prompt("ingresa tu contraseña");
    console.log(nombre, apellido, edad, email, contraseña);

}
function validarDatos(){
    if(edad<18){
        alert("Deja la paja")
    }
    if(email.includes("@") == false ){
        alert("No tiene arroba");
    
    }
}

cargarDatos();
validarDatos();
















































/*let resultado=0;
function sumas(numero1, numero2){
return numero1 + numero2;
}
resultado=sumas(1,2);






/*let numero=parseInt(prompt("Ingresa un numero"));
for(let i=0;i<=10; i++){
    let resultado= numero * i;
alert(`${numero} x ${i} =${resultado}`);
}
































/*let texto= prompt("Ingresa Hola");
if(texto=="Hola"){
    alert("Palabras correctas");
} else{
    alert("Palabra incorrecta")
}*/




/*let numero= prompt("Ingresa un numero");
if(numero >1000){
 alert("El numero es mayor a mil");
} else{
    alert ("El numero es menor a mil boludo")
}*/