/*
    - Contrato para la creación y estructura de objetos
    - No se puede instanciar (new)
    - No tiene modificadores de acceso (public, private, protected)
    - Se usa cuando no es importante la implementación
    - Comun para datos que se envian/reciben por una API
*/
type genero = "masculino" | "femenino" | "otro";
enum Genero {
    Masculino = "masculino",
    Femenino = "femenino",
    Otro = "otro"
}
interface Persona {
    /*
        propiedad1: tipo,
        propiedad2: tipo
    */
    id: string
    nombre: string,
    edad: number,
    // genero: genero
    // genero: Genero
    apellido: string,
    casado: boolean,
    hobbies: string[]
    saludar: (nombre: string) => string // tiene una funcion que recibe un parametro y devuelve un string, pero no sabemos como se implementa
}

const saludarInterfaz = (nombre: string): string => `Hola ${nombre}`

const hanzeel: Persona = {
    // ctrl + espacio para ver todos las propiedades
    // Muestra errores si no se cumplen las propiedades
    id: "1",
    nombre: "Hanzeel",
    edad: 20,
    // genero: "masculino",
    // genero: Genero.Masculino,
    apellido: "Villa",
    casado: false,
    hobbies: ["Jugar videojuegos", "Escuchar música", "Ver anime"],
    saludar: saludarInterfaz // sin parentesis, porque no se esta ejecutando la funcion
}

const laura: Persona = {
    id: "2",
    nombre: "Laura",
    edad: 20,
    apellido: "Troll",
    casado: false,
    hobbies: ["Ser malo en valorant", "Dormir", "Ver series"],
    saludar: saludarInterfaz
}

console.log(hanzeel.saludar(laura.nombre));

type nivel = "junior" | "semiSenior" | "senior"

interface Programador extends Persona {
    lenguajes: string[],
    experiencia: number,
    nivel: nivel,
    programar: (lenguaje: string) => string;
}

const programarInterfaz = (lenguaje: string): string => `Programando en ${lenguaje}`

// manera 1
/*
const hanzeelProgramador: Programador = {
    id: "1",
    nombre: "Hanzeel",
    edad: 20,
    apellido: "Villa",
    casado: false,
    hobbies: ["Jugar videojuegos", "Escuchar música", "Ver anime"],
    saludar: saludarInterfaz,
    lenguajes: ["JavaScript", "TypeScript", "C"],
    experiencia: 2,
    nivel: "junior" // no se puede usar otro valor mas que los definidos en el tipo nivel
}
*/

// manera 2
const hanzeelProgramador: Programador = {
    ...hanzeel, // copia todas las propiedades de hanzeel
    lenguajes: ["JavaScript", "TypeScript", "C"],
    experiencia: 2,
    nivel: "junior",
    programar: programarInterfaz
} // as Programador
// usar asercion de tipo para indicar al compilidar explicitamente que es de tipo Programador

let randomLenguaje: string = hanzeelProgramador.lenguajes[Math.floor(Math.random() * hanzeelProgramador.lenguajes.length)];
console.log(`${hanzeelProgramador.nombre} está ${hanzeelProgramador.programar(randomLenguaje)}`);

// MAS SOBRE TIPOS E INTERFACES

// Omit<Tipo, Claves>
// Pick<Tipo, Claves>
// Partial<Tipo>
// Required<Tipo>
type PersonaSinHobbies = Omit<Persona, "hobbies"> // omitr propiedades
type PerosonaTinder = Pick<Persona, "nombre" | "edad" | "hobbies"> // seleccionar propiedades
type PersonaOpcional = Partial<Persona> // todas las propiedades son opcionales
type PersonaEstricta = Required<Persona> // todas las propiedades son requeridas