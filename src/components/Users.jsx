import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Users = () => {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => setUsers(data))
            .finally(() => setLoading(false))
    }, [])

    if (loading) return "Loading..."

    return (
        <>
            {
                users.map(user => (
                    <div key={user.id}>
                        <p>
                            <Link to={`/users/${user.id}`}>{user.name}</Link>
                        </p>
                    </div>
                ))
            }
        </>
    )
}

export default Users