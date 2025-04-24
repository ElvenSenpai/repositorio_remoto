//includes

//sort: Ordena un array. Por defecto ordena alfabeticamente, pero se puede pasar una funcion para establecer el orden

// < 0 Si el valor devuelto por la función es menor que 0, el elemento b es mayor que a
    // === 0 Si el valor devuelto por la función es igual que 0, el elemento b es igual que a
// > 0 Si el valor devuelto por la función es mayor que 0, el elemento b es menor que a

const numeros = [12, 5, 123, 1241, 1231, 534, 32]
numeros.sort((a, b) => {
    return a - b
})


const usuarios = [
    {
        nombre: "Rodrigo Sendino Sanz",
        edad: 20,
        signoZodiaco: "Tauro"
    },
    {
        nombre: "John Rocha Tercero",
        edad: 30,
        signoZodiaco: "Piscis"
    },
    {
        nombre: "Lola Rocha Tercero",
        edad: 24,
        signoZodiaco: "Aries"
    },
    {
        nombre: "Rodrigo Sendino Sanz",
        edad: 20,
        signoZodiaco: "Tauro"
    },
]

// Para ordenar en base a un atributo de un objeto:

usuarios.sort((a, b) => {
    return a.edad - b.edad
})

//Pregunta de entrevista tecnica: .map, .filter, .find devuelven una copia del array, no modifican el original. .sort modifica el array original 


// .split -> Devuelve un array cortando una cadena con el elemento que le indiques

const frase = "podriamos hacer algun ejemplo de cortar una frase"
frase.split(' ')

const csv = 'Felix;Blanco Sanchez;38'
const [nombre, apellido, edad] = csv.split(';')
console.log(nombre)

//Crea una función que dada una cadena de texto, encuentre la palabra mas larga

const palabraMasLarga = (frase) => {
    const palabras = frase.split(' ')

    palabras.reduce((acc, palabra) => {
        return acc.length < palabra.length ? palabra : acc
    })
}

palabraMasLarga(frase)

//D

const detectorOperador = (numerotelefono) => {
    const prefijo = numerotelefono.slice(0, 3)
    switch(prefijo){
        case '039':
            return 'Golden Telecom'
        case '050':
        case '095':
            return 'MTS'
        default:
            return 'Operador no encontrado'
    }  
}

const diccionario = {
    '039' : 'Golden Telecom',
    '050' : 'MTS',
}

const detectorOperadorDiccionario = (numerotelefono) => {
    const prefijo = numerotelefono.slice(0, 3)
    if(typeof diccionario[prefijo] === 'undefined'){
        return 'Operador no encontrado'
    }else{
        return diccionario[prefijo]
    }
}


//

const alumno = {
    firstName: 'Felix',
    lastName: 'Blanco',
    address: {
        street: 'C/ Ninguna',
        streetNumber: '1',
    }
}

const alumno2 = {
    firstName: 'Pepe',
    lastName: 'Blanco'
}

console.log(alumno2.address.streetNumber?)


//Metodos asociados a objetos: 

const alumnoObject = {
    firstName: 'Pau',
    lastName: 'Miquel'
}

Object.keys(alumnoObject) //Devuelve ['firstName', 'lastName']
Object.values(alumnoObject) //Devuelve ['Pau', 'Miquel']
Object.entries(alumnoObject) //Devuelve [['firstName', 'Pau'], ['lastName', 'Miquel']]


//Ejercicio: Funcion que corrige un examen

const array1 = ['a', 'a', 'b', 'b']
const array2 = ['a', 'c', 'b', 'd']

const checkExam = (array1, array2) => {
    let acc = 0
    array1.forEach((solution, i) =>{
        if(solution !== ''){
            if(solution === array2[i]){
                acc += 4
            } else {
                acc -= 1
            }
        }
    })
    return acc < 0 ? 0 : acc
    //return Math.max(acc, 0)
}

const checkExamReduce = (solutions, exam) => {
    const score = solutions.reduce((acc, solution, i) => {
        if (solution === '') return acc;
        return solution === exam[i] ? acc + 4 : acc - 1;
    }, 0);
    return Math.max(score, 0);
}


