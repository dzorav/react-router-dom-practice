import React from 'react'
import { Link, useOutletContext } from 'react-router-dom'

const UserPostComments = () => {

    const val = useOutletContext()

    console.log({ val })

    return (
        <>
            <div>UserPostComments</div>
            <Link to={`${'test-id'}`}>Test Id</Link>
        </>
    )
}

export default UserPostComments