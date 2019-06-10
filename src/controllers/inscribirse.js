/**
 * Iscribirse a los cursos
 * @author Adolfo Castro Noreña <github.com/adolfo9castro>
 * 
*/

/** FS init
* @constant {module}
*/
const fs = require('fs')

/** Carga todos los objetos por defecto para ser mostrados
* @constant {module}
*/
const cursos = require('../config/cursos')

/** Trae a lógica de ver los cursos
* @constant {module}
*/
const verCursos = require('./verCursos')

/** Trae a lógica de ver los cursos
* @constant {module}
*/
const routers = require('../routers')

/**
 * Función que ingresa los cursos
 * @param {Array} argv Trae el argv desde el index
 * @returns {callback} callback función de retorno
 */
const inscribirse = (argv) => {
    if (!argv.i || typeof argv.i != "number" || typeof argv.n != "string" || typeof argv.n != "string") {
        console.log('No puede faltar ningún parametro. Recuerda que tienes estos cursos disponibles')
        verCursos(cursos, (r) => {
            console.log(r)
        })
    } else {
        let curso = cursos.find((curso) => {
            return curso.id == argv.i
        })
        let registro = {}

        try {
            registro = `El estudiante: <strong>${argv.n}</strong>, con cédula: <strong>${argv.c}</strong>, se ha inscrito al curso '<strong>${curso.nombre}</strong>' con una duración de <strong>${curso.duracion}</strong> horas y con un valor de <strong>${curso.valor}</strong>`
            /* fs.appendFile('usuario.txt', registro, (e) => {
                if (e) throw (e)
                console.log(`Quedo registrado: \n${registro}`)
            }) */
            routers(registro)
        } catch (error) {
            console.log('El curso que eligió no existe, por favor escoja uno de estos:\n')
            verCursos(cursos, (r) => {
                console.log(r)
            })
        }
    }
}

module.exports = inscribirse