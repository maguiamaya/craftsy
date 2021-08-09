
const storage = multer.diskStorage({
    destination : (req, file, callback)=>{
        callback(null, 'public/images')

    },
    __filename: (req, file, callback)=>{
        callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({
    storage,
})

/* products */
router.get('/add',add);
router.post('/add',upload.single('image'),save);
router.get('/detail/:id',detail);
router.get('/edit/:id',edit);
router.get('/edit/:id',update);
router.delete('/remove/:id',remove);

const { path, router } = require('../app')
const addProductValidator = require ('../controllers')