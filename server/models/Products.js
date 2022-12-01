import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
   
    nombre : String,
    precio : Number,
    marca : String,
    instock : Boolean,
    imagen : String

})

export const Product= mongoose.model('product', productSchema)