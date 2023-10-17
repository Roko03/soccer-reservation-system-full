import User from "@/lib/models/user.model";
import { connectToDatabase } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { hash } from "bcryptjs"
import { cookies } from 'next/headers'
import { verify } from "jsonwebtoken";

export async function GET(request: Request) {
    try {
        const cookieStore = cookies();

        const token = cookieStore.get(`${process.env.NEXT_PUBLIC_COOKIE_NAME}`);

        if (!token) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
        }

        const { value } = token;

        const secret = process.env.NEXT_PUBLIC_JWT_SECRET_KEY || '';

        verify(value, secret);

        const response = {
            user: value,
        }

        return NextResponse.json(response, { status: 200 })

    } catch {
        return NextResponse.json("Can't found that user");
    }
}

export async function POST(request: Request) {
    try {
        const { username, email, password } = (await request.json()) as User;

        connectToDatabase("SoccerReservationSystemDB")

        const oldUser = await User.findOne({ email: email });
        if (oldUser) {
            return NextResponse.json({ error: "Email is already in use!" }, { status: 422 })
        }

        const hashedPassword = await hash(password, 12);
        const user = await User.create({ username, email, password: hashedPassword });

        const savedUserPost = await user.save();

        return NextResponse.json({ message: 'User created successfully', data: savedUserPost })


    } catch {
        return NextResponse.json("Can't make an user");
    }
}