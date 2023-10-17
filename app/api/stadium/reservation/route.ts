import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import Reservation from '@/lib/models/reservation.model';

export async function POST(request: Request, body: Reservation, context: any) {
    try {
        await connectToDatabase('SoccerReservationSystemDB');

        const reservationPost = new Reservation({
            stadiumId: context.params.id,
            name: body.name,
            phoneNumber: body.phoneNumber,
            startDateTime: body.startDateTime
        })

        const savedReservationPost = await reservationPost.save();
        return NextResponse.json({ message: 'Reservation created successfully', data: savedReservationPost });

    } catch (error) {
        return NextResponse.json("Can't make reservations.")
    }
};