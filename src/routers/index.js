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

/** FS init
* @constant {module}
*/
const fs = require('fs')

/** server static files init
* @constant {module}
*/
const serveStatic = require('serve-static');

/** manejo de las rutas físicas
* @constant {module}
*/
const path = require('path')

const app = express()

/**
 * Función que ingresa los cursos
 * @param {Array} user trae información del usuario
 * @returns {callback} callback función de retorno
 */
const sendData = (user) => {

    app.use(serveStatic(path.join(__dirname, 'public')));

    app.get('/', (req, res) => {
        let sendData = {
            registro: user
        }
        res.render(path.join(__dirname, '../public/index.html'), sendData);
    })

    app.engine('html', (filePath, options, callback) => { // define the template engine
        fs.readFile(filePath, (err, content) => {
            if (err) {
                return callback(err);
            }
            // this is an extremely simple template engine
            let rendered = content.toString();
            const keys = Object.keys(options);
            keys.forEach((element) => {
                const Expresion = new RegExp(`#${element}#`, 'g');
                if (typeof options[element] == 'string') {
                    rendered = rendered.replace(Expresion, options[element]);
                } else {
                    rendered = rendered.replace(Expresion, JSON.stringify(options[element]));
                }
            }, this);
            return callback(null, rendered);
        });
    });

    /* app.engine('html', require('ejs').renderFile); */
    app.set('view engine', 'html');
    app.set('views', __dirname);

    app.listen(3000, () => {
        console.log('http://localhost:3000')
    })
}

module.exports = sendData