let num1 = parseInt(prompt("Indica el primer número"))
let num2 = parseInt(prompt("Indica el segundo número"))
console.log(typeof(num1))
let suma = num1 + num2
let aviso = "La suma es " + suma

alert(aviso)

console.log("La suma es", suma)

alert(`La suma es ${num1 + num2}`)