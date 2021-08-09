const {check} = require('express-validator');

module.exports=[     //las validaciones van a estyar dentro de un array
check('title')
.notEmpty().withMessage('el titulo es obligatorio'),

check('description')
.notEmpty().withMessage('debes añadir una descripcion'),

check('price')
.notEmpty().withMessage('es necesario el precio'),

check('category')
.notEmpty().withMessage('debes añadir una categoria')

]