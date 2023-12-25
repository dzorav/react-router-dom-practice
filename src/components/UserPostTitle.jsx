import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const UserPostTitle = () => {
    return (
        <>
            <div>UserPostTitle</div>
            <div>
                <NavLink to={`comments`}>Comments</NavLink>
            </div>
            <hr />
            <Outlet context={{ tom: "jerry" }} />
        </>
    )
}

export default UserPostTitle