export default async function loginUser(data: LoginData) {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_BASE_URL}/api/auth`,
            {
                method: 'POST',
                body: JSON.stringify(data)
            }
        );

        if (!response.ok) {
            return null;
        }

        return await response.json();

    } catch {
        return null;
    }
}