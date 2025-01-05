/*
node solo tiene un hilo de ejecución, por lo que si se ejecuta un proceso que tarda mucho, se bloquea el hilo principal
para evitar esto, se utilizan las funciones asincronas
*/

/*
CALLBACKS

    - Un callaback es una función que se ejecuta después de que otra función haya terminado de ejecutarse.
    - Es un parametro que se pasa a otra función (sin parentesis)
    - Tiene de problema el "callback hell" que es cuando se anidan muchos callbacks
*/

const tiempo = 3000

function holaMundo() {
    console.log('Hola Mundo')
}

setTimeout(holaMundo, tiempo)

// otra forma de escribirlo

// set timeout recibe dos parametros, el primero es una funcion (callback) y el segundo es el tiempo
setTimeout(() => { // funcion de flecha
    console.log('Hola desde una funcion de flecha')
}, 2000)

// PROMESAS

/*
    - Una promesa es un objeto que representa la terminación o el fracaso de una operación asíncrona
    - Una promesa es un objeto devuelto al cuál se adjuntan funciones callback, en lugar de pasar callbacks a una función
    - Se pueden encadenar promesas
    - Se pueden manejar errores con catch
*/

const miPromesa = new Promise((resolve, reject) => {
    const exito = true

    if(exito) {
        resolve('La operación fue exitosa')
    } else {
        reject('Hubo un error')
    }
})

miPromesa.then((mensaje) => {
    console.log(mensaje)
}).catch((mensaje) => {
    console.log(mensaje)
})

const url = "https://pokeapi.co/api/v2/pokemon/growlithe"

// fetch es una funcion que recibe una url y devuelve una promesa
fetch(url)
    .then((response) => response.json()) // se convierte la respuesta a json
    .then((data) => { // se obtiene la data
        //console.log(data)
        console.log(data.name)
        console.log(data.abilities[0].ability.name)
        console.log(data.stats)
    })
    .catch((error) => {
        console.log(error)
    })

// ASYNC/AWAIT

/*
    - Async/Await es una forma de trabajar con promesas de una forma más sencilla
    - Await solo puede ser usado dentro de una función async
    - Await pausa la ejecución de la función async, esperando la resolución de la promesa
*/

async function obtenerPokemon() {
    const response = await fetch(url)
    const data = await response.json()

    console.log(data.name)
    console.log(data.abilities[0].ability.name)
    console.log(data.stats)
}