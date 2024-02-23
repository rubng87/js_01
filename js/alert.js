let nombre = prompt("¿Cúal es tu nombre?")
alert("Bienvenido " + nombre)
let num1 = parseInt(prompt("Vamos a sumar, dime el primer número"))
let num2 = parseInt(prompt("I ahora el segundo número y te lo sumaré sea el que sea :)"))
console.log(typeof(num1))
let suma = num1 + num2
// let aviso = "La suma es " + suma + nombre

// alert(aviso)

// console.log("La suma es", suma, nombre)

alert(`La suma es ${num1 + num2}` + " " + nombre + " Suuu")
// confirm("¿Está lloviendo?")


var resultado = window.confirm('¿Está lloviendo?');
if (resultado === true) {
  window.alert("Pues coje el paraguas, no te mojes " + nombre + " pringao");
} else {
  window.alert("pues no cojas el paraguas " + nombre + " pringao");
}
