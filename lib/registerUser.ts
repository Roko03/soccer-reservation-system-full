export default async function registerUser(data: User) {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_BASE_URL}/api/user`,
            {
                method: 'POST',
                body: JSON.stringify(data)
            }
        );

        if (!response.ok) {
            return null
        }

        return await response.json();

    } catch (error) {
        alert("An error occurred while uploading the file.");
        return null;
    }
}