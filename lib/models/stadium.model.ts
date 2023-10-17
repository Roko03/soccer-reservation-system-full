import mongoose from "mongoose";

const StadiumSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    location: { type: String, required: true },
    imageUrl: { type: String, required: true },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
}, { versionKey: false, })

const Stadium = mongoose.models.Stadium || mongoose.model('Stadium', StadiumSchema, "stadium");

export default Stadium;