import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Stadium from "@/lib/models/stadium.model";

export async function GET(request: Request) {
    try {
        await connectToDatabase("SoccerReservationSystemDB");
        const data = await Stadium.find({}).limit(20).exec();

        return NextResponse.json(data);
    } catch {
        return NextResponse.json("Can't find that array");
    }
}
