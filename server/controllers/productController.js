import { Product } from "../models/Products.js"

//se importa el modelo de mongoose.Schema


//funcion usada en frontend/src/views/Products para traer todos los productos
  
  export const getProducts = async (req, res) => {
    try {
      const products = await Product.find()
      res.json({ success: true, products });
    } catch (error) {
      res.json({ success: false, message: error.message });
    }
  }
  
  
  
  
  export const getProductById = async (req, res) => {
    try {
        const productId = req.params.id
      const product = await Product.findById(productId)
      res.json({ success: true, product });
    } catch (error) {
      res.json({ success: false, message: error.message });
    }
  }