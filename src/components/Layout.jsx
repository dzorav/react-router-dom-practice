import React from 'react'
import Links from './Links'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <Links />
            <hr />
            <Outlet />
        </>
    )
}

export default Layout