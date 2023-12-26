import React from 'react'
import { useRouteError } from 'react-router-dom'

const UserError = () => {

    const error = useRouteError()
    console.log({ error })

    return (
        <div>{error.toString()}</div>
    )
}

export default UserError