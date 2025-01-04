const nombre = "Hanzeel"

// funcion declarativa
function saludar(nombre: string): string {
    return   `Hola ${nombre}`;
}

// funcion anonima
const sumar = function(num1: number, num2: number): number {
    return num1 + num2;
}

// funcion de flecha
const restar = (num1: number, num2: number) => num1 - num2; 

console.log("Funcion normal: " + saludar(nombre))
console.log("Funcion anonima: " + sumar(20, 4));
console.log("Funcion de flecha: " + restar(30, 5));