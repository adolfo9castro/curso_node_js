/**
 * Inicio del programa
 * @author Adolfo Castro Noreña <github.com/adolfo9castro>
 * @requires cursos
 * @requires verCursos
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

verCursos(cursos, (r) => {
    console.log(r)
})
