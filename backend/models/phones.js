import mongoose from "mongoose";

//Schema qui permet de structurer notre Base de données (Qui est sur MongoDB)
const phonesSchema = new mongoose.Schema({
    _id: Number,
    name: String,
    type: String,
    price: Number,
    rating: Number,
    warranty_years: Number,
    available: Boolean
})

export default mongoose.model('Phone', phonesSchema);