
console.log("Hola mundo JS desde el servidor")

/*  Operaciones */

let edad1 = 11
const edad2 = 42


console.log("Edad promedio")
console.log((edad1 + edad2) / 2)


/*  Medir tiempo de un proceso */
console.time('miproceso')

for (let i = 0; i < 1000000; i++) { }

console.timeEnd('miproceso')

/*  Objetos tipo tabla  */
let usuarios = [
    { nombre: "Ivet", edad: 23 },
    { nombre: "Ivet", edad: 23 }
]
console.log(usuarios)
console.table(usuarios)

