const hbs = require('hbs')

hbs.registerHelper('otraCosa', (as) => {
  return as+1
})

hbs.registerHelper('listar', () => {
  return 'Hola Puto mundo'
})