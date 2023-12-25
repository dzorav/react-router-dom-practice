import React from 'react'
import { Link, Outlet, NavLink } from 'react-router-dom'

const UserPostHome = () => {
    return (
        <>
            <div>UserPost Layout</div>
            <hr />
            <div>
                <NavLink
                    to={`/user-posts/`}
                    style={({ isActive }) => isActive ? { color: 'pink' } : {}}
                    end
                >
                    Dashboard</NavLink>
                <NavLink
                    to={`/user-posts/body`}
                    style={({ isActive }) => isActive ? { color: 'pink' } : {}}>
                    User Post Body</NavLink>
                <NavLink
                    to={`/user-posts/title`}
                    style={({ isActive }) => isActive ? { color: 'pink' } : {}}>
                    User Post Title</NavLink>
            </div>
            <Outlet />
        </>
    )
}

export default UserPostHome