import mongoose from "mongoose";

const ReservationSchema = new mongoose.Schema({
    stadiumId: { type: mongoose.Schema.Types.ObjectId, ref: 'Stadium', required: true },
    name: { type: String, required: true, unique: true },
    phoneNumber: { type: Number, required: true },
    startDateTime: { type: Date, required: true },
}, { versionKey: false, })

const Reservation = mongoose.models.Reservation || mongoose.model('Reservation', ReservationSchema, 'reservation');

export default Reservation;