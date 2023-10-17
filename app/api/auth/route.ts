import { NextResponse } from "next/server";
import User from "@/lib/models/user.model";
import { sign } from 'jsonwebtoken'
import { serialize } from "cookie";
import { compare } from "bcryptjs"
import { connectToDatabase } from "@/lib/mongodb";

export async function POST(request: Request) {
    try {
        const { email, password } = (await request.json()) as User;

        await connectToDatabase("SoccerReservationSystemDB");

        const checkUser = await User.findOne({ email });

        if (!checkUser) {
            return NextResponse.json({ error: "Email does not exist!" }, { status: 401 })
        }

        const checkPassword = await compare(password, checkUser.password)

        if (!checkPassword) {
            return NextResponse.json({ error: "Incorrect password!" }, { status: 401 })
        }

        const secret = process.env.NEXT_PUBLIC_JWT_SECRET_KEY || '';

        const token = sign(
            { id: checkUser._id, username: checkUser?.username, email: checkUser?.email },
            secret, {
            expiresIn: process.env.NEXT_PUBLIC_JWT_EXPIRES_IN
        });

        const seralized = serialize('JWTToken', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 60 * 60 * 24 * 30,
            path: '/'
        })

        const response = {
            message: 'Authenticated', data: checkUser
        }

        return NextResponse.json(response, { headers: { 'Set-Cookie': seralized }, status: 200 })

    } catch {
        return NextResponse.json("Can't find that user");
    }
}