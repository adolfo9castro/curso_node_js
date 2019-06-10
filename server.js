/**
 * Creando el servidor
 * @module server
 * @author Adolfo Castro Noreña <github.com/adolfo9castro>
 * @requires cfenv
 * @requires express
 */

/** Configuraciones del entorno
* @constant {module}
*/
const cfenv = require('cfenv');

/** Configuraciones del servidor
* @constant {module}
*/
const express = require('express');

/** Inicia la aplicación con los parametros necesarios levantados desde el servidor
* @constant {module}
*/
const appEnv = cfenv.getAppEnv();

/** Función de lanzamiento del servidor
 * @returns {undefined}
*/
function launchServer() {
  if (process.env.LOCAL) {
    console.log(`Start in ${appEnv.bind}:${appEnv.port}`);
  }
}

/** Inicio de express
* @constant {module}
*/
const app = express();
app.use(express.json());

/** path
* @constant {module}
*/
const path = require('path')

/** body-parser
* @constant {module}
*/
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))

/** hbs
* @constant {module}
*/
const hbs = require('hbs')

app.use(express.static(path.join(__dirname, './publics')))

app.set('view engine', 'hbs')

hbs.registerPartials(path.join(__dirname, './partials'))

require('./src/helpers')

app.use('/css', express.static(path.join(__dirname , './node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, './node_modules/bootstrap/dist/js')));


/** Llamado de las rutas
* @constant {module}
*/
const routes = require('./src/routes')
app.get('/', (req, res) => {
  res.render('index')
})
app.use('/', routes)

app.listen(process.env.PORT, launchServer);