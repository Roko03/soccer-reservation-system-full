import Reservation from "@/lib/models/reservation.model";
import { connectToDatabase } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function DELETE(request: Request, context: any) {
    try {
        await connectToDatabase('SoccerReservationSystemDB');

        const data = await Reservation.deleteOne({ _id: `${context.params.id}` })

        return NextResponse.json('Reservation was deleted');

    } catch {
        return NextResponse.json(`Can't delete reservation`);
    }
}