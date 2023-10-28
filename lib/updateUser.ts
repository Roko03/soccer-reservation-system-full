export default async function updateUser(data: any) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_BASE_URL}/api/user`,
        {
            method: 'PUT',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(data)
        }
    )

    if (!response.ok) throw new Error(`Can't edit user`);

    return response.json();
}