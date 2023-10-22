import mongoose from "mongoose";

const ReservationSchema = new mongoose.Schema({
    stadiumId: { type: mongoose.Schema.Types.ObjectId, ref: 'Stadium', required: true },
    name: { type: String, required: true, unique: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    phoneNumber: { type: Number, required: true },
    startDate: { type: String, required: true },
    time: { type: String, required: true },
}, { versionKey: false, })

const Reservation = mongoose.models.Reservation || mongoose.model('Reservation', ReservationSchema, 'reservation');

export default Reservation;