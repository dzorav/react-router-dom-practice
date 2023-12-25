import React from 'react'
import { useParams } from "react-router-dom"

const SingleUser = () => {

    const params = useParams()

    return (
        <div>{JSON.stringify(params)}</div>
    )
}

export default SingleUser