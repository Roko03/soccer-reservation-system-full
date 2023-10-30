import Reservation from "@/lib/models/reservation.model";
import { connectToDatabase } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET(request: Request, context: any) {
    try {
        await connectToDatabase("SoccerReservationSystemDB");

        const userReservation = await Reservation.find({ "userId": `${context.params.id}` }).exec();


        return NextResponse.json(userReservation);


    } catch {
        return NextResponse.json("Can't get reservation of user.")
    }
}