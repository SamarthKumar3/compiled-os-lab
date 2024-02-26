import React from 'react'

const page = ({params}) => {
    const experiment = params.memoryAlgo;
    return (
        <div>{experiment}</div>
    )
}

export default page