export default async function getUserReservation(userId: string) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_BASE_URL}/api/user/${userId}/reservation`);

    if (!response.ok) throw new Error(`Can't get it`);

    return response.json();
}