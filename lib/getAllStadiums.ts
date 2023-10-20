export default async function getAllStadiums() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_BASE_URL}/api/stadium`,
        {
            next: { revalidate: 120 }
        }
    );

    if (!response.ok) throw new Error(`Failed to fetch stadiums`);

    return response.json();
}