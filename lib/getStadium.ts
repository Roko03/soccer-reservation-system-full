export default async function getStadium(id: string) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_BASE_URL}/api/stadium/${id}`,
        {
            next: { revalidate: 120 }
        }
    )

    if (!response.ok) throw new Error(`Failed to fetch that stadium`);

    return response.json();
}