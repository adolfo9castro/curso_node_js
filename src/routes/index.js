/**
 * Definición de las rutas
 * @module routers
 * @author Adolfo Castro Noreña <jaacastr@bancolombia.com.co>
 * @requires express
 */

/** Framework para facilitar el uso de las rutas
* @constant {module}
*/
const express = require('express');

const router = express.Router();

const {
    crearCursos,
    verCursos,
    inscribir,
    verInscritos
} = require('../controllers');

/* router.route('/crearcurso')
    .post(crearCursos);

router.route('/vercurso')
    .post(verCursos);

router.route('/inscribir')
    .post(inscribir);

router.route('/verinscritos')
    .post(verInscritos);
 */
module.exports = router