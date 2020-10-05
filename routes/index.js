var express = require('express');
var router = express.Router();
const managep = require('crudproductimagesqlserver/dproducto');
const product = require('crudproductimagesqlserver/product');

/* GET home page. */
router.get('/', async function (req, res) {
    res.send("Welcome to the rest api crud product");
});
router.get('/listproduct', async function (req, res) {

    var dataproduct = await managep.getProducts();
    console.log(dataproduct);
    res.send(dataproduct);
});

router.get('/searchproduct/(:idproduct)', async function (req, res) {

        var dataproduct = await managep.getProduct(req.params.idproduct);
        console.log(dataproduct);
        res.send(dataproduct);
});
router.get('/uploadproduct', async (req, res) => {
    const producto = new product.Producto(0, req.body.imgproducto);
        let x=await managep.insertProduct(producto);
        res.send(x);
});
router.get('/updateproduct', async (req, res) => {
    var producto = new product.Producto(req.body.idproducto, req.body.imgproducto);
    var x=await managep.updateProduct(producto);
    res.send(x);
});
router.get('/deleteproduct', async (req, res) => {

    var producto = new product.Producto(req.body.idproducto, "");
    let x=await managep.deleteProduct(producto);
    res.send(x);
});


module.exports = router;

