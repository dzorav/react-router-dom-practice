export async function getUsers() {

    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    if (!res.ok) {
        throw {
            message: "Failed to fetch users",
            statusText: res.statusText,
            status: res.status
        }
    }

    const data = await res.json()
    return data
}