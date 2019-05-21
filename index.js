/**
 * Inicio del programa
 * @author Adolfo Castro Noreña <github.com/adolfo9castro>
 * @requires cursos
 * @requires verCursos
 * @requires argv
 * 
*/

/** Carga todos los objetos por defecto para ser mostrados
* @constant {module}
*/
const cursos = require('./cursos')

/** Trae a lógica de ver los cursos
* @constant {module}
*/
const { verCursos } = require('./controllers')

/** Trae a lógica de ver los cursos
* @constant {module}
*/
const options = {
    id: {
        alias: 'i',
        demand: true
    },
    nombre: {
        alias: 'n',
        demand: true
    },
    cedula: {
        alias: 'c',
        demand: true
    }
}
/** FS init
* @constant {module}
*/
const fs = require('fs')

/** Iniciar yargs
* @constant {module}
*/
const argv = require('yargs')
    .command(`inscribirse`, `Incribirse al curso`, options)
    .argv;

if (!argv.i) {
    verCursos(cursos, (r) => {
        console.log(r)
    })
} else {
    let curso = cursos.find((curso) => {
        return curso.id == argv.i
    })
    let registro = {}
    
    try {
        registro = `El estudiante: ${argv.n}, con cédula: ${argv.c}, se ha inscrito al curso '${curso.nombre}' con una duración de ${curso.duracion} hora y con un valor de ${curso.valor}\n`
        fs.appendFile('usuario.txt', registro, (e) => {
            if (e) throw (e)
            console.log('Se ha creado el archivo')
        })
    } catch (error) {
        console.log('El curso que eligió no existe, por favor escoja uno de estos:\n')
        verCursos(cursos, (r) => {
            console.log(r)
        })
    }
}