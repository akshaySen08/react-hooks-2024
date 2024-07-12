import React from 'react'

const Posts = () => {
    const count = 2500;
    return (
        <div>
            <ul>
                {Array.from(Array(count).keys()).map(itm => {
                    return <li key={itm}>Post - {itm}</li>
                })}
            </ul>
        </div>
    )
}

export default Posts