type Reservation = {
    name: string;
    phoneNumber: number;
    startDate: Date,
    time: string
}

type User = {
    username: string;
    email: string;
    password: string;
}

type LoginData = {
    email: string;
    password: string;
}

type Stadium = {
    _id: string;
    name: string;
    location: string;
    imageUrl: string;
    latitude: number;
    longitude: number;
}