/**
 * Inicio del programa
 * @author Adolfo Castro Noreña <github.com/adolfo9castro>
 * @requires cursos
 * @requires verCursos
 * @requires argv
 * 
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

/** Iniciar yargs
* @constant {module}
*/
const argv = require('yargs')
    .command(`inscribirse`, `Incribirse al curso`, options)
    .argv;

/** Inscribirse
* @constant {module}
*/
const { inscribirse } = require('./controllers')

inscribirse(argv)