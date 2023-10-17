import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import Stadium from '@/lib/models/stadium.model';

export async function GET(request: Request, context: any) {
    try {
        connectToDatabase('SoccerReservationSystemDB');
        const data = await Stadium.findOne({ "_id": `${context.params.id}` });

        return NextResponse.json(data)
    } catch (error) {
        return NextResponse.json("Can't find it.")
    }
};