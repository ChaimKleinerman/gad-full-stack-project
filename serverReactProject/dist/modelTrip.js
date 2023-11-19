//instance
import mongoose from 'mongoose';
const { Schema, model } = mongoose;
const tripSchema = new Schema({
    id: String,
    name: String,
    destination: String,
    startDate: Date,
    endDate: Date,
    description: String,
    price: Number,
    image: String,
    activities: [String],
});
//hwy there is no need to use mongoose
const tripModel = model('trips', tripSchema);
export { tripModel };
