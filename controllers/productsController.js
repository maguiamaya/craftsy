



const { validationResult } = require("express-validator")








save: (req, res) => {

    let errors = validationResult(req);
    if (errors.isEmpty()) {
        const { title, description, price, category } = req.body;
        let producto = {
            id: productos[ptoductos.length - 1].id + 1,
            title,
            description,
            price: +price,
            image: req.file ? req.files.filename : 'default-image.png',
            category
        }
        productos.push(producto);
        guardar(productos)
     return res.redirect('/')
    }else{
        return res.render('productAdd',{
            categorias,
            productos,
            errores: errors,
            old: req.body
                })
    }


}