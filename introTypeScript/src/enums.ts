/*
    - Constantes que representan un conjunto de valores
    - Se asignan automáticamente a partir de 0
    - Se pueden asignar valores personalizados
*/

enum Dias {
    Lunes,
    Martes,
    Miercoles,
    Jueves,
    Viernes,
    Sabado,
    Domingo
}

console.log(Dias.Lunes); // 0

enum Prioridad {
    Baja = 1,
    Media = 5,
    Alta = 10
}

enum Direccion {
    Arriba = 'UP',
    Abajo = 'DOWN',
    Izquierda = 'LEFT',
    Derecha = 'RIGHT'
}