import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import Reservation from '@/lib/models/reservation.model';

export async function GET(request: Request, context: any) {
    try {
        await connectToDatabase('SoccerReservationSystemDB');

        const data = await Reservation.find({ "stadiumId": `${context.params.id}` }).exec();

        return NextResponse.json(data);

    } catch {
        return NextResponse.json("Can't get reservations")
    }
}


export async function POST(request: Request, context: any) {
    try {

        const body = (await request.json()) as Reservation;

        await connectToDatabase('SoccerReservationSystemDB');

        let reservationPost = new Reservation({
            stadiumId: context.params.id,
            name: body.name,
            userId: body.userId,
            phoneNumber: body.phoneNumber,
            startDate: body.startDate,
            time: body.time
        })

        let savedReservationPost = await reservationPost.save();
        return NextResponse.json({ message: 'Reservation created successfully', data: savedReservationPost });

    } catch (error) {
        return NextResponse.json(`Can't make reservations. ${error}`)
    }
};