
 
import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const productSchema = new Schema({
  id: Number,
  title: String,
  description: String,
  price: Number,
  discountPercentage: Number,
  rating: Number,
  stock: Number,
  brand: String,
  category: String,
  thumbnail: String,
  times_chosen: String,
  coordinates: {
      latitude: Number,
      longitude: Number,
      latitude2: Number,
      longitude2: Number,
  },
});
  





//hwy there is no need to use mongoose
const productModel = model('products',productSchema)
export {productModel} 