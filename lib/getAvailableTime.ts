export default async function getAvailableTimes(stadionId: string, date: string) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_BASE_URL}/api/stadium/${stadionId}/reservation`)

    const times = ['17:00', "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"];

    if (!response.ok) throw new Error(`Can't fetch`);

    const data: Reservation[] = await response.json()

    const filterByDates = data.filter(sd => sd.startDate === date);

    const filteredData = times.filter(time => !filterByDates.some(reservation => reservation.time === time));

    return filteredData;
}