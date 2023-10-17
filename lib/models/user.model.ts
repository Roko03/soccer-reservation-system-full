import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}, { versionKey: false, })

const User = mongoose.models.User || mongoose.model('User', userSchema, 'user');

export default User;