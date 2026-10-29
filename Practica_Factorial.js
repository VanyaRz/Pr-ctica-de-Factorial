let num = prompt("Ingresa un número para calcular su factorial: ");

while (isNaN(num) || num === "") { //Ciclo para atrapar errores: mientras no sea un número, vuelve a pedirlo
    alert("No es un número válido, inténtalo de nuevo");
    num = prompt("Ingresa un número:");
}

num = Number(num); // se lee el número ingresado y se convierte a tipo Number

let resultado = 1; // calculamos el factorial del número ingresado
for (let i = 1; i <= num; i++) {// Ciclo que recorre desde el 1 hasta llegar al número que se ingresó (num)
    resultado = resultado * i;
}

console.log("Número ingresado: " + num);
console.log("Resultado: " + resultado + ".");
alert("Número ingresado: " + num + "\nResultado: " + resultado + ".");