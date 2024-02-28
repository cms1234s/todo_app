import React from 'react'

const TempInput = (props) => {
    

    return (
        <div>
            <input type='number' placeholder='Enter Temp' value={props.temp} onChange={props.inputChangeHandler}/>
        </div>
    )
}

export default TempInput;
