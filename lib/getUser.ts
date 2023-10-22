export default async function getUser() {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_BASE_URL}/api/user`);

        if (!response.ok) throw new Error(`Can't get user`);

        return response.json();
    } catch {
        return null
    }
}