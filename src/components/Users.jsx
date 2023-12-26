import React, { useEffect, useState } from 'react'
import { Link, useLoaderData, useSearchParams } from 'react-router-dom'
import { getUsers } from '../api'

export function loader() {

    // var users = null

    // fetch("https://jsonplaceholder.typicode.com/users")
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log({ data })
    //         users = data
    //     })

    // return users

    return getUsers()
}

const Users = () => {

    const [searchParams, setSearchParams] = useSearchParams("")
    // console.log({ searchParams: searchParams.get("type") })

    // const [users, setUsers] = useState([])
    // const [loading, setLoading] = useState(true)


    const data = useLoaderData();
    console.log({ test: data })

    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //         .then(res => res.json())
    //         .then(data => setUsers(data))
    //         .finally(() => setLoading(false))
    // }, [])

    // if (loading) return "Loading..."

    let filteredUsers = searchParams.size > 0 ? data.filter(user => user.username === searchParams.get("username")) : data

    console.log({ filteredUsers })

    function genNewSearchParams(key, value) {
        const sp = new URLSearchParams(searchParams);
        if (value === null) sp.delete("username")
        else sp.set(key, value)

        return `?${sp.toString()}`

    }

    return (
        <>
            <Link to={`?username=Bret`}>Bret</Link>
            <Link to={genNewSearchParams("username", "Antonette")}>Antonette</Link>
            <Link to={`.`}>Clear</Link>
            <button onClick={() => {
                setSearchParams(prevVal => {
                    console.log({ prevVal })
                })
            }}>Antonette</button>
            {
                filteredUsers.map(user => (
                    <div key={user.id}>
                        <p>
                            <Link to={`/users/${user.id}`}>{user.name}</Link>
                        </p>
                        <code>{JSON.stringify(user)}</code>
                        <hr />
                    </div>
                ))
            }
        </>
    )
}

export default Users