const router = require('express').Router()
const {Product} = require('../db/models')
module.exports = router

//Get all campuses /api/products
router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll()
    res.json(products)
  } catch (err) {
    next(err)
  }
})