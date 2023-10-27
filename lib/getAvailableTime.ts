export default async function getAvailableTimes(stadionId: string, date: string) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_BASE_URL}/api/stadium/${stadionId}/reservation`)

    const times = ['17:00', "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"];

    const yy = new Date().getFullYear();
    const mm = new Date().getMonth() + 1;
    const dd = new Date().getDate();

    const todayDate = `${yy}-${mm}-${dd}`;

    if (!response.ok) throw new Error(`Can't fetch`);
    const data: Reservation[] = await response.json()

    if (todayDate === date) {
        const getRealTime = new Date().getHours();
        const realTime = `${getRealTime}:00`;
        const index = times.indexOf(realTime);

        if (index >= 0) {
            times.splice(0, index + 1);
        }
    }

    const filterByDates = data.filter(sd => sd.startDate === date);

    const filteredData = times.filter(time => !filterByDates.some(reservation => reservation.time === time));

    return filteredData;
}