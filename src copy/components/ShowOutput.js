import React from 'react'

const ShowOutput = (props) => {
    return (
        <div>
            {props.temp>100 ? <h1>Boiling</h1> : <h1>Not Boiling</h1>}
        </div>
    )
}

export default ShowOutput
