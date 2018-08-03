const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

//update product from the database
router.patch('/products/:id', (req, res)=>{
  Product.findByIdAndUpdate(req.params.id, req.body, {new:true})
  .then(product=>{
    res.status(200).json(product);
  })
  .catch((e)=>(res.status(500).json(e)));
});

//delete product from the database
router.delete('/products/:id', (req, res)=> {
  Product.findByIdAndRemove(req.params.id)
  .then(product => {
    res.status(200).send('Deleted successful'); 
  })
  .catch((e)=>(res.status(500).json(e)));
});

//Create new product in the database
router.post('/products', (req,res) => {
  Product.create(req.body)
  .then(product => {
    res.status(200).json(product);
  })
  .catch((e)=>res.status(500).json(e));
});

//Get products from the database
router.get('/products', (req, res) => {
    Product.find()
    .then(products => {
  // res.json(products);
    res.render('profile', {products});
  })
  .catch(e=>console.log(e));
});



module.exports = router;