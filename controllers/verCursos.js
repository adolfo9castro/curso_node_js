/**
 * Ver cursos
 * @author Adolfo Castro Noreña <github.com/adolfo9castro>
 * 
*/

/**
 * Función que controla mostrar los cursos que le envian.
 * @param {Array} object Vector que viaja los cursos 
 * @returns {callback} callback función de retorno
 */

const seeCourses = (object, callback) => {
    object.forEach((curso, i) => {
        setTimeout(() => {
            callback(`El curso: '${curso.nombre}' (id: ${curso.id}), tiene una duración de ${curso.duracion} horas y su valor es ${curso.valor} COP \n`)
        }, 2000 * i)
    });
}

module.exports = seeCourses