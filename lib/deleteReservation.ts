export default async function deleteReservation(id: string) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_BASE_URL}/api/reservation/${id}`,
        {
            method: 'DELETE'
        }
    );

    if (!response.ok) throw new Error(`Can't delete`);

    return response.json();
}