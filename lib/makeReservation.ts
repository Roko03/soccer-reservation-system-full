export default async function makeReservation(id: string, data: Reservation) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_BASE_URL}/api/stadium/${id}/reservation`,
        {
            method: 'POST',
            body: JSON.stringify(data)
        }
    )

    if (!response.ok) return null;


    return await response.json();
}